import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  groupPhotosBySet,
  photos as allPhotos,
  photosForDay,
  portfolioTabs,
  type Photo,
  type PortfolioTab,
} from '../data/photos'
import { seriesByTitle } from '../data/series'
import { Lightbox } from './Lightbox'
import { SeriesCards } from './SeriesCards'
import './PhotoGrid.css'

type PhotoGridProps = {
  photos?: Photo[]
  limit?: number
  showFilters?: boolean
  day?: number
  /** Group frames under set headings. Default: on when not limited. */
  groupBySet?: boolean
  /** overlay = portfolio hover captions; below = series page under-image captions */
  captionMode?: 'overlay' | 'below'
  /**
   * editorial = alternating left/right flow (portfolio default)
   * masonry = compact multi-column (home / limited grids)
   */
  layout?: 'editorial' | 'masonry'
}

export function PhotoGrid({
  photos: photosProp,
  limit,
  showFilters = true,
  day,
  groupBySet,
  captionMode = 'overlay',
  layout: layoutProp,
}: PhotoGridProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const tabParam = searchParams.get('tab')
  const initialTab: PortfolioTab =
    showFilters && tabParam && portfolioTabs.includes(tabParam as PortfolioTab)
      ? (tabParam as PortfolioTab)
      : 'All'

  const [filter, setFilter] = useState<PortfolioTab>(initialTab)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!showFilters) return
    if (tabParam && portfolioTabs.includes(tabParam as PortfolioTab)) {
      setFilter(tabParam as PortfolioTab)
    }
  }, [tabParam, showFilters])

  const shouldGroup =
    groupBySet ?? (typeof limit !== 'number' && captionMode === 'overlay')

  const layout =
    layoutProp ??
    (captionMode === 'below' || typeof limit === 'number' ? 'masonry' : 'editorial')

  const filtered = useMemo(() => {
    const base =
      photosProp ??
      (typeof day === 'number' ? photosForDay(day) : allPhotos)
    if (filter === 'Series') return []
    const list =
      filter === 'All' ? base : base.filter((photo) => photo.category === filter)
    return typeof limit === 'number' ? list.slice(0, limit) : list
  }, [day, filter, limit, photosProp])

  const sets = useMemo(
    () => (shouldGroup && filter !== 'Series' ? groupPhotosBySet(filtered) : null),
    [filtered, shouldGroup, filter],
  )

  function selectTab(tab: PortfolioTab) {
    setFilter(tab)
    setActiveIndex(null)
    if (!showFilters) return
    if (tab === 'All') {
      setSearchParams({}, { replace: true })
    } else {
      setSearchParams({ tab }, { replace: true })
    }
  }

  let runningIndex = 0
  const isEditorial = layout === 'editorial' && captionMode === 'overlay'

  return (
    <div className={`photo-grid-wrap ${isEditorial ? 'photo-grid-wrap--editorial' : ''}`}>
      {showFilters && (
        <div className="filters" role="tablist" aria-label="Filter portfolio">
          {portfolioTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={filter === tab}
              className={`filters__btn ${filter === tab ? 'is-active' : ''}`}
              onClick={() => selectTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {filter === 'Series' && showFilters ? (
        <SeriesCards />
      ) : sets ? (
        <div className={isEditorial ? 'photo-sets photo-sets--editorial' : 'photo-sets'}>
          {sets.map((group, setIndex) => {
            const series = seriesByTitle(group.set)
            return (
              <section
                key={group.set}
                className={`photo-set ${isEditorial ? `photo-set--${setIndex % 2 === 0 ? 'lead-left' : 'lead-right'}` : ''}`}
                aria-labelledby={`set-${slug(group.set)}`}
              >
                <header className="photo-set__header">
                  {series ? (
                    <Link
                      to={`/portfolio/series/${series.slug}`}
                      className="section-label photo-set__link"
                      id={`set-${slug(group.set)}`}
                    >
                      {group.set}
                    </Link>
                  ) : (
                    <p className="section-label" id={`set-${slug(group.set)}`}>
                      {group.set}
                    </p>
                  )}
                  <p className="photo-set__count">
                    {group.photos.length}{' '}
                    {group.photos.length === 1 ? 'frame' : 'frames'}
                  </p>
                </header>
                <div
                  className={
                    isEditorial ? 'photo-flow' : 'photo-grid'
                  }
                >
                  {group.photos.map((photo) => {
                    const index = runningIndex++
                    return (
                      <PhotoCard
                        key={photo.id}
                        photo={photo}
                        index={index}
                        captionMode={captionMode}
                        layout={isEditorial ? 'editorial' : 'masonry'}
                        onOpen={setActiveIndex}
                      />
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      ) : (
        <div
          className={
            captionMode === 'below'
              ? 'photo-grid photo-grid--below'
              : isEditorial
                ? 'photo-flow'
                : 'photo-grid'
          }
        >
          {filtered.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              captionMode={captionMode}
              layout={isEditorial ? 'editorial' : 'masonry'}
              onOpen={setActiveIndex}
            />
          ))}
        </div>
      )}

      {activeIndex !== null && filtered.length > 0 && (
        <Lightbox
          photos={filtered}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  )
}

function PhotoCard({
  photo,
  index,
  captionMode,
  layout,
  onOpen,
}: {
  photo: Photo
  index: number
  captionMode: 'overlay' | 'below'
  layout: 'editorial' | 'masonry'
  onOpen: (index: number) => void
}) {
  if (captionMode === 'below') {
    return (
      <figure
        className="photo-grid__figure"
        style={{ animationDelay: `${index * 40}ms` }}
      >
        <button
          type="button"
          className="photo-grid__item photo-grid__item--plain"
          onClick={() => onOpen(index)}
        >
          <img
            src={photo.src}
            alt={photo.title}
            loading="lazy"
            width={photo.width}
            height={photo.height}
          />
        </button>
        <figcaption className="photo-grid__below">
          <span className="photo-grid__below-title">{photo.title}</span>
          <span className="photo-grid__below-caption">{photo.caption}</span>
        </figcaption>
      </figure>
    )
  }

  if (layout === 'editorial') {
    const side = index % 2 === 0 ? 'left' : 'right'
    const orientation = photo.width >= photo.height ? 'landscape' : 'portrait'
    return (
      <div
        className={`photo-flow__row photo-flow__row--${side}`}
        style={{ animationDelay: `${Math.min(index, 12) * 45}ms` }}
      >
        <button
          type="button"
          className={`photo-grid__item photo-flow__frame photo-flow__frame--${orientation}`}
          onClick={() => onOpen(index)}
        >
          <img
            src={photo.src}
            alt={photo.title}
            loading="lazy"
            width={photo.width}
            height={photo.height}
          />
          <span className="photo-grid__caption">
            <span className="photo-grid__title">{photo.title}</span>
            <span className="photo-grid__meta">
              {photo.category}
              {photo.day ? ` · Day ${String(photo.day).padStart(2, '0')}` : ''}
            </span>
          </span>
        </button>
      </div>
    )
  }

  return (
    <button
      type="button"
      className="photo-grid__item"
      style={{ animationDelay: `${index * 40}ms` }}
      onClick={() => onOpen(index)}
    >
      <img
        src={photo.src}
        alt={photo.title}
        loading="lazy"
        width={photo.width}
        height={photo.height}
      />
      <span className="photo-grid__caption">
        <span className="photo-grid__title">{photo.title}</span>
        <span className="photo-grid__meta">
          {photo.category}
          {photo.day ? ` · Day ${String(photo.day).padStart(2, '0')}` : ''}
        </span>
      </span>
    </button>
  )
}

function slug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

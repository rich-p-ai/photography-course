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
}

export function PhotoGrid({
  photos: photosProp,
  limit,
  showFilters = true,
  day,
  groupBySet,
  captionMode = 'overlay',
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

  return (
    <div className="photo-grid-wrap">
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
        <div className="photo-sets">
          {sets.map((group) => {
            const series = seriesByTitle(group.set)
            return (
              <section
                key={group.set}
                className="photo-set"
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
                <div className="photo-grid">
                  {group.photos.map((photo) => {
                    const index = runningIndex++
                    return (
                      <PhotoCard
                        key={photo.id}
                        photo={photo}
                        index={index}
                        captionMode={captionMode}
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
            captionMode === 'below' ? 'photo-grid photo-grid--below' : 'photo-grid'
          }
        >
          {filtered.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              captionMode={captionMode}
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
  onOpen,
}: {
  photo: Photo
  index: number
  captionMode: 'overlay' | 'below'
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

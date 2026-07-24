import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
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
  /** quiet = under-image captions; overlay = hover captions on frames */
  captionMode?: 'quiet' | 'overlay' | 'below'
  /**
   * rows = multi-row horizontal scroller (default for portfolio / home / series)
   * masonry = compact multi-column (course day / dense lists)
   */
  layout?: 'rows' | 'masonry'
  /** Number of horizontal rows. Auto: 1–3 based on photo count. */
  rowCount?: number
  /** Sync horizontal scroll across rows. */
  syncScroll?: boolean
}

export function PhotoGrid({
  photos: photosProp,
  limit,
  showFilters = true,
  day,
  groupBySet,
  captionMode = 'quiet',
  layout: layoutProp,
  rowCount: rowCountProp,
  syncScroll = false,
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
    groupBySet ?? (typeof limit !== 'number' && captionMode !== 'below')

  const layout =
    layoutProp ??
    (captionMode === 'below' || typeof day === 'number' ? 'masonry' : 'rows')

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
    () => (shouldGroup && filter !== 'Series' && layout === 'rows' ? groupPhotosBySet(filtered) : null),
    [filtered, shouldGroup, filter, layout],
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

  const caption = captionMode === 'below' ? 'below' : captionMode === 'overlay' ? 'overlay' : 'quiet'
  const isRows = layout === 'rows'

  const indexById = useMemo(() => {
    const map = new Map<string, number>()
    filtered.forEach((photo, index) => map.set(photo.id, index))
    return map
  }, [filtered])

  function openPhoto(photoId: string) {
    const index = indexById.get(photoId)
    if (typeof index === 'number') setActiveIndex(index)
  }

  return (
    <div className={`photo-grid-wrap ${isRows ? 'photo-grid-wrap--rows' : ''}`}>
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
        <div className="photo-sets photo-sets--rows">
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
                <PhotoRows
                  photos={group.photos}
                  captionMode={caption}
                  rowCount={rowCountProp}
                  syncScroll={syncScroll}
                  onOpen={openPhoto}
                />
              </section>
            )
          })}
        </div>
      ) : isRows ? (
        <PhotoRows
          photos={filtered}
          captionMode={caption}
          rowCount={rowCountProp}
          syncScroll={syncScroll}
          onOpen={openPhoto}
        />
      ) : (
        <div
          className={
            caption === 'below' ? 'photo-grid photo-grid--below' : 'photo-grid'
          }
        >
          {filtered.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              captionMode={caption}
              onOpen={openPhoto}
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

type CaptionMode = 'quiet' | 'overlay' | 'below'

export type PhotoRowCaption = { title: string; meta: string }

function PhotoRows({
  photos,
  captionMode,
  rowCount: rowCountProp,
  syncScroll = false,
  onOpen,
  captionFor,
}: {
  photos: Photo[]
  captionMode: CaptionMode
  rowCount?: number
  syncScroll?: boolean
  onOpen: (photoId: string) => void
  captionFor?: (photo: Photo) => PhotoRowCaption
}) {
  const rowCount = rowCountProp ?? autoRowCount(photos.length)
  const rows = useMemo(() => distributeIntoRows(photos, rowCount), [photos, rowCount])
  const trackRefs = useRef<(HTMLDivElement | null)[]>([])
  const syncing = useRef(false)

  function handleScroll(sourceIndex: number) {
    if (!syncScroll) return
    const source = trackRefs.current[sourceIndex]
    if (!source || syncing.current) return
    syncing.current = true
    const ratio =
      source.scrollWidth <= source.clientWidth
        ? 0
        : source.scrollLeft / (source.scrollWidth - source.clientWidth)
    trackRefs.current.forEach((track, i) => {
      if (!track || i === sourceIndex) return
      const max = track.scrollWidth - track.clientWidth
      track.scrollLeft = ratio * Math.max(max, 0)
    })
    requestAnimationFrame(() => {
      syncing.current = false
    })
  }

  function scrollRow(rowIndex: number, direction: -1 | 1) {
    const track = trackRefs.current[rowIndex]
    if (!track) return
    const delta = Math.round(track.clientWidth * 0.72) * direction
    track.scrollBy({ left: delta, behavior: 'smooth' })
  }

  if (photos.length === 0) return null

  return (
    <div
      className={`photo-rows ${syncScroll ? 'photo-rows--synced' : ''}`}
      style={{ '--row-count': rowCount } as CSSProperties}
    >
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="photo-row">
          <div className="photo-row__controls" aria-hidden={row.length < 2}>
            <button
              type="button"
              className="photo-row__nav photo-row__nav--prev"
              aria-label={`Scroll row ${rowIndex + 1} left`}
              onClick={() => scrollRow(rowIndex, -1)}
              tabIndex={row.length < 2 ? -1 : 0}
            >
              ‹
            </button>
            <button
              type="button"
              className="photo-row__nav photo-row__nav--next"
              aria-label={`Scroll row ${rowIndex + 1} right`}
              onClick={() => scrollRow(rowIndex, 1)}
              tabIndex={row.length < 2 ? -1 : 0}
            >
              ›
            </button>
          </div>
          <div
            className="photo-row__track"
            ref={(el) => {
              trackRefs.current[rowIndex] = el
            }}
            onScroll={() => handleScroll(rowIndex)}
            role="list"
            aria-label={`Photo row ${rowIndex + 1} of ${rowCount}`}
          >
            {row.map((photo, cellIndex) => (
              <div key={photo.id} className="photo-row__cell" role="listitem">
                <PhotoCard
                  photo={photo}
                  order={rowIndex * 8 + cellIndex}
                  captionMode={captionMode}
                  variant="row"
                  captionOverride={captionFor?.(photo)}
                  onOpen={onOpen}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function PhotoCard({
  photo,
  order = 0,
  captionMode,
  variant = 'masonry',
  captionOverride,
  onOpen,
}: {
  photo: Photo
  order?: number
  captionMode: CaptionMode
  variant?: 'row' | 'masonry'
  captionOverride?: PhotoRowCaption
  onOpen: (photoId: string) => void
}) {
  if (captionMode === 'below') {
    return (
      <figure
        className="photo-grid__figure"
        style={{ animationDelay: `${Math.min(order, 16) * 35}ms` }}
      >
        <button
          type="button"
          className="photo-grid__item photo-grid__item--plain"
          onClick={() => onOpen(photo.id)}
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

  if (variant === 'row') {
    const orientation = photo.width >= photo.height ? 'landscape' : 'portrait'
    return (
      <figure
        className={`photo-row__figure photo-row__figure--${orientation}`}
        style={{ animationDelay: `${Math.min(order, 16) * 40}ms` }}
      >
        <button
          type="button"
          className={`photo-grid__item photo-row__frame ${captionMode === 'quiet' ? 'photo-row__frame--quiet' : ''}`}
          onClick={() => onOpen(photo.id)}
        >
          <img
            src={photo.src}
            alt={photo.title}
            loading="lazy"
            width={photo.width}
            height={photo.height}
          />
          {captionMode === 'overlay' && (
            <span className="photo-grid__caption">
              <span className="photo-grid__title">{photo.title}</span>
              <span className="photo-grid__meta">
                {photo.category}
                {photo.day ? ` · Day ${String(photo.day).padStart(2, '0')}` : ''}
              </span>
            </span>
          )}
        </button>
        {captionMode === 'quiet' && (
          <figcaption className="photo-row__caption">
            <span className="photo-row__caption-title">
              {captionOverride?.title ?? photo.title}
            </span>
            <span className="photo-row__caption-meta">
              {captionOverride?.meta ??
                `${photo.category}${photo.day ? ` · Day ${String(photo.day).padStart(2, '0')}` : ''}`}
            </span>
          </figcaption>
        )}
      </figure>
    )
  }

  return (
    <button
      type="button"
      className="photo-grid__item"
      style={{ animationDelay: `${order * 40}ms` }}
      onClick={() => onOpen(photo.id)}
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

function autoRowCount(count: number): number {
  if (count <= 3) return 1
  if (count <= 8) return 2
  return 3
}

function distributeIntoRows(photos: Photo[], rowCount: number): Photo[][] {
  const rows: Photo[][] = Array.from({ length: Math.max(1, rowCount) }, () => [])
  photos.forEach((photo, i) => {
    rows[i % rows.length]!.push(photo)
  })
  return rows.filter((row) => row.length > 0)
}

function slug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export { PhotoRows, distributeIntoRows, autoRowCount }

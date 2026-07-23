import { useMemo, useState } from 'react'
import {
  categories,
  groupPhotosBySet,
  photos,
  photosForDay,
  type Photo,
  type PhotoCategory,
} from '../data/photos'
import { Lightbox } from './Lightbox'
import './PhotoGrid.css'

type PhotoGridProps = {
  limit?: number
  showFilters?: boolean
  day?: number
  /** Group frames under set headings. Default: on when not limited. */
  groupBySet?: boolean
}

export function PhotoGrid({
  limit,
  showFilters = true,
  day,
  groupBySet,
}: PhotoGridProps) {
  const [filter, setFilter] = useState<PhotoCategory | 'All'>('All')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const shouldGroup = groupBySet ?? typeof limit !== 'number'

  const filtered = useMemo(() => {
    const base = typeof day === 'number' ? photosForDay(day) : photos
    const list =
      filter === 'All' ? base : base.filter((photo) => photo.category === filter)
    return typeof limit === 'number' ? list.slice(0, limit) : list
  }, [day, filter, limit])

  const sets = useMemo(
    () => (shouldGroup ? groupPhotosBySet(filtered) : null),
    [filtered, shouldGroup],
  )

  let runningIndex = 0

  return (
    <div className="photo-grid-wrap">
      {showFilters && (
        <div className="filters" role="tablist" aria-label="Filter portfolio">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={filter === category}
              className={`filters__btn ${filter === category ? 'is-active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {sets ? (
        <div className="photo-sets">
          {sets.map((group) => (
            <section key={group.set} className="photo-set" aria-labelledby={`set-${slug(group.set)}`}>
              <header className="photo-set__header">
                <p className="section-label" id={`set-${slug(group.set)}`}>
                  {group.set}
                </p>
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
                      onOpen={setActiveIndex}
                    />
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="photo-grid">
          {filtered.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              onOpen={setActiveIndex}
            />
          ))}
        </div>
      )}

      {activeIndex !== null && (
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
  onOpen,
}: {
  photo: Photo
  index: number
  onOpen: (index: number) => void
}) {
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

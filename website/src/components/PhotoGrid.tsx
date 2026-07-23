import { useMemo, useState } from 'react'
import { categories, photos, type PhotoCategory } from '../data/photos'
import { Lightbox } from './Lightbox'
import './PhotoGrid.css'

type PhotoGridProps = {
  limit?: number
  showFilters?: boolean
}

export function PhotoGrid({ limit, showFilters = true }: PhotoGridProps) {
  const [filter, setFilter] = useState<PhotoCategory | 'All'>('All')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const filtered = useMemo(() => {
    const list =
      filter === 'All' ? photos : photos.filter((photo) => photo.category === filter)
    return typeof limit === 'number' ? list.slice(0, limit) : list
  }, [filter, limit])

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

      <div className="photo-grid">
        {filtered.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            className="photo-grid__item"
            style={{ animationDelay: `${index * 40}ms` }}
            onClick={() => setActiveIndex(index)}
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
        ))}
      </div>

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

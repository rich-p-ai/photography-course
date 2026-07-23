import { useState } from 'react'
import type { Series, SeriesResolvedFrame } from '../data/series'
import { Lightbox } from './Lightbox'
import './SeriesEssay.css'

type SeriesEssayProps = {
  series: Series
  frames: SeriesResolvedFrame[]
}

/**
 * Reusable photo-essay layout for curated series pages.
 * Add a series in `data/series.ts` — this template reads opening → journey → frames → closing.
 */
export function SeriesEssay({ series, frames }: SeriesEssayProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const lightboxPhotos = frames.map((frame) => ({
    ...frame.photo,
    caption: frame.caption,
  }))

  return (
    <article className="series-essay">
      <header className="series-essay__intro">
        <h1 className="series-essay__title">{series.title}</h1>
        <p className="series-essay__opening">{series.opening}</p>
      </header>

      <section className="series-essay__journey" aria-labelledby="series-journey">
        <h2 id="series-journey" className="series-essay__label">
          {series.journeyTitle}
        </h2>
        <p className="series-essay__prose">{series.journey}</p>
      </section>

      <ol className="series-essay__sequence">
        {frames.map((frame, index) => (
          <li key={frame.photo.id} className="series-essay__frame">
            <button
              type="button"
              className="series-essay__image-btn"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${frame.photo.title} larger`}
            >
              <img
                src={frame.photo.src}
                alt={frame.photo.title}
                width={frame.photo.width}
                height={frame.photo.height}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </button>
            <div className="series-essay__meta">
              <h3 className="series-essay__frame-title">{frame.photo.title}</h3>
              <p className="series-essay__caption">{frame.caption}</p>
            </div>
          </li>
        ))}
      </ol>

      <footer className="series-essay__closing">
        <h2 className="series-essay__label">Closing</h2>
        <p className="series-essay__prose">{series.closing}</p>
      </footer>

      {activeIndex !== null && (
        <Lightbox
          photos={lightboxPhotos}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </article>
  )
}

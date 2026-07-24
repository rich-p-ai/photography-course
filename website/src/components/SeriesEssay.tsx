import { useMemo, useState } from 'react'
import type { Series, SeriesResolvedFrame } from '../data/series'
import { Lightbox } from './Lightbox'
import { PhotoRows } from './PhotoGrid'
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

  const lightboxPhotos = useMemo(
    () =>
      frames.map((frame) => ({
        ...frame.photo,
        caption: frame.caption,
      })),
    [frames],
  )

  const photos = useMemo(() => frames.map((frame) => frame.photo), [frames])

  const captionById = useMemo(() => {
    const map = new Map<string, string>()
    frames.forEach((frame) => map.set(frame.photo.id, frame.caption))
    return map
  }, [frames])

  const indexById = useMemo(() => {
    const map = new Map<string, number>()
    frames.forEach((frame, index) => map.set(frame.photo.id, index))
    return map
  }, [frames])

  return (
    <article className="series-essay">
      <header className="series-essay__intro">
        <p className="section-label">Series</p>
        <h1 className="series-essay__title">{series.title}</h1>
        <p className="series-essay__opening">{series.opening}</p>
      </header>

      <section className="series-essay__journey" aria-labelledby="series-journey">
        <h2 id="series-journey" className="series-essay__label">
          {series.journeyTitle}
        </h2>
        <p className="series-essay__prose">{series.journey}</p>
      </section>

      <section className="series-essay__gallery" aria-label={`${series.title} frames`}>
        <PhotoRows
          photos={photos}
          captionMode="quiet"
          syncScroll={false}
          showNumbers={false}
          indexById={indexById}
          onOpen={(photoId) => {
            const index = indexById.get(photoId)
            if (typeof index === 'number') setActiveIndex(index)
          }}
          captionFor={(photo) => ({
            title: photo.title,
            meta: captionById.get(photo.id) ?? photo.caption,
          })}
        />
      </section>

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

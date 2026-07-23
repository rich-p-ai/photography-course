import { Link } from 'react-router-dom'
import { coverForSeries, seriesList } from '../data/series'
import './SeriesCards.css'

export function SeriesCards() {
  return (
    <div className="series-cards" role="list">
      {seriesList.map((series) => {
        const cover = coverForSeries(series)
        return (
          <Link
            key={series.slug}
            to={`/portfolio/series/${series.slug}`}
            className="series-card"
            role="listitem"
          >
            <div className="series-card__media">
              {cover ? (
                <img
                  src={cover.src}
                  alt=""
                  width={cover.width}
                  height={cover.height}
                  loading="lazy"
                />
              ) : (
                <div className="series-card__placeholder" aria-hidden="true" />
              )}
            </div>
            <div className="series-card__body">
              <h2 className="series-card__title">{series.title}</h2>
              <p className="series-card__desc">{series.description}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

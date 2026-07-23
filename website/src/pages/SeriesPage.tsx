import { Link, Navigate, useParams } from 'react-router-dom'
import {
  adjacentSeries,
  getSeries,
  photosForSeries,
  seriesList,
} from '../data/series'
import { PhotoGrid } from '../components/PhotoGrid'
import './SeriesPage.css'

export function SeriesPage() {
  const { seriesSlug = '' } = useParams()
  const series = getSeries(seriesSlug)

  if (!series) {
    return <Navigate to="/portfolio" replace />
  }

  const frames = photosForSeries(series)
  const { prev, next } = adjacentSeries(series.slug)

  return (
    <section className="series-page page">
      <nav className="series-page__trail" aria-label="Series navigation">
        <Link to="/portfolio" className="series-page__back">
          Portfolio
        </Link>
        <span aria-hidden="true">/</span>
        <Link to="/portfolio?tab=Series" className="series-page__back">
          Series
        </Link>
      </nav>

      <header className="series-page__header">
        <h1 className="series-page__title">{series.title}</h1>
        <p className="series-page__desc">{series.description}</p>
      </header>

      <PhotoGrid
        photos={frames}
        showFilters={false}
        groupBySet={false}
        captionMode="below"
      />

      <nav className="series-page__pager" aria-label="Other series">
        <div className="series-page__pager-side">
          {prev ? (
            <Link to={`/portfolio/series/${prev.slug}`} className="series-page__pager-link">
              <span className="series-page__pager-label">Previous</span>
              <span className="series-page__pager-title">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </div>
        <div className="series-page__pager-index" aria-hidden="true">
          {seriesList.map((item) => (
            <Link
              key={item.slug}
              to={`/portfolio/series/${item.slug}`}
              className={`series-page__dot ${item.slug === series.slug ? 'is-active' : ''}`}
              aria-label={item.title}
              title={item.title}
            />
          ))}
        </div>
        <div className="series-page__pager-side series-page__pager-side--end">
          {next ? (
            <Link to={`/portfolio/series/${next.slug}`} className="series-page__pager-link">
              <span className="series-page__pager-label">Next</span>
              <span className="series-page__pager-title">{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </section>
  )
}

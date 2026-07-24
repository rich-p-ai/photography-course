import { PhotoGrid } from '../components/PhotoGrid'

export function Portfolio() {
  return (
    <section className="page portfolio-page">
      <header className="portfolio-page__header">
        <p className="section-label">Observation</p>
        <h1 className="page-title">Selected Frames</h1>
        <p className="page-lede portfolio-page__lede">
          Quiet observational work — street, shore, and color held still. Scroll
          each row on its own, or open Series for the longer sequences.
        </p>
      </header>
      <PhotoGrid layout="rows" syncScroll={false} groupBySet={false} />
    </section>
  )
}

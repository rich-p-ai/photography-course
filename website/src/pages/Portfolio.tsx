import { PhotoGrid } from '../components/PhotoGrid'

export function Portfolio() {
  return (
    <section className="page portfolio-page">
      <p className="section-label">Portfolio</p>
      <h1 className="page-title">Selected frames</h1>
      <p className="page-lede portfolio-page__lede">
        Quiet observational work — street, shore, and color held still. Scroll
        each row, filter by type, or open Series for the longer sequences.
      </p>
      <PhotoGrid layout="rows" />
    </section>
  )
}

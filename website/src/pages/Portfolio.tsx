import { PhotoGrid } from '../components/PhotoGrid'

export function Portfolio() {
  return (
    <section className="page">
      <p className="section-label">Portfolio</p>
      <h1 className="page-title">Selected frames</h1>
      <p className="page-lede" style={{ marginBottom: '2.5rem' }}>
        Frames grouped by set — Marsh Light, Old San Juan, Mirror Shore, and
        more. Filter by genre; open any frame for caption, date, and location.
      </p>
      <PhotoGrid />
    </section>
  )
}

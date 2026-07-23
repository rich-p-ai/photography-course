import { PhotoGrid } from '../components/PhotoGrid'

export function Portfolio() {
  return (
    <section className="page">
      <p className="section-label">Portfolio</p>
      <h1 className="page-title">Selected frames</h1>
      <p className="page-lede" style={{ marginBottom: '2.5rem' }}>
        Filter by Street, Landscape, or Portraits — or open Series for curated
        sets. Frames can appear in both a type and a series.
      </p>
      <PhotoGrid />
    </section>
  )
}

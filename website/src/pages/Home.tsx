import { Link } from 'react-router-dom'
import { heroPhoto } from '../data/photos'
import { PhotoGrid } from '../components/PhotoGrid'
import './Home.css'

export function Home() {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <img
          className="hero__image"
          src={heroPhoto.src}
          alt={heroPhoto.title}
          width={heroPhoto.width}
          height={heroPhoto.height}
          fetchPriority="high"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__brand">Richard Sawyers</p>
          <h1 className="hero__headline">Capturing moments to slow down</h1>
          <p className="hero__lede">
            Observational street and documentary work from Charleston, Isle of
            Palms, and Old San Juan — natural light, quiet frames, a practice
            for stepping out of the IT/AI pace.
          </p>
          <div className="hero__actions">
            <Link className="btn btn-primary" to="/portfolio">
              View portfolio
            </Link>
            <a
              className="btn btn-ghost"
              href="https://instagram.com/richardsawyers"
              target="_blank"
              rel="noreferrer"
            >
              @richardsawyers
            </a>
          </div>
        </div>
      </section>

      <section className="home-selected page">
        <p className="section-label">Selected work</p>
        <div className="home-selected__header">
          <h2 className="page-title">Recent frames</h2>
          <Link className="btn btn-outline" to="/portfolio">
            Full portfolio
          </Link>
        </div>
        <PhotoGrid limit={6} showFilters={false} />
      </section>
    </>
  )
}

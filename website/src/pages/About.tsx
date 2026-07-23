import { Link } from 'react-router-dom'
import { adobePortfolioUrl } from '../data/photos'
import './About.css'

export function About() {
  return (
    <section className="page page-narrow about">
      <p className="section-label">About</p>
      <h1 className="page-title">Slowing down through the lens</h1>

      <div className="about__body">
        <p>
          I work in IT and AI by day. Photography is how I step out of that
          pace — a grounding practice built on walking, noticing, and making
          quiet frames in natural light.
        </p>
        <p>
          Based in Charleston and Isle of Palms, with recent work from Old San
          Juan — observational street, marsh light, and personal documentary
          that favors authenticity over flash.
        </p>
        <p>
          Full Lightroom set:{' '}
          <a href={adobePortfolioUrl} target="_blank" rel="noreferrer">
            adobe.ly/3TPWgFK
          </a>
          . Daily practice and edits also land on{' '}
          <a
            href="https://instagram.com/richardsawyers"
            target="_blank"
            rel="noreferrer"
          >
            @richardsawyers
          </a>
          .
        </p>
      </div>

      <dl className="about__facts">
        <div>
          <dt>Location</dt>
          <dd>Charleston, SC / Isle of Palms</dd>
        </div>
        <div>
          <dt>Gear</dt>
          <dd>Sony ZV-E10 II + FE 24-50mm f/2.8 G</dd>
        </div>
        <div>
          <dt>Practice</dt>
          <dd>Morning blue hour · street, landscape, personal documentary</dd>
        </div>
      </dl>

      <div className="about__actions">
        <Link className="btn btn-primary" to="/portfolio">
          See the work
        </Link>
        <Link className="btn btn-outline" to="/contact">
          Get in touch
        </Link>
      </div>
    </section>
  )
}

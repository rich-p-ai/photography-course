import { Link } from 'react-router-dom'
import { adobePortfolioUrl } from '../data/photos'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">Richard Sawyers</p>
        <p className="footer__tag">
          Charleston · Isle of Palms · Old San Juan
        </p>
        <div className="footer__links">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/course">Course</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://instagram.com/richardsawyers"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a href={adobePortfolioUrl} target="_blank" rel="noreferrer">
            Adobe
          </a>
        </div>
      </div>
    </footer>
  )
}

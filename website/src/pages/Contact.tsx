import { adobePortfolioUrl } from '../data/photos'
import './Contact.css'

export function Contact() {
  return (
    <section className="page page-narrow contact">
      <p className="section-label">Contact</p>
      <h1 className="page-title">Let’s connect</h1>
      <p className="page-lede">
        For prints, collaborations, or a note about a frame that landed — reach
        out. The quietest replies are often the best ones.
      </p>

      <div className="contact__channels">
        <a
          className="contact__channel"
          href="https://instagram.com/richardsawyers"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact__label">Instagram</span>
          <span className="contact__value">@richardsawyers</span>
        </a>
        <a
          className="contact__channel"
          href={adobePortfolioUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact__label">Adobe Lightroom</span>
          <span className="contact__value">Full portfolio share</span>
        </a>
        <a className="contact__channel" href="mailto:hello@richardsawyers.com">
          <span className="contact__label">Email</span>
          <span className="contact__value">hello@richardsawyers.com</span>
        </a>
      </div>

      <p className="contact__note">
        Replace the email above with your preferred address before publishing.
      </p>
    </section>
  )
}

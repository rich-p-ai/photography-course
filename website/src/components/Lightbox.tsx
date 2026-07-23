import { useEffect } from 'react'
import type { Photo } from '../data/photos'
import './Lightbox.css'

type LightboxProps = {
  photos: Photo[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const photo = photos[index]

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNavigate((index + 1) % photos.length)
      if (event.key === 'ArrowLeft') {
        onNavigate((index - 1 + photos.length) % photos.length)
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index, onClose, onNavigate, photos.length])

  if (!photo) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={photo.title}>
      <button type="button" className="lightbox__backdrop" aria-label="Close" onClick={onClose} />
      <div className="lightbox__panel">
        <img src={photo.src} alt={photo.title} />
        <div className="lightbox__meta">
          <div>
            <h2>{photo.title}</h2>
            <p>{photo.caption}</p>
            <p className="lightbox__detail">
              {photo.location} · {photo.date}
              {photo.day ? ` · Day ${String(photo.day).padStart(2, '0')}` : ''}
            </p>
          </div>
          <div className="lightbox__controls">
            <button
              type="button"
              onClick={() => onNavigate((index - 1 + photos.length) % photos.length)}
            >
              Prev
            </button>
            <button type="button" onClick={onClose}>
              Close
            </button>
            <button type="button" onClick={() => onNavigate((index + 1) % photos.length)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

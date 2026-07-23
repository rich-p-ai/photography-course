import { useEffect } from 'react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { Checklist } from '../components/Checklist'
import { PhotoGrid } from '../components/PhotoGrid'
import { StudyMaterialItem } from '../components/StudyMaterialItem'
import { UploadForReview } from '../components/UploadForReview'
import {
  courseDays,
  formatCourseDate,
  getCourseDay,
} from '../data/course'
import { photosForDay } from '../data/photos'
import './CourseDay.css'

export function CourseDay() {
  const { daySlug } = useParams()
  const { hash } = useLocation()
  const day = daySlug ? getCourseDay(daySlug) : undefined

  useEffect(() => {
    if (!hash) return
    const id = hash.replace(/^#/, '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash, daySlug])

  if (!day) {
    return <Navigate to="/course" replace />
  }

  const index = courseDays.findIndex((d) => d.slug === day.slug)
  const prev = index > 0 ? courseDays[index - 1] : null
  const next = index < courseDays.length - 1 ? courseDays[index + 1] : null
  const dayPhotos = photosForDay(day.day)

  return (
    <section className="page course-day">
      <nav className="course-day__crumb" aria-label="Breadcrumb">
        <Link to="/course">Course</Link>
        <span aria-hidden="true">/</span>
        <span>Day {String(day.day).padStart(2, '0')}</span>
      </nav>

      <p className="section-label">
        Day {String(day.day).padStart(2, '0')} · {formatCourseDate(day.day)}
      </p>
      <h1 className="page-title">{day.title}</h1>
      {day.goal && <p className="course-day__goal">{day.goal}</p>}

      <dl className="course-day__facts">
        {day.genre && (
          <div>
            <dt>Genre</dt>
            <dd>{day.genre}</dd>
          </div>
        )}
        {day.time && (
          <div>
            <dt>Time</dt>
            <dd>{day.time}</dd>
          </div>
        )}
        {day.locationSuggestions && (
          <div>
            <dt>Locations</dt>
            <dd>{day.locationSuggestions}</dd>
          </div>
        )}
      </dl>

      <p className="course-day__upload-cta">
        <a href="#upload-for-review" className="btn btn-primary">
          Upload notes &amp; photos
        </a>
      </p>

      {day.studyMaterial.length > 0 && (
        <section className="course-day__block">
          <h2>Study material</h2>
          <ul className="course-day__study-list">
            {day.studyMaterial.map((item) => (
              <li key={item}>
                <StudyMaterialItem text={item} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {day.fieldChecklist.length > 0 && (
        <section className="course-day__block">
          <h2>Field checklist</h2>
          <Checklist storageKey={`${day.slug}-field`} items={day.fieldChecklist} />
        </section>
      )}

      {day.shootingBrief.length > 0 && (
        <section className="course-day__block">
          <h2>Shooting brief</h2>
          <ol>
            {day.shootingBrief.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
      )}

      {day.editingWorkflow.length > 0 && (
        <section className="course-day__block">
          <h2>Editing workflow (Lightroom)</h2>
          <Checklist
            storageKey={`${day.slug}-edit`}
            items={day.editingWorkflow}
            ordered
          />
        </section>
      )}

      {day.presetLab.length > 0 && (
        <section className="course-day__block">
          <h2>Preset lab</h2>
          <ul>
            {day.presetLab.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {day.uploadChecklist.length > 0 && (
        <section className="course-day__block">
          <h2>Upload checklist</h2>
          <Checklist storageKey={`${day.slug}-upload`} items={day.uploadChecklist} />
        </section>
      )}

      {day.reflectionPrompts.length > 0 && (
        <section className="course-day__block">
          <h2>Reflection prompts (reflection.md)</h2>
          <ul>
            {day.reflectionPrompts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {day.specialNotes.length > 0 && (
        <section className="course-day__block course-day__special">
          <h2>Notes</h2>
          <ul>
            {day.specialNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {dayPhotos.length > 0 && (
        <section className="course-day__block course-day__photos">
          <h2>Day {String(day.day).padStart(2, '0')} photos</h2>
          <PhotoGrid day={day.day} showFilters={false} />
        </section>
      )}

      <p className="course-day__jump">
        <a href="#upload-for-review">Jump to upload for review ↓</a>
      </p>

      <UploadForReview day={day} />

      <nav className="course-day__pager" aria-label="Day navigation">
        {prev ? (
          <Link to={`/course/${prev.slug}`} className="course-day__pager-link">
            <span>Previous</span>
            <strong>
              Day {String(prev.day).padStart(2, '0')} — {prev.title}
            </strong>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/course/${next.slug}`}
            className="course-day__pager-link course-day__pager-link--next"
          >
            <span>Next</span>
            <strong>
              Day {String(next.day).padStart(2, '0')} — {next.title}
            </strong>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </section>
  )
}

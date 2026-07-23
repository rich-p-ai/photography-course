import { Link, Navigate, useParams } from 'react-router-dom'
import { StudyMaterialItem } from '../components/StudyMaterialItem'
import { UploadForReview } from '../components/UploadForReview'
import {
  courseDays,
  formatCourseDate,
  getCourseDay,
} from '../data/course'
import './CourseDay.css'

export function CourseDay() {
  const { daySlug } = useParams()
  const day = daySlug ? getCourseDay(daySlug) : undefined

  if (!day) {
    return <Navigate to="/course" replace />
  }

  const index = courseDays.findIndex((d) => d.slug === day.slug)
  const prev = index > 0 ? courseDays[index - 1] : null
  const next = index < courseDays.length - 1 ? courseDays[index + 1] : null

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

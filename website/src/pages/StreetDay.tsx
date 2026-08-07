import { Link, Navigate, useParams } from 'react-router-dom'
import { Checklist } from '../components/Checklist'
import {
  getStreetDay,
  streetDays,
  streetGithubUrl,
} from '../data/streetExercises'
import './CourseDay.css'
import './StreetDay.css'

export function StreetDay() {
  const { daySlug } = useParams()
  const day = daySlug ? getStreetDay(daySlug) : undefined

  if (!day) {
    return <Navigate to="/street" replace />
  }

  const index = streetDays.findIndex((d) => d.slug === day.slug)
  const prev = index > 0 ? streetDays[index - 1] : null
  const next = index < streetDays.length - 1 ? streetDays[index + 1] : null

  return (
    <section className="page course-day street-day">
      <nav className="course-day__crumb" aria-label="Breadcrumb">
        <Link to="/street">Street exercises</Link>
        <span aria-hidden="true">/</span>
        <span>Day {String(day.day).padStart(2, '0')}</span>
      </nav>

      <p className="section-label">
        Day {String(day.day).padStart(2, '0')} · {day.category}
      </p>
      <h1 className="page-title">{day.title}</h1>

      <p className="street-day__core-idea">{day.coreIdea}</p>
      {day.goal && <p className="course-day__goal">{day.goal}</p>}

      <dl className="course-day__facts">
        <div>
          <dt>Category</dt>
          <dd>{day.category}</dd>
        </div>
      </dl>

      <p className="course-day__upload-cta">
        <a
          href={streetGithubUrl(day.day)}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Open Day folder on GitHub
        </a>
      </p>

      {day.shootingBrief.length > 0 && (
        <section className="course-day__block">
          <h2>Shooting brief (30–60 min)</h2>
          <ol>
            {day.shootingBrief.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
      )}

      {day.technicalFocus.length > 0 && (
        <section className="course-day__block">
          <h2>Technical focus</h2>
          <Checklist
            storageKey={`${day.slug}-technical`}
            items={day.technicalFocus}
          />
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

      {day.closingNote && (
        <section className="course-day__block course-day__special">
          <h2>Closing note</h2>
          <p>{day.closingNote}</p>
        </section>
      )}

      <nav className="course-day__pager" aria-label="Day navigation">
        {prev ? (
          <Link to={`/street/${prev.slug}`} className="course-day__pager-link">
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
            to={`/street/${next.slug}`}
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

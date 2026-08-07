import { Link } from 'react-router-dom'
import {
  streetAttribution,
  streetCategoryOrder,
  streetCoreRules,
  streetDays,
  streetRepoUrl,
} from '../data/streetExercises'
import './Course.css'
import './StreetCourse.css'

export function StreetCourse() {
  const byCategory = streetCategoryOrder.map((category) => ({
    category,
    days: streetDays.filter((d) => d.category === category),
  }))

  return (
    <section className="page course street-course">
      <p className="section-label">20-day challenge</p>
      <h1 className="page-title">Street exercises</h1>
      <p className="page-lede course__lede">
        Deliberate practice for finding subjects, building visual vocabulary,
        and developing a personal approach to street photography — one constraint
        per day.
      </p>

      <p className="street-course__crosslink">
        Complements the{' '}
        <Link to="/course">14-day technical + style course</Link>. Run it
        after, or interleaved.
      </p>

      <dl className="course__meta">
        <div>
          <dt>Gear</dt>
          <dd>Any camera (24–50mm recommended)</dd>
        </div>
        <div>
          <dt>Daily rhythm</dt>
          <dd>30–60 min shoot → cull → 3–5 keepers + reflection.md</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>Any urban or public environment</dd>
        </div>
      </dl>

      <section className="street-course__rules">
        <h2 className="street-course__rules-title">Core rules</h2>
        <ul>
          {streetCoreRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>

      {byCategory.map(({ category, days }) => (
        <section key={category} className="street-course__group">
          <h2 className="street-course__group-title">{category}</h2>
          <ol className="course__list">
            {days.map((day) => (
              <li key={day.slug} className="course__row">
                <Link to={`/street/${day.slug}`} className="course__main">
                  <span className="course__day">
                    Day {String(day.day).padStart(2, '0')}
                  </span>
                  <span className="course__info">
                    <span className="course__name">{day.title}</span>
                    <span className="course__sub">{day.category}</span>
                  </span>
                </Link>
                <div className="course__actions">
                  <Link to={`/street/${day.slug}`} className="course__cta">
                    Open
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <footer className="street-course__attribution">
        <p>
          Source inspiration: {streetAttribution}. Exercise repo:{' '}
          <a href={streetRepoUrl} target="_blank" rel="noreferrer">
            street-photography-exercises
          </a>
        </p>
      </footer>
    </section>
  )
}

import { Link } from 'react-router-dom'
import {
  courseDays,
  courseStartDate,
  formatCourseDate,
} from '../data/course'
import './Course.css'

export function Course() {
  return (
    <section className="page course">
      <p className="section-label">14-day challenge</p>
      <h1 className="page-title">Course</h1>
      <p className="page-lede course__lede">
        Improve skills and discover your style — morning blue-hour shoots in
        Charleston / Isle of Palms, Lightroom edits, then upload for review.
        Starts {formatCourseDate(1)}.
      </p>

      <dl className="course__meta">
        <div>
          <dt>Gear</dt>
          <dd>Sony ZV-E10 II + FE 24-50mm f/2.8 G</dd>
        </div>
        <div>
          <dt>Daily rhythm</dt>
          <dd>30–60 min shoot → edit → Instagram + Day folder upload</dd>
        </div>
        <div>
          <dt>Start</dt>
          <dd>{courseStartDate}</dd>
        </div>
      </dl>

      <ol className="course__list">
        {courseDays.map((day) => (
          <li key={day.slug}>
            <Link to={`/course/${day.slug}`} className="course__row">
              <span className="course__day">
                Day {String(day.day).padStart(2, '0')}
              </span>
              <span className="course__info">
                <span className="course__name">{day.title}</span>
                <span className="course__sub">
                  {day.genre || 'Open'} · {formatCourseDate(day.day)}
                </span>
              </span>
              <span className="course__cta">Open</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}

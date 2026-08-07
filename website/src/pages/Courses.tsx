import { Link } from 'react-router-dom'
import './Courses.css'

const courses = [
  {
    slug: 'starter',
    path: '/course',
    label: '14-Day Starter',
    tagline: 'Technical + style foundation',
    description:
      'Improve skills and discover personal style through daily blue-hour shoots, Lightroom edits, and structured review. Progressive street, landscape, and portrait work in Charleston / IOP.',
    meta: '14 days · Sony ZV-E10 II + 24-50mm · Daily 30–60 min',
  },
  {
    slug: 'street',
    path: '/street',
    label: 'Street Photography',
    tagline: 'Subject-finding and visual strategies',
    description:
      '20 deliberate constraints drawn from classic and contemporary street practice. Order, waiting, layers, ethics, and everything between. One tight exercise per day.',
    meta: '20 days · Any camera · Constraint-focused',
  },
]

export function Courses() {
  return (
    <section className="page courses">
      <p className="section-label">Learning</p>
      <h1 className="page-title">Courses</h1>
      <p className="page-lede courses__lede">
        Structured practice tracks. Start with the 14-day foundation, then deepen
        street seeing with the 20-day exercises — or run them interleaved. More
        classes will be added here over time.
      </p>

      <div className="courses__grid">
        {courses.map((course) => (
          <article key={course.slug} className="courses__card">
            <p className="courses__tagline">{course.tagline}</p>
            <h2 className="courses__name">
              <Link to={course.path}>{course.label}</Link>
            </h2>
            <p className="courses__desc">{course.description}</p>
            <p className="courses__meta">{course.meta}</p>
            <Link to={course.path} className="courses__cta">
              Open course
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

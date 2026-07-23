import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { Course } from './pages/Course'
import { CourseDay } from './pages/CourseDay'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <div className="site">
          <Nav />
          <main className="site-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/course" element={<Course />} />
              <Route path="/course/:daySlug" element={<CourseDay />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

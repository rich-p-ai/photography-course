import { useEffect, useMemo, useRef, useState } from 'react'
import {
  dayFolderName,
  dayGithubUrl,
  type CourseDay,
} from '../data/course'
import './UploadForReview.css'

type StagedFile = {
  id: string
  file: File
  url: string
  kind: 'image' | 'note'
}

type UploadForReviewProps = {
  day: CourseDay
}

const MAX_STAGED = 10

function storageKey(day: number) {
  return `rs-course-day-${day}-reflection`
}

function isNoteFile(file: File) {
  const name = file.name.toLowerCase()
  return (
    file.type === 'text/markdown' ||
    file.type === 'text/plain' ||
    name.endsWith('.md') ||
    name.endsWith('.txt')
  )
}

function isImageFile(file: File) {
  return file.type.startsWith('image/')
}

export function UploadForReview({ day }: UploadForReviewProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<StagedFile[]>([])
  const [natural, setNatural] = useState('')
  const [forced, setForced] = useState('')
  const [technical, setTechnical] = useState('')
  const [extra, setExtra] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey(day.day))
      if (!raw) return
      const saved = JSON.parse(raw) as {
        natural?: string
        forced?: string
        technical?: string
        extra?: string
      }
      setNatural(saved.natural ?? '')
      setForced(saved.forced ?? '')
      setTechnical(saved.technical ?? '')
      setExtra(saved.extra ?? '')
    } catch {
      /* ignore corrupt drafts */
    }
  }, [day.day])

  useEffect(() => {
    localStorage.setItem(
      storageKey(day.day),
      JSON.stringify({ natural, forced, technical, extra }),
    )
  }, [day.day, natural, forced, technical, extra])

  useEffect(() => {
    return () => {
      files.forEach((f) => URL.revokeObjectURL(f.url))
    }
  }, [files])

  const folder = dayFolderName(day.day)
  const githubUrl = dayGithubUrl(day.day)

  const reflectionMarkdown = useMemo(() => {
    const lines = [
      `# ${folder} Reflection`,
      '',
      `**Lesson:** ${day.title}`,
      `**Genre:** ${day.genre || '—'}`,
      '',
      '## What felt natural?',
      natural.trim() || '_Pending_',
      '',
      '## What felt forced?',
      forced.trim() || '_Pending_',
      '',
      '## One technical note from Lightroom',
      technical.trim() || '_Pending_',
      '',
    ]
    if (day.specialNotes.length || extra.trim()) {
      lines.push('## Extra notes')
      day.specialNotes.forEach((note) => lines.push(`- ${note}`))
      if (extra.trim()) lines.push('', extra.trim())
      lines.push('')
    }
    if (files.length) {
      lines.push('## Uploaded files for review')
      files.forEach((f) => lines.push(`- ${f.file.name}`))
      lines.push('')
    }
    return lines.join('\n')
  }, [day, natural, forced, technical, extra, files, folder])

  const reviewPrompt = useMemo(() => {
    return [
      `Please review my ${folder} upload for the photography course.`,
      `Lesson: ${day.title}`,
      `GitHub folder: ${githubUrl}`,
      '',
      'I uploaded my best edited JPEGs and reflection.md to that folder.',
      'Review composition, light, edit choices, and how the work tracks my emerging style.',
      '',
      'Reflection draft:',
      reflectionMarkdown,
    ].join('\n')
  }, [day.title, folder, githubUrl, reflectionMarkdown])

  function onPick(list: FileList | null) {
    if (!list?.length) return
    const picked = Array.from(list).filter(
      (f) => isImageFile(f) || isNoteFile(f),
    )
    const next = picked.slice(0, MAX_STAGED).map((file) => ({
      id: `${file.name}-${file.lastModified}-${Math.random()}`,
      file,
      url: URL.createObjectURL(file),
      kind: (isNoteFile(file) ? 'note' : 'image') as 'image' | 'note',
    }))
    setFiles((prev) => {
      prev.forEach((f) => URL.revokeObjectURL(f.url))
      return next
    })
    const images = next.filter((f) => f.kind === 'image').length
    const notes = next.filter((f) => f.kind === 'note').length
    const parts = [
      images ? `${images} photo${images === 1 ? '' : 's'}` : '',
      notes ? `${notes} note${notes === 1 ? '' : 's'}` : '',
    ].filter(Boolean)
    setStatus(
      parts.length
        ? `${parts.join(' + ')} staged for review.`
        : 'No photos or notes selected. Choose JPEG/PNG/WebP or .md/.txt files.',
    )
  }

  function removeFile(id: string) {
    setFiles((prev) => {
      const target = prev.find((f) => f.id === id)
      if (target) URL.revokeObjectURL(target.url)
      return prev.filter((f) => f.id !== id)
    })
  }

  function downloadReflection() {
    const blob = new Blob([reflectionMarkdown], {
      type: 'text/markdown;charset=utf-8',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'reflection.md'
    a.click()
    URL.revokeObjectURL(url)
    setStatus('Downloaded reflection.md — save it into the Day folder, then commit.')
  }

  async function downloadStagedFiles() {
    if (!files.length) {
      setStatus('Add photos or notes first.')
      return
    }
    for (const staged of files) {
      const a = document.createElement('a')
      a.href = staged.url
      a.download = staged.file.name
      a.click()
      await new Promise((r) => setTimeout(r, 120))
    }
    setStatus(
      `Downloaded ${files.length} file(s). Move them into ${folder}/, commit & push.`,
    )
  }

  async function copyReviewPrompt() {
    try {
      await navigator.clipboard.writeText(reviewPrompt)
      setStatus('Review prompt copied — paste it in Cursor chat after you push.')
    } catch {
      setStatus('Could not copy automatically. Select the prompt text below.')
    }
  }

  return (
    <section className="upload-review" id="upload-for-review">
      <p className="section-label">Upload for review</p>
      <h2 className="upload-review__title">Stage today’s work</h2>
      <p className="upload-review__lede">
        Pick your best 3–5 edits, write the reflection, then download into{' '}
        <code>{folder}/</code>, commit &amp; push, and paste the review prompt
        in chat.
      </p>

      <ol className="upload-review__steps">
        <li>Upload photos + notes here</li>
        <li>
          Save files into{' '}
          <a href={githubUrl} target="_blank" rel="noreferrer">
            {folder}
          </a>
        </li>
        <li>Commit, push, paste review prompt in Cursor</li>
      </ol>

      <div className="upload-review__drop">
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/*,.md,.txt,text/markdown,text/plain"
          multiple
          className="upload-review__input"
          onChange={(e) => onPick(e.target.files)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => inputRef.current?.click()}
        >
          Upload notes &amp; photos
        </button>
        <p>
          Select edited JPEGs + reflection notes (.md / .txt) · up to {MAX_STAGED}{' '}
          files staged locally (not uploaded to a server)
        </p>
      </div>

      {files.length > 0 && (
        <ul className="upload-review__thumbs">
          {files.map((f) => (
            <li key={f.id}>
              {f.kind === 'image' ? (
                <img src={f.url} alt={f.file.name} />
              ) : (
                <div className="upload-review__note-tile" aria-hidden="true">
                  <span>Notes</span>
                  <strong>{f.file.name}</strong>
                </div>
              )}
              <div className="upload-review__thumb-meta">
                <span>{f.file.name}</span>
                <button type="button" onClick={() => removeFile(f.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="upload-review__form">
        <label>
          <span>What felt natural?</span>
          <textarea
            rows={3}
            value={natural}
            onChange={(e) => setNatural(e.target.value)}
            placeholder="Moments, angles, or subjects that came easily…"
          />
        </label>
        <label>
          <span>What felt forced?</span>
          <textarea
            rows={3}
            value={forced}
            onChange={(e) => setForced(e.target.value)}
            placeholder="Rules or setups that felt awkward…"
          />
        </label>
        <label>
          <span>One technical note from Lightroom</span>
          <textarea
            rows={3}
            value={technical}
            onChange={(e) => setTechnical(e.target.value)}
            placeholder="Exposure, color, crop, noise…"
          />
        </label>
        <label>
          <span>
            Extra notes
            {day.specialNotes[0] ? ` — ${day.specialNotes[0]}` : ''}
          </span>
          <textarea
            rows={3}
            value={extra}
            onChange={(e) => setExtra(e.target.value)}
            placeholder="Style notes, mood, preferred subjects…"
          />
        </label>
      </div>

      <div className="upload-review__actions">
        <button type="button" className="btn btn-primary" onClick={downloadReflection}>
          Download reflection.md
        </button>
        <button
          type="button"
          className="btn btn-outline"
          onClick={downloadStagedFiles}
        >
          Download staged files
        </button>
        <button type="button" className="btn btn-outline" onClick={copyReviewPrompt}>
          Copy review prompt
        </button>
        <a
          className="btn btn-outline"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open {folder} on GitHub
        </a>
      </div>

      {status && <p className="upload-review__status" role="status">{status}</p>}

      <details className="upload-review__prompt">
        <summary>Preview review prompt</summary>
        <pre>{reviewPrompt}</pre>
      </details>

      <ul className="upload-review__notes">
        {day.uploadChecklist.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  )
}

import { useEffect, useState } from 'react'
import './Checklist.css'

type ChecklistProps = {
  storageKey: string
  items: string[]
  ordered?: boolean
}

function loadChecked(storageKey: string, length: number): boolean[] {
  try {
    const raw = localStorage.getItem(storageKey)
    if (raw) {
      const parsed: unknown = JSON.parse(raw)
      if (Array.isArray(parsed) && parsed.length === length) {
        return parsed.map(Boolean)
      }
    }
  } catch {
    // ignore corrupted storage
  }
  return new Array<boolean>(length).fill(false)
}

export function Checklist({ storageKey, items, ordered = false }: ChecklistProps) {
  const [checked, setChecked] = useState<boolean[]>(() =>
    loadChecked(storageKey, items.length),
  )

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(checked))
  }, [storageKey, checked])

  const toggle = (index: number) => {
    setChecked((prev) => prev.map((value, i) => (i === index ? !value : value)))
  }

  const Tag = ordered ? 'ol' : 'ul'

  return (
    <Tag className="checklist">
      {items.map((item, index) => (
        <li key={item}>
          <label
            className={
              checked[index] ? 'checklist__item checklist__item--done' : 'checklist__item'
            }
          >
            <input
              type="checkbox"
              checked={checked[index]}
              onChange={() => toggle(index)}
            />
            <span>{item}</span>
          </label>
        </li>
      ))}
    </Tag>
  )
}

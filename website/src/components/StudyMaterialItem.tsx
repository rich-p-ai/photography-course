const URL_PATTERN = /(https?:\/\/[^\s]+)/g

type StudyMaterialItemProps = {
  text: string
}

export function StudyMaterialItem({ text }: StudyMaterialItemProps) {
  const parts = text.split(URL_PATTERN)

  return (
    <>
      {parts.map((part, index) => {
        if (part.match(/^https?:\/\//)) {
          return (
            <a
              key={`${part}-${index}`}
              href={part}
              target="_blank"
              rel="noreferrer"
              className="course-day__study-link"
            >
              {part}
            </a>
          )
        }
        return part ? <span key={`${part}-${index}`}>{part}</span> : null
      })}
    </>
  )
}

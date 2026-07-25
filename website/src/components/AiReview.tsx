import type { DayReview } from '../data/reviews'
import './AiReview.css'

type AiReviewProps = {
  review: DayReview
}

type Block =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const blocks: Block[] = []
  let listItems: string[] = []

  function flushList() {
    if (listItems.length === 0) return
    blocks.push({ type: 'list', items: listItems })
    listItems = []
  }

  for (const raw of lines) {
    const line = raw.trimEnd()
    const trimmed = line.trim()

    if (!trimmed) {
      flushList()
      continue
    }

    const heading = trimmed.match(/^###\s+(.+)$/)
    if (heading) {
      flushList()
      blocks.push({ type: 'heading', text: heading[1] })
      continue
    }

    const bullet = trimmed.match(/^[-*]\s+(.+)$/)
    if (bullet) {
      listItems.push(bullet[1])
      continue
    }

    flushList()
    blocks.push({ type: 'paragraph', text: trimmed })
  }

  flushList()
  return blocks
}

function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>
        }
        return <span key={index}>{part}</span>
      })}
    </>
  )
}

export function AiReview({ review }: AiReviewProps) {
  const blocks = parseBlocks(review.markdown)

  return (
    <section className="ai-review" id="ai-review" aria-labelledby="ai-review-title">
      <p className="section-label">AI review</p>
      <h2 className="ai-review__title" id="ai-review-title">
        {review.title}
      </h2>
      <p className="ai-review__summary">{review.summary}</p>

      <div className="ai-review__body">
        {blocks.map((block, index) => {
          if (block.type === 'heading') {
            return (
              <h3 key={index} className="ai-review__heading">
                {block.text}
              </h3>
            )
          }
          if (block.type === 'list') {
            return (
              <ul key={index} className="ai-review__list">
                {block.items.map((item) => (
                  <li key={item}>
                    <InlineMarkdown text={item} />
                  </li>
                ))}
              </ul>
            )
          }
          return (
            <p key={index} className="ai-review__p">
              <InlineMarkdown text={block.text} />
            </p>
          )
        })}
      </div>
    </section>
  )
}

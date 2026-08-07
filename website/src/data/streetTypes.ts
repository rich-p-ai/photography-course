export type StreetCategory =
  | 'Busy'
  | 'Quiet'
  | 'Abstract'
  | 'Still'
  | 'Subjects'

export type StreetDay = {
  day: number
  slug: string
  title: string
  category: StreetCategory
  coreIdea: string
  whyItMatters: string
  shootingBrief: string[]
  technicalFocus: string[]
  failureModes: string[]
  goodVsExcellent: { good: string; excellent: string }
  reflectionPrompts: string[]
  sources?: string[]
  closingNote?: string
}

import daysJson from './streetDays.json'

export type StreetCategory = 'Busy' | 'Quiet' | 'Abstract' | 'Still' | 'Subjects'

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

export const streetRepoUrl = 'https://github.com/rich-p-ai/photography-course'

export const streetAttribution =
  "David Gibson, The Street Photographer's Manual — rewritten for intermediate practice"

export const streetCategoryOrder: StreetCategory[] = [
  'Busy',
  'Quiet',
  'Abstract',
  'Still',
  'Subjects',
]

export const streetCoreRules = [
  'One primary constraint per day. Do not mix exercises.',
  'Volume target: usually 40–80 frames. Intention > quantity.',
  'Reflection is mandatory.',
  'No street photography is worth making someone uncomfortable. Day 20 formalizes this.',
]

export function streetDayFolderName(day: number): string {
  return `Day-${String(day).padStart(2, '0')}`
}

export function streetGithubUrl(day: number): string {
  return `${streetRepoUrl}/tree/main/street/${streetDayFolderName(day)}`
}

export const streetDays: StreetDay[] = daysJson

export function getStreetDay(slug: string): StreetDay | undefined {
  return streetDays.find((d) => d.slug === slug)
}

export function streetDaysByCategory(): Map<StreetCategory, StreetDay[]> {
  const map = new Map<StreetCategory, StreetDay[]>()
  for (const category of streetCategoryOrder) {
    map.set(category, streetDays.filter((d) => d.category === category))
  }
  return map
}

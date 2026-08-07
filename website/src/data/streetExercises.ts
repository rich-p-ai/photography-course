import type { StreetCategory, StreetDay } from './streetTypes'
import { streetPack0 } from './streetPack0'
import { streetPack1 } from './streetPack1'
import { streetPack2 } from './streetPack2'
import { streetPack3 } from './streetPack3'

export type { StreetCategory, StreetDay }

export const streetRepoUrl = 'https://github.com/rich-p-ai/photography-course'

export const streetAttribution =
  "David Gibson, The Street Photographer's Manual (Thames & Hudson) — lessons rewritten for intermediate practice"

export const streetCategoryOrder: StreetCategory[] = ['Busy', 'Quiet', 'Abstract', 'Still', 'Subjects']

export const streetCoreRules = [
  'One primary constraint per day. Do not mix exercises.',
  'Volume target: usually 40–80 frames. Intention > quantity.',
  'Reflection is mandatory. The point is learning, not just images.',
  'No street photography is worth making someone uncomfortable. Day 20 formalizes this.',
]

export function streetDayFolderName(day: number): string {
  return `Day-${String(day).padStart(2, '0')}`
}

export function streetGithubUrl(day: number): string {
  return `${streetRepoUrl}/tree/main/street/${streetDayFolderName(day)}`
}

export const streetDays: StreetDay[] = [
  ...streetPack0,
  ...streetPack1,
  ...streetPack2,
  ...streetPack3,
]

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

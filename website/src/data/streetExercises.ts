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

export const streetRepoUrl = 'https://github.com/rich-p-ai/photography-course'

export const streetAttribution =
  "David Gibson, The Street Photographer's Manual (Thames & Hudson) — lessons rewritten for intermediate practice"

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
  'Reflection is mandatory. The point is learning, not just images.',
  'No street photography is worth making someone uncomfortable. Day 20 formalizes this.',
]

export function streetDayFolderName(day: number): string {
  return `Day-${String(day).padStart(2, '0')}`
}

export function streetGithubUrl(day: number): string {
  return `${streetRepoUrl}/tree/main/street/${streetDayFolderName(day)}`
}

const defaultReflection = [
  'What worked and what failed against the constraint?',
  'Strongest frame and why it succeeds.',
  'What will you carry into the next session?',
]

export const streetDays: StreetDay[] = [
  {
    day: 1,
    slug: 'day-01',
    title: 'Order',
    category: 'Busy',
    coreIdea:
      'Train your eye to locate structure — patterns, repetition, alignment, rhythm — that already exists inside busy public space.',
    whyItMatters:
      'Most street photographs fail because the frame is a collection of unrelated things. The pictures that feel inevitable succeed because the photographer first saw an underlying order and then waited for the human element to lock into it.\nThis day builds the foundational skill of seeing structure before content. Once you can reliably find order, every other exercise becomes sharper.',
    shootingBrief: [
      'Busy public space with continuous movement (market, transit hub, main sidewalk, ferry terminal). 45–70 minutes.',
      'Constraint: order must be the clear subject. Minimum 8 successful frames. Volume target 50–80.',
      'One primary constraint only — do not mix exercises.',
    ],
    technicalFocus: [
      'Settings: Aperture priority or full manual. f/5.6–8. Shutter 1/250s minimum (prefer 1/320–1/500s). ISO as needed under 3200 when possible.',
      'Focusing: Zone or single-point. Pre-focus on the pattern plane (usually 3–8m). Hyperfocal at f/8 mid-zoom is useful.',
      'Stance: Walk slowly. Small lateral shifts change alignments more than zooming. Camera ready at chest or eye level.',
      'Light: Side or hard directional light reveals structure. Flat overcast flattens patterns.',
      'Distance: 3–8 meters. Candid only today.',
    ],
    failureModes: [
      'Forcing patterns that are not really there.',
      'Too many competing elements so order disappears.',
      'Shooting before the alignment is clean.',
      'Working too wide with cluttered edges.',
    ],
    goodVsExcellent: {
      good: 'You can point to the pattern and the viewer can see it.',
      excellent:
        'The order feels discovered rather than imposed. Removing any single element weakens the picture.',
    },
    reflectionPrompts: defaultReflection,
    sources: [
      'Matt Stuart Engadget segment on hyperfocal and readiness.',
      'Nick Turpin masterclass on constructing street frames.',
      'Garry Winogrand 1982 Los Angeles street footage.',
    ],
  },
]

// Remaining days loaded below to keep file maintainable
import { streetDaysRest } from './streetDaysRest'

streetDays.push(...streetDaysRest)

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

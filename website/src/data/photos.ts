export type PhotoCategory = 'Street' | 'Landscape' | 'Portraits' | 'Series'

/** Respect Vite/GitHub Pages base path (e.g. /photography-course/) */
export function photoSrc(file: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}photos/${file.replace(/^\/?photos\//, '')}`
}

export type Photo = {
  id: string
  title: string
  caption: string
  location: string
  date: string
  day?: number
  set: string
  category: PhotoCategory
  src: string
  width: number
  height: number
}

/** Display order for portfolio set sections */
export const photoSetOrder = [
  'Marsh Light',
  'Old San Juan',
  'Mirror Shore',
  'IOP Evening',
  'Fireside',
  'Launch Night',
  'Along the Road',
] as const

export type PhotoSet = (typeof photoSetOrder)[number]

/**
 * Sourced from ~/Pictures/Photography (web-optimized JPEGs in /public/photos).
 * Adobe Lightroom share: https://adobe.ly/3TPWgFK
 */
export const photos: Photo[] = [
  // — Marsh Light —
  {
    id: 'over-the-marsh',
    title: 'Over the Marsh',
    caption: 'Golden light over the tidal grass — Ravenel Bridge holding the horizon.',
    location: 'Charleston, SC',
    date: '2026-06-28',
    set: 'Marsh Light',
    category: 'Landscape',
    src: photoSrc('over-the-marsh.jpg'),
    width: 2000,
    height: 1125,
  },
  {
    id: 'pit-street-sunset',
    title: 'Pit Street Sunset',
    caption: 'Storm light and gold over the marsh — bridge as silhouette.',
    location: 'Charleston, SC',
    date: '2026-06-29',
    set: 'Marsh Light',
    category: 'Landscape',
    src: photoSrc('pit-street-sunset.jpg'),
    width: 2000,
    height: 1125,
  },
  {
    id: 'summer-sunset',
    title: 'Summer Sunset',
    caption: 'Friends on driftwood, facing the glow — Charleston evening ritual.',
    location: 'Charleston, SC',
    date: '2026-06-27',
    set: 'Marsh Light',
    category: 'Landscape',
    src: photoSrc('summer-sunset.jpg'),
    width: 1125,
    height: 2000,
  },

  // — Old San Juan —
  {
    id: 'down-the-street',
    title: 'Down the Street',
    caption: 'Cobblestones, lantern glow, and a street that asks you to walk slower.',
    location: 'Old San Juan, PR',
    date: '2026-06-24',
    set: 'Old San Juan',
    category: 'Street',
    src: photoSrc('down-the-street.jpg'),
    width: 2000,
    height: 1333,
  },
  {
    id: 'street-of-san-jaun',
    title: 'Street of San Juan',
    caption: 'Blue-hour canyon of color — power lines, balconies, vanishing point.',
    location: 'Old San Juan, PR',
    date: '2026-06-23',
    set: 'Old San Juan',
    category: 'Street',
    src: photoSrc('street-of-san-jaun.jpg'),
    width: 1124,
    height: 2000,
  },
  {
    id: 'pure-soul',
    title: 'Pure Soul',
    caption: 'Shop light warm, sky cool — a car and a silhouette sharing the same evening.',
    location: 'Old San Juan, PR',
    date: '2026-06-24',
    set: 'Old San Juan',
    category: 'Street',
    src: photoSrc('pure-soul.jpg'),
    width: 2000,
    height: 1124,
  },
  {
    id: 'windows-of-san-jaun',
    title: 'Windows of San Juan',
    caption: 'Looking out over stacked color — urban texture from above.',
    location: 'San Juan, PR',
    date: '2026-06-23',
    set: 'Old San Juan',
    category: 'Street',
    src: photoSrc('windows-of-san-jaun.jpg'),
    width: 1125,
    height: 2000,
  },
  {
    id: 'condando-plaza',
    title: 'Condado Plaza',
    caption: 'Long exposure on the bridge — light trails and a ghost of a walker.',
    location: 'Condado, San Juan, PR',
    date: '2026-06-25',
    set: 'Old San Juan',
    category: 'Street',
    src: photoSrc('condando-plaza.jpg'),
    width: 2000,
    height: 1125,
  },
  {
    id: 'on-the-road',
    title: 'On the Road',
    caption: 'Motion and stillness sharing the same asphalt.',
    location: 'Puerto Rico',
    date: '2026-06-24',
    set: 'Old San Juan',
    category: 'Street',
    src: photoSrc('on-the-road.jpg'),
    width: 2000,
    height: 1125,
  },
  {
    id: 'flag-over-san-jaun',
    title: 'Flag Over San Juan',
    caption: 'A flag against sky — place marked without saying much.',
    location: 'San Juan, PR',
    date: '2026-06-23',
    set: 'Old San Juan',
    category: 'Street',
    src: photoSrc('flag-over-san-jaun.jpg'),
    width: 1125,
    height: 2000,
  },
  {
    id: 'family',
    title: 'Family',
    caption: 'Soft light, stone wall, ocean behind — a portrait that keeps the place in frame.',
    location: 'Coastal fort, San Juan area',
    date: '2026-06-28',
    set: 'Old San Juan',
    category: 'Portraits',
    src: photoSrc('family.jpg'),
    width: 2000,
    height: 1124,
  },

  // — Mirror Shore (Day 01 beach) —
  {
    id: 'mirror-tide',
    title: 'Mirror Tide',
    caption:
      'Wet sand as a second sky — dark clouds and a thin seam of gold at the horizon.',
    location: 'Isle of Palms, SC',
    date: '2026-07-23',
    day: 1,
    set: 'Mirror Shore',
    category: 'Landscape',
    src: photoSrc('mirror-tide.jpg'),
    width: 1024,
    height: 513,
  },
  {
    id: 'cloud-walk',
    title: 'Cloud Walk',
    caption:
      'Two silhouettes on the shoreline — leading line of foam into storm-lit sky.',
    location: 'Isle of Palms, SC',
    date: '2026-07-23',
    day: 1,
    set: 'Mirror Shore',
    category: 'Landscape',
    src: photoSrc('cloud-walk.jpg'),
    width: 1024,
    height: 513,
  },
  {
    id: 'flowing-shore',
    title: 'Flowing Shore',
    caption:
      'Long-exposure water softens the right edge — the beach holds the reflection still.',
    location: 'Isle of Palms, SC',
    date: '2026-07-23',
    day: 1,
    set: 'Mirror Shore',
    category: 'Landscape',
    src: photoSrc('flowing-shore.jpg'),
    width: 1024,
    height: 513,
  },
  {
    id: 'reflection',
    title: 'Reflection',
    caption:
      'Mirror-flat tide and heavy cloud — the frame balances sky against its copy.',
    location: 'Isle of Palms, SC',
    date: '2026-07-23',
    day: 1,
    set: 'Mirror Shore',
    category: 'Landscape',
    src: photoSrc('reflection.jpg'),
    width: 1024,
    height: 513,
  },
  {
    id: 'shoreline-pair',
    title: 'Shoreline Pair',
    caption:
      'Walkers small against the cloud wall — scale and leading line along the wet sand.',
    location: 'Isle of Palms, SC',
    date: '2026-07-23',
    day: 1,
    set: 'Mirror Shore',
    category: 'Landscape',
    src: photoSrc('shoreline-pair.jpg'),
    width: 1024,
    height: 513,
  },
  {
    id: 'beach-companions',
    title: 'Beach Companions',
    caption:
      'A pair at the waterline under broken light — cool shadow, warm break in the sky.',
    location: 'Isle of Palms, SC',
    date: '2026-07-23',
    day: 1,
    set: 'Mirror Shore',
    category: 'Landscape',
    src: photoSrc('beach-companions.jpg'),
    width: 1024,
    height: 513,
  },

  // — IOP Evening (Day 01 street) —
  {
    id: 'waiting',
    title: 'Waiting',
    caption:
      'Empty bar stool and picket rail — red balcony glow pulls the eye across the street.',
    location: 'Isle of Palms, SC',
    date: '2026-07-23',
    day: 1,
    set: 'IOP Evening',
    category: 'Street',
    src: photoSrc('waiting.jpg'),
    width: 576,
    height: 1024,
  },
  {
    id: 'evening-arrangement',
    title: 'Evening Arrangement',
    caption:
      'Planter as foreground subject — hanging chairs soften into layers behind.',
    location: 'Isle of Palms, SC',
    date: '2026-07-23',
    day: 1,
    set: 'IOP Evening',
    category: 'Street',
    src: photoSrc('evening-arrangement.jpg'),
    width: 1024,
    height: 576,
  },
  {
    id: 'iop-street-light',
    title: 'IOP Street Light',
    caption:
      'Lamppost and parking sign as vertical anchors — wet pavement carries the red light.',
    location: 'Isle of Palms, SC',
    date: '2026-07-23',
    day: 1,
    set: 'IOP Evening',
    category: 'Street',
    src: photoSrc('iop-street-light.jpg'),
    width: 576,
    height: 1024,
  },
  {
    id: 'delivery-hour',
    title: 'Delivery Hour',
    caption:
      'Sysco ramp and orange cone lead into the street — palm lines and flag hold the depth.',
    location: 'Isle of Palms, SC',
    date: '2026-07-23',
    day: 1,
    set: 'IOP Evening',
    category: 'Street',
    src: photoSrc('delivery-hour.jpg'),
    width: 1024,
    height: 576,
  },
  {
    id: 'parking-kiosk',
    title: 'Parking Kiosk',
    caption:
      'Blue kiosk sign as subject on thirds — palm alleys and street glow as the leading path.',
    location: 'Isle of Palms, SC',
    date: '2026-07-23',
    day: 1,
    set: 'IOP Evening',
    category: 'Street',
    src: photoSrc('parking-kiosk.jpg'),
    width: 1024,
    height: 576,
  },
  {
    id: 'suspended-calm',
    title: 'Suspended Calm',
    caption:
      'Macramé swings framed under the pergola — layered stillness before the street work.',
    location: 'Isle of Palms, SC',
    date: '2026-07-23',
    day: 1,
    set: 'IOP Evening',
    category: 'Street',
    src: photoSrc('suspended-calm.jpg'),
    width: 1024,
    height: 576,
  },

  // — Fireside —
  {
    id: 'fireside-1',
    title: 'Fireside I',
    caption: 'Flame as subject — close, quiet, high contrast.',
    location: 'Isle of Palms area',
    date: '2026-07-15',
    set: 'Fireside',
    category: 'Series',
    src: photoSrc('fireside-1.jpg'),
    width: 1333,
    height: 2000,
  },
  {
    id: 'fireside-2',
    title: 'Fireside II',
    caption: 'Same fire, different breath of the flame.',
    location: 'Isle of Palms area',
    date: '2026-07-15',
    set: 'Fireside',
    category: 'Series',
    src: photoSrc('fireside-2.jpg'),
    width: 1333,
    height: 2000,
  },
  {
    id: 'fireside-3',
    title: 'Fireside III',
    caption: 'Warm geometry against black — slowing down by the pit.',
    location: 'Isle of Palms area',
    date: '2026-07-15',
    set: 'Fireside',
    category: 'Series',
    src: photoSrc('fireside-3.jpg'),
    width: 2000,
    height: 1333,
  },
  {
    id: 'fireside-4',
    title: 'Fireside IV',
    caption: 'Last of the series — ember light, nothing else needed.',
    location: 'Isle of Palms area',
    date: '2026-07-15',
    set: 'Fireside',
    category: 'Series',
    src: photoSrc('fireside-4.jpg'),
    width: 2000,
    height: 1333,
  },

  // — Launch Night —
  {
    id: 'space-squid',
    title: 'Space Squid',
    caption: 'Rocket plume at twilight — a quiet sky event from the coast.',
    location: 'South Carolina coast',
    date: '2026-07-09',
    set: 'Launch Night',
    category: 'Landscape',
    src: photoSrc('space-squid.jpg'),
    width: 2000,
    height: 1002,
  },
  {
    id: 'to-mars',
    title: 'To Mars',
    caption: 'Second frame of the launch — pale fan against indigo.',
    location: 'South Carolina coast',
    date: '2026-07-09',
    set: 'Launch Night',
    category: 'Landscape',
    src: photoSrc('to-mars.jpg'),
    width: 2000,
    height: 1125,
  },

  // — Along the Road —
  {
    id: 'morning-road',
    title: 'Morning Road',
    caption: 'Lane lines as leading lines. Empty asphalt, indigo sky, a pause before traffic.',
    location: 'Near Charleston, SC',
    date: '2026-07-15',
    set: 'Along the Road',
    category: 'Street',
    src: photoSrc('morning-road.jpg'),
    width: 1333,
    height: 2000,
  },
  {
    id: 'two-flags',
    title: 'Two Flags',
    caption: 'Soft folds behind green hedges — everyday Americana, observed.',
    location: 'Charleston area',
    date: '2026-06-26',
    set: 'Along the Road',
    category: 'Street',
    src: photoSrc('two-flags.jpg'),
    width: 1125,
    height: 2000,
  },
]

export function photosForDay(day: number): Photo[] {
  return photos.filter((photo) => photo.day === day)
}

export function groupPhotosBySet(list: Photo[]): Array<{ set: string; photos: Photo[] }> {
  const bySet = new Map<string, Photo[]>()
  for (const photo of list) {
    const group = bySet.get(photo.set)
    if (group) group.push(photo)
    else bySet.set(photo.set, [photo])
  }

  const ordered: Array<{ set: string; photos: Photo[] }> = []
  for (const set of photoSetOrder) {
    const group = bySet.get(set)
    if (group?.length) ordered.push({ set, photos: group })
  }
  for (const [set, group] of bySet) {
    if (!photoSetOrder.includes(set as PhotoSet)) {
      ordered.push({ set, photos: group })
    }
  }
  return ordered
}

export const heroPhoto =
  photos.find((p) => p.id === 'over-the-marsh') ?? photos[0]

export const categories: Array<PhotoCategory | 'All'> = [
  'All',
  'Street',
  'Landscape',
  'Portraits',
  'Series',
]

export const adobePortfolioUrl = 'https://adobe.ly/3TPWgFK'

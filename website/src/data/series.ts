import { photos, type Photo } from './photos'

export type SeriesFrame = {
  photoId: string
  /** Narrative caption for the series essay — advances the story */
  caption: string
}

export type Series = {
  slug: string
  title: string
  /** One-line blurb for the Series tab cards */
  description: string
  coverId: string
  /** 2–4 sentences framing the series */
  opening: string
  journeyTitle: string
  journey: string
  closing: string
  /** Curated sequence — order is the story */
  frames: SeriesFrame[]
}

export type SeriesResolvedFrame = {
  photo: Photo
  caption: string
}

/** Curated series with dedicated essay pages */
export const seriesList: Series[] = [
  {
    slug: 'mirror-shore',
    title: 'Mirror Shore',
    description: 'Twilight shoreline and wet-sand reflections at Isle of Palms.',
    coverId: 'mirror-tide',
    opening:
      'At low light the beach stops being a place you walk and becomes a plane you look into. Isle of Palms after the sun drops — wet sand, heavy cloud, almost no color left except what the horizon still owes the sky. I went out for reflections. I stayed for how small a person becomes when the shore holds a second sky.',
    journeyTitle: 'The journey',
    journey:
      'Shot handheld on the ZV-E10 II with the 24-50mm, working the waterline while the tide was still glass. The constraint was simple: stay low, keep the horizon honest, and let figures enter only when the frame needed scale. Early frames were empty mirrors. Later ones let people cut the reflection — proof that the quiet was a stage, not a void. Editing stayed cool in the shadows and warm only where the break in the cloud earned it.',
    closing:
      'What resolved was not a single hero frame, but a sequence: shore as mirror, then mirror interrupted. The walkers do not break the mood — they confirm it. Without them the beach is weather. With them it is a place someone chose to be at that hour.',
    frames: [
      {
        photoId: 'mirror-tide',
        caption:
          'The series opens here — sand as glass, cloud as subject, almost nothing else allowed in.',
      },
      {
        photoId: 'flowing-shore',
        caption:
          'Tide starts to move. Soft water on the right keeps the left reflection sharp.',
      },
      {
        photoId: 'reflection',
        caption:
          'Pure duality. Horizon dead center so the copy of the sky has equal weight.',
      },
      {
        photoId: 'cloud-walk',
        caption:
          'First figures. Small enough to read as punctuation, not portraits.',
      },
      {
        photoId: 'shoreline-pair',
        caption:
          'Scale settles. The cloud wall stays dominant; the walkers measure it.',
      },
      {
        photoId: 'beach-companions',
        caption:
          'Closer to the waterline — same hour, tighter company, the sequence lands.',
      },
    ],
  },
  {
    slug: 'fireside',
    title: 'Fireside',
    description: 'Close studies of flame and ember light by the fire pit.',
    coverId: 'fireside-1',
    opening:
      'I wanted fire without campfire cliché — no faces, no marshmallows, no wide patio context. Just flame as structure: heat, edge, and black. Shot at Isle of Palms after the social part of the evening was over, when the pit was still working and nobody needed the camera pointed at them.',
    journeyTitle: 'Why this series',
    journey:
      'The 24-50mm stayed close. Wide enough to keep shape, tight enough to lose the yard. Exposure chased highlight detail in the brightest tongues and accepted deep black everywhere else — no lifting shadows to “save” information that was never the point. Four frames, one sit. The work is about how the same fire changes breath between clicks, not about variety of location.',
    closing:
      'By the last frame the flame is quieter — less performance, more ember. That was the discovery: fire does not need a wide story. Held close, it is already a complete subject. The series ends when the light stops arguing and starts settling.',
    frames: [
      {
        photoId: 'fireside-1',
        caption:
          'Entry point — vertical flame, hard contrast, nothing but heat and black.',
      },
      {
        photoId: 'fireside-2',
        caption:
          'Same pit, different breath. The shape changes faster than the exposure.',
      },
      {
        photoId: 'fireside-3',
        caption:
          'Wider geometry. Still no context — only the architecture of the burn.',
      },
      {
        photoId: 'fireside-4',
        caption:
          'Ember resolve. The series closes as the light stops insisting.',
      },
    ],
  },
  {
    slug: 'colores-de-san-juan',
    title: 'Colores de San Juan',
    description: 'Saturated facades, doors, and street surfaces from Old San Juan.',
    coverId: '275-blue-wall',
    opening:
      'Old San Juan is easy to overshoot — every corner offers a postcard. I was looking for color as structure, not souvenir. Facades, doors, shutter metal, paint failure. The streets do the composing if you slow down enough to let one wall be the whole frame.',
    journeyTitle: 'The journey',
    journey:
      'Walked with the 24-50mm in hard Caribbean daylight and blue-hour spill off the alleys. Early frames hit graphic contrast — blue against orange, clean geometry. Mid-sequence opens into depth: cobbles, repeating doors, stacked balconies on a curve. The later frames soften into passage and decay — green walls with ocean at the end of the lane, then a torn poster on yellow paint. Saturation stayed honest to what the paint was doing; I did not invent a carnival that was not there.',
    closing:
      'The through-line is not “pretty buildings.” It is how color holds a street together until time starts peeling it apart. Ending on the torn poster was deliberate — after the polished blues and teals, the wall that is failing feels like the truest note. Color in San Juan is maintenance and weather, not a theme park.',
    frames: [
      {
        photoId: '275-blue-wall',
        caption:
          'Cold open — blue field, black shutter, one orange door. Color as architecture.',
      },
      {
        photoId: 'cobble-blue',
        caption:
          'The street enters. Repeating red doors turn the facade into rhythm.',
      },
      {
        photoId: 'balcony-row',
        caption:
          'Vertical density on the curve — terracotta and pink stacked in layers.',
      },
      {
        photoId: 'teal-285',
        caption:
          'A quieter register. Teal, wood arches, the number holding the frame.',
      },
      {
        photoId: 'callejon-green',
        caption:
          'Passage. Lime and orange walls, then the ocean as a distant exit.',
      },
      {
        photoId: 'biskane-305',
        caption:
          'Close on failure — torn pink on yellow. The series lands on what time leaves.',
      },
    ],
  },
]

export function getSeries(slug: string): Series | undefined {
  return seriesList.find((series) => series.slug === slug)
}

export function resolveSeriesFrames(series: Series): SeriesResolvedFrame[] {
  return series.frames.flatMap((frame) => {
    const photo = photos.find((item) => item.id === frame.photoId)
    if (!photo) return []
    return [{ photo, caption: frame.caption }]
  })
}

/** Flat photo list in series order — for lightbox navigation */
export function photosForSeries(series: Series): Photo[] {
  return resolveSeriesFrames(series).map((frame) => frame.photo)
}

export function coverForSeries(series: Series): Photo | undefined {
  return (
    photos.find((photo) => photo.id === series.coverId) ??
    photosForSeries(series)[0]
  )
}

export function seriesIndex(slug: string): number {
  return seriesList.findIndex((series) => series.slug === slug)
}

export function adjacentSeries(slug: string): {
  prev?: Series
  next?: Series
} {
  const index = seriesIndex(slug)
  if (index < 0) return {}
  return {
    prev: index > 0 ? seriesList[index - 1] : undefined,
    next: index < seriesList.length - 1 ? seriesList[index + 1] : undefined,
  }
}

export function seriesByTitle(title: string): Series | undefined {
  return seriesList.find((series) => series.title === title)
}

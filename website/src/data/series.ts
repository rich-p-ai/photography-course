import { photos, type Photo } from './photos'

export type Series = {
  slug: string
  title: string
  description: string
  coverId: string
}

/** Curated series with dedicated pages */
export const seriesList: Series[] = [
  {
    slug: 'mirror-shore',
    title: 'Mirror Shore',
    description: 'Twilight shoreline and wet-sand reflections at Isle of Palms.',
    coverId: 'mirror-tide',
  },
  {
    slug: 'fireside',
    title: 'Fireside',
    description: 'Close studies of flame and ember light by the fire pit.',
    coverId: 'fireside-1',
  },
  {
    slug: 'colores-de-san-juan',
    title: 'Colores de San Juan',
    description: 'Saturated facades, doors, and street surfaces from Old San Juan.',
    coverId: '275-blue-wall',
  },
]

export function getSeries(slug: string): Series | undefined {
  return seriesList.find((series) => series.slug === slug)
}

export function photosForSeries(series: Series): Photo[] {
  return photos.filter((photo) => photo.set === series.title)
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

export type CourseDay = {
  day: number
  slug: string
  title: string
  genre: string
  time: string
  locationSuggestions: string
  studyMaterial: string[]
  shootingBrief: string[]
  uploadNotes: string[]
  specialNotes: string[]
}

export const courseStartDate = '2026-07-23'
export const githubRepoUrl = 'https://github.com/rich-p-ai/photography-course'

export function dayFolderName(day: number): string {
  return `Day-${String(day).padStart(2, '0')}`
}

export function dayGithubUrl(day: number): string {
  return `${githubRepoUrl}/tree/main/${dayFolderName(day)}`
}

export const courseDays: CourseDay[] = [
  {
    day: 1,
    slug: 'day-01',
    title: 'Rule of Thirds + Leading Lines',
    genre: 'Street',
    time: 'Morning blue hour',
    locationSuggestions:
      'Charleston historic streets (King St, Rainbow Row area), or IOP boardwalk / pier',
    studyMaterial: [
      'Place key subjects on the intersections of the rule-of-thirds grid.',
      'Use roads, railings, shadows, or architectural lines to lead the eye into the frame.',
      'With the 24-50mm: shoot at 24-35mm for more environmental context.',
    ],
    shootingBrief: [
      'Set camera to Aperture Priority, f/5.6–8, ISO auto (cap 1600), RAW.',
      'Enable grid overlay.',
      'Walk and find at least 8 compositions that use both rule of thirds AND a leading line.',
      'Shoot both vertical and horizontal.',
    ],
    uploadNotes: [
      'Put your best 3–5 edited JPEGs in the Day folder.',
      'Create reflection.md with the prompts below.',
      'Paste the Day folder link in chat for AI review.',
    ],
    specialNotes: [],
  },
  {
    day: 2,
    slug: 'day-02',
    title: 'Framing & Layers',
    genre: 'Street / Architecture',
    time: 'Morning blue hour',
    locationSuggestions:
      'Doorways, windows, palm trees, arches in Charleston; beach fencing or dunes at IOP.',
    studyMaterial: [
      'Use natural frames (windows, arches, trees) to isolate the subject.',
      'Create depth with foreground / midground / background layers.',
    ],
    shootingBrief: [
      'Find frames that contain a clear subject.',
      'Include at least one layered shot with three distinct planes.',
      'Keep the 24-50mm; try both ends of the zoom.',
    ],
    uploadNotes: ['Best 3–5 images + reflection.md (same prompts as Day 01).'],
    specialNotes: [],
  },
  {
    day: 3,
    slug: 'day-03',
    title: 'Perspective & Angles',
    genre: 'Street / Landscape',
    time: 'Morning blue hour',
    locationSuggestions: 'Any Charleston street or IOP beach access.',
    studyMaterial: [
      'Change your height: shoot from ground level, chest level, overhead.',
      'Get closer than you think, then step back.',
    ],
    shootingBrief: [
      'Same scene, three different heights.',
      'Extreme close + wide context of the same subject.',
      'Look for vanishing points.',
    ],
    uploadNotes: ['Best 3–5 + reflection.md'],
    specialNotes: [],
  },
  {
    day: 4,
    slug: 'day-04',
    title: 'Blue Hour Color & Exposure',
    genre: 'Landscape',
    time: 'True blue hour (start 30–45 min before sunrise)',
    locationSuggestions: 'IOP beach looking east, or Charleston waterfront.',
    studyMaterial: [
      'Blue hour is soft, cool light. Expose for the sky or the mid-tones.',
      'Use slower shutter if needed (tripod or steady surface).',
    ],
    shootingBrief: [
      'Arrive early.',
      'Bracket exposures if the dynamic range is high.',
      'Capture the color shift from deep blue to first light.',
    ],
    uploadNotes: ['Best 3–5 + reflection.md'],
    specialNotes: [],
  },
  {
    day: 5,
    slug: 'day-05',
    title: 'Silhouettes & Contrast',
    genre: 'Landscape / Street',
    time: 'Blue hour into early sunrise',
    locationSuggestions:
      'IOP pier, Charleston Battery, or any strong shape against the sky.',
    studyMaterial: [
      'Meter for the bright sky so the subject goes black.',
      'Clean, recognizable shapes work best.',
    ],
    shootingBrief: [
      'Find strong silhouettes (people, trees, architecture, pier).',
      'Keep the horizon clean.',
      'Experiment with partial silhouettes.',
    ],
    uploadNotes: ['Best 3–5 + reflection.md'],
    specialNotes: [],
  },
  {
    day: 6,
    slug: 'day-06',
    title: 'Reflections & Water',
    genre: 'Landscape',
    time: 'Blue hour',
    locationSuggestions:
      'IOP beach, tidal pools, Charleston harbor, puddles after rain.',
    studyMaterial: [
      'Look for mirror-like surfaces.',
      'Include both the subject and its reflection, or abstract the reflection alone.',
    ],
    shootingBrief: [
      'Low angle for maximum reflection.',
      'Polarizer if you have one (optional).',
      'Capture both still and slightly moving water.',
    ],
    uploadNotes: ['Best 3–5 + reflection.md'],
    specialNotes: [],
  },
  {
    day: 7,
    slug: 'day-07',
    title: 'Environmental Portraits (Self / Family)',
    genre: 'Portrait',
    time: 'Blue hour or soft morning light',
    locationSuggestions:
      'Home, yard, quiet Charleston street, or IOP dune path.',
    studyMaterial: [
      'Place the person in a meaningful environment.',
      'Use f/2.8–4 for subject separation if desired.',
      'Eye AF + continuous.',
    ],
    shootingBrief: [
      'Self-portraits or family/friends.',
      'Show the environment – do not crop too tight.',
      'Direct soft light onto the face if possible.',
    ],
    uploadNotes: ['Best 3–5 + reflection.md'],
    specialNotes: ['Mid-course style note: What feels most like “you” so far?'],
  },
  {
    day: 8,
    slug: 'day-08',
    title: 'Candid Street Portraits',
    genre: 'Street Portrait',
    time: 'Blue hour / early morning when streets are quieter',
    locationSuggestions: 'Charleston downtown (be respectful and quick).',
    studyMaterial: [
      'Ask permission when possible, or shoot from a distance and move on.',
      'Capture gesture and expression more than perfect posing.',
    ],
    shootingBrief: [
      '35-50mm range.',
      'Stay light and unobtrusive.',
      'Focus on interaction with the environment.',
    ],
    uploadNotes: ['Best 3–5 + reflection.md'],
    specialNotes: [],
  },
  {
    day: 9,
    slug: 'day-09',
    title: 'Kids & Connection',
    genre: 'Portrait',
    time: 'Flexible (blue hour preferred if kids cooperate)',
    locationSuggestions: 'Park, beach, backyard.',
    studyMaterial: [
      'Get down to their eye level.',
      'Capture genuine interaction rather than forced smiles.',
    ],
    shootingBrief: [
      'Continuous AF, higher shutter if they move.',
      'Shoot moments between the “poses”.',
      'Include context when it adds to the story.',
    ],
    uploadNotes: ['Best 3–5 + reflection.md'],
    specialNotes: [],
  },
  {
    day: 10,
    slug: 'day-10',
    title: 'Mixed Genre: Portrait in Landscape',
    genre: 'Integration',
    time: 'Blue hour',
    locationSuggestions: 'IOP beach or Charleston waterfront with a person.',
    studyMaterial: [
      'Combine the composition skills from Days 1–3 with portrait technique.',
      'Subject should feel part of the place, not just placed in front of it.',
    ],
    shootingBrief: [
      'One person + strong landscape elements.',
      'Use leading lines or frames to connect them.',
      'Balance exposure between person and background.',
    ],
    uploadNotes: ['Best 3–5 + reflection.md'],
    specialNotes: [],
  },
  {
    day: 11,
    slug: 'day-11',
    title: 'Advanced Light & Composition',
    genre: 'Free choice (apply everything)',
    time: 'Blue hour',
    locationSuggestions: 'Your favorite from previous days or a new spot.',
    studyMaterial: [
      'Revisit any weak area identified in previous reviews.',
      'Push one technical or compositional risk.',
    ],
    shootingBrief: [
      'Choose one skill that still feels difficult and focus on it.',
      'Deliver 5 strong images that demonstrate progress.',
    ],
    uploadNotes: ['Best 3–5 + reflection.md'],
    specialNotes: [],
  },
  {
    day: 12,
    slug: 'day-12',
    title: 'Personal Style Exploration',
    genre: 'Whatever feels most like you',
    time: 'Blue hour',
    locationSuggestions: 'Anywhere you feel drawn to.',
    studyMaterial: [
      'Ignore the “rules” for a moment. Shoot what you are drawn to.',
      'Notice color palette, subject matter, distance, mood.',
    ],
    shootingBrief: [
      'No assignment constraints beyond time and gear.',
      'Shoot purely for yourself.',
      'Note what keeps appearing in your frames.',
    ],
    uploadNotes: ['Best 3–5 + reflection.md (extra attention to style notes)'],
    specialNotes: [],
  },
  {
    day: 13,
    slug: 'day-13',
    title: 'Curate Your Best',
    genre: 'Curation',
    time: 'Desk day',
    locationSuggestions: 'Review all previous days — no required shoot location.',
    studyMaterial: ['Review all previous days.'],
    shootingBrief: [
      'Select your top 10–14 images from the whole course so far.',
      'Create a new folder or note the filenames in reflection.md.',
      'Write a short paragraph: what themes or strengths are emerging?',
    ],
    uploadNotes: ['List of selected files + short curation notes.'],
    specialNotes: ['Curation day — focus on selection over new shooting.'],
  },
  {
    day: 14,
    slug: 'day-14',
    title: 'Style Statement + Portfolio',
    genre: 'Final',
    time: 'Blue hour + desk',
    locationSuggestions: 'One intentional final location of your choosing.',
    studyMaterial: [],
    shootingBrief: [
      'Write a 3–5 sentence style statement based on the last two weeks.',
      'Finalize the best-of selection.',
      'Shoot one last intentional image that represents where you are now.',
    ],
    uploadNotes: [
      'Final best image',
      'Style statement',
      'Any remaining reflections',
    ],
    specialNotes: [
      'Final day.',
      'After this we build the public gallery page and plan the next course.',
    ],
  },
]

export function getCourseDay(slug: string): CourseDay | undefined {
  return courseDays.find((d) => d.slug === slug)
}

export function courseDayDate(day: number): Date {
  const start = new Date(`${courseStartDate}T12:00:00`)
  start.setDate(start.getDate() + (day - 1))
  return start
}

export function formatCourseDate(day: number): string {
  return courseDayDate(day).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

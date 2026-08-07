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
  goal: string
  shootingBrief: string[]
  technicalFocus: string[]
  reflectionPrompts: string[]
  closingNote?: string
}

export const streetRepoUrl =
  'https://github.com/rich-p-ai/street-photography-exercises'

export const streetAttribution =
  'David Gibson, The Street Photographer\'s Manual (Thames & Hudson)'

export const streetCategoryOrder: StreetCategory[] = [
  'Busy',
  'Quiet',
  'Abstract',
  'Still',
  'Subjects',
]

export const streetCoreRules = [
  'One primary constraint per day. Do not mix exercises.',
  'Volume target: 40–80 frames. Quality of intention > quantity.',
  'Reflection is mandatory. The point is learning, not just images.',
  'No street photography is worth making someone uncomfortable. Day 20 formalizes this.',
]

export function streetDayFolderName(day: number): string {
  return `Day-${String(day).padStart(2, '0')}`
}

export function streetGithubUrl(day: number): string {
  return `${streetRepoUrl}/tree/main/${streetDayFolderName(day)}`
}

export const streetDays: StreetDay[] = [
  {
    day: 1,
    slug: 'day-01',
    title: 'Order',
    category: 'Busy',
    coreIdea:
      'Find and photograph order in chaos — patterns, repetition, alignment, and structure that appear in busy public spaces.',
    goal:
      'Train your eye to notice underlying order. The street is rarely random; patterns are everywhere if you look for them.',
    shootingBrief: [
      'Walk a busy area (street, market, transit hub).',
      'Hunt for visual order: repeated shapes, aligned people, geometric patterns, rhythmic lines, or sudden stillness inside motion.',
      'Make at least 8 frames where order is the clear subject.',
      'Volume: 40+ frames. Note actual count in reflection.md.',
    ],
    technicalFocus: [
      'Aperture Priority, f/5.6–8 for depth.',
      'Use the grid. Align verticals and horizontals deliberately.',
      'Prefer 35–50mm for compression of patterns.',
    ],
    reflectionPrompts: [
      'What kinds of order appeared most easily?',
      'Did you force patterns or discover them?',
      'Keeper rate and strongest single frame reason.',
    ],
  },
  {
    day: 2,
    slug: 'day-02',
    title: 'Events',
    category: 'Busy',
    coreIdea:
      'Photograph small public events or moments of collective attention — anything that briefly organizes a crowd.',
    goal:
      'Learn to anticipate and respond to moments when people gather around a shared focus (street performer, accident, protest, queue, celebration).',
    shootingBrief: [
      'Find or wait for a small public event or moment of shared attention.',
      'Photograph the event itself and the people reacting to it.',
      'Capture both the center of attention and the edges of the crowd.',
      'At least 6 frames that clearly show an “event” dynamic.',
    ],
    technicalFocus: [
      'Be ready: AF-C, continuous drive if useful.',
      'Wider focal lengths (24–35mm) help include context.',
      'Watch backgrounds — they should support, not compete.',
    ],
    reflectionPrompts: [
      'How long did you wait vs how long you shot?',
      'Did the event create better pictures than ordinary street?',
      'What did you learn about timing?',
    ],
  },
  {
    day: 3,
    slug: 'day-03',
    title: 'Sequences',
    category: 'Busy',
    coreIdea:
      'Shoot short sequences of the same scene or subject as it evolves. Think in series, not single frames.',
    goal:
      'Break the single-shot mindset. Learn to work a moment across multiple frames so the best one emerges from the set.',
    shootingBrief: [
      'Choose 3–4 situations.',
      'For each, shoot a deliberate sequence of 5–12 frames as the scene changes (people move, light shifts, gestures unfold).',
      'Do not “spray and pray” — each frame should be intentional.',
      'Later, select the strongest single frame from each sequence and note why the others failed.',
    ],
    technicalFocus: [
      'Continuous shooting sparingly. Prefer deliberate single frames within the sequence.',
      'Keep the same framing or make controlled adjustments only.',
    ],
    reflectionPrompts: [
      'Which sequence produced the strongest single image?',
      'What changed between the first and last frame of your best sequence?',
      'Did working in sequences change how you see timing?',
    ],
  },
  {
    day: 4,
    slug: 'day-04',
    title: 'Lining Up',
    category: 'Busy',
    coreIdea:
      'Align elements in the frame so that separate subjects or shapes form a single graphic relationship.',
    goal:
      'Practice precise composition: people lining up with architecture, signs, shadows, or each other to create visual tension or harmony.',
    shootingBrief: [
      'Look for opportunities where a person, object, or shape can be perfectly aligned with something else in the frame.',
      'Wait for the alignment if necessary. Do not settle for near-misses.',
      'Make at least 6 frames where the “lining up” is obvious and intentional.',
      'Try both vertical and horizontal orientations.',
    ],
    technicalFocus: [
      'Use the grid overlay aggressively.',
      'Small shifts of your position matter more than zooming.',
      '35–50mm often helps with precise relationships.',
    ],
    reflectionPrompts: [
      'How patient were you willing to be for a clean alignment?',
      'Did forced alignments look better or worse than discovered ones?',
      'Strongest example and why it works.',
    ],
  },
  {
    day: 5,
    slug: 'day-05',
    title: 'Waiting',
    category: 'Quiet',
    coreIdea:
      'Choose a strong background or stage and wait for the right person or moment to enter it.',
    goal:
      'Shift from hunting to fishing. Develop the discipline of selecting a location and letting the photograph come to you.',
    shootingBrief: [
      'Find 2–3 strong backgrounds (interesting wall, doorway, light, geometry).',
      'Commit to each for at least 8–10 minutes. Do not leave early.',
      'Photograph only when something interesting enters the frame.',
      'Aim for 5+ frames that justify the wait.',
    ],
    technicalFocus: [
      'Pre-focus or use zone focus if possible.',
      'Keep the camera ready at eye level.',
      'Exposure locked for the background so subjects are correctly rendered when they appear.',
    ],
    reflectionPrompts: [
      'How hard was it to stay in one place?',
      'Did the best frame arrive early or late in the wait?',
      'Would you use this approach more often?',
    ],
  },
  {
    day: 6,
    slug: 'day-06',
    title: 'Following',
    category: 'Quiet',
    coreIdea:
      'Follow a subject (discreetly and ethically) for a short period and photograph the evolving relationship between them and their environment.',
    goal:
      'Practice sustained observation of one person or small group without becoming intrusive.',
    shootingBrief: [
      'Choose a subject who is moving through public space.',
      'Follow at a respectful distance for 5–15 minutes.',
      'Make a series of frames showing different interactions with the surroundings.',
      'Stop immediately if the person notices and appears uncomfortable.',
    ],
    technicalFocus: [
      'Longer focal length end of the zoom helps maintain distance.',
      'Be ready to change position quickly.',
      'Prioritize natural light and available framing.',
    ],
    reflectionPrompts: [
      'How did it feel to follow someone?',
      'Did the series tell a clearer story than a single frame?',
      'Ethical boundary check: would you be comfortable being the subject?',
    ],
  },
  {
    day: 7,
    slug: 'day-07',
    title: 'Behind',
    category: 'Quiet',
    coreIdea:
      'Photograph people from behind. Remove facial expression and force the image to work through posture, clothing, gesture, and context.',
    goal:
      'Learn to make strong pictures without relying on faces. Posture and environment become the subject.',
    shootingBrief: [
      'Shoot only from behind or three-quarter rear angles.',
      'Look for interesting posture, silhouette, clothing detail, or relationship to architecture.',
      'At least 8 frames where the absence of a face is a strength, not a weakness.',
      'Avoid making the person look vulnerable or mocked.',
    ],
    technicalFocus: [
      'Strong backlight or side light often helps.',
      'Clean backgrounds matter more when faces are absent.',
      'Use leading lines or frames to guide the eye.',
    ],
    reflectionPrompts: [
      'Which images still felt complete without a face?',
      'Did this constraint make you more attentive to body language?',
      'Any frames that felt exploitative? Why?',
    ],
  },
  {
    day: 8,
    slug: 'day-08',
    title: 'Looking Down',
    category: 'Quiet',
    coreIdea:
      'Change your viewpoint. Photograph looking down at the street, feet, shadows, discarded objects, or patterns on the ground.',
    goal:
      'Break the eye-level habit. Discover subjects that only exist when you look down.',
    shootingBrief: [
      'Spend the entire session looking downward.',
      'Subjects: feet and shoes, shadows, sidewalk textures, litter that forms accidental compositions, reflections in puddles, etc.',
      'At least 8 intentional frames.',
      'Try both tight details and wider overhead views if possible (stairs, bridges, upper windows).',
    ],
    technicalFocus: [
      'Watch your own shadow — keep it out of the frame.',
      'Higher shutter speeds if handheld and looking down.',
      'Consider vertical orientation more often.',
    ],
    reflectionPrompts: [
      'What subjects appeared that you normally ignore?',
      'Did looking down feel restrictive or liberating?',
      'Strongest discovery of the day.',
    ],
  },
  {
    day: 9,
    slug: 'day-09',
    title: 'Blurred',
    category: 'Abstract',
    coreIdea:
      'Use motion blur intentionally — either of the subject or of the camera — to create atmosphere and energy.',
    goal:
      'Move beyond sharp-is-best. Learn when blur strengthens an image.',
    shootingBrief: [
      'Experiment with slow shutter speeds (1/15s to 1/4s or slower).',
      'Two approaches: (a) panning with a moving subject, (b) static camera with moving people/traffic creating streaks.',
      'At least 6 frames where blur is the intentional primary quality.',
      'Review on the camera — delete pure failures quickly.',
    ],
    technicalFocus: [
      'Manual or Shutter Priority. Start around 1/15s and adjust.',
      'Stabilize yourself or use a railing/post when possible.',
      'Higher ISO may be needed in lower light to keep apertures reasonable.',
    ],
    reflectionPrompts: [
      'Which type of blur (panning vs static) worked better for you?',
      'Did any blurred frames feel more alive than sharp ones?',
      'Technical settings that produced the best results.',
    ],
  },
  {
    day: 10,
    slug: 'day-10',
    title: 'Layers',
    category: 'Abstract',
    coreIdea:
      'Build depth by stacking foreground, midground, and background elements that interact.',
    goal:
      'Create complex frames with multiple planes of information that still read clearly.',
    shootingBrief: [
      'Actively seek three-plane compositions.',
      'Look for overlapping people, architecture, reflections, or foliage that create depth.',
      'At least 6 frames with clear, readable layers.',
      'Try both wide (24mm) to exaggerate depth and longer (50mm) to compress layers.',
    ],
    technicalFocus: [
      'Smaller apertures (f/8–11) help keep multiple planes sharp.',
      'Watch for merges — elements that unintentionally touch and flatten the image.',
      'Move your feet more than the zoom.',
    ],
    reflectionPrompts: [
      'Which plane was hardest to control?',
      'Did more layers always make a better picture?',
      'Best example and why the layers succeed.',
    ],
  },
  {
    day: 11,
    slug: 'day-11',
    title: 'Shadows',
    category: 'Abstract',
    coreIdea:
      'Make shadows the primary subject or a powerful compositional element.',
    goal:
      'Train yourself to see light and shadow as graphic shapes rather than just illumination.',
    shootingBrief: [
      'Work when the sun is high or low enough to cast strong, defined shadows.',
      'Look for: human shadows on walls/pavement, architectural shadow patterns, shadows that create secondary figures or abstract forms.',
      'At least 8 frames where the shadow is essential to the picture.',
      'Experiment with both including the object that casts the shadow and excluding it.',
    ],
    technicalFocus: [
      'Hard light is your friend today.',
      'Expose for the highlights if you want deep, graphic shadows.',
      'High contrast scenes benefit from careful histogram checking.',
    ],
    reflectionPrompts: [
      'Did shadows feel more interesting than the objects casting them?',
      'Best shadow-only or shadow-dominant frame?',
      'Time of day that worked best.',
    ],
  },
  {
    day: 12,
    slug: 'day-12',
    title: 'Reflections',
    category: 'Abstract',
    coreIdea:
      'Use reflective surfaces (windows, puddles, mirrors, polished metal) to create layered or distorted realities.',
    goal:
      'Discover secondary worlds inside reflections and learn to control the mix of reflection and reality.',
    shootingBrief: [
      'Hunt for usable reflective surfaces.',
      'Decide whether the reflection or the reflected subject is primary — or whether the interaction between both is the point.',
      'At least 6 frames that use reflection intentionally and clearly.',
      'Try both clean, sharp reflections and more abstract, broken ones.',
    ],
    technicalFocus: [
      'Polarizing filter can help control reflections if you have one; otherwise work with the angle.',
      'Watch for your own reflection — eliminate or use it deliberately.',
      'Small changes in position dramatically change what is reflected.',
    ],
    reflectionPrompts: [
      'Clean reflection vs fragmented reflection — which produced stronger results?',
      'Did any frame create genuine visual ambiguity?',
      'Technical difficulty level today.',
    ],
  },
  {
    day: 13,
    slug: 'day-13',
    title: 'Doubles',
    category: 'Abstract',
    coreIdea:
      'Create visual doubles — pairs of similar shapes, people, gestures, or forms that echo each other in the frame.',
    goal:
      'Develop an eye for coincidence and visual rhyme. Two similar elements create tension or harmony.',
    shootingBrief: [
      'Look for pairs: two people with similar posture, matching shapes in architecture and human form, repeated gestures, twin objects.',
      'The double should feel intentional, not accidental clutter.',
      'At least 6 clear double/pair compositions.',
      'Both near and far doubles are valid.',
    ],
    technicalFocus: [
      'Precise timing is often required when people are involved.',
      'Use the longer end of the zoom to compress and emphasize relationships.',
      'Clean framing helps the double read immediately.',
    ],
    reflectionPrompts: [
      'How many near-misses vs successful doubles?',
      'Did waiting for the second element pay off?',
      'Strongest visual rhyme of the day.',
    ],
  },
  {
    day: 14,
    slug: 'day-14',
    title: 'Empty',
    category: 'Still',
    coreIdea:
      'Photograph emptiness and quiet spaces in the urban environment. Absence as subject.',
    goal:
      'Learn to see and value negative space, quiet corners, and the feeling of a place without people.',
    shootingBrief: [
      'Seek out empty or nearly empty scenes: early morning streets, closed shops, vacant lots, quiet alleys, deserted platforms.',
      'Make the emptiness feel intentional and atmospheric rather than simply “nothing happening.”',
      'At least 6 frames that successfully convey emptiness or solitude.',
      'Light and geometry become critical when people are absent.',
    ],
    technicalFocus: [
      'Strong composition and light are non-negotiable today.',
      'Consider longer exposures if light is low and the scene is static.',
      'Minimalism in framing.',
    ],
    reflectionPrompts: [
      'Did empty scenes feel more or less difficult than busy ones?',
      'What made an empty frame successful vs boring?',
      'Mood that dominated your keepers.',
    ],
  },
  {
    day: 15,
    slug: 'day-15',
    title: 'Objects',
    category: 'Still',
    coreIdea:
      'Treat ordinary urban objects as the main subject — chairs, signs, barriers, discarded items, street furniture.',
    goal:
      'Practice finding photographic interest in things rather than people. Objects carry atmosphere and social information.',
    shootingBrief: [
      'Photograph objects that feel charged, humorous, lonely, or graphic.',
      'Avoid pure product-style shots. Context and light matter.',
      'At least 8 frames where an object (or small group of objects) is clearly the subject.',
      'Include some human presence only if it serves the object story.',
    ],
    technicalFocus: [
      'Get close when it strengthens the image.',
      'Watch edges and backgrounds carefully.',
      'Side light or hard light often reveals texture and form.',
    ],
    reflectionPrompts: [
      'Which objects felt most photogenic and why?',
      'Did focusing on objects change how you move through the street?',
      'Strongest object portrait of the day.',
    ],
  },
  {
    day: 16,
    slug: 'day-16',
    title: 'Graphic',
    category: 'Still',
    coreIdea:
      'Reduce the street to pure graphic elements — shape, line, contrast, color blocks, geometry.',
    goal:
      'Strip away narrative and focus purely on formal visual strength.',
    shootingBrief: [
      'Hunt for bold graphic opportunities: high-contrast shapes, strong diagonals, color fields, repeating geometry, silhouettes against plain backgrounds.',
      'The picture should work even if the content is unrecognizable.',
      'At least 8 frames that succeed primarily on formal/graphic terms.',
      'Black-and-white thinking can help even if you shoot color.',
    ],
    technicalFocus: [
      'High contrast scenes benefit from careful exposure.',
      'Precise framing and edge control are essential.',
      'Consider converting strong candidates to B&W in post to test graphic power.',
    ],
    reflectionPrompts: [
      'Did graphic strength ever conflict with content interest?',
      'Which formal elements (line, shape, contrast, color) dominated your keepers?',
      'Best pure graphic frame.',
    ],
  },
  {
    day: 17,
    slug: 'day-17',
    title: 'Children',
    category: 'Subjects',
    coreIdea:
      'Photograph children in public space with care, respect, and genuine interest in their world.',
    goal:
      'Practice photographing a sensitive subject group ethically and with emotional intelligence.',
    shootingBrief: [
      'Look for children playing, walking with adults, or occupying public space in interesting ways.',
      'Prioritize dignity and natural behavior. Avoid anything that could be read as exploitative.',
      'Prefer wider context or interactions over tight facial close-ups of strangers’ children.',
      'If a parent notices and looks uncomfortable, move on immediately.',
    ],
    technicalFocus: [
      'Faster shutter speeds for movement.',
      'Be ready for unpredictable motion.',
      'Lower angles often work better with children.',
    ],
    reflectionPrompts: [
      'How did ethical awareness affect your shooting?',
      'Did any frames feel worth the potential discomfort?',
      'What did you learn about photographing vulnerable subjects?',
    ],
  },
  {
    day: 18,
    slug: 'day-18',
    title: 'Projects',
    category: 'Subjects',
    coreIdea:
      'Begin (or continue) a small personal project. Work with a single idea, place, or theme for the entire session.',
    goal:
      'Move from isolated exercises to sustained, self-directed work. Projects create coherence and deeper seeing.',
    shootingBrief: [
      'Choose one narrow project idea for today (examples: a single block, a type of storefront, people carrying things, a particular light condition, a recurring gesture).',
      'Shoot only within that constraint.',
      'Aim for a coherent set of 8–12 frames that could form the start of a longer body of work.',
      'Write a one-sentence project statement in your reflection.',
    ],
    technicalFocus: [
      'Consistency of approach and look matters more than variety today.',
      'Consider how the images will sit together as a group.',
    ],
    reflectionPrompts: [
      'What project did you choose and why?',
      'Did the constraint free you or frustrate you?',
      'Is this something you want to continue beyond today?',
    ],
  },
  {
    day: 19,
    slug: 'day-19',
    title: 'Vertical / Horizontal',
    category: 'Subjects',
    coreIdea:
      'Consciously choose and commit to orientation. Explore how vertical vs horizontal framing changes meaning and strength.',
    goal:
      'Break the default horizontal habit. Make orientation an active decision rather than a camera default.',
    shootingBrief: [
      'For the first half of the session, shoot only vertical (portrait orientation).',
      'For the second half, shoot only horizontal (landscape orientation).',
      'Revisit the same scenes in both orientations when possible and compare.',
      'At least 6 strong frames in each orientation.',
    ],
    technicalFocus: [
      'Vertical often emphasizes height, isolation, and stacked elements.',
      'Horizontal emphasizes breadth, relationships, and environmental context.',
      'Crop carefully in post only if the original orientation decision was wrong.',
    ],
    reflectionPrompts: [
      'Which orientation felt more natural?',
      'Did any scene only work in one orientation?',
      'How will this change your default shooting habits?',
    ],
  },
  {
    day: 20,
    slug: 'day-20',
    title: 'Ethics',
    category: 'Subjects',
    coreIdea:
      'Reflect on and practice the ethical dimensions of street photography.',
    goal:
      'End the 20 days with a clear personal code. Technical skill without ethical awareness is incomplete.',
    shootingBrief: [
      'Shoot normally, but with heightened awareness of consent, dignity, power dynamics, and potential harm.',
      'Actively avoid situations that feel extractive or voyeuristic.',
      'If you photograph someone who notices and seems uncomfortable, delete the frame or engage respectfully.',
      'Make at least 6 frames you would be proud to show the subjects themselves.',
    ],
    technicalFocus: [
      'None specific. The constraint is behavioral and ethical.',
    ],
    reflectionPrompts: [
      'What is your personal rule for photographing strangers?',
      'Have any previous days’ images crossed a line in retrospect?',
      'How will you handle confrontation or requests to delete?',
      'What kind of street photographer do you want to be?',
    ],
    closingNote:
      'This exercise is not about perfection. It is about building the habit of asking the right questions every time you raise the camera.',
  },
]

export function getStreetDay(slug: string): StreetDay | undefined {
  return streetDays.find((d) => d.slug === slug)
}

export function streetDaysByCategory(): Map<StreetCategory, StreetDay[]> {
  const map = new Map<StreetCategory, StreetDay[]>()
  for (const category of streetCategoryOrder) {
    map.set(
      category,
      streetDays.filter((d) => d.category === category),
    )
  }
  return map
}

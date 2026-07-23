export type CourseDay = {
  day: number
  slug: string
  title: string
  genre: string
  time: string
  locationSuggestions: string
  goal: string
  studyMaterial: string[]
  fieldChecklist: string[]
  shootingBrief: string[]
  editingWorkflow: string[]
  presetLab: string[]
  uploadChecklist: string[]
  reflectionPrompts: string[]
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

const STANDARD_REFLECTION = [
  'What felt natural today? What felt forced?',
  'Preferred color / mood / subject today?',
  'Frame count for the session (and rough keeper rate).',
  'One technical note from Lightroom.',
]

export const courseDays: CourseDay[] = [
  {
    day: 1,
    slug: 'day-01',
    title: 'Rule of Thirds + Leading Lines',
    genre: 'Street',
    time: 'Morning blue hour',
    locationSuggestions:
      'Charleston historic streets (King St, Rainbow Row area), or IOP boardwalk / pier',
    goal:
      'Walk away with 8+ deliberate compositions and a working Lightroom import → cull → crop routine you will reuse every day of this course.',
    studyMaterial: [
      'Rule of thirds: place key subjects on the grid intersections, not just "off center". The intersections are where the eye lands first.',
      'A leading line only works if it leads TO something. Roads, railings, shadow edges, curbs, and rooflines are all lines — pick ones that end at your subject.',
      'With the 24-50mm: shoot at 24–35mm for environmental context; wider focal lengths exaggerate lines that start near your feet.',
      'Break the rule once on purpose: one dead-center composition today, so you can compare why thirds usually wins (and when it does not).',
      'Master study: pick one reference image from @jamespopsys or @that.icelandic.guy and deconstruct its exposure, composition, and color choices before shooting today.',
      'Read: Digital Photography School — Rule of Thirds guide — https://digital-photography-school.com/rule-of-thirds/',
      'Read: Wikipedia — Rule of Thirds theory — https://en.wikipedia.org/wiki/Rule_of_thirds',
    ],
    fieldChecklist: [
      'Battery charged (+ spare), card formatted, lens front element clean.',
      'RAW capture on (not JPEG), Aperture Priority, f/5.6–8, Auto ISO capped at 1600.',
      'Grid overlay ON, level indicator ON.',
      'AF-C with zone area; check sunrise time and be on location 30 min before.',
      'Phone: sunrise timer + this checklist open.',
    ],
    shootingBrief: [
      'Walk and find at least 8 compositions that use both rule of thirds AND a leading line.',
      'Shoot both vertical and horizontal versions of every strong scene.',
      'One deliberate rule-break: put the subject dead center and see if it holds.',
      'Volume: at least 60 frames or 30 minutes of active shooting — no lingering on one composition. Note your actual frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Import everything into a dated folder / "Day 01" collection.',
      'Cull pass 1: flag Picks (P) and Rejects (X) — max 60 seconds per image, gut decisions only.',
      'Cull pass 2 on Picks only: rate 1–5 stars; keep 3–5 images at 3+ stars.',
      'Crop tool: straighten the horizon and verticals first (try Auto in the Geometry panel).',
      'Crop to strengthen the thirds placement — press O to cycle crop overlays and check your subject sits on an intersection.',
      'Export: JPEG, sRGB, 2048px long edge, quality 85. This is your export standard for the whole course.',
    ],
    presetLab: [
      'Lesson 1 — what a preset is: a saved set of slider positions applied as a STARTING POINT, nothing more. It cannot see your image.',
      'Open the Presets panel and hover the Adobe built-ins over one photo to preview them. Do not apply any yet — this week you learn the sliders presets move; from Day 7 you build your own.',
    ],
    uploadChecklist: [
      'Best 3–5 edited JPEGs in the Day-01 folder.',
      'reflection.md answering the prompts below.',
      'Commit, push, and paste the Day folder link in chat for AI review.',
    ],
    reflectionPrompts: [
      ...STANDARD_REFLECTION,
      'Which line type showed up most in your frames (road, railing, shadow, architecture)?',
      'Did the deliberate centered shot work better or worse than the thirds version? Why?',
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
    goal:
      'Build depth with three-plane compositions, and master the Basic panel + histogram so exposure edits stop being guesswork.',
    studyMaterial: [
      'A natural frame (window, arch, tree canopy) only works when it contains a clear subject — a frame around nothing is just clutter.',
      'Depth comes from layers: a distinct foreground, midground, and background, ideally with overlap and scale cues between them.',
      'Frames do not need to be complete — a partial frame on two sides often feels less forced than a full ring.',
      'Read: Adobe — Foreground/Middleground/Background guide — https://www.adobe.com/creativecloud/photography/hub/guides/foreground-middleground-background.html',
      'Watch: Layering technique livestream clip — https://www.youtube.com/watch?v=JqPQPxCoFng',
    ],
    fieldChecklist: [
      'Battery + card check, RAW, Aperture Priority, f/5.6–8, Auto ISO cap 1600.',
      'Grid overlay ON.',
      'Before each frame: scan the background for merges and clutter, then shoot.',
      'Try both ends of the zoom — 24mm exaggerates the foreground layer, 50mm compresses layers together.',
    ],
    shootingBrief: [
      'Find frames that contain a clear subject.',
      'Include at least one layered shot with three distinct planes (foreground / midground / background).',
      'Shoot one scene twice: once at 24mm close to the foreground, once at 50mm stepped back. Compare how the layers change.',
      'Volume: at least 60 frames or 30 minutes of active shooting. Note your frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Import + two-pass cull (flags, then stars) exactly like Day 1 — this is now routine.',
      'Before touching any slider: read the histogram. Press J to show clipping warnings.',
      'Work the Basic panel in order: White Balance → Exposure → Highlights/Shadows → Whites/Blacks → Presence.',
      'Set Whites and Blacks precisely: hold Alt/Option while dragging until the first clipping pixels appear, then back off.',
      'For each keeper, push one slider to both extremes once to SEE what it does before setting it. This builds slider intuition fast.',
      'Toggle before/after (\\ key) on every image before export. Export at the Day 1 standard.',
    ],
    presetLab: [
      'Apply 3 different Adobe built-in presets to the same image. Watch which Basic panel sliders move for each.',
      'Note in reflection.md which look you preferred and — more important — which sliders created that look.',
    ],
    uploadChecklist: [
      'Best 3–5 images + reflection.md (same prompts as Day 01).',
      'Include the Basic panel settings of your favorite edit in reflection.md (rough numbers are fine).',
    ],
    reflectionPrompts: [
      ...STANDARD_REFLECTION,
      'Which plane (foreground / midground / background) was hardest to control?',
      'Did the histogram surprise you on any frame (clipped sky, blocked shadows)?',
    ],
    specialNotes: [],
  },
  {
    day: 3,
    slug: 'day-03',
    title: 'Perspective & Angles',
    genre: 'Street / Landscape',
    time: 'Morning blue hour',
    locationSuggestions: 'Any Charleston street or IOP beach access.',
    goal:
      'Render one subject three radically different ways, and learn what Texture, Clarity, and Dehaze actually do (and when they hurt).',
    studyMaterial: [
      'Change your height: ground level makes foregrounds monumental; chest level is neutral; overhead turns scenes graphic.',
      'Get closer than you think, then step back — most intermediate frames fail because the photographer stopped 3 meters too early.',
      'Vanishing points pull the eye hard; combine one with yesterday\u2019s layering for instant depth.',
      'Read: Digital Photography School — Camera Angles guide — https://digital-photography-school.com/make-photos-creative-using-camera-angles/',
      'Watch: Alan Schaller — Mastering Perspective — https://www.youtube.com/watch?v=jolwxZv4WxQ',
    ],
    fieldChecklist: [
      'Battery + card, RAW, Aperture Priority, f/5.6–8, Auto ISO cap 1600.',
      'Wear clothes you can kneel / lie down in — ground level means GROUND level.',
      'Flip screen out for low and high angles instead of guessing.',
    ],
    shootingBrief: [
      'Same scene, three different heights (ground, chest, high).',
      'Extreme close + wide context of the same subject.',
      'Find at least one vanishing point composition.',
      'Volume: at least 60 frames or 30 minutes of active shooting. Note your frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Import + two-pass cull, then Basic panel pass from Day 2.',
      'On one image, apply Texture +30, then reset; Clarity +30, then reset; Dehaze +30, then reset. Compare at 100%: Texture = fine detail, Clarity = midtone contrast, Dehaze = atmosphere/contrast + saturation shift.',
      'Now set all three deliberately on your keepers — most images want far less than +30.',
      'Add a subtle vignette (−10 to −20) to hold the eye inside the frame; check it is invisible as an effect.',
      'Choose your crop ratio deliberately per image: 3:2 vs 4:5 vs 1:1 — do not default.',
      'Export at the standard.',
    ],
    presetLab: [
      'Reverse-engineer one Adobe preset you liked on Day 2: write down every slider it moves, then recreate the look from scratch on a fresh image WITHOUT applying the preset.',
      'This is the core skill of preset-building: knowing which sliders make a look.',
    ],
    uploadChecklist: [
      'Best 3–5 + reflection.md.',
      'Comparison: in reflection.md, compare one of today\u2019s frames to a composition from @that.icelandic.guy — one similarity, one difference in framing or layering.',
    ],
    reflectionPrompts: [
      ...STANDARD_REFLECTION,
      'Which shooting height felt most like "you"?',
      'Texture vs Clarity vs Dehaze — which one will you actually use, and for what?',
    ],
    specialNotes: [],
  },
  {
    day: 4,
    slug: 'day-04',
    title: 'Blue Hour Color & Exposure',
    genre: 'Landscape',
    time: 'True blue hour (start 30–45 min before sunrise)',
    locationSuggestions: 'IOP beach looking east, or Charleston waterfront.',
    goal:
      'Own manual exposure in fast-changing light, edit blue hour color with intent, and save your first Lightroom preset.',
    studyMaterial: [
      'Blue hour light is soft and cool. Your white balance choice is creative, not corrective: cooler = mood and calm, warmer = nostalgia. Decide, don\u2019t default.',
      'Expose to protect the highlights (sky) — shadows on the ZV-E10 II lift cleanly in post, blown skies do not come back.',
      'Light changes fast: re-meter every few minutes. This is why today is full Manual — you need to feel the shift.',
      'Master study: pick one reference image from @jamespopsys or @that.icelandic.guy and deconstruct its exposure, composition, and color choices before shooting today.',
      'Watch: Blue Hour comprehensive guide (timing, settings, blending) — https://www.youtube.com/watch?v=jB2kgeUqAnw',
      'Read: Beginner\u2019s Guide to Blue Hour — https://www.garyholpin.co.uk/post/beginners-guide-to-blue-hour-photography',
      'Watch: Simon d\u2019Entremont — How to use metering the right way — https://www.youtube.com/watch?v=H1l7mV2y-zI',
      'Watch: James Popsys — full Lightroom edit walkthrough (luminance range, gradients, tone curve, color grading) — https://www.youtube.com/watch?v=F2cqnWFmMgQ',
    ],
    fieldChecklist: [
      'Arrive 45 min before sunrise — the best blue is early.',
      'Tripod or steady surface scouted (railing, wall, bench).',
      'Full Manual mode today: manual shutter, aperture, AND ISO. No Aperture Priority.',
      'RAW, grid on, 2-sec self-timer for slow shutter frames.',
      'Check the histogram after every scene or light change.',
    ],
    shootingBrief: [
      'Bracket exposures when dynamic range is high (sky vs land).',
      'Capture the color shift: shoot the same composition every ~5 minutes from deep blue to first light.',
      'Constraint: the entire session in full Manual exposure — no Aperture Priority today.',
      'Volume: at least 60 frames or 30 minutes of active shooting. Note your frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Import + cull as routine.',
      'White balance FIRST: on your hero image try three temps (cool ~4000K, as-shot, warm ~5500K) and pick an intent before touching anything else.',
      'HSL panel: shift the blues — hue slightly toward aqua or deeper navy, control blue saturation and luminance. Small moves.',
      'Add a Luminance Range mask on the sky; adjust its exposure and temperature separately from the land.',
      'One color grading move: cool shadows / warm highlights. Stop there.',
      'Export the 5-minute sequence frames side by side — watch how the same edit reads differently as the light changed.',
    ],
    presetLab: [
      'Save your first preset: "BlueHour-v1". In the save dialog include ONLY White Balance, HSL, and Color Grading — uncheck Exposure and everything local/masked.',
      'Apply BlueHour-v1 to two other frames from today. Note in reflection.md where it works and where it fails — that gap is the lesson.',
    ],
    uploadChecklist: [
      'Best 3–5 + reflection.md.',
      'Note the BlueHour-v1 settings (WB, key HSL moves, grading hues) in reflection.md.',
    ],
    reflectionPrompts: [
      ...STANDARD_REFLECTION,
      'Cool or warm white balance — which felt like your blue hour?',
      'Where did BlueHour-v1 fail when applied to other frames, and why?',
    ],
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
    goal:
      'Control exposure for pure shape, learn the Tone Curve, and save a second preset while mastering the save dialog itself.',
    studyMaterial: [
      'Meter for the bright sky so the subject goes black — spot metering on the sky, or exposure compensation −1 to −2 in your head.',
      'Clean, recognizable shapes only: a silhouette that needs explaining has failed. Watch for merges (limbs against body, poles behind heads).',
      'Partial silhouettes — a rim of detail left in the shadow side — often feel more alive than pure black.',
      'Read: Expert Guide to Silhouette Photography — https://amateurphotographer.com/technique/camera_skills/silhouette-photography-taking-shape/',
      'Read: Silhouette Photography: The Ultimate Guide — https://digital-photography-school.com/how-to-photograph-silhouettes/',
      'Watch: Split Toning tutorial (Lightroom Classic) — https://www.youtube.com/watch?v=9WYs_9xoX8E',
    ],
    fieldChecklist: [
      'RAW, Manual or Aperture Priority with exposure comp dialed down.',
      'Constraint today: MANUAL FOCUS only for the whole session — focus on the shape\u2019s edge, use peaking.',
      'Keep the horizon clean — walk until the shape separates from clutter.',
      'Spot metering mode ready (or know your EC dial without looking).',
    ],
    shootingBrief: [
      'Find strong silhouettes: people, trees, architecture, the pier.',
      'Keep the horizon clean and level.',
      'Shoot both pure and partial silhouettes of the same subject.',
      'Volume: at least 60 frames or 30 minutes of active shooting. Note your frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Import + cull as routine.',
      'Tone Curve intro: place an anchor at the midpoint, pull the black point down and the deep shadows lower, slight highlight lift. This IS the silhouette look.',
      'Increase contrast until the subject reads pure black — verify with the shadow clipping preview (J), clipping is intentional today.',
      'Split tone the sky only: Color Grading panel, highlights toward the sunrise hue.',
      'Zoom to 100% along the silhouette edges: check for halos and purple fringing (use Defringe if needed).',
      'Squint test: does the shape read instantly at thumbnail size? If not, reject it.',
    ],
    presetLab: [
      'Save "Silhouette-Punch" (Tone Curve + Color Grading only).',
      'In the save dialog, go checkbox by checkbox and understand every group you include or exclude. Knowing WHAT to leave out of a preset is the difference between a preset and a mess.',
    ],
    uploadChecklist: ['Best 3–5 + reflection.md.'],
    reflectionPrompts: [
      ...STANDARD_REFLECTION,
      'Which shapes read instantly at thumbnail size — and which needed explaining?',
      'Manual focus all session: what did it change about how you shot?',
    ],
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
    goal:
      'Go deep on masking — luminance ranges and gradients — and learn the boundary of what presets can and cannot store.',
    studyMaterial: [
      'Look for mirror-like surfaces: tidal pools and wet sand right after a wave retreats are better mirrors than the ocean itself.',
      'Two modes: subject + reflection as a symmetric pair, or the reflection ALONE as an abstract. Shoot both.',
      'Perfect symmetry is graphic; slightly broken symmetry (a ripple, a bird) is often more interesting. Decide which you\u2019re making.',
      'Read: How To Photograph Reflections In Water — https://digital-photography-school.com/how-to-photograph-reflections-in-water/',
      'Watch: Water Reflections Photography Tips — https://www.youtube.com/watch?v=i-RqkgwF2J0',
      'Read: Adobe — Create mask with Luminance Range — https://helpx.adobe.com/lightroom/web/edit-photos/apply-masks/create-mask-with-luminance-range.html',
    ],
    fieldChecklist: [
      'Check tide times before leaving — receding tide leaves the best wet-sand mirrors.',
      'Towel or knee pad — the best reflection angle is inches off the ground.',
      'Constraint: pick ONE focal length and ONE aperture at the start; locked for the session.',
      'Polarizer if you have one (rotate to TUNE the reflection, not kill it). Optional.',
    ],
    shootingBrief: [
      'Low angle for maximum reflection — get the camera near the water surface.',
      'Capture both still and slightly moving water versions of the same scene.',
      'Shoot at least one abstract: the reflection only, no "real" subject in frame.',
      'Volume: at least 60 frames or 30 minutes of active shooting. Note your frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Import + cull as routine. Start keepers from BlueHour-v1 where it fits.',
      'Luminance Range mask on the water region: boost Texture/Clarity inside the reflection only — reflections are naturally softer than the source.',
      'Linear Gradient to balance sky brightness against water brightness (water is always darker than the sky it reflects — usually ~1 stop).',
      'Export one image twice: masked version and unmasked version. Compare — this is your proof of what masking buys.',
      'Try flipping one abstract vertically. Does it get stronger?',
    ],
    presetLab: [
      'Key lesson: masks are image-specific, so they do NOT belong in ordinary presets.',
      'Split your edit mentally into "global recipe" (WB, curve, grading — preset material) vs "local fixes" (masks — your per-image skill). Write one example of each from today in reflection.md.',
      '(Adaptive AI-mask presets are the exception — preview coming on Day 10.)',
    ],
    uploadChecklist: [
      'Best 3–5 + reflection.md.',
      'Include the masked vs unmasked export pair.',
      'Comparison: in reflection.md, compare your best reflection shot to one atmospheric landscape from @jamespopsys — how do your color and contrast choices differ?',
    ],
    reflectionPrompts: [
      ...STANDARD_REFLECTION,
      'Symmetry or broken symmetry — which pulled you?',
      'Global recipe vs local fix: one example of each from today\u2019s edits.',
    ],
    specialNotes: [],
  },
  {
    day: 7,
    slug: 'day-07',
    title: 'Environmental Portraits (Self / Family)',
    genre: 'Portrait',
    time: 'Blue hour or soft morning light',
    locationSuggestions: 'Home, yard, quiet Charleston street, or IOP dune path.',
    goal:
      'Handle skin tones with the Color Grading panel, define your personal starting recipe, and save it as Recipe-v1 — the preset you will build on for the rest of the course.',
    studyMaterial: [
      'An environmental portrait places the person in a meaningful place — the environment is half the subject. Do not crop it away.',
      'Use f/2.8–4 for subject separation; step back and zoom to 35–50mm rather than shooting wide and close (kinder to faces).',
      'Eye AF + AF-C on. Direct soft light onto the face: turn the person until the sky lights their eyes.',
      'Master study: pick one reference image from @jamespopsys or @that.icelandic.guy and deconstruct its exposure, composition, and color choices before shooting today.',
      'Read: Alpha Universe — 13 Rules of Environmental Portraits — https://alphauniverse.com/stories/pro-guide-to-environmental-portraits--minimum-equipment--maximum-results/',
      'Read: How To Master Environmental Portrait Photography — https://fstoppers.com/lifestyle/how-master-environmental-portrait-photography-695906',
      'Watch: Color Grading vs Split Toning explained — https://www.youtube.com/watch?v=DCYjDeRI6lU',
      'Read: Posing and rapport for directing family/friends in under 60 seconds — https://www.labirdiephotography.com/blog/posing-tips-for-natural-and-joyful-family-photos',
    ],
    fieldChecklist: [
      'Eye AF ON, AF-C, f/2.8–4, RAW.',
      'Auto ISO cap 3200 (people move more than landscapes).',
      'If self-portrait: tripod/surface + self-timer or phone app remote, focus point pre-placed.',
      'Pick the environment FIRST, then place the person in it.',
    ],
    shootingBrief: [
      'Self-portraits or family/friends — show the environment, do not crop too tight.',
      'Turn the subject to put soft sky light on the face; shoot the same setup from 35mm and 50mm.',
      'Direct with actions, not poses: "walk toward me", "look toward the water", "fix your sleeve".',
      'Volume: at least 60 frames or 30 minutes of active shooting. Note your frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Import + cull as routine.',
      'Color Grading panel (NOT legacy split toning): warm the skin midtones slightly, keep the background/shadows cooler.',
      'Skin check at 100%: watch the orange saturation and luminance in HSL — oversaturated orange is the #1 amateur tell.',
      'Define your 3-tool starting recipe: a Tone Curve shape + Color Grading hues + one habitual Luminance Range mask move. Write the exact settings in reflection.md.',
      'Prepare one before/after pair (original RAW export + final JPEG) using the recipe.',
    ],
    presetLab: [
      'Save "Recipe-v1" from your favorite edit — your first PERSONAL preset. Include Tone Curve + Color Grading only.',
      'Rule from tomorrow onward: every edit starts with Recipe-v1, then ONE intentional tweak for the day\u2019s subject and light. The tweaks are how the recipe evolves.',
    ],
    uploadChecklist: [
      'Best 3–5 + reflection.md.',
      'Before/after pair (RAW + final JPEG) demonstrating the recipe.',
      'Recipe-v1 settings written out in reflection.md.',
    ],
    reflectionPrompts: [
      ...STANDARD_REFLECTION,
      'MID-COURSE STYLE AUDIT: scroll everything you\u2019ve posted so far. What feels most like "you"? What patterns keep appearing (color, distance, subject)?',
    ],
    specialNotes: [
      'Mid-course checkpoint — give the style audit prompt real time today.',
    ],
  },
  {
    day: 8,
    slug: 'day-08',
    title: 'Candid Street Portraits',
    genre: 'Street Portrait',
    time:
      'Evening golden hour into dusk, or Saturday farmers-market morning — go when people are actually out (blue hour streets are empty)',
    locationSuggestions:
      'Charleston downtown, City Market area, or the farmers market (be respectful and quick).',
    goal:
      'Photograph strangers with confidence and ethics, and practice the recipe + one tweak editing discipline on difficult backgrounds.',
    studyMaterial: [
      'The two-sentence ask: "Hi — I\u2019m doing a 14-day photo project on Charleston. You look great in this light; may I take your portrait?" Show them the frame after. A "no" costs you ten seconds — accept it gracefully and move on.',
      'For candids without interaction: shoot gesture and expression, stay light, never make anyone feel hunted. If someone notices and objects, delete it in front of them.',
      'Capture gesture and expression over perfect posing — the in-between moments are the picture.',
      'Read: Photography Ethics Centre — Fundamentals of Photographic Consent — https://www.photoethics.org/content/2022/2/3/the-fundamentals-of-photographic-consent',
      'Read: Laws, Ethics & Consent in Street Photography — https://dinalitovsky.substack.com/p/laws-ethics-and-consent-in-street',
      'Watch: How Street Photographers Handle Privacy and Consent Ethically — https://www.youtube.com/watch?v=JHZNUBfJs0U',
      'Watch: Jim Nix — Luminance Range Masks tutorial — https://www.youtube.com/watch?v=8eP9NqeGH1o',
    ],
    fieldChecklist: [
      '35–50mm range, settings dialed BEFORE approaching anyone (f/2.8–4, Auto ISO, min shutter 1/250).',
      'Silent shutter ON for candids.',
      'Rehearse the two-sentence ask out loud once before you leave the car.',
      'Stay light: one camera, no bag if possible.',
    ],
    shootingBrief: [
      'Target: at least 8 approaches or interactions (a "no" still counts as an approach). Track yes/no count.',
      'Focus on people interacting with the environment — vendors, dog walkers, porch sitters.',
      'Mix asked portraits and true candids; note which you prefer shooting.',
      'Volume: at least 60 frames or 30 minutes of active shooting. Note your frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Import + cull as routine.',
      'Start every keeper from Recipe-v1, then make ONE intentional tweak for today\u2019s light. Describe the tweak in reflection.md.',
      'Luminance Range or Radial mask to lift the subject from busy street backgrounds.',
      'Dodge the face slightly, burn the distractions — small moves, invisible hand.',
      'Crop for anonymity on any candid where consent wasn\u2019t obtained and the person is identifiable.',
    ],
    presetLab: [
      'Preset = starting point, not endpoint. After editing, measure the drift: which sliders ended far from Recipe-v1, and why?',
      'Log the drift in reflection.md — repeated drift in the same direction means the recipe should change (that\u2019s Day 11).',
    ],
    uploadChecklist: [
      'Best 3–5 + reflection.md.',
      'Before/after pair (RAW + final) showing today\u2019s tweak on top of Recipe-v1.',
      'Ethics note in reflection.md: one interaction that felt good, one that felt uncomfortable, what you\u2019d change. Include your yes/no approach count.',
    ],
    reflectionPrompts: [
      ...STANDARD_REFLECTION,
      'Asked portraits vs candids — which felt more like you, and which produced better frames?',
      'Approach count: how many asks, how many yes, how did you handle the no\u2019s?',
    ],
    specialNotes: [
      'Schedule note: this is the one day NOT at morning blue hour — people beat light today.',
    ],
  },
  {
    day: 9,
    slug: 'day-09',
    title: 'Kids & Connection',
    genre: 'Portrait',
    time: 'Flexible (soft light preferred; go when the kids are fresh, not when the light is perfect)',
    locationSuggestions: 'Park, beach, backyard.',
    goal:
      'Shoot fast-moving genuine moments, keep skin tones natural under mixed light, and learn to version presets instead of overwriting them.',
    studyMaterial: [
      'Get down to their eye level — physically. The whole picture changes.',
      'Genuine beats posed: laughter, concentration, curiosity. Shoot the moments BETWEEN the poses.',
      'Give jobs, not poses: "find the best shell", "race to the fence". Play produces expressions.',
      'Read: Rangefinder — Tips for Candid Pictures of Kids — https://rangefinderonline.com/news-features/tips-techniques/tips-for-taking-great-candid-pictures-of-kids/',
      'Read: Become a Spy to Get Great Child Candid Photography — https://photzy.com/get-great-child-candid-photography/',
      'Read: 5 Tips for Authentic Expressions While Photographing Children — https://www.jessicariderphotography.com/blog/2019/5/16/5-tricks-for-authentic-expressions-while-photographing-children',
      'Watch: The Last Tone Curve Tutorial — https://www.youtube.com/watch?v=6CvSFieQGkw',
    ],
    fieldChecklist: [
      'AF-C + tracking, Eye AF ON, min shutter 1/500 (they move), Auto ISO cap 3200.',
      'Burst mode: short bursts at moments, not spray-and-pray.',
      'Knees dirty = angle right. Get to their eye level.',
      'Plan the session around their energy — 20 good minutes beats 60 tired ones.',
    ],
    shootingBrief: [
      'Target: at least 5 genuine interactions (laughter, concentration, curiosity) — not posed smiles. Note each in reflection.md.',
      'Shoot the in-between moments; include context when it adds story.',
      'Expect a lower keeper rate today — that\u2019s normal with moving subjects.',
      'Volume: at least 60 frames or 30 minutes of active shooting. Note your frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Import + cull — be ruthless; motion blur and missed focus go straight to rejects.',
      'Gentle S-curve on the Tone Curve to fix flat outdoor light.',
      'Fix mixed shade/sun color casts: WB first, then targeted HSL (green/yellow casts from grass and trees are common).',
      'Start from Recipe-v1 + one tweak — but kids\u2019 skin is unforgiving of heavy grading: pull the grading saturation down.',
      'Keep it natural. If the edit is visible on a child\u2019s face, it\u2019s too much.',
    ],
    presetLab: [
      'If Recipe-v1 fights the skin tones, do NOT overwrite it. Save a branch: "Recipe-v1-Portrait" with softer grading.',
      'Versioning rule from here on: presets get new names, never silent overwrites. Your preset folder is a history of your style.',
    ],
    uploadChecklist: [
      'Best 3–5 + reflection.md.',
      'Before/after pair (RAW + final) showing today\u2019s tweak.',
      'Post your top image to one external critique source (subreddit, Discord, or a mentor) and paste their feedback into reflection.md.',
      'Ethics note: how you kept the session fun and non-extractive (no over-shooting tired kids).',
      'Comparison: one candid kid frame vs a favorite candid portrait from either reference account — distance, expression, background use.',
    ],
    reflectionPrompts: [
      ...STANDARD_REFLECTION,
      'Which of the 5 genuine interactions produced the best frame, and why?',
      'Did Recipe-v1 survive contact with skin tones — or did you branch?',
    ],
    specialNotes: [],
  },
  {
    day: 10,
    slug: 'day-10',
    title: 'Mixed Genre: Portrait in Landscape',
    genre: 'Integration',
    time: 'Blue hour',
    locationSuggestions: 'IOP beach or Charleston waterfront with a person.',
    goal:
      'Fuse Days 1–3 composition with portrait technique, and learn AI masks + your first adaptive preset.',
    studyMaterial: [
      'The subject should feel PART of the place, not placed in front of it: connect them with leading lines, frames, or activity that belongs there.',
      'Scale is a tool — a small figure in a big landscape (the Popsys move) says something different from a half-body portrait with landscape bokeh. Shoot both today.',
      'Balance exposure between person and background at capture time; masks refine, they don\u2019t rescue.',
      'Master study: pick one reference image from @jamespopsys or @that.icelandic.guy and deconstruct its exposure, composition, and color choices before shooting today.',
      'Read: fstoppers — Master Environmental Portrait Photography — https://fstoppers.com/lifestyle/how-master-environmental-portrait-photography-695906',
      'Read: Range Masks Explained (Photography Life) — https://photographylife.com/range-masks-explained-lightroom',
    ],
    fieldChecklist: [
      'One person arranged in advance + backup plan if they cancel (self-portrait with tripod counts).',
      'RAW, Eye AF for close work, zone AF for small-figure frames.',
      'Scout the landscape element FIRST (line, frame, shape), then add the person to it.',
    ],
    shootingBrief: [
      'One person + strong landscape elements; use leading lines or frames to connect them.',
      'Shoot the scale range: tiny figure at 24mm, environmental half-body at 50mm.',
      'Balance exposure between person and background — check the histogram, not the screen.',
      'Volume: at least 60 frames or 30 minutes of active shooting. Note your frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Import + cull as routine.',
      'Start from Recipe-v1 (or -Portrait) + one tweak; describe the tweak in reflection.md.',
      'Select Sky AI mask: darken and grade the sky. Select Subject AI mask: gentle lift on the person.',
      'Graduated mask on the background only for depth.',
      'Thumbnail test: shrink the image — does the subject still read clearly against the landscape? If not, re-crop or re-mask.',
    ],
    presetLab: [
      'Build your first ADAPTIVE preset: create a Select Sky mask with −0.5 exposure + your grading move, and save it as a preset WITH the mask included.',
      'Adaptive presets recompute AI masks per image — test yours on 3 different frames and note the results.',
    ],
    uploadChecklist: [
      'Best 3–5 + reflection.md.',
      'Before/after pair (RAW + final) showing today\u2019s tweak.',
    ],
    reflectionPrompts: [
      ...STANDARD_REFLECTION,
      'Small figure vs half-body: which integration felt more like your style?',
      'Did the adaptive preset hold up across 3 frames?',
    ],
    specialNotes: [],
  },
  {
    day: 11,
    slug: 'day-11',
    title: 'Advanced Light & Composition',
    genre: 'Free choice (apply everything)',
    time: 'Blue hour',
    locationSuggestions: 'Your favorite from previous days or a new spot.',
    goal:
      'Attack your weakest skill with one advanced technique, learn RGB channel curves + Calibration, and evolve the recipe to v2.',
    studyMaterial: [
      'Pick ONE advanced track for today: (a) Mixed light — streetlamps against blue sky, working the tungsten/ambient white balance conflict; (b) Long exposure — 1–2 s surf at IOP with the camera braced, motion as texture; (c) Subtractive composition — simplify relentlessly, remove elements until the frame breaks, then add one back.',
      'Revisit the weak area from your previous reviews — today is a deliberate second attempt, not a new topic.',
      'Watch: Mastering Perspective for Photographers Part 2 — https://www.youtube.com/watch?v=O7n7W8sCxEY',
      'Watch: The Last Tone Curve Tutorial (RGB curves, color masking, personal recipe) — https://www.youtube.com/watch?v=6CvSFieQGkw',
      'Master study: pick one image from @jamespopsys or @that.icelandic.guy that uses a technique you still find difficult, and deconstruct it before shooting today.',
    ],
    fieldChecklist: [
      'Constraint (non-negotiable): full Manual exposure AND manual focus for the whole session.',
      'If track (b): stable surface or tripod, 2-sec timer, know your reciprocal math.',
      'If track (a): find the streetlamp spot the evening before or scout on the map.',
      'Write your chosen track and weak-skill target at the top of reflection.md BEFORE shooting.',
    ],
    shootingBrief: [
      'Choose one skill that still feels difficult and one advanced track (a/b/c). Focus the entire session on it.',
      'Deliver 5 strong images that demonstrate measurable progress on that skill.',
      'Volume: at least 60 frames or 30 minutes of active shooting. Note your frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Import + cull as routine.',
      'Start from Recipe-v1 + tweak, then go deeper:',
      'RGB channel curves: lift the blue curve\u2019s shadows for cool film-like blacks, or split red/blue channels for color contrast. Small moves, big mood.',
      'Calibration panel: shift the Blue Primary saturation slider (+10 to +20) — the quiet slider behind many "signature looks".',
      'Compare today\u2019s edit against your Day 4 edit of similar light: what changed in your hand?',
    ],
    presetLab: [
      'Evolve the recipe: fold in what the drift-log (Day 8) and today\u2019s curve work taught you. Save as "Recipe-v2".',
      'Keep v1 — never overwrite versions. Write a one-line change log in reflection.md (what changed v1 → v2 and why).',
    ],
    uploadChecklist: [
      'Best 3–5 + reflection.md.',
      'Before/after pair (RAW + final).',
      'Recipe v1 → v2 change log in reflection.md.',
    ],
    reflectionPrompts: [
      ...STANDARD_REFLECTION,
      'Which advanced track did you choose, and did the 5 images show real progress on the weak skill?',
      'What exactly changed from Recipe-v1 to Recipe-v2?',
    ],
    specialNotes: [],
  },
  {
    day: 12,
    slug: 'day-12',
    title: 'Personal Style Exploration',
    genre: 'Whatever feels most like you',
    time: 'Blue hour',
    locationSuggestions: 'Anywhere you feel drawn to.',
    goal:
      'Shoot with zero assignment pressure, distill your five best edits into one signature look, and save it as MyStyle-v1.',
    studyMaterial: [
      'Ignore the "rules" for a session. Shoot only what you are drawn to and notice what keeps appearing: color palette, subject matter, working distance, mood.',
      'Style is the sum of repeated choices. Today you observe your own defaults instead of fighting them.',
      'Read: How to recreate a photographer\u2019s signature look (deconstruction approach) — https://www.reddit.com/r/AskPhotography/comments/1ipitd3/how_can_i_recreate_this_soft_glowy_james_popsys/',
      'Watch: Level Up Your Colors with Split Toning — https://www.youtube.com/watch?v=jHZuHO22UM8',
    ],
    fieldChecklist: [
      'Constraint: ONE focal length and ONE color intent (cool / neutral / warm) locked for the session. Note both in reflection.md.',
      'No other assignment constraints — time and gear only.',
      'Leave the checklist mindset in the car today; shoot on instinct.',
    ],
    shootingBrief: [
      'Shoot purely for yourself.',
      'Note what keeps appearing in your frames — subjects, distances, geometry.',
      'Volume: at least 60 frames or 30 minutes of active shooting. Note your frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Import + cull as routine.',
      'Open your 5 favorite edits from Days 1–11 in Survey view (N). Find the shared moves: curve shape, grading hues, saturation level, contrast.',
      'Distill those shared moves into ONE signature look and apply it to all of today\u2019s keepers.',
      'Use the preset Amount slider to modulate strength per image instead of re-editing.',
      'Consistency check: today\u2019s set should look like one photographer on one day.',
    ],
    presetLab: [
      'Save "MyStyle-v1" into a new preset group named "14-Day Course". This preset is today\u2019s real deliverable.',
      'Decision to make consciously: EXCLUDE white balance if your look should adapt to different light; INCLUDE it if the color cast IS the look.',
    ],
    uploadChecklist: [
      'Best 3–5 + reflection.md (extra attention to style notes).',
      'Before/after pair (RAW + final).',
      'Honesty check in reflection.md: pick one image and write whether you\u2019d still post it if social media didn\u2019t exist.',
    ],
    reflectionPrompts: [
      ...STANDARD_REFLECTION,
      'What kept appearing in your frames when nobody assigned anything?',
      'Describe MyStyle-v1 in one sentence, as if telling another photographer how to spot your work.',
    ],
    specialNotes: [],
  },
  {
    day: 13,
    slug: 'day-13',
    title: 'Curate Your Best',
    genre: 'Curation',
    time: 'Desk day',
    locationSuggestions: 'Review all previous days — no required shoot location.',
    goal:
      'Select a coherent top 10–14, learn WHY you reject images, and master batch consistency: preset + sync + export presets.',
    studyMaterial: [
      'Curation is a skill separate from shooting. You are choosing a body of work, not 14 individual favorites — coherence beats variety.',
      'Re-read all Day 1–12 reflection.md files first. Tag recurring subjects, colors, and compositions BEFORE selecting images, so the theme guides the picks.',
      'Compare your Day 1 images against your recent favorites: name what specifically improved (not "better" — WHAT is better).',
    ],
    fieldChecklist: [
      'Block 60–90 undisturbed minutes at the desk.',
      'All course images in one Lightroom view (All Photographs filtered to the course dates).',
      'Reflections from Days 1–12 open beside Lightroom.',
    ],
    shootingBrief: [
      'Select your top 10–14 images from the whole course. Note the filenames in reflection.md.',
      'Create a "rejected" subfolder with at least 10 images you deliberately did NOT include.',
      'Write a short paragraph: what themes or strengths are emerging?',
    ],
    editingWorkflow: [
      'Apply MyStyle-v1 across the entire best-of set.',
      'Note where the preset fails (skin, extreme light) and hand-correct those — log which images needed rescue and why.',
      'Sync corrections between similar frames: Sync button or Copy/Paste settings — stop editing duplicates from scratch.',
      'Grid view consistency check: the set should read as ONE photographer. Fix outliers.',
      'Create two EXPORT presets: "IG 4:5 — 2160px, sRGB, q85" and "Web 3:2 — 2048px, sRGB, q85". Use them from now on.',
    ],
    presetLab: [
      'Batch day lesson: develop preset + sync + export presets = a complete, repeatable finishing workflow. This is what makes a daily posting habit sustainable.',
      'Note in reflection.md the 2–3 situations where MyStyle-v1 consistently fails — that list defines version 1.1.',
    ],
    uploadChecklist: [
      'List of selected files + curation notes in reflection.md.',
      'Rejected folder + a note on the 3 most common rejection reasons (weak light, cluttered frame, poor timing...).',
      'Day 1 vs now comparison: 2–3 sentences on what specifically improved.',
    ],
    reflectionPrompts: [
      'What theme or thread holds your top 10–14 together?',
      'Top 3 rejection reasons — and which one is really a SHOOTING problem to fix next course?',
      'Where does MyStyle-v1 fail, and what would v1.1 change?',
    ],
    specialNotes: ['Curation day — selection over new shooting.'],
  },
  {
    day: 14,
    slug: 'day-14',
    title: 'Style Statement + Portfolio',
    genre: 'Final',
    time: 'Blue hour + desk',
    locationSuggestions: 'One intentional final location of your choosing.',
    goal:
      'Ship the final set with a consistent grade, write your style statement, and back up your preset system for the next course.',
    studyMaterial: [
      'A style statement is 3–5 sentences describing your subjects, light, color, and intent — specific enough that a stranger could pick your photos out of a lineup.',
      'The final image is intentional: it should represent where you are NOW, shot with everything the course built.',
      'Watch: Color Grading vs Split Toning (finalize a consistent look) — https://www.youtube.com/watch?v=DCYjDeRI6lU',
    ],
    fieldChecklist: [
      'One intentional location chosen the night before.',
      'Full kit check; shoot the final image with your complete field routine from Day 1.',
      'Get one piece of outside feedback on the best-of selection BEFORE finalizing.',
    ],
    shootingBrief: [
      'Shoot one last intentional image that represents where you are now.',
      'Finalize the best-of selection (adjust for the outside feedback — or note why you didn\u2019t).',
      'Write the 3–5 sentence style statement based on the last two weeks.',
      'Volume: at least 60 frames or 30 minutes of active shooting. Note your frame count in reflection.md.',
    ],
    editingWorkflow: [
      'Final grade pass across the whole best-of set in Grid view — consistency at a glance.',
      'Hand-correct the failure cases identified on Day 13.',
      'Export the final set with your two export presets from Day 13.',
      'Confirm visual consistency BEFORE writing the style statement — the pictures should prove the words.',
    ],
    presetLab: [
      'Version bump: save "MyStyle-v1.1" with the Day 13 fixes folded in. Keep v1.',
      'Back up the whole system: right-click each preset → Export as .xmp, and commit them to a presets/ folder in this repo. Your presets are now portable and versioned like code.',
    ],
    uploadChecklist: [
      'Final best image.',
      'Style statement in reflection.md.',
      'Exported .xmp preset files committed to presets/ in the repo.',
      'Note on the outside feedback and how it did (or didn\u2019t) change the final selection.',
      'Any remaining reflections.',
    ],
    reflectionPrompts: [
      'Your 3–5 sentence style statement.',
      'The single biggest change in your photography since Day 1.',
      'What the NEXT 14-day course should attack (weakest remaining skill).',
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

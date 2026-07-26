export type DayReview = {
  day: number
  title: string
  summary: string
  markdown: string
}

/**
 * AI reviews keyed by course day. Source of truth also lives in
 * Day-XX/ai-review.md for the GitHub folder.
 */
export const dayReviews: DayReview[] = [
  {
    day: 2,
    title: 'Day-02 Review: Framing & Layers',
    summary:
      'Strong set. Usable depth and intentional frames without forcing textbook three-plane looks every time.',
    markdown: `Strong set. You delivered usable depth and intentional frames without forcing the textbook three-plane look every time.

### Composition & Layers
- **Street Pour** is the clear winner. Iron gate as foreground frame + puddles as mid + Bronco/flag/architecture as background. Clean separation, scale cues, and the wet surface adds extra planes via reflection. This is the shot that actually practices the lesson.
- **Patio Pair** works via aggressive foreground blur (glass). The two women become the mid layer against the wall/plants. Effective, though the glass is more “prop” than integrated frame.
- **Brim & Crown** and **Counter Study** both use repeating objects (hats, bottles) to create depth. The table of clothes and the open menu pull the eye forward correctly.
- **Bottle Wall** and **Blue Service** are more about texture and color layering than strict planes. Acceptable, but they lean decorative rather than structural.

You correctly noted that forcing three distinct planes felt forced. That’s useful data — stop chasing perfect textbook layers and keep looking for natural overlaps and scale instead.

### Light & Edit
Warm interior light is handled cleanly (Counter Study, Brim & Crown). The rain street holds good midtone detail. Blue Service is the outlier — heavy blue/magenta cast that feels deliberate rather than corrected.

Your J-key clipping note is exactly what the lesson wanted. Whites/Blacks look controlled across the set. No obvious over-cooked highlights or crushed shadows in the keepers.

### Style Signal
Emerging preference is clear: observational Charleston street + social interiors, warm practical light, and people in small moments. You favor lived-in spaces over pure architecture. The rain street and bar scenes fit that more tightly than pure blue-hour landscapes.

### Reflection Gaps
The draft is incomplete against the Day-02 prompts. Missing:
- Frame count / keeper rate
- Preferred color/mood/subject
- Which plane was hardest
- Any histogram surprises
- Rough Basic panel numbers on your favorite

Upload the finished reflection.md. Without it the review is only half done.

**Priority next**: Keep the gate/rain approach. It’s the most natural framing language you showed today.`,
  },
  {
    day: 3,
    title: 'Day-03 Review: Perspective & Angles',
    summary:
      'Strong execution on night light and reflective surfaces, with more angular variety needed.',
    markdown: `Subject is a single blue Tesla at a Supercharger station at night. Strong execution on light and surface, weaker on the full range of required perspectives.

### Composition
- Low angles deliver the “larger than life” effect you noted. The car reads powerful and graphic in 01202, 01217, and 01249.
- Extreme close-up (01232) works well — paint texture, red light curve, and reflected light create abstract interest.
- Wide context appears in 01205 and 01217.
- Missing: clear high/overhead angle and a deliberate vanishing-point composition. The parking lines and charger rows could have supplied vanishing points but were not used that way.
- Your own observation is correct: locking onto one static car limited the exercise. A fixed street corner with changing traffic would have forced more angular variety with less effort.

### Light
Night artificial light is handled confidently. Starbursts and flares from the overhead poles are intentional and effective, not accidents. Specular highlights on the wet/glossy paint give depth and modernity. Contrast between deep shadow and the red Tesla branding is clean.

### Edit Choices
- Controlled. You stayed in the useful range on Effects (+20 or less) rather than crushing the image. Texture and clarity on the close-up bring out surface detail without looking crunchy.
- Blacks are rich, blues hold, highlights are mostly contained. Subtle vignette appears present and functional.
- Crop decisions feel deliberate; nothing looks default 3:2.

### Emerging Style
This set continues the pattern of modern subjects + high-contrast night light + reflective surfaces + low-angle drama. You are drawn to clean industrial geometry and light as a primary subject rather than candid human street moments. That is a coherent direction. The Tesla series already looks like a mini-project rather than scattered exercises.

### Gaps vs Lesson Requirements
1. Three distinct heights on the same subject (ground / chest / high) — only low and mid are strongly represented.
2. Explicit vanishing-point frame.
3. Reflection.md still has the draft typos and incomplete structure (lager → larger, prospectives → perspectives, pain → panel, las → last).

### Practical Notes
- Keeper rate (80 → 17 → 5) is efficient. Continue that discipline.
- For future single-subject days, force the three heights first, then explore the close-up/wide and vanishing point. Do not wait for “inspiration.”
- Reflection can be tightened to the required prompts only. Extra notes belong in a private log if they do not serve the review.

Overall: solid light and surface work, clear personal taste emerging, but the lesson’s angular range was only partially covered. Next time treat the height changes as non-negotiable checkpoints rather than optional experiments.`,
  },
]

export function reviewForDay(day: number): DayReview | undefined {
  return dayReviews.find((review) => review.day === day)
}

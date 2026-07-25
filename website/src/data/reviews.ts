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
]

export function reviewForDay(day: number): DayReview | undefined {
  return dayReviews.find((review) => review.day === day)
}

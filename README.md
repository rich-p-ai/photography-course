# Photography Course

**14-Day Challenge: Improve Skills + Discover Your Style**

**Gear:** Sony ZV-E10 II + FE 24-50mm f/2.8 G  
**Location:** Charleston, SC / Isle of Palms  
**Daily:** 30-60 min shoot → Lightroom edit → 1 image to Instagram @richardsawyers + full set here  
**Start:** July 23, 2026

## How It Works
1. Read the daily lesson (link below, or the interactive version on the website)
2. Work the **Field Checklist** before/during the shoot
3. Shoot the **Shooting Brief** (morning blue hour, except Day 8 — evening/market, when people are out)
4. Follow the **Editing Workflow** in Lightroom (Mac or iPad) — each day adds one editing skill
5. Do the **Preset Lab** — by Day 14 you'll have a versioned personal preset system
6. Upload best photo(s) + `reflection.md` to the Day-XX folder
7. Commit & push, then paste the Day folder link in our chat for AI review

## Every Day Has
- **Goal** — the one outcome the day is for
- **Study Material** — concepts + curated reading/videos
- **Field Checklist** — camera and logistics, checkbox style
- **Shooting Brief** — concrete tasks with volume targets (60+ frames / 30 min active)
- **Editing Workflow** — step-by-step Lightroom checklist, one new skill per day
- **Preset Lab** — the preset-building track (see below)
- **Upload Checklist** + **Reflection Prompts**

## The Preset Track
| Day | Milestone |
|-----|-----------|
| 1–3 | Learn what presets are; preview, apply, and reverse-engineer Adobe built-ins |
| 4 | Save first preset: `BlueHour-v1` (WB + HSL + grading only) |
| 5 | `Silhouette-Punch` + master the save dialog (what to include/exclude) |
| 6 | Learn what presets CAN'T store (masks = per-image skill) |
| 7 | **`Recipe-v1`** — your personal starting recipe (tone curve + color grading) |
| 8–9 | Recipe + one intentional tweak per day; version branches, never overwrite |
| 10 | First adaptive (AI-mask) preset |
| 11 | `Recipe-v2` with change log |
| 12 | **`MyStyle-v1`** — your signature look, distilled from your 5 best edits |
| 13 | Batch consistency: preset + sync + export presets |
| 14 | `MyStyle-v1.1` + export all presets as `.xmp` into `presets/` in this repo |

## Style Discovery
Every day note in `reflection.md`:
- What felt natural? What felt forced?
- Preferred color/mood/subject?
- Frame count + keeper rate

Mid-course (Day 7) and final (Day 14) style audit.

## Daily Lessons
- [Day 01 – Rule of Thirds + Leading Lines](Day-01/)
- [Day 02 – Framing & Layers](Day-02/)
- [Day 03 – Perspective & Angles](Day-03/)
- [Day 04 – Blue Hour Color & Exposure](Day-04/)
- [Day 05 – Silhouettes & Contrast](Day-05/)
- [Day 06 – Reflections & Water](Day-06/)
- [Day 07 – Environmental Portraits (Self/Family)](Day-07/)
- [Day 08 – Candid Street Portraits](Day-08/) *(evening / market hours)*
- [Day 09 – Kids & Connection](Day-09/)
- [Day 10 – Mixed Genre: Portrait in Landscape](Day-10/)
- [Day 11 – Advanced Light & Composition](Day-11/)
- [Day 12 – Personal Style Exploration](Day-12/)
- [Day 13 – Curate Your Best](Day-13/)
- [Day 14 – Style Statement + Portfolio](Day-14/)

## Best Of
Will be curated into a gallery page at the end.

## Portfolio website
Public portfolio lives in [`website/`](website/) — Vite + React site with filters, lightbox, and light/blue-hour theme. The course pages there have interactive checklists that remember your progress.

**Live:** https://rich-p-ai.github.io/photography-course/

Deploy: push to `main` (GitHub Actions → Pages). Photo data: `website/src/data/photos.ts`.

**Course content lives in `website/src/data/course.ts`.** The Day-XX README files are generated from it:

```bash
cd website
node --experimental-strip-types scripts/generate-readmes.ts
```

---
Push photos to the Day folders. I review every upload.

/**
 * Generates Day-XX/README.md files from the course data in src/data/course.ts
 * so the GitHub repo and the website never drift apart.
 *
 * Run from the website/ folder:
 *   node --experimental-strip-types scripts/generate-readmes.ts
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { courseDays, dayFolderName, type CourseDay } from '../src/data/course.ts'

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const siteBase = 'https://rich-p-ai.github.io/photography-course'

function section(title: string, lines: string[]): string {
  if (lines.length === 0) return ''
  return `## ${title}\n\n${lines.join('\n')}\n\n`
}

function bullets(items: string[]): string[] {
  return items.map((item) => `- ${item}`)
}

function checkboxes(items: string[]): string[] {
  return items.map((item) => `- [ ] ${item}`)
}

function numbered(items: string[]): string[] {
  return items.map((item, i) => `${i + 1}. ${item}`)
}

function renderDay(day: CourseDay): string {
  const dayNum = String(day.day).padStart(2, '0')
  let md = `# Day ${dayNum} – ${day.title}\n\n`
  md += `**Genre:** ${day.genre}  \n`
  md += `**Time:** ${day.time}  \n`
  md += `**Locations:** ${day.locationSuggestions}\n\n`
  md += `**Goal:** ${day.goal}\n\n`

  md += section('Study Material', bullets(day.studyMaterial))
  md += section('Field Checklist', checkboxes(day.fieldChecklist))
  md += section('Shooting Brief (30–60 min)', numbered(day.shootingBrief))
  md += section('Editing Workflow (Lightroom)', checkboxes(day.editingWorkflow))
  md += section('Preset Lab', bullets(day.presetLab))
  md += section('Upload Checklist', checkboxes(day.uploadChecklist))
  md += section('Reflection Prompts (reflection.md)', bullets(day.reflectionPrompts))
  md += section('Notes', bullets(day.specialNotes))

  md += `---\n\n`
  md += `*Interactive version of this lesson (with working checklists): ${siteBase}/course/${day.slug}*\n`
  md += `\n<!-- Generated from website/src/data/course.ts — edit there, then run: node --experimental-strip-types website/scripts/generate-readmes.ts -->\n`
  return md
}

for (const day of courseDays) {
  const folder = join(repoRoot, dayFolderName(day.day))
  mkdirSync(folder, { recursive: true })
  writeFileSync(join(folder, 'README.md'), renderDay(day))
  console.log(`Wrote ${dayFolderName(day.day)}/README.md`)
}

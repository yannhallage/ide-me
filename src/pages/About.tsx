import { developer, experience } from '../data/data'

/** Largeur de césure pour les lignes JSDoc (évite un décalage visuel si le texte revient à la ligne). */
const JSDOC_WRAP = 76

const pushJsdocLines = (lines: string[], text: string): void => {
  const trimmed = text.trim()
  if (!trimmed) return

  let remaining = trimmed
  while (remaining.length > 0) {
    if (remaining.length <= JSDOC_WRAP) {
      lines.push(` * ${remaining}`)
      break
    }
    let breakAt = remaining.lastIndexOf(' ', JSDOC_WRAP)
    if (breakAt <= 0) breakAt = JSDOC_WRAP
    const chunk = remaining.slice(0, breakAt).trimEnd()
    lines.push(` * ${chunk}`)
    remaining = remaining.slice(breakAt).trimStart()
  }
}

export const getAboutLines = (): string[] => {
  const lines: string[] = []

  lines.push('// About.tsx')
  lines.push('')
  lines.push('/**')
  lines.push(` * ${developer.name}`)
  lines.push(` * ${developer.role}`)
  lines.push(` * Location: ${developer.location}`)
  developer.summary.forEach((entry) => {
    entry
      .split(/\n+/)
      .map((p) => p.trim())
      .filter(Boolean)
      .forEach((paragraph) => pushJsdocLines(lines, paragraph))
  })
  lines.push(' */')
  lines.push('')
  lines.push('const developer = {')
  lines.push(`  name: "${developer.name}",`)
  lines.push(`  role: "${developer.role}",`)
  lines.push(`  stack: ${JSON.stringify(developer.stack)},`)
  lines.push('}')
  lines.push('')
  lines.push('// experience')
  lines.push('const experience = [')
  experience.forEach((item) => {
    lines.push('  {')
    lines.push(`    company: "${item.company}",`)
    lines.push(`    role: "${item.role}",`)
    lines.push(`    period: "${item.period}",`)
    lines.push('  },')
  })
  lines.push(']')
  lines.push('')
  lines.push('export default developer')

  return lines
}

export default function About() {
  return null
}

import { developer, experience } from '../data/data'

export const getAboutLines = (): string[] => {
  const lines: string[] = []

  lines.push('// About.tsx')
  lines.push('')
  lines.push('/**')
  lines.push(` * ${developer.name}`)
  lines.push(` * ${developer.role}`)
  lines.push(` * Location: ${developer.location}`)
  developer.summary.forEach((entry) => lines.push(` * ${entry}`))
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

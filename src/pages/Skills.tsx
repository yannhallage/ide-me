import { skills, tools } from '../data/data'

export const getSkillsLines = (): string[] => {
  return [
    '// skills.ts',
    '',
    'type Skills = {',
    '  frontend: string[]',
    '  backend: string[]',
    '  database: string[]',
    '  devops: string[]',
    '}',
    '',
    'const skills: Skills = ' + JSON.stringify(skills, null, 2),
    '',
    'const tools = ' + JSON.stringify(tools, null, 2),
    '',
    'export { skills, tools }',
  ]
}

export default function Skills() {
  return null
}

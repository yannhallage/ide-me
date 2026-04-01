import { projects } from '../data/data'

export const getProjectsLines = (): string[] => {
  return [
    '// projects.tsx',
    '',
    'export const projects = ' + JSON.stringify(projects, null, 2),
    '',
    'export default projects',
  ]
}

export default function Projects() {
  return null
}

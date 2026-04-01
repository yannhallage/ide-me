import { socials } from '../data/data'

export const getContactLines = (): string[] => {
  return [
    '// contact.tsx',
    '$ whoami',
    'full-stack-developer',
    '',
    '$ cat socials.json',
    JSON.stringify(socials, null, 2),
    '',
    '$ echo "Open to remote opportunities"',
    'Open to remote opportunities',
  ]
}

export default function Contact() {
  return null
}

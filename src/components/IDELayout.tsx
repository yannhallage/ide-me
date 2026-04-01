import { useEffect, useMemo, useState } from 'react'
import { developer, experience, projects, skills, socials, tools } from '../data/data'
import { getAboutLines } from '../pages/About'
import { getProjectsLines } from '../pages/Projects'
import { getSkillsLines } from '../pages/Skills'
import { getContactLines } from '../pages/Contact'
import Sidebar from './Sidebar'
import Tabs from './Tabs'
import Editor from './Editor'
import Terminal from './Terminal'
import StatusBar from './StatusBar'
import ActivityBar from './ActivityBar'

const OPEN_FILES = ['about.tsx', 'projects.tsx', 'skills.ts', 'contact.tsx', 'data.ts']

const getDataFileLines = (): string[] => {
  return [
    '// data.ts',
    '',
    'export const developer = ' + JSON.stringify(developer, null, 2),
    '',
    'export const skills = ' + JSON.stringify(skills, null, 2),
    '',
    'export const tools = ' + JSON.stringify(tools, null, 2),
    '',
    'export const projects = ' + JSON.stringify(projects, null, 2),
    '',
    'export const experience = ' + JSON.stringify(experience, null, 2),
    '',
    'export const socials = ' + JSON.stringify(socials, null, 2),
  ]
}

const COMMANDS = ['> View: Toggle Terminal', '> Go to File...', '> Theme: Dark+ (default dark)']

export default function IDELayout() {
  const [activeFile, setActiveFile] = useState<string>('about.tsx')
  const [showPalette, setShowPalette] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [commandQuery, setCommandQuery] = useState('')

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setShowPalette((current) => {
          const next = !current
          if (next) {
            setCommandQuery('')
          }
          return next
        })
      }
      if (event.key === 'Escape') {
        setShowPalette(false)
        setCommandQuery('')
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const contentByFile = useMemo<Record<string, string[]>>(
    () => ({
      'about.tsx': getAboutLines(),
      'projects.tsx': getProjectsLines(),
      'skills.ts': getSkillsLines(),
      'contact.tsx': getContactLines(),
      'data.ts': getDataFileLines(),
    }),
    [],
  )

  const filteredCommands = useMemo(
    () =>
      COMMANDS.filter((command) =>
        command.toLowerCase().includes(commandQuery.trim().toLowerCase()),
      ),
    [commandQuery],
  )

  return (
    <div className="flex h-screen flex-col bg-[#1e1e1e] text-[#d4d4d4]">
      <div className="flex min-h-0 flex-1">
        <ActivityBar onExplorerClick={() => setShowSidebar(true)} />
        <Sidebar
          files={OPEN_FILES}
          activeFile={activeFile}
          onSelect={setActiveFile}
          isOpen={showSidebar}
          onClose={() => setShowSidebar(false)}
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex h-9 items-center justify-between border-b border-[#2d2d30] bg-[#252526] px-3 text-xs md:hidden">
            <button
              type="button"
              onClick={() => setShowSidebar(true)}
              className="rounded border border-[#3f3f46] px-2 py-1 text-[#cccccc]"
            >
              Explorer
            </button>
            <button
              type="button"
              onClick={() => {
                setShowPalette(true)
                setCommandQuery('')
              }}
              className="text-[#8c8c8c]"
            >
              Ctrl + K
            </button>
          </div>
          <Tabs files={OPEN_FILES} activeFile={activeFile} onSelect={setActiveFile} />
          <div className="hidden h-8 items-center border-b border-[#2d2d30] bg-[#1e1e1e] px-3 text-[11px] text-[#8c8c8c] md:flex">
            <span className="truncate">portfolio-workspace &gt; src &gt; {activeFile}</span>
          </div>
          <div className="min-h-0 flex-1">
            <Editor fileName={activeFile} lines={contentByFile[activeFile] ?? []} />
          </div>
          <Terminal />
        </div>
      </div>
      <StatusBar activeFile={activeFile} />

      {showPalette ? (
        <div className="pointer-events-none absolute inset-0 z-40 flex items-start justify-center bg-black/20 px-3 pt-16">
          <div className="pointer-events-auto w-full max-w-[620px] rounded border border-[#3c3c3c] bg-[#252526] shadow-2xl">
            <input
              value={commandQuery}
              onChange={(event) => setCommandQuery(event.target.value)}
              placeholder="Type a command (Ctrl + K)"
              className="w-full border-b border-[#3c3c3c] bg-transparent px-4 py-3 text-sm text-[#cccccc] outline-none"
            />
            <ul className="py-2 text-sm">
              {filteredCommands.map((command) => (
                <li key={command} className="px-4 py-2 text-[#d4d4d4] hover:bg-[#37373d]">
                  {command}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  )
}

type StatusBarProps = {
  activeFile: string
}

export default function StatusBar({ activeFile }: StatusBarProps) {
  return (
    <footer className="flex h-7 items-center justify-between bg-[#007acc] px-2 text-[10px] text-white sm:px-3 sm:text-[11px]">
      <div className="flex items-center gap-2 sm:gap-4">
        <span> feature/portfolio-ide</span>
        <span className="hidden sm:inline">0 problems</span>
        <span className="hidden md:inline">Prettier</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="max-w-24 truncate sm:max-w-none">{activeFile}</span>
        <span className="hidden sm:inline">TypeScript React</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span className="hidden md:inline">Spaces: 2</span>
        <span>Ln 24, Col 18</span>
      </div>
    </footer>
  )
}

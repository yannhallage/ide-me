type TabsProps = {
  files: string[]
  activeFile: string
  onSelect: (file: string) => void
}

export default function Tabs({ files, activeFile, onSelect }: TabsProps) {
  return (
    <div className="flex h-10 overflow-x-auto border-b border-[#2d2d30] bg-[#252526]">
      {files.map((file) => {
        const isActive = file === activeFile
        return (
          <button
            key={file}
            type="button"
            onClick={() => onSelect(file)}
            className={`shrink-0 border-r border-[#2d2d30] px-3 text-[11px] transition-colors sm:px-4 sm:text-xs ${
              isActive
                ? 'bg-[#1e1e1e] text-[#ffffff]'
                : 'bg-[#2d2d30] text-[#cccccc] hover:bg-[#333337]'
            }`}
          >
            <span className="mr-2 text-[#519aba]">●</span>
            {file}
          </button>
        )
      })}
    </div>
  )
}

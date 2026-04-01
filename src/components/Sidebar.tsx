type SidebarProps = {
  files: string[]
  activeFile: string
  onSelect: (file: string) => void
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({
  files,
  activeFile,
  onSelect,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      <button
        type="button"
        aria-label="Close explorer"
        onClick={onClose}
        className={`fixed inset-0 z-20 bg-black/40 md:hidden ${isOpen ? 'block' : 'hidden'}`}
      />
      <aside
        className={`fixed left-0 top-0 z-30 h-full w-64 border-r border-[#2d2d30] bg-[#252526] text-xs text-[#cccccc] transition-transform md:static md:z-auto md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#2d2d30] px-3 py-2 tracking-wide text-[#8c8c8c]">
          <span>EXPLORER</span>
          <button
            type="button"
            onClick={onClose}
            className="text-[11px] text-[#a0a0a0] md:hidden"
          >
            CLOSE
          </button>
        </div>
        <div className="px-2 py-3">
          <div className="px-2 pb-2 text-[#8c8c8c]">PORTFOLIO-WORKSPACE</div>
          <ul className="space-y-1">
            {files.map((file) => (
              <li key={file}>
                <button
                  type="button"
                  onClick={() => {
                    onSelect(file)
                    onClose()
                  }}
                  className={`flex w-full items-center gap-2 rounded px-2 py-1 text-left ${
                    activeFile === file
                      ? 'bg-[#37373d] text-[#ffffff]'
                      : 'hover:bg-[#2a2d2e]'
                  }`}
                >
                  <span className="text-[#519aba]">▸</span>
                  <span>{file}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}

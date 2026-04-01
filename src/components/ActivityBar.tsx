type ActivityBarProps = {
  onExplorerClick: () => void
}

const icons = ['📁', '🔎', '⑂', '▶']

export default function ActivityBar({ onExplorerClick }: ActivityBarProps) {
  return (
    <aside className="hidden w-12 shrink-0 border-r border-[#2d2d30] bg-[#333333] md:flex md:flex-col md:items-center md:py-2">
      {icons.map((icon, idx) => (
        <button
          key={icon}
          type="button"
          onClick={idx === 0 ? onExplorerClick : undefined}
          className={`mb-1 h-10 w-10 text-sm transition-colors ${
            idx === 0
              ? 'border-l-2 border-[#ffffff] bg-[#252526] text-[#ffffff]'
              : 'text-[#858585] hover:text-[#cccccc]'
          }`}
          aria-label="Activity icon"
        >
          {icon}
        </button>
      ))}
      <div className="mt-auto pb-2 text-[#858585]">⚙</div>
    </aside>
  )
}

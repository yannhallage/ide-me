import { socials } from '../data/data'

export default function Terminal() {
  return (
    <div className="h-32 overflow-auto border-t border-[#2d2d30] bg-[#181818] font-mono text-[11px] text-[#cccccc] sm:h-40 sm:text-xs">
      <div className="flex h-8 items-center gap-4 border-b border-[#2d2d30] bg-[#252526] px-3 text-[#9b9b9b]">
        <span className="text-[#d4d4d4]">TERMINAL</span>
        <span>PROBLEMS</span>
        <span>OUTPUT</span>
      </div>
      <div className="px-3 py-2 sm:px-4">
        <p className="text-[#4ec9b0]">$ pnpm dev</p>
        <p>VITE v8 ready in 180ms</p>
        <p className="text-[#4ec9b0]">$ contact --show</p>
        <p>{socials.email}</p>
        <p>{socials.github}</p>
      </div>
    </div>
  )
}

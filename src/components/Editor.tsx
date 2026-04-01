type EditorProps = {
  fileName: string
  lines: string[]
}

const escapeHtml = (line: string): string =>
  line
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

const highlightLine = (rawLine: string): string => {
  const escaped = escapeHtml(rawLine)
  const trimmed = rawLine.trim()

  if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*')) {
    return `<span class="text-[#6A9955]">${escaped}</span>`
  }

  let output = escaped
  output = output.replace(
    /"(.*?)"/g,
    '<span class="text-[#CE9178]">"$1"</span>',
  )
  output = output.replace(
    /\b(export|const|type|default|return)\b/g,
    '<span class="text-[#C586C0]">$1</span>',
  )
  output = output.replace(
    /\b(string|boolean|number)\b/g,
    '<span class="text-[#4EC9B0]">$1</span>',
  )

  return output
}

export default function Editor({ fileName, lines }: EditorProps) {
  return (
    <section className="h-full overflow-auto bg-[#1e1e1e]">
      <div className="file-switch flex items-center justify-between border-b border-[#2d2d30] px-3 py-2 text-[11px] text-[#8c8c8c] sm:py-3 sm:text-xs">
        <div className="truncate">{`src/${fileName}`}</div>
        <div className="hidden gap-3 md:flex">
          <span>TS</span>
          <span>UTF-8</span>
          <span>CRLF</span>
        </div>
      </div>
      <div className="flex">
        <div className="min-w-0 flex-1 font-mono text-[12px] leading-5 sm:text-sm sm:leading-6">
          {lines.map((line, idx) => (
            <div
              key={`${fileName}-${idx}`}
              className="group flex pr-3 hover:bg-[#2a2d2e]/50 sm:pr-6"
            >
              <span className="w-9 select-none pr-2 text-right text-[#858585] group-hover:text-[#c5c5c5] sm:w-12 sm:pr-3">
                {idx + 1}
              </span>
              <span
                className="whitespace-pre text-[#d4d4d4]"
                dangerouslySetInnerHTML={{ __html: highlightLine(line) }}
              />
              {idx === lines.length - 1 ? (
                <span className="ml-1 inline-block h-5 w-2 bg-[#aeafad] blink-cursor" />
              ) : null}
            </div>
          ))}
        </div>
        <div className="hidden w-14 border-l border-[#2d2d30] bg-[#1f1f1f] px-2 pt-3 lg:block">
          {lines.slice(0, 36).map((line, idx) => (
            <div
              key={`${fileName}-mini-${idx}`}
              className={`mb-1 h-1 rounded ${
                line.trim().length === 0 ? 'bg-transparent' : 'bg-[#3f3f46]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

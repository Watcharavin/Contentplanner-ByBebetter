export type DotChartOpts = {
  canvas: HTMLCanvasElement
  type: 'bar' | 'fill' | 'ring'
  data?: number[]     // bar: array 0–1 per column
  pct?: number        // fill/ring: 0–1
  cols?: number       // default 28
  rows?: number       // default 7
  dotRadius?: number  // default 2.5
  gap?: number        // default 4 (reserved for future use)
  accentFn?: (alpha: number) => string
  accent?: string
  dimColor?: string
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3
    ? h.split('').map(c => c + c).join('')
    : h, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

export function drawDotChart(opts: DotChartOpts): void {
  const {
    canvas,
    type,
    data,
    pct = 0,
    cols = 28,
    rows = 7,
    dotRadius = 2.5,
    gap: _gap = 4,
    accent = '#e85d24',
    dimColor,
  } = opts

  const dpr = window.devicePixelRatio || 1
  const w = canvas.clientWidth || canvas.width
  const h = canvas.clientHeight || canvas.height

  canvas.width = w * dpr
  canvas.height = h * dpr

  const ctx = canvas.getContext('2d')!
  ctx.scale(dpr, dpr)
  ctx.clearRect(0, 0, w, h)

  const [ar, ag, ab] = hexToRgb(accent)
  const accentFn = opts.accentFn ?? ((alpha: number) => `rgba(${ar},${ag},${ab},${alpha})`)

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches ||
    document.documentElement.dataset.theme === 'dark'
  const dim = dimColor ?? (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)')

  if (type === 'bar') {
    const colData = data ?? Array(cols).fill(0)
    const cellW = w / cols
    const cellH = h / rows

    for (let col = 0; col < cols; col++) {
      const intensity = Math.min(1, Math.max(0, colData[col] ?? 0))
      const filledRows = Math.round(intensity * rows)

      for (let row = 0; row < rows; row++) {
        const x = col * cellW + cellW / 2
        const y = (rows - 1 - row) * cellH + cellH / 2
        const filled = row < filledRows

        ctx.beginPath()
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
        ctx.fillStyle = filled
          ? accentFn(0.3 + 0.7 * (row / Math.max(filledRows - 1, 1)))
          : dim
        ctx.fill()
      }
    }
    return
  }

  if (type === 'fill') {
    const total = cols * rows
    const filled = Math.round(pct * total)
    const cellW = w / cols
    const cellH = h / rows

    let idx = 0
    for (let row = rows - 1; row >= 0; row--) {
      for (let col = 0; col < cols; col++) {
        const x = col * cellW + cellW / 2
        const y = row * cellH + cellH / 2
        const isFilled = idx < filled

        ctx.beginPath()
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
        ctx.fillStyle = isFilled ? accentFn(0.4 + 0.6 * (idx / Math.max(filled - 1, 1))) : dim
        ctx.fill()
        idx++
      }
    }
    return
  }

  if (type === 'ring') {
    const cx = w / 2
    const cy = h / 2
    const outerR = Math.min(w, h) / 2 - dotRadius - 2
    const innerR = outerR * 0.55
    const dotCount = 60
    const filledCount = Math.round(pct * dotCount)

    for (let i = 0; i < dotCount; i++) {
      const angle = (i / dotCount) * Math.PI * 2 - Math.PI / 2
      const r = innerR + (outerR - innerR) * 0.5
      const x = cx + r * Math.cos(angle)
      const y = cy + r * Math.sin(angle)
      const isFilled = i < filledCount

      ctx.beginPath()
      ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
      ctx.fillStyle = isFilled ? accentFn(0.4 + 0.6 * (i / Math.max(filledCount - 1, 1))) : dim
      ctx.fill()
    }
  }
}

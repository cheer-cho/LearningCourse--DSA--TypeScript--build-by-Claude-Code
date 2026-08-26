// solutions/ex03-set-hard.ts — reference solutions for ex03

/** Generic MinHeap (same as the one provided in the exercise file). */
class MinHeap<T> {
  private data: T[] = []
  constructor(private readonly compare: (a: T, b: T) => number) {}
  get size(): number { return this.data.length }
  peek(): T | undefined { return this.data[0] }
  push(val: T): void {
    this.data.push(val)
    this.bubbleUp(this.data.length - 1)
  }
  pop(): T | undefined {
    const top = this.data[0]
    const last = this.data.pop()
    if (this.data.length > 0 && last !== undefined) {
      this.data[0] = last
      this.sinkDown(0)
    }
    return top
  }
  private bubbleUp(i: number): void {
    while (i > 0) {
      const parent = (i - 1) >> 1
      if (this.compare(this.data[parent]!, this.data[i]!) <= 0) break
      ;[this.data[parent], this.data[i]] = [this.data[i]!, this.data[parent]!]
      i = parent
    }
  }
  private sinkDown(i: number): void {
    const n = this.data.length
    while (true) {
      let top = i
      const left = 2 * i + 1
      const right = 2 * i + 2
      if (left < n && this.compare(this.data[left]!, this.data[top]!) < 0) top = left
      if (right < n && this.compare(this.data[right]!, this.data[top]!) < 0) top = right
      if (top === i) break
      ;[this.data[top], this.data[i]] = [this.data[i]!, this.data[top]!]
      i = top
    }
  }
}

/**
 * isMergedStream
 * Pattern: two-sequence 2-D DP (module 19) — interleaving check.
 * dp[j] (rolling row) = can a[0..i) and b[0..j) form merged[0..i+j)?
 * A cell is true if the previous prefix was buildable AND the next
 * merged char matches the log character being consumed.
 * Time O(|a| * |b|), Space O(|b|) via the rolling 1-D row.
 */
export function isMergedStream(a: string, b: string, merged: string): boolean {
  const m = a.length
  const n = b.length
  if (m + n !== merged.length) return false

  // dp[j] = true if a[0..i) + b[0..j) can build merged[0..i+j)
  const dp = new Array<boolean>(n + 1).fill(false)
  dp[0] = true
  for (let j = 1; j <= n; j++) {
    dp[j] = dp[j - 1]! && b[j - 1] === merged[j - 1]
  }

  for (let i = 1; i <= m; i++) {
    dp[0] = dp[0]! && a[i - 1] === merged[i - 1]
    for (let j = 1; j <= n; j++) {
      const takeFromA = dp[j]! && a[i - 1] === merged[i + j - 1]
      const takeFromB = dp[j - 1]! && b[j - 1] === merged[i + j - 1]
      dp[j] = takeFromA || takeFromB
    }
  }

  return dp[n]!
}

/**
 * minTrailEffort
 * Pattern: Dijkstra variant (module 16) — minimize the MAX edge, not the sum.
 * Treat each cell as a node; an edge's weight is the absolute elevation
 * change. Relax with newEffort = max(effort so far, step change) instead
 * of addition — Dijkstra's greedy argument still holds because max, like
 * +, never decreases along a path. Lazy deletion skips stale heap entries.
 * Time O(R*C log(R*C)), Space O(R*C).
 */
export function minTrailEffort(heights: number[][]): number {
  const rows = heights.length
  const cols = heights[0]!.length
  if (rows === 1 && cols === 1) return 0

  const effort: number[] = new Array<number>(rows * cols).fill(Infinity)
  effort[0] = 0

  // Heap entries: [effort, row, col], smallest effort first.
  const heap = new MinHeap<[number, number, number]>((a, b) => a[0] - b[0])
  heap.push([0, 0, 0])

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]] as const

  while (heap.size > 0) {
    const [e, r, c] = heap.pop()!
    if (r === rows - 1 && c === cols - 1) return e
    if (e > effort[r * cols + c]!) continue // stale entry

    for (const [dr, dc] of dirs) {
      const nr = r + dr
      const nc = c + dc
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue
      const step = Math.abs(heights[nr]![nc]! - heights[r]![c]!)
      const nextEffort = Math.max(e, step)
      if (nextEffort < effort[nr * cols + nc]!) {
        effort[nr * cols + nc] = nextEffort
        heap.push([nextEffort, nr, nc])
      }
    }
  }

  return effort[rows * cols - 1]!
}

/**
 * runningMedian
 * Pattern: two heaps (module 12) — max-heap lower half, min-heap upper half.
 * Invariant after each insertion: lower.size === upper.size OR
 * lower.size === upper.size + 1 (lower holds the extra element).
 * Insert into lower first (or upper if the value belongs there), then
 * rebalance. Median: sizes equal → average of tops; else lower's top.
 * Time O(n log n), Space O(n).
 */
export function runningMedian(stream: number[]): number[] {
  const lower = new MinHeap<number>((a, b) => b - a) // max-heap: lower half
  const upper = new MinHeap<number>((a, b) => a - b) // min-heap: upper half
  const result: number[] = []

  for (const val of stream) {
    // Route new value
    if (lower.size === 0 || val <= lower.peek()!) {
      lower.push(val)
    } else {
      upper.push(val)
    }

    // Rebalance: lower may have at most 1 more element than upper
    if (lower.size > upper.size + 1) {
      upper.push(lower.pop()!)
    } else if (upper.size > lower.size) {
      lower.push(upper.pop()!)
    }

    // Read median
    if (lower.size === upper.size) {
      result.push((lower.peek()! + upper.peek()!) / 2)
    } else {
      result.push(lower.peek()!)
    }
  }

  return result
}

/**
 * minWindowCoverage
 * Pattern: variable sliding window + need/have counters (module 05).
 * Build a freq map of required chars; `formed` counts chars whose window
 * count meets the requirement. Expand right; once formed === distinct,
 * record the window and shrink from the left while it stays valid.
 * Time O(|text| + |required|), Space O(|required|).
 */
export function minWindowCoverage(text: string, required: string): string {
  if (required.length === 0 || text.length === 0) return ''

  const need = new Map<string, number>()
  for (const ch of required) {
    need.set(ch, (need.get(ch) ?? 0) + 1)
  }

  const have = new Map<string, number>()
  let formed = 0
  const distinct = need.size

  let left = 0
  let minLen = Infinity
  let minLeft = 0

  for (let right = 0; right < text.length; right++) {
    const ch = text[right]!
    have.set(ch, (have.get(ch) ?? 0) + 1)

    if (need.has(ch) && have.get(ch) === need.get(ch)) {
      formed++
    }

    // Shrink from left while the window is valid
    while (formed === distinct) {
      const windowLen = right - left + 1
      if (windowLen < minLen) {
        minLen = windowLen
        minLeft = left
      }

      const leftCh = text[left]!
      have.set(leftCh, have.get(leftCh)! - 1)
      if (need.has(leftCh) && have.get(leftCh)! < need.get(leftCh)!) {
        formed--
      }
      left++
    }
  }

  return minLen === Infinity ? '' : text.slice(minLeft, minLeft + minLen)
}

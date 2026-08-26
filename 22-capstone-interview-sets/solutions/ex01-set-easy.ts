// solutions/ex01-set-easy.ts — reference solutions for ex01

/**
 * Pattern: hash-map frequency count + linear scan for max (module 03).
 * Counting with a Map is O(n); finding the max count is O(n).
 * Ties broken by keeping alphabetically-first name during the max scan.
 * Time: O(n)  Space: O(n) for the frequency map.
 */
export function topSellingFlavor(sales: string[]): string {
  if (sales.length === 0) throw new Error('sales must not be empty')

  const counts = new Map<string, number>()
  for (const flavor of sales) {
    counts.set(flavor, (counts.get(flavor) ?? 0) + 1)
  }

  let bestFlavor = ''
  let bestCount = 0
  for (const [flavor, count] of counts) {
    if (count > bestCount || (count === bestCount && flavor < bestFlavor)) {
      bestCount = count
      bestFlavor = flavor
    }
  }
  return bestFlavor
}

/**
 * Pattern: two pointers on a sorted array (module 04).
 * Sorted input lets us move left/right pointers based on the current sum:
 * too small → advance left; too large → retreat right. One pass = O(n).
 * Time: O(n)  Space: O(1).
 */
export function twoCratesForCapacity(weights: number[], target: number): [number, number] | null {
  let left = 0
  let right = weights.length - 1
  while (left < right) {
    const sum = weights[left]! + weights[right]!
    if (sum === target) return [weights[left]!, weights[right]!]
    if (sum < target) left++
    else right--
  }
  return null
}

/**
 * Pattern: fixed-size sliding window (module 05).
 * Build the initial window sum in O(k), then slide in O(n-k):
 * add the incoming element, drop the outgoing element, track max.
 * Time: O(n)  Space: O(1).
 */
export function maxWindowUsage(readings: number[], k: number): number {
  if (k < 1 || k > readings.length) throw new Error('k out of range')

  let windowSum = 0
  for (let i = 0; i < k; i++) windowSum += readings[i]!

  let max = windowSum
  for (let right = k; right < readings.length; right++) {
    windowSum += readings[right]!
    windowSum -= readings[right - k]!
    if (windowSum > max) max = windowSum
  }
  return max
}

/**
 * Pattern: stack matching for bracket pairs (module 06).
 * Push every opener; on a closer, verify the top of the stack is its
 * matching opener (pop and compare). Unmatched closer or leftover openers
 * both mean unbalanced. Non-bracket characters are simply skipped.
 * Time: O(n)  Space: O(n) in the worst case (all openers).
 */
export function isBalancedTemplate(s: string): boolean {
  const stack: string[] = []
  const matching: Record<string, string> = { ')': '(', ']': '[', '}': '{' }
  const closers = new Set([')', ']', '}'])
  const openers = new Set(['(', '[', '{'])

  for (const ch of s) {
    if (openers.has(ch)) {
      stack.push(ch)
    } else if (closers.has(ch)) {
      if (stack.length === 0 || stack[stack.length - 1]! !== matching[ch]!) return false
      stack.pop()
    }
  }
  return stack.length === 0
}

/**
 * Pattern: BFS for shortest path in an unweighted grid (module 15).
 * BFS explores cells level-by-level, guaranteeing the first time we
 * reach the target it is via the minimum number of moves.
 * A visited set prevents revisiting; blocked cells are skipped.
 * Time: O(rows * cols)  Space: O(rows * cols) for queue + visited.
 */
export function shortestRouteToDock(grid: number[][]): number {
  const rows = grid.length
  if (rows === 0) return -1
  const cols = grid[0]!.length
  if (cols === 0) return -1
  if (grid[0]![0] === 1 || grid[rows - 1]![cols - 1] === 1) return -1

  const visited = new Set<number>()
  const encode = (r: number, c: number) => r * cols + c
  const queue: [number, number, number][] = [[0, 0, 0]]
  visited.add(encode(0, 0))

  const dirs: [number, number][] = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  while (queue.length > 0) {
    const [r, c, dist] = queue.shift()!
    if (r === rows - 1 && c === cols - 1) return dist
    for (const [dr, dc] of dirs) {
      const nr = r + dr
      const nc = c + dc
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue
      if (grid[nr]![nc] === 1) continue
      const key = encode(nr, nc)
      if (visited.has(key)) continue
      visited.add(key)
      queue.push([nr, nc, dist + 1])
    }
  }
  return -1
}

/**
 * Pattern: binary search boundary on a sorted, non-decreasing array (module 10).
 * We want the leftmost index where totals[mid] >= target; binary search
 * with a result-tracking variable gives O(log n) — far better than a
 * linear scan through potentially millions of days of rainfall data.
 * Time: O(log n)  Space: O(1).
 */
export function firstDayReachingTotal(totals: number[], target: number): number {
  let lo = 0
  let hi = totals.length - 1
  let result = -1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (totals[mid]! >= target) {
      result = mid
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }
  return result
}

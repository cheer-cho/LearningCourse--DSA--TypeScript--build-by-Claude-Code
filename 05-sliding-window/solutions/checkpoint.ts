// Checkpoint: "Traffic monitor" — per-second request counts feed four
// window checks a rate-limiter dashboard would need: worst fixed-size
// minute, longest run within budget, shortest run that breaches a
// threshold, and whether a known burst pattern occurred anywhere.
// Check: npm test -- 05

const MINUTE = 60

/**
 * Pattern: fixed-size sliding window (same shape as ex01's
 * maxWindowSum). O(n) time, O(1) space.
 */
export function worstMinute(counts: number[]): number {
  if (counts.length < MINUTE) throw new RangeError(`need at least ${MINUTE} seconds of data`)

  let windowSum = 0
  for (let i = 0; i < MINUTE; i++) windowSum += counts[i]!

  let worst = windowSum
  for (let r = MINUTE; r < counts.length; r++) {
    windowSum += counts[r]! - counts[r - MINUTE]!
    worst = Math.max(worst, windowSum)
  }
  return worst
}

/**
 * Pattern: variable-size window, shrink while invalid (sum > budget).
 * Guard `left <= right` so a zero/negative budget with all-zero data
 * can't shrink the window past the current right edge. O(n) time,
 * O(1) space.
 */
export function longestWithinBudget(counts: number[], budget: number): number {
  let left = 0
  let sum = 0
  let best = 0

  for (let right = 0; right < counts.length; right++) {
    sum += counts[right]!

    while (sum > budget && left <= right) {
      sum -= counts[left]!
      left++
    }

    best = Math.max(best, right - left + 1)
  }

  return best
}

/**
 * Pattern: variable-size window, inverted shrink condition (shrink
 * WHILE valid to find the shortest) — same shape as ex05's
 * shortestSubarrayAtLeast. O(n) time, O(1) space.
 */
export function shortestBreach(counts: number[], threshold: number): number {
  let left = 0
  let sum = 0
  let best = Infinity

  for (let right = 0; right < counts.length; right++) {
    sum += counts[right]!

    while (sum >= threshold && left <= right) {
      best = Math.min(best, right - left + 1)
      sum -= counts[left]!
      left++
    }
  }

  return best === Infinity ? 0 : best
}

/**
 * Pattern: fixed-size window with a diff map (window count minus needed
 * count per value) and a "how many values are out of balance?" counter
 * — the same O(1)-match idea as ex06's 26-letter array, generalized to
 * an unbounded set of integer values via a Map. O(n + m) time, O(m)
 * space.
 */
export function hasPatternBurst(counts: number[], pattern: number[]): boolean {
  const m = pattern.length
  const n = counts.length
  if (m === 0) return true
  if (m > n) return false

  const diff = new Map<number, number>()
  let outOfBalance = 0

  const adjust = (value: number, delta: number): void => {
    const prev = diff.get(value) ?? 0
    const next = prev + delta
    if (prev === 0 && next !== 0) outOfBalance++
    else if (prev !== 0 && next === 0) outOfBalance--
    diff.set(value, next)
  }

  for (const v of pattern) adjust(v, -1)

  for (let r = 0; r < n; r++) {
    adjust(counts[r]!, 1)
    if (r >= m) adjust(counts[r - m]!, -1)
    if (r >= m - 1 && outOfBalance === 0) return true
  }

  return false
}

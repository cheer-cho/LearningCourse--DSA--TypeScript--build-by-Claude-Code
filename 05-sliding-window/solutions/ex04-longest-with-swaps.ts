// Longest substring that can be made all-one-character by replacing at
// most k characters ("character replacement"). Variable-size window:
// valid while (window size - count of the window's most frequent char)
// <= k, i.e. the number of characters you'd need to swap is within budget.
// Check: npm test -- 05 -t ex04

/**
 * Pattern: variable-size window with a frequency map and a stale
 * "running max frequency" high-water mark (see the exercise docstring
 * for why staleness is safe). Grow every step; shrink by exactly one
 * when the window's replacement cost exceeds `k`. O(n) time,
 * O(alphabet size) space.
 */
export function longestUniformWithKEdits(s: string, k: number): number {
  if (k < 0) throw new RangeError('k must be non-negative')

  const freq = new Map<string, number>()
  let left = 0
  let maxFreq = 0
  let best = 0

  for (let right = 0; right < s.length; right++) {
    const c = s[right]!
    const count = (freq.get(c) ?? 0) + 1
    freq.set(c, count)
    maxFreq = Math.max(maxFreq, count)

    const windowSize = right - left + 1
    if (windowSize - maxFreq > k) {
      const leaving = s[left]!
      freq.set(leaving, freq.get(leaving)! - 1)
      left++
    }

    best = Math.max(best, right - left + 1)
  }

  return best
}

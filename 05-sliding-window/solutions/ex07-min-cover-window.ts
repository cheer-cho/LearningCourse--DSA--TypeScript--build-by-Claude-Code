// Smallest window of `s` that covers every character of `t`, counting
// multiplicity (two 'a's in t need two 'a's in the window). The hard
// variant: grow until the window satisfies the requirement, then shrink
// while it STILL satisfies it, tracking the best (shortest) window seen.
// Check: npm test -- 05 -t ex07

/**
 * Pattern: variable-size window with need/have counters. `need` maps
 * each required character to how many more are still missing from the
 * window; `missing` is the total outstanding count across all
 * characters. Grow until `missing === 0` (window covers `t`), then
 * shrink while it still does, recording the shortest window each time.
 * O(|s| + |t|) time and space.
 */
export function minWindowCover(s: string, t: string): string {
  if (t.length === 0 || s.length < t.length) return ''

  const need = new Map<string, number>()
  for (const c of t) need.set(c, (need.get(c) ?? 0) + 1)
  let missing = t.length

  let left = 0
  let bestLeft = -1
  let bestLen = Infinity

  for (let right = 0; right < s.length; right++) {
    const c = s[right]!
    const neededCount = need.get(c)
    if (neededCount !== undefined) {
      if (neededCount > 0) missing--
      need.set(c, neededCount - 1)
    }

    while (missing === 0) {
      if (right - left + 1 < bestLen) {
        bestLen = right - left + 1
        bestLeft = left
      }
      const leaving = s[left]!
      const neededLeaving = need.get(leaving)
      if (neededLeaving !== undefined) {
        if (neededLeaving >= 0) missing++
        need.set(leaving, neededLeaving + 1)
      }
      left++
    }
  }

  return bestLeft === -1 ? '' : s.slice(bestLeft, bestLeft + bestLen)
}

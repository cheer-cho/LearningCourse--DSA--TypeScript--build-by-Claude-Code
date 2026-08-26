// Does any contiguous run of `haystack` contain exactly the same letters
// as `needle` (same multiset, any order)? Fixed-size window (length
// needle.length) sliding across haystack, comparing frequency counts
// with an O(1) "how many letters currently match?" counter instead of
// re-comparing all 26 counts on every step.
// Check: npm test -- 05 -t ex06

const ALPHABET_SIZE = 26

function letterIndex(ch: string): number {
  return ch.charCodeAt(0) - 97 // 'a' -> 0
}

/**
 * Pattern: fixed-size sliding window over frequency-count arrays, with a
 * `matches` counter that tracks how many of the 26 letters currently
 * have the right count in the window — updated in O(1) per add/remove
 * instead of re-comparing all 26 counts. O(n + m) time, O(alphabet)
 * space, where n = haystack.length and m = needle.length.
 */
export function containsPermutation(needle: string, haystack: string): boolean {
  const m = needle.length
  const n = haystack.length
  if (m === 0) return true
  if (m > n) return false

  const need = new Array<number>(ALPHABET_SIZE).fill(0)
  const window = new Array<number>(ALPHABET_SIZE).fill(0)
  for (const ch of needle) need[letterIndex(ch)]!++

  // Letters not needed at all start out "matching" (both counts are 0).
  let matches = need.filter((count) => count === 0).length

  for (let r = 0; r < n; r++) {
    const enter = letterIndex(haystack[r]!)
    window[enter]!++
    if (window[enter] === need[enter]) matches++
    else if (window[enter] === need[enter]! + 1) matches--

    if (r >= m) {
      const leave = letterIndex(haystack[r - m]!)
      window[leave]!--
      if (window[leave] === need[leave]) matches++
      else if (window[leave] === need[leave]! - 1) matches--
    }

    if (r >= m - 1 && matches === ALPHABET_SIZE) return true
  }

  return false
}

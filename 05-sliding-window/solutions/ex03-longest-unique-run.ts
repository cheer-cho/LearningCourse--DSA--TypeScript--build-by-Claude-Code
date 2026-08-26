// Longest substring without a repeated character. Variable-size window:
// grow the right edge every step, shrink the left edge past any repeat
// still inside the window (last-seen index per character).
// Check: npm test -- 05 -t ex03

/**
 * Pattern: variable-size window with a "last seen index" map. Instead of
 * shrinking one character at a time, jump `left` directly past the
 * previous occurrence of the repeated character (if it's still inside
 * the window). Each index is visited O(1) amortized. O(n) time,
 * O(min(n, alphabet)) space.
 */
export function longestUnique(s: string): number {
  const lastSeen = new Map<string, number>()
  let left = 0
  let best = 0

  for (let right = 0; right < s.length; right++) {
    const c = s[right]!
    const prev = lastSeen.get(c)
    if (prev !== undefined && prev >= left) {
      left = prev + 1
    }
    lastSeen.set(c, right)
    best = Math.max(best, right - left + 1)
  }

  return best
}

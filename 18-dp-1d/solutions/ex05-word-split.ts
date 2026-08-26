// Reference solution — ex05

// State: splittable(i) = can prefix s[0..i) be fully split into words?
// Choice: which earlier cut point j < i to trust as the last boundary.
// Recurrence: splittable(i) = OR over j < i of
//   (splittable(j) AND s.slice(j, i) is a known word).
// Base case: splittable(0) = true (nothing to split).
// Order: bottom-up over i ascending — every j checked is < i, so it's
// always already computed. A Set gives O(1) word lookups.
// O(n^2) time (n = s.length; substring slicing is the dominant cost
// per pair), O(n) space.
export function canSegment(s: string, words: string[]): boolean {
  const wordSet = new Set(words)
  const n = s.length
  const splittable = new Array<boolean>(n + 1).fill(false)
  splittable[0] = true

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (splittable[j] && wordSet.has(s.slice(j, i))) {
        splittable[i] = true
        break
      }
    }
  }

  return splittable[n]!
}

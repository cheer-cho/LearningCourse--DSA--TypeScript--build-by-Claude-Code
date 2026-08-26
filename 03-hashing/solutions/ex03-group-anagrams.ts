export function isAnagram(a: string, b: string): boolean {
  // Pattern: counting map as a fingerprint. Tally `a`'s letters, then
  // spend `b`'s letters against that tally — if anything goes negative
  // or is left over, they're not anagrams. Time: O(k). Space: O(k).
  if (a.length !== b.length) return false
  const counts = new Map<string, number>()
  for (const ch of a) counts.set(ch, (counts.get(ch) ?? 0) + 1)
  for (const ch of b) {
    const remaining = counts.get(ch)
    if (remaining === undefined || remaining === 0) return false
    counts.set(ch, remaining - 1)
  }
  return true
}

export function groupAnagrams(words: string[]): string[][] {
  // Pattern: grouping by a canonical key. Sorting a word's letters
  // gives every anagram of it the same key; a map from key to bucket
  // does the clustering. Time: O(n * k log k). Space: O(n * k).
  const groups = new Map<string, string[]>()
  for (const word of words) {
    const key = [...word].sort().join('')
    const group = groups.get(key)
    if (group) group.push(word)
    else groups.set(key, [word])
  }
  return [...groups.values()]
}

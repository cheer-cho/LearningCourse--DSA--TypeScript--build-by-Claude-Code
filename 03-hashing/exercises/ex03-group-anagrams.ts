// Scenario: a word-game backend needs to cluster words that are
// letter-for-letter rearrangements of each other. Pattern: grouping by
// a canonical key derived from each item.
// Run: npm test -- 03 -t ex03

/**
 * True if `a` and `b` are anagrams of each other (same letters, same
 * multiplicities, order ignored).
 *
 * @param a - first word
 * @param b - second word
 * @returns whether `a` and `b` are anagrams
 *
 * isAnagram("listen", "silent") -> true
 * isAnagram("rat", "car") -> false
 * isAnagram("a", "ab") -> false
 *
 * Target complexity: O(k) time, O(k) space (k = word length).
 */
export function isAnagram(a: string, b: string): boolean {
  throw new Error('TODO: implement me')
}

/**
 * Groups `words` by shared letters — every anagram of a word lands in
 * the same group.
 *
 * Canonical key options (either is fine here): sort each word's
 * letters ("eat" -> "aet"), or build a 26-count signature. Sorting is
 * simpler to write; counting avoids the O(k log k) sort per word when
 * the alphabet is small and fixed.
 *
 * @param words - the words to group (may be empty)
 * @returns the groups; group order and each group's internal word
 *   order are both unconstrained
 *
 * groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
 *   -> [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]  (some order)
 * groupAnagrams([]) -> []
 *
 * Target complexity: O(n * k log k) time (n words, k = max word
 * length), O(n * k) space.
 */
export function groupAnagrams(words: string[]): string[][] {
  throw new Error('TODO: implement me')
}

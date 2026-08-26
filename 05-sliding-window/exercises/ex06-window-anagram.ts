// Does any contiguous run of `haystack` contain exactly the same letters
// as `needle` (same multiset, any order)? Fixed-size window (length
// needle.length) sliding across haystack, comparing frequency counts
// with an O(1) "how many letters currently match?" counter instead of
// re-comparing all 26 counts on every step.
// Check: npm test -- 05 -t ex06

/**
 * True if some contiguous substring of `haystack` is a permutation
 * (anagram) of `needle` — same characters, same counts, any order.
 *
 * Assumes both strings contain only lowercase English letters (a-z).
 *
 * @param needle - the letters to match (as a multiset).
 * @param haystack - the string to search.
 * @returns whether a matching window exists.
 *
 * @example containsPermutation('abc', 'eidbacoo') -> true   // "bac"
 * @example containsPermutation('ab', 'eidboaoo') -> false
 * @example containsPermutation('', 'anything') -> true
 *
 * Target: O(n + m) time, O(alphabet size) space, where n = haystack.length
 * and m = needle.length.
 */
export function containsPermutation(needle: string, haystack: string): boolean {
  throw new Error('TODO: implement me')
}

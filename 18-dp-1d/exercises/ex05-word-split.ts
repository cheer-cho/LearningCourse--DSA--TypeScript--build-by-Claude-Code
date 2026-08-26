/**
 * ex05 — Can a punch-tape be split into known instruction words?
 *
 * Scenario: an old machine reads a continuous tape of characters with
 * no spaces (`s`). A dictionary of recognized instruction `words`
 * tells you which contiguous chunks are valid tokens. Decide whether
 * the WHOLE tape can be cut into a sequence of valid tokens back to
 * back (a token may repeat; order in `words` doesn't matter).
 *
 * Check: npm test -- 18 -t ex05
 */

/**
 * Whether `s` can be partitioned into a sequence of substrings that
 * are each in `words` (any word may be reused any number of times).
 *
 * State: splittable(i) = can the prefix s[0..i) be fully split into
 * known words?
 * Choice: pick the LAST cut point j < i such that s[j..i) is a known
 * word and splittable(j) is already true.
 * Recurrence: splittable(i) = OR over j < i where splittable(j) is
 * true and s.slice(j, i) is in the word set.
 * Base case: splittable(0) = true (the empty prefix needs no cuts).
 *
 * @param s - the tape to split (no separators).
 * @param words - the dictionary of recognized tokens.
 * @returns true if `s` can be fully split into words from `words`.
 * @example canSegment('gogopher', ['go', 'gopher']) -> true
 * @example canSegment('gogopher', ['go', 'go', 'go']) -> false
 * @example canSegment('', ['anything']) -> true
 * Target: O(n^2) time (n = s.length, treating substring/set lookups as
 *   O(1) amortized for typical token lengths), O(n) space.
 */
export function canSegment(s: string, words: string[]): boolean {
  throw new Error('TODO: implement me')
}

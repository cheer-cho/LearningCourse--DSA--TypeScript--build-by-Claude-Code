// Longest substring without a repeated character. Variable-size window:
// grow the right edge every step, shrink the left edge past any repeat
// still inside the window (last-seen index per character).
// Check: npm test -- 05 -t ex03

/**
 * Length of the longest substring of `s` with no repeated character.
 *
 * @param s - the input string.
 * @returns the longest unique-character run's length (0 for an empty string).
 *
 * @example longestUnique('abcabcbb') -> 3   // "abc"
 * @example longestUnique('bbbbb') -> 1      // "b"
 * @example longestUnique('') -> 0
 *
 * Target: O(n) time, O(min(n, alphabet size)) space.
 */
export function longestUnique(s: string): number {
  throw new Error('TODO: implement me')
}

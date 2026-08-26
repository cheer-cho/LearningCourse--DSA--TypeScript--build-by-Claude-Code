// Smallest window of `s` that covers every character of `t`, counting
// multiplicity (two 'a's in t need two 'a's in the window). The hard
// variant: grow until the window satisfies the requirement, then shrink
// while it STILL satisfies it, tracking the best (shortest) window seen.
// Check: npm test -- 05 -t ex07

/**
 * Shortest substring of `s` that contains every character of `t`, at
 * least as many times as it appears in `t`.
 *
 * @param s - the string to search.
 * @param t - the required characters (with multiplicity).
 * @returns the shortest covering substring, or `''` if none exists (or
 *   `t` is empty).
 *
 * @example minWindowCover('ADOBECODEBANC', 'ABC') -> 'BANC'
 * @example minWindowCover('a', 'aa') -> ''       // not enough 'a's
 *
 * Target: O(|s| + |t|) time, O(|s| + |t|) space.
 */
export function minWindowCover(s: string, t: string): string {
  throw new Error('TODO: implement me')
}

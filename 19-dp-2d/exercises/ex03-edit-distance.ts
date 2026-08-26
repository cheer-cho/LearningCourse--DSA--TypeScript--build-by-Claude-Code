/**
 * ex03 — Edit Distance (Levenshtein Distance)
 *
 * Scenario: a spell-checker computes the minimum number of single-character
 * edits (insert, delete, replace) needed to transform one word into another.
 * Pattern covered: two-sequence DP — the Wagner-Fischer algorithm.
 * Check: npm test -- 19 -t ex03
 */

/**
 * Minimum number of single-character edits to transform string `a` into `b`.
 * The three allowed edit operations are insert, delete, and replace (each
 * costs 1).
 *
 * State: dp[i][j] = edit distance between a[0..i-1] and b[0..j-1].
 * Base cases: dp[0][j] = j (insert j chars into empty string);
 *             dp[i][0] = i (delete i chars from a to reach empty string).
 * Recurrence:
 *   if a[i-1] === b[j-1]: dp[i][j] = dp[i-1][j-1]      (↖ match — free)
 *   else dp[i][j] = 1 + min(
 *     dp[i-1][j-1],   // ↖ replace: swap a[i-1] for b[j-1]
 *     dp[i][j-1],     // ← insert:  insert b[j-1] into b side
 *     dp[i-1][j]      // ↑ delete:  delete a[i-1] from a
 *   )
 *
 * @param a - source string
 * @param b - target string
 * @returns the minimum number of edits to transform a into b
 * @example editDistance('horse', 'ros') -> 3
 * @example editDistance('intention', 'execution') -> 5
 * @example editDistance('', 'abc') -> 3
 * @example editDistance('abc', 'abc') -> 0
 * Target: O(n * m) time, O(n * m) space (n = a.length, m = b.length).
 */
export function editDistance(a: string, b: string): number {
  throw new Error('TODO: implement me')
}

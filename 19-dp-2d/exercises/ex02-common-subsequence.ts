/**
 * ex02 — Longest Common Subsequence
 *
 * Scenario: two DNA strands are compared to find how much they share;
 * a subsequence may skip characters but must preserve order.
 * Pattern: two-sequence DP — dp[i][j] = LCS length for first i chars of a
 *   and first j chars of b.
 *
 * Check: npm test -- 19 -t ex02
 */

/**
 * Length of the Longest Common Subsequence (LCS) of strings `a` and `b`.
 *
 * A subsequence keeps the original order but may skip characters.
 * "ace" and "abcde" share LCS "ace" of length 3.
 *
 * State: dp[i][j] = LCS length of a[0..i-1] and b[0..j-1].
 * Choice: if a[i-1] === b[j-1], extend the diagonal (match);
 *   otherwise take the best of "drop last char of a" (dp[i-1][j])
 *   or "drop last char of b" (dp[i][j-1]).
 * Recurrence:
 *   dp[i][j] = dp[i-1][j-1] + 1            if a[i-1] === b[j-1]
 *   dp[i][j] = max(dp[i-1][j], dp[i][j-1]) otherwise
 * Base cases: dp[0][j] = 0, dp[i][0] = 0 (empty prefix → LCS 0).
 *
 * @param a - first string.
 * @param b - second string.
 * @returns the length of their longest common subsequence.
 * @example lcsLength('ace', 'abcde') -> 3
 * @example lcsLength('abc', 'abc') -> 3
 * @example lcsLength('abc', 'def') -> 0
 * @example lcsLength('', 'abc') -> 0
 * Target: O(n * m) time, O(n * m) space (n = a.length, m = b.length).
 */
export function lcsLength(a: string, b: string): number {
  throw new Error('TODO: implement me')
}

/**
 * Reconstruct one actual Longest Common Subsequence of `a` and `b`.
 *
 * Fill the same DP table as `lcsLength`, then backtrack from dp[n][m]:
 * - If a[i-1] === b[j-1]: this character is in the LCS — move diagonally ↖.
 * - Else move toward the larger neighbour: ↑ if dp[i-1][j] >= dp[i][j-1],
 *   else ←.
 * Collect matched characters in reverse, then reverse the result.
 *
 * @param a - first string.
 * @param b - second string.
 * @returns one LCS string (any one of equal length is acceptable).
 * @example lcsString('ace', 'abcde') -> 'ace'
 * @example lcsString('abcba', 'abcbcba') -> 'abcba'
 * @example lcsString('', 'abc') -> ''
 * Target: O(n * m) time, O(n * m) space.
 */
export function lcsString(a: string, b: string): string {
  throw new Error('TODO: implement me')
}

/**
 * ex07 — Palindrome DP
 *
 * Scenario: a string editor highlights palindromic substrings and finds the
 * longest one; implemented via the expand-around-center technique.
 * Pattern covered: expand-around-center for palindrome detection — O(n²) time
 * O(1) space, compared to the O(n²) table approach which uses O(n²) space.
 * Check: npm test -- 19 -t ex07
 */

/**
 * Count all palindromic substrings (contiguous subsequences that read the
 * same forwards and backwards). Each position in the original string is a
 * separate occurrence even if the character is repeated.
 *
 * Method: expand-around-center. For each index i, treat it as the center
 * of an odd-length palindrome and as the gap between i and i+1 for an
 * even-length palindrome. Expand outward as long as both ends match.
 * Count each valid (center, radius) pair as one palindrome.
 *
 * Note: "aba" has 4 palindromic substrings — "a" (pos 0), "b" (pos 1),
 * "a" (pos 2), and "aba". Each contiguous occurrence is counted separately.
 *
 * @param s - input string
 * @returns total count of palindromic substrings
 * @example countPalindromicSubstrings('abc') -> 3
 * @example countPalindromicSubstrings('aaa') -> 6
 * @example countPalindromicSubstrings('aba') -> 4
 * Target: O(n²) time, O(1) space.
 */
export function countPalindromicSubstrings(s: string): number {
  throw new Error('TODO: implement me')
}

/**
 * Return the longest palindromic substring of `s`. If there are multiple
 * of the same maximum length, return the one starting at the smallest index.
 *
 * Method: expand-around-center — O(n²) time, O(1) space.
 * Alternative O(n²) table DP: dp[i][j] = true if s[i..j] is a palindrome;
 * requires O(n²) space and O(n²) time. The expand-around-center approach
 * matches the time but is superior in space.
 * (Manacher's algorithm achieves O(n) time, O(n) space — beyond this module.)
 *
 * @param s - input string (non-empty)
 * @returns the longest palindromic substring
 * @example longestPalindromicSubstring('babad') -> 'bab'   // or 'aba'
 * @example longestPalindromicSubstring('cbbd') -> 'bb'
 * @example longestPalindromicSubstring('a') -> 'a'
 * @example longestPalindromicSubstring('ac') -> 'a'
 * Target: O(n²) time, O(1) space.
 */
export function longestPalindromicSubstring(s: string): string {
  throw new Error('TODO: implement me')
}

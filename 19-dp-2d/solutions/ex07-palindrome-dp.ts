// Reference solution — ex07

// --- countPalindromicSubstrings ---
// Expand-around-center: for each index i, try two centers:
//   1. Odd-length palindromes centered at i (single char center).
//   2. Even-length palindromes centered between i and i+1.
// Expand outward while characters match; count each valid (center, radius).
// O(n²) time, O(1) space.
export function countPalindromicSubstrings(s: string): number {
  let count = 0

  function expand(left: number, right: number): void {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++
      left--
      right++
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i)     // odd-length
    expand(i, i + 1) // even-length
  }

  return count
}

// --- longestPalindromicSubstring ---
// Same expand-around-center approach; track the start index and length of
// the best palindrome found. Return the first (leftmost) if ties.
//
// Comparison with O(n²) table DP:
//   Table DP: dp[i][j] = true if s[i..j] is a palindrome.
//   Base: dp[i][i] = true; dp[i][i+1] = (s[i]===s[i+1]).
//   Fill: dp[i][j] = (s[i]===s[j]) && dp[i+1][j-1]. Requires O(n²) space.
//   Expand-around-center: same O(n²) time, O(1) space — preferred here.
// O(n²) time, O(1) space.
export function longestPalindromicSubstring(s: string): string {
  if (s.length === 0) return ''

  let bestStart = 0
  let bestLen = 1

  function expand(left: number, right: number): void {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const len = right - left + 1
      if (len > bestLen) {
        bestLen = len
        bestStart = left
      }
      left--
      right++
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i)     // odd-length
    expand(i, i + 1) // even-length
  }

  return s.slice(bestStart, bestStart + bestLen)
}

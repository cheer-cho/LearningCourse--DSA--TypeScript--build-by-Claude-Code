// Reference solution — ex02

function isAlphanumeric(ch: string): boolean {
  return /[a-z0-9]/i.test(ch)
}

// Pattern: opposite-ends two pointers over a string. Skip
// non-alphanumeric characters from both ends, compare
// case-insensitively.
// Target: O(n) time, O(1) space.
export function isCleanPalindrome(s: string): boolean {
  let l = 0
  let r = s.length - 1

  while (l < r) {
    while (l < r && !isAlphanumeric(s[l]!)) l++
    while (l < r && !isAlphanumeric(s[r]!)) r--
    if (s[l]!.toLowerCase() !== s[r]!.toLowerCase()) return false
    l++
    r--
  }

  return true
}

function isPalindromeRange(s: string, l: number, r: number): boolean {
  while (l < r) {
    if (s[l] !== s[r]) return false
    l++
    r--
  }
  return true
}

// Pattern: same closing-in scan as isCleanPalindrome; on the first
// mismatch, branch — try skipping the left char or the right char,
// and check whether the remaining substring is a straight palindrome.
// Target: O(n) time (the branch only fires once), O(1) space.
export function validAfterOneDelete(s: string): boolean {
  let l = 0
  let r = s.length - 1

  while (l < r) {
    if (s[l] !== s[r]) {
      return isPalindromeRange(s, l + 1, r) || isPalindromeRange(s, l, r - 1)
    }
    l++
    r--
  }

  return true
}

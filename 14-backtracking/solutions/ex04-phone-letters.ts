// Reference solution — ex04
// (PHONE_LETTERS is re-declared here, not imported from exercises/, so
// this file stays a drop-in replacement for the stub during verification.)

/** Digit -> its letters on a classic phone keypad. 0 and 1 map to nothing. */
export const PHONE_LETTERS: Readonly<Record<string, string>> = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}

/**
 * Pattern: backtracking with a per-position fixed choice set (each
 * digit's letters) instead of a shrinking "remaining elements" list —
 * still choose/explore/unchoose, just sourced from `PHONE_LETTERS`.
 * Time: O(4^n * n) where n = digits.length. Space: O(n) recursion + path.
 */
export function letterCombos(digits: string): string[] {
  if (digits.length === 0) return []

  const results: string[] = []
  const path: string[] = []

  function backtrack(index: number): void {
    if (index === digits.length) {
      results.push(path.join(''))
      return
    }
    const letters = PHONE_LETTERS[digits[index]!] ?? ''
    for (const letter of letters) {
      path.push(letter)
      backtrack(index + 1)
      path.pop()
    }
  }

  backtrack(0)
  return results
}

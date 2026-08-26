// An old phone keypad's T9 text predictor: given a digit string,
// generate every letter combination the digits could spell. Pattern:
// backtracking — one loop-range per position, sourced from a fixed
// mapping (a flavor of the subsets/combinations template with a
// per-level choice set instead of remaining-array). Check: npm test -- 14 -t ex04

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
 * Every string obtainable by choosing one letter per digit of
 * `digits`, per the `PHONE_LETTERS` keypad mapping, in digit order.
 *
 * @param digits - a string of digits '2'-'9' (may be empty).
 * @returns every letter combination; order does not matter to the caller.
 * @remarks Edge case: `digits === ''` -> `[]` (NOT `['']` — pinned by a test).
 * @example letterCombos('23') -> ['ad','ae','af','bd','be','bf','cd','ce','cf']
 * Target complexity: O(4^n * n) time where n = digits.length (at most 4 letters/digit).
 */
export function letterCombos(digits: string): string[] {
  throw new Error('TODO: implement me')
}

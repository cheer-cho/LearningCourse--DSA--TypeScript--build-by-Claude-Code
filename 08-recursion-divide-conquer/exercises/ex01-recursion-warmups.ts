/**
 * ex01 — Recursion warmups
 *
 * Four small recursive functions. For each, name the base case and the
 * shrinking step to yourself before coding — that's the whole plan.
 *
 * Check: npm test -- 08 -t ex01
 */

/**
 * The product of every integer from 1 to n.
 *
 * Base case: n <= 1 -> 1 (nothing left to multiply).
 * Shrinking step: n * factorial(n - 1).
 *
 * @param n - a non-negative integer.
 * @returns n! (1 for n === 0 by convention).
 * @example factorial(0) -> 1
 * @example factorial(5) -> 120
 * Target: O(n) time, O(n) space (call stack depth).
 */
export function factorial(n: number): number {
  throw new Error('TODO: implement me')
}

/**
 * The sum of the decimal digits of a non-negative integer.
 *
 * Base case: n < 10 -> n (a single digit is its own digit sum).
 * Shrinking step: (n % 10) + sumDigits(Math.floor(n / 10)) — peel off
 * the last digit, recurse on the rest.
 *
 * @param n - a non-negative integer.
 * @returns the sum of n's digits.
 * @example sumDigits(0) -> 0
 * @example sumDigits(1234) -> 10
 * Target: O(d) time, O(d) space, where d is the number of digits.
 */
export function sumDigits(n: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Build [n, n-1, ..., 1] by counting down recursively (no loops).
 *
 * Base case: n <= 0 -> [] (nothing left to count).
 * Shrinking step: [n, ...countdown(n - 1)] — n first, then trust the
 * recursive call for the rest.
 *
 * @param n - the starting count (may be 0 or negative — both give []).
 * @returns an array counting down from n to 1.
 * @example countdown(0) -> []
 * @example countdown(4) -> [4, 3, 2, 1]
 * Target: O(n) time, O(n) space.
 */
export function countdown(n: number): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Reverse a string using recursion only (no .reverse(), no loops).
 *
 * Base case: length <= 1 -> the string itself (empty or single char is
 * its own reverse).
 * Shrinking step: reverseStringRec(rest) + firstChar — reverse
 * everything after the first character, then put the first character
 * last.
 *
 * @param s - the string to reverse.
 * @returns s reversed.
 * @example reverseStringRec('') -> ''
 * @example reverseStringRec('abcde') -> 'edcba'
 * Target: O(n^2) time (string concatenation copies), O(n) space is fine
 * here — this exercise is about the recursive shape, not optimality.
 */
export function reverseStringRec(s: string): string {
  throw new Error('TODO: implement me')
}

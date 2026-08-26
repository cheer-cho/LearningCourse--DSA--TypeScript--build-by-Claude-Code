/**
 * ex06 — Recursion to iteration, with an explicit stack
 *
 * Both functions below have a recursive definition (shown in comments,
 * for reference only — do not call these, they are not implemented).
 * Your job is to implement the ITERATIVE version: a loop plus your own
 * explicit array-as-stack standing in for the call stack the runtime
 * would otherwise build. Do this when input can be deep enough to blow
 * the real call stack — see the "deep enough to overflow" tests below.
 *
 * Check: npm test -- 08 -t ex06
 */

import type { NestedNumber } from './ex04-nested-structures'

// Reference only — mirrors ex04's deepSum. A deeply nested input makes
// this overflow the call stack (one frame per level of nesting):
//
//   function deepSum(nested: NestedNumber): number {
//     if (typeof nested === 'number') return nested
//     let total = 0
//     for (const child of nested) total += deepSum(child)
//     return total
//   }

/**
 * Same contract as ex04's deepSum, but iterative: use an array as an
 * explicit stack instead of the call stack, so nesting depth no longer
 * limits how deep the input can go.
 *
 * @param nested - a number, or an array of NestedNumber (any depth).
 * @returns the sum of every number in the structure.
 * @example deepSumIterative(5) -> 5
 * @example deepSumIterative([1, [2, 3], [[4]], 5]) -> 15
 * Target: O(total numbers) time, O(max width x max depth) space
 * (bounded by the explicit stack, never the call stack).
 */
export function deepSumIterative(nested: NestedNumber): number {
  throw new Error('TODO: implement me')
}

// Reference only — mirrors ex01's countdown. A large n makes this
// overflow the call stack (one frame per count):
//
//   function countdown(n: number): number[] {
//     if (n <= 0) return []
//     return [n, ...countdown(n - 1)]
//   }

/**
 * Same contract as ex01's countdown ([n, n-1, ..., 1]), but iterative:
 * use an explicit stack (push 1..n, then pop) instead of relying on
 * the call stack to unwind the answer in the right order.
 *
 * @param n - the starting count (may be 0 or negative — both give []).
 * @returns an array counting down from n to 1.
 * @example countdownIterative(0) -> []
 * @example countdownIterative(4) -> [4, 3, 2, 1]
 * Target: O(n) time, O(n) space (the explicit stack, never the call
 * stack — this must not overflow for large n).
 */
export function countdownIterative(n: number): number[] {
  throw new Error('TODO: implement me')
}

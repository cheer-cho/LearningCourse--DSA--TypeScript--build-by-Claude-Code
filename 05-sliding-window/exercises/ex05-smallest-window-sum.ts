// Shortest contiguous run whose sum reaches a target, over non-negative
// numbers. The shrink direction inverts here versus the usual template:
// grow until the window IS valid (sum >= target), then shrink WHILE it's
// still valid to find the shortest one, recording the answer just before
// each shrink breaks validity.
// Check: npm test -- 05 -t ex05

/**
 * Length of the shortest contiguous subarray of `nums` whose sum is at
 * least `target`.
 *
 * @param nums - non-negative numbers.
 * @param target - the minimum sum to reach.
 * @returns the shortest such length, or 0 if no subarray reaches `target`.
 *
 * @example shortestSubarrayAtLeast([2, 3, 1, 2, 4, 3], 7) -> 2   // [4, 3]
 * @example shortestSubarrayAtLeast([1, 1, 1], 10) -> 0
 *
 * Target: O(n) time, O(1) space.
 */
export function shortestSubarrayAtLeast(nums: number[], target: number): number {
  throw new Error('TODO: implement me')
}

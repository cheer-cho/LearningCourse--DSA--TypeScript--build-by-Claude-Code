/**
 * Merge two sorted arrays two ways: into a brand-new array, and — the
 * classic interview twist — in place when one array already reserves
 * the spare room at its end.
 *
 * Test: npm test -- 02 -t ex04
 */

/**
 * Merge two sorted arrays into a new sorted array.
 *
 * @example merge([1, 3, 5], [2, 4]) -> [1, 2, 3, 4, 5]
 *
 * Target complexity: O(m + n) time, O(m + n) space
 */
export function merge(a: number[], b: number[]): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Merge `b` into `a` in place. `a` has length `m + b.length`: the
 * first `m` entries hold sorted data, the rest are unused placeholder
 * slots reserved for the merge. Fill from the BACK so real values are
 * never overwritten before they are read.
 *
 * @param a - sorted data in a[0..m), placeholder values in a[m..)
 * @param m - count of valid (sorted) elements at the start of `a`
 * @param b - sorted array to merge in, fully valid
 * @example a = [1, 3, 0, 0], m = 2, b = [2, 4] -> a becomes [1, 2, 3, 4]
 *
 * Target complexity: O(m + n) time, O(1) extra space
 */
export function mergeInto(a: number[], m: number, b: number[]): void {
  throw new Error('TODO: implement me')
}

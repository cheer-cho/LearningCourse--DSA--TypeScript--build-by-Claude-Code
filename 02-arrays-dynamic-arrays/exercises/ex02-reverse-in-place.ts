/**
 * In-place rearrangement: reverse via the opposite-ends two-pointer
 * swap, and rotate via the triple-reversal trick. Both use O(1) extra
 * space — never a second array.
 *
 * Test: npm test -- 02 -t ex02
 */

/**
 * Reverse `nums` in place.
 *
 * @example [1, 2, 3] -> mutates to [3, 2, 1]
 *
 * Target complexity: O(n) time, O(1) space
 */
export function reverse(nums: number[]): void {
  throw new Error('TODO: implement me')
}

/**
 * Rotate `nums` right by `k` positions, in place, using three
 * reversals: reverse the whole array, then reverse each of the two
 * segments the rotation point splits it into.
 *
 * @param k - may be 0, equal to nums.length, or greater than it (use
 *   k % nums.length)
 * @example rotateRight([1, 2, 3, 4, 5], 2) -> mutates to [4, 5, 1, 2, 3]
 *
 * Target complexity: O(n) time, O(1) space
 */
export function rotateRight(nums: number[], k: number): void {
  throw new Error('TODO: implement me')
}

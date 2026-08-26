// ex01 — Sorted pair target: opposite-ends two pointers on a sorted
// array. Pattern: two pointers (opposite ends).
// Check: npm test -- 04 -t ex01

/**
 * Find a pair of indices into a SORTED ascending array whose values
 * add up to `target`, using opposite-ends two pointers.
 *
 * Module 03's `twoSum` solved the unsorted version with a hash map of
 * complements: O(n) time, O(n) space. Here the input is already
 * sorted, so the hash map is unnecessary — two pointers get the same
 * O(n) time with O(1) extra space.
 *
 * @param nums - ascending sorted array
 * @param target - the sum to find
 * @returns the 0-indexed pair `[i, j]` with `i < j` and
 *   `nums[i] + nums[j] === target`, or `null` if no such pair exists
 * @example
 * pairSumSorted([1, 2, 4, 7, 11], 9) -> [1, 3]   // 2 + 7 === 9
 * pairSumSorted([1, 2, 3], 100) -> null
 *
 * Target: O(n) time, O(1) space.
 */
export function pairSumSorted(nums: number[], target: number): [number, number] | null {
  throw new Error('TODO: implement me')
}

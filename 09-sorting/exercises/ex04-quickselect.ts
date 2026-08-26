// Quickselect: find the kth largest value via partitioning, without
// ever fully sorting the array. Run: npm test -- 09 -t ex04

/**
 * Returns the kth largest value in `nums` (k = 1 -> the maximum,
 * k = nums.length -> the minimum). Uses quickselect: partition like
 * quick sort, but only recurse into the ONE side that must contain
 * the answer — never sort the whole array. Does not mutate `nums`.
 *
 * @param nums - non-empty array of numbers
 * @param k - 1-based rank from the top (1 <= k <= nums.length)
 * @returns the kth largest value
 * @throws if `nums` is empty or `k` is out of range
 *
 * @example kthLargest([3, 2, 1, 5, 6, 4], 2) -> 5
 * @example kthLargest([1], 1) -> 1
 *
 * Target complexity: O(n) average time, O(n) space (working copy)
 */
export function kthLargest(nums: number[], k: number): number {
  throw new Error('TODO: implement me')
}

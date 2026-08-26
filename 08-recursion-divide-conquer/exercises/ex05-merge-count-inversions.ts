/**
 * ex05 — Count inversions with divide and conquer
 *
 * An inversion is a pair of indices i < j where nums[i] > nums[j] — a
 * measure of "how far from sorted" the array is. Brute force checks
 * every pair: O(n²). Merge sort's merge step already compares left
 * and right halves in sorted order — piggyback a counter on it and
 * you get every inversion for free while sorting.
 *
 * Check: npm test -- 08 -t ex05
 */

/**
 * Count the number of inversions in nums: pairs (i, j) with i < j and
 * nums[i] > nums[j]. Uses divide and conquer (a merge-sort skeleton):
 *
 * - split: cut nums in half.
 * - solve: recursively count inversions in the left half and the
 *   right half (each half also comes back sorted).
 * - combine: merge the two sorted halves back together; every time a
 *   right-half element is placed before a remaining left-half
 *   element, ALL remaining left-half elements form an inversion with
 *   it — add that count in one shot instead of pair by pair.
 *
 * @param nums - the array to inspect (not required to be sorted).
 * @returns the total number of inversions.
 * @example countInversions([]) -> 0
 * @example countInversions([1, 2, 3]) -> 0
 * @example countInversions([3, 2, 1]) -> 3
 * Target: O(n log n) time, O(n) space.
 */
export function countInversions(nums: number[]): number {
  throw new Error('TODO: implement me')
}

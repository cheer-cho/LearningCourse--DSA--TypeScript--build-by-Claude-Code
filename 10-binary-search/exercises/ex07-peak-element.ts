// ex07 — Peak finding: binary search without a sorted array.
// Scenario: a mountain-range elevation profile; find any local summit
// without scanning the whole range.
// Check: npm test -- 10 -t ex07

/**
 * Finds the index of ANY peak element — one strictly greater than
 * both its neighbors (treat indices outside the array as `-Infinity`,
 * so the first or last element can be a peak by being greater than
 * its one real neighbor). Adjacent elements are guaranteed distinct.
 *
 * `nums` is NOT sorted, but the search still halves: compare
 * `nums[mid]` to `nums[mid + 1]`. If it's uphill to the right, a peak
 * is guaranteed to exist somewhere to the right (values keep rising
 * or you hit a peak); if downhill, a peak is guaranteed to the left
 * or at `mid` itself. That "a peak exists in the kept half" guarantee
 * — not sortedness — is what makes this binary-searchable.
 *
 * @param nums - non-empty array with all adjacent elements distinct
 * @returns the index of one peak element (any valid peak is accepted)
 * @example findPeak([1, 2, 3, 1]) -> 2
 * @example findPeak([1, 2, 1, 3, 5, 6, 4]) -> 1 or 5 (either is valid)
 * @example findPeak([5]) -> 0
 * Target complexity: O(log n) time, O(1) space
 */
export function findPeak(nums: number[]): number {
  throw new Error('TODO: implement me')
}

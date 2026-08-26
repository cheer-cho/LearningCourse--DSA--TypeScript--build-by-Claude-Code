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
  // Pattern: THE template, condition = "walk uphill" (nums[mid] <
  // nums[mid+1]). The monotone guarantee isn't sortedness — it's that
  // a peak always exists in the direction you're walking uphill
  // toward, so keeping that half never loses the answer.
  // Time: O(log n), Space: O(1)
  let lo = 0
  let hi = nums.length - 1 // closed range: hi is always a valid index

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    if (nums[mid]! < nums[mid + 1]!) {
      lo = mid + 1 // uphill to the right: peak is at mid+1 or beyond
    } else {
      hi = mid // downhill (or peak) at mid: peak is at mid or to its left
    }
  }

  return lo
}

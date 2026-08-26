// Dashboard stats over a fixed-size trailing window: the best k-day sum,
// and the k-day moving average series. Fixed-size sliding window: add the
// entering element, drop the leaving element, never re-sum the window.
// Check: npm test -- 05 -t ex01

/**
 * Largest sum of any contiguous window of exactly `k` elements.
 *
 * @param nums - the series (may include negatives).
 * @param k - window size.
 * @returns the maximum window sum.
 * @throws RangeError if `k` is not a positive integer, or `k > nums.length`.
 *
 * @example maxWindowSum([2, 1, 5, 1, 3, 2], 3) -> 9   // [5, 1, 3]
 * @example maxWindowSum([-2, -1, -5], 1) -> -1
 *
 * Target: O(n) time, O(1) space (excluding input/output).
 */
export function maxWindowSum(nums: number[], k: number): number {
  throw new Error('TODO: implement me')
}

/**
 * The k-day moving average series: one average per window of size `k`,
 * sliding one element at a time.
 *
 * @param nums - the series.
 * @param k - window size.
 * @returns array of length `nums.length - k + 1`, averages left to right.
 * @throws RangeError if `k` is not a positive integer, or `k > nums.length`.
 *
 * @example movingAverages([1, 2, 3, 4], 2) -> [1.5, 2.5, 3.5]
 *
 * Target: O(n) time, O(n) space for the output.
 */
export function movingAverages(nums: number[], k: number): number[] {
  throw new Error('TODO: implement me')
}

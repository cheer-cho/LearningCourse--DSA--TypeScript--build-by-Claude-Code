// Dashboard stats over a fixed-size trailing window: the best k-day sum,
// and the k-day moving average series. Fixed-size sliding window: add the
// entering element, drop the leaving element, never re-sum the window.
// Check: npm test -- 05 -t ex01

function validateWindow(length: number, k: number): void {
  if (!Number.isInteger(k) || k <= 0) throw new RangeError('k must be a positive integer')
  if (k > length) throw new RangeError('k must not exceed the array length')
}

/**
 * Largest sum of any contiguous window of exactly `k` elements.
 *
 * Pattern: fixed-size sliding window — build the first window's sum, then
 * slide by adding the entering element and subtracting the leaving one.
 * Each element is added once and removed once. O(n) time, O(1) space.
 */
export function maxWindowSum(nums: number[], k: number): number {
  validateWindow(nums.length, k)

  let windowSum = 0
  for (let i = 0; i < k; i++) windowSum += nums[i]!

  let best = windowSum
  for (let r = k; r < nums.length; r++) {
    windowSum += nums[r]! - nums[r - k]!
    best = Math.max(best, windowSum)
  }
  return best
}

/**
 * The k-day moving average series.
 *
 * Pattern: same fixed-size window as maxWindowSum, but the answer is
 * recorded every step instead of only the best. O(n) time, O(n) output.
 */
export function movingAverages(nums: number[], k: number): number[] {
  validateWindow(nums.length, k)

  let windowSum = 0
  for (let i = 0; i < k; i++) windowSum += nums[i]!

  const result: number[] = [windowSum / k]
  for (let r = k; r < nums.length; r++) {
    windowSum += nums[r]! - nums[r - k]!
    result.push(windowSum / k)
  }
  return result
}

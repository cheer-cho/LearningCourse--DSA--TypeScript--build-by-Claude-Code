// ex04 — Sliding-window maximum using a monotonic deque.
// Pattern: monotonic deque / sliding window.
// Check: npm test -- 21 -t ex04

/**
 * Returns the maximum value in every contiguous window of size `k`
 * as the window slides from left to right across `nums`.
 *
 * Naive approach rescans the window each slide: O(n*k).
 * Monotonic-deque approach: maintain a deque of INDEXES with strictly
 * DECREASING values (back to front). At each step:
 *   1. Evict the FRONT index if it has fallen outside the window (idx <= i - k).
 *   2. Pop from the BACK any index whose value is <= nums[i] (they can
 *      never be a future window max while nums[i] is still in the window).
 *   3. Push i to the back.
 *   4. Once i >= k-1, the front index is the current window maximum.
 *
 * JS has no built-in deque — a plain number[] used as a double-ended
 * queue (push to back, shift/pop from either end) is fine here since
 * the deque size is bounded by k.
 *
 * @param nums - array of integers
 * @param k    - window size (1 <= k <= nums.length)
 * @returns array of length nums.length - k + 1, each entry being the
 *          maximum in that window
 * @remarks returns [] if nums is empty or k > nums.length
 * @example
 * windowMaxes([1, 3, -1, -3, 5, 3, 6, 7], 3)
 * //        windows:   [1,3,-1] [3,-1,-3] [-1,-3,5] [-3,5,3] [5,3,6] [3,6,7]
 * //        maxes:      3        3          5          5        6       7
 * // -> [3, 3, 5, 5, 6, 7]
 * @example windowMaxes([1], 1) -> [1]
 * @example windowMaxes([4, 3, 2, 1], 2) -> [4, 3, 2]
 * Target: O(n) time, O(k) space
 */
export function windowMaxes(nums: number[], k: number): number[] {
  throw new Error('TODO: implement me')
}

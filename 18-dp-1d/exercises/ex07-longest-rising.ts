/**
 * ex07 — Longest Increasing Subsequence (LIS)
 *
 * Scenario: a sequence of daily revenue figures arrives one by one.
 * You want the longest "growth streak" — a subsequence (indices need
 * not be contiguous) where each revenue is strictly greater than the
 * previous. Two approaches: a classic O(n²) DP, then a clever O(n log n)
 * "patience-sorting" trick that uses the module-10 binary-search template.
 *
 * Check: npm test -- 18 -t ex07
 */

/**
 * Length of the longest strictly increasing subsequence of `nums`,
 * using the O(n²) bottom-up DP.
 *
 * State: dp[i] = length of the LIS that ENDS at index i (inclusive).
 * Choice: for each j < i where nums[j] < nums[i], we may extend the
 *   LIS ending at j by one more element.
 * Recurrence: dp[i] = 1 + max(dp[j]) for all j < i where nums[j] < nums[i].
 *   (1 when no such j exists — the element alone is a length-1 LIS.)
 * Base case: dp[i] = 1 for every i (every single element is a LIS of
 *   length 1).
 * Order: fill dp left to right; dp[i] only reads dp[j] for j < i.
 *
 * @param nums - the revenue sequence (can be negative, duplicates ok).
 * @returns the length of the longest strictly increasing subsequence.
 * @example lisLength([10, 9, 2, 5, 3, 7, 101, 18]) -> 4
 * @example lisLength([0, 1, 0, 3, 2, 3]) -> 4
 * @example lisLength([7, 7, 7, 7]) -> 1
 * @example lisLength([]) -> 0
 * Target: O(n²) time, O(n) space.
 */
export function lisLength(nums: number[]): number {
  throw new Error('TODO: implement me')
}

/**
 * Length of the longest strictly increasing subsequence of `nums`,
 * using the O(n log n) "patience sort / tails array" approach.
 *
 * Key insight: maintain a `tails` array where `tails[k]` is the
 * SMALLEST tail element seen so far among all increasing subsequences
 * of length k + 1. When processing each number:
 *   - If it's larger than all tails, extend (push it — length grows).
 *   - Otherwise, binary-search for the first tail >= it and REPLACE it
 *     (a smaller tail always opens more future possibilities).
 * The length of `tails` at the end is the LIS length. `tails` is not
 * itself the LIS — it's a compact summary that tracks achievable lengths.
 *
 * Binary search (no import needed — inline the module-10 template):
 *   find the leftmost index in `tails` whose value >= `num`.
 *
 * @param nums - the revenue sequence (can be negative, duplicates ok).
 * @returns the length of the longest strictly increasing subsequence.
 * @example lisLengthFast([10, 9, 2, 5, 3, 7, 101, 18]) -> 4
 * @example lisLengthFast([0, 1, 0, 3, 2, 3]) -> 4
 * @example lisLengthFast([7, 7, 7, 7]) -> 1
 * @example lisLengthFast([]) -> 0
 * Target: O(n log n) time, O(n) space.
 */
export function lisLengthFast(nums: number[]): number {
  throw new Error('TODO: implement me')
}

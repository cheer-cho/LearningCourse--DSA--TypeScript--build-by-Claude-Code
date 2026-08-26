/**
 * ex04 — 0/1 Knapsack and Equal Partition
 *
 * Scenario: a thief can carry at most `capacity` kg and wants maximum value
 * from a set of items, each taken at most once (0/1 choice).
 * Pattern covered: 0/1 knapsack DP; subset-sum reduction for equal partition.
 * Check: npm test -- 19 -t ex04
 */

/**
 * Maximum total value of items that fit within `capacity` weight, where each
 * item may be taken at most once (the classic 0/1 knapsack).
 *
 * State: dp[i][w] = max value using items 0..i-1 with weight budget w.
 * Choice: skip item i, or include it (only if weights[i] <= w).
 * Recurrence:
 *   dp[i][w] = max(dp[i-1][w],  dp[i-1][w - weights[i]] + values[i])
 * Base case: dp[0][w] = 0 for all w (no items → zero value).
 *
 * @param weights - array of item weights (each >= 1)
 * @param values  - array of item values (parallel to weights)
 * @param capacity - the weight limit (capacity >= 0)
 * @returns the maximum achievable value within the weight limit
 * @example maxValue([1,3,4,5], [1,4,5,7], 7) -> 9
 * @example maxValue([2,3,4], [3,4,5], 5) -> 7
 * @example maxValue([], [], 10) -> 0
 * Target: O(n * capacity) time, O(capacity) space (1-D reverse-iteration).
 */
export function maxValue(weights: number[], values: number[], capacity: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Determine whether `nums` can be partitioned into two subsets with equal sum.
 *
 * Reduction (the key insight): equal partition ↔ subset-sum to total/2.
 *   If the total is odd, equal partition is impossible → return false.
 *   Otherwise, ask: can some subset of nums sum to exactly total/2?
 *   This is a 0/1 knapsack where each item can be used once, and we want
 *   to hit capacity exactly (boolean feasibility, not value maximisation).
 *
 * Implementation: 1-D boolean dp[w], updated in reverse (high w → low w) to
 * enforce the "each number used at most once" constraint. This mirrors the
 * standard 0/1 knapsack 1-D optimisation.
 *
 * @param nums - array of positive integers
 * @returns true if nums can be split into two subsets with identical sums
 * @example canPartitionEqual([1,5,11,5]) -> true   (subsets: [1,5,5] and [11])
 * @example canPartitionEqual([1,2,3,5]) -> false
 * @example canPartitionEqual([2,2])     -> true
 * @example canPartitionEqual([]) -> true (two empty subsets, both sum to 0 — vacuously fair)
 * Target: O(n * sum) time, O(sum) space.
 */
export function canPartitionEqual(nums: number[]): boolean {
  throw new Error('TODO: implement me')
}

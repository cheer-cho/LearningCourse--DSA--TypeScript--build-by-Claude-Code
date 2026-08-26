/**
 * ex06 — Target Sum Ways
 *
 * Scenario: assign a '+' or '-' sign to each number in an array so the
 * resulting expression equals a target value. Count distinct assignments.
 * Pattern covered: subset-sum reduction from signed assignment to 0/1 knapsack.
 * Check: npm test -- 19 -t ex06
 */

/**
 * Count ways to assign '+' or '-' to each number in `nums` so the sum
 * equals `target`.
 *
 * Key reduction (the point of this exercise):
 *   Let P = set of numbers assigned '+', N = set assigned '-'.
 *   Then P + N = sum(nums)  and  P - N = target.
 *   Adding: 2P = sum + target  →  P = (sum + target) / 2.
 *   So the problem reduces to: count subsets of nums that sum to exactly P.
 *   If (sum + target) is odd or |target| > sum: impossible → return 0.
 *
 * Implementation: 1-D dp[w] = ways to achieve sum w using items so far.
 *   For each num (0/1 — used at most once), iterate w downward from P to num,
 *   dp[w] += dp[w - num].
 *
 * Edge case: zeros in nums. Each zero can be '+' or '-' with no effect; treat
 *   them as items of size 0 in the subset-sum — dp[0] doubles for each zero.
 *
 * @param nums   - array of non-negative integers
 * @param target - the desired signed sum (may be negative)
 * @returns number of distinct sign assignments that reach target
 * @example waysToTarget([1,1,1,1,1], 3) -> 5
 * @example waysToTarget([1,0], 1) -> 2
 * @example waysToTarget([0,0,0], 0) -> 8
 * @example waysToTarget([1], 2) -> 0
 * Target: O(n * P) time, O(P) space where P = (sum + target) / 2.
 */
export function waysToTarget(nums: number[], target: number): number {
  throw new Error('TODO: implement me')
}

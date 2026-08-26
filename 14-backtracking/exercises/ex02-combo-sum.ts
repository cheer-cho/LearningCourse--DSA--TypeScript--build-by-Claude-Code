// A lottery-ticket generator (pick k numbers from 1..n) and a vending
// machine that finds every way to pay `target` using an unlimited
// supply of each coin. Pattern: backtracking — combinations shape
// (start-index loop), with sort + break pruning. Check: npm test -- 14 -t ex02

/**
 * Every combination of `k` distinct numbers chosen from `1..n`
 * (inclusive), in ascending order within each combination.
 *
 * @param n - upper bound of the range (1..n), n >= 0.
 * @param k - how many numbers to choose, 0 <= k <= n.
 * @returns every k-combination; order of combinations does not matter.
 * @remarks Edge case: `k === 0` -> `[[]]`. `n === 0 && k === 0` -> `[[]]`.
 * @example combinationsOf(4, 2) -> [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 * Target complexity: O(C(n, k) * k) time.
 */
export function combinationsOf(n: number, k: number): number[][] {
  throw new Error('TODO: implement me')
}

/**
 * Every combination of `candidates` (each a UNIQUE value, but reusable
 * any number of times) that sums exactly to `target`. Candidates are
 * positive integers.
 *
 * Required optimization: sort `candidates` ascending first, and once
 * `runningSum + candidates[i] > target`, `break` the loop instead of
 * `continue` — every later (larger) candidate would overshoot too, so
 * there is no point trying them.
 *
 * @param candidates - unique positive integers, reuse allowed.
 * @param target - positive integer sum to reach.
 * @returns every combination (as multisets, ascending within each) summing to target.
 * @remarks Edge case: no candidate small enough -> `[]`.
 * @example combinationSum([2, 3, 6], 7) -> [[2,2,3]]
 * Target complexity: exponential in the worst case (inherent to the problem), but the
 *   sort + break prune cuts every branch whose running sum already exceeds target.
 */
export function combinationSum(candidates: number[], target: number): number[][] {
  throw new Error('TODO: implement me')
}

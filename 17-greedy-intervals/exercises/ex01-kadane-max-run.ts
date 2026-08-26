// A trading desk wants the best-performing contiguous stretch of daily
// P&L, the exact days it happened on, and (separately) the best result
// if it could trade in and out every single day. Pattern: greedy
// running-best sweep (Kadane's). Check: npm test -- 17 -t ex01

export interface SubarrayBounds {
  best: number
  start: number
  end: number
}

/**
 * The largest sum of any contiguous, non-empty subarray of `nums`.
 *
 * @param nums - at least one number; may be all negative.
 * @returns the maximum subarray sum. If every number is negative, this
 *   is the single largest (least negative) element — you must still
 *   pick a non-empty subarray.
 * @example maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]) -> 6   // [4,-1,2,1]
 * @example maxSubarraySum([-5,-2,-8]) -> -2
 * Target complexity: O(n) time, O(1) space.
 */
export function maxSubarraySum(nums: number[]): number {
  throw new Error('TODO: implement me')
}

/**
 * Same as `maxSubarraySum`, but also returns WHERE the best run is.
 *
 * @param nums - at least one number; may be all negative.
 * @returns `{ best, start, end }` — `best` is the max subarray sum,
 *   `start`/`end` are the inclusive indices of one subarray achieving
 *   it (if several achieve the max, any one of them is acceptable).
 * @example maxSubarrayBounds([-2,1,-3,4,-1,2,1,-5,4])
 *   -> { best: 6, start: 3, end: 6 }
 * Target complexity: O(n) time, O(1) space.
 */
export function maxSubarrayBounds(nums: number[]): SubarrayBounds {
  throw new Error('TODO: implement me')
}

/**
 * Maximum profit from unlimited buy/sell trades (buy one day, sell a
 * later day, may repeat), assuming you never hold more than one unit
 * at a time.
 *
 * Greedy proof sketch: any multi-day hold `buy -> ... -> sell` earns
 * exactly the sum of every day-over-day delta along the way (they
 * telescope: `(p[2]-p[1]) + (p[3]-p[2]) + ... = p[sell]-p[buy]`).
 * Buying and selling on EVERY day where the price rises reproduces
 * that same sum for the profitable stretches and skips the losing
 * ones — so summing every positive day-over-day delta is optimal; you
 * can never do better by holding across a loss.
 *
 * @param prices - price on each day, in order.
 * @returns sum of every positive consecutive-day price increase.
 * @remarks Edge case: fewer than 2 prices -> 0.
 * @example bestTradesUnlimited([7,1,5,3,6,4]) -> 7   // (5-1) + (6-3)
 * Target complexity: O(n) time, O(1) space.
 */
export function bestTradesUnlimited(prices: number[]): number {
  throw new Error('TODO: implement me')
}

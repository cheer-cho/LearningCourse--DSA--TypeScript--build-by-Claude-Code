/**
 * Checkpoint 18 — Freelancer calendar
 *
 * A freelancer has day-by-day data about a project. Four classic DP
 * problems arise from the same calendar, each asking a different
 * question about how to schedule or plan the days.
 *
 * Check: npm test -- 18 -t checkpoint
 */

/**
 * Maximum total pay from non-adjacent days.
 *
 * The freelancer earns `dayPay[i]` for working day i, but contracts
 * prevent working two consecutive days (the client needs recovery time).
 * Find the maximum total earnings.
 *
 * State: best(i) = max earnings using only the first i days.
 * Choice: skip day i - 1, or work it (earn dayPay[i-1] + best(i-2)).
 * Recurrence: best(i) = max(best(i-1), best(i-2) + dayPay[i-1]).
 * Base cases: best(0) = 0, best(1) = 0 (never forced to work).
 *
 * @param dayPay - earnings per day (non-negative).
 * @returns the maximum earnings achievable without working two
 *   consecutive days.
 * @example maxEarnings([3, 10, 3, 1, 2]) -> 12   (days 1 and 3, 0-indexed)
 * @example maxEarnings([]) -> 0
 * Target: O(n) time, O(1) space.
 */
export function maxEarnings(dayPay: number[]): number {
  throw new Error('TODO: implement me')
}

/**
 * Minimum gear cost to traverse all days.
 *
 * The freelancer needs gear for every day. `dayCosts[i]` is the cost
 * of gearing up on day i (paid when you arrive). From each day you may
 * move to the next day or skip ahead two days. You may start on day 0
 * or day 1. Find the cheapest way to reach the day AFTER the last one.
 *
 * State / recurrence / base cases: identical to `minCostClimb` from ex02.
 *
 * @param dayCosts - gear cost per day (non-negative).
 * @returns the minimum total cost to traverse past all days.
 * @example minGearCost([10, 15, 20]) -> 15
 * @example minGearCost([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]) -> 6
 * @example minGearCost([]) -> 0
 * Target: O(n) time, O(1) space.
 */
export function minGearCost(dayCosts: number[]): number {
  throw new Error('TODO: implement me')
}

/**
 * Number of ways to fill n days with work blocks.
 *
 * The freelancer's calendar has `nDays` empty days. Available work
 * blocks span some number of consecutive days — each size in
 * `blockSizes` can be used any number of times (unbounded), and ORDER
 * MATTERS (using a 2-day block then a 3-day block is different from
 * using a 3-day block then a 2-day block, if blocks are distinguishable
 * by position).
 *
 * State: ways(i) = number of ordered ways to fill exactly i days.
 * Choice: what is the LAST block placed (any size in blockSizes that
 *   fits, i.e. size <= i)?
 * Recurrence: ways(i) = sum over size in blockSizes where size <= i of
 *   ways(i - size).
 * Base case: ways(0) = 1 (the empty calendar is filled one way: do nothing).
 *
 * This is the "coin change — count compositions (order matters)"
 * variant. Compare with the "combinations" (order doesn't matter)
 * variant in module 19.
 *
 * @param nDays - total days to fill exactly.
 * @param blockSizes - available block lengths (positive integers, reusable).
 * @returns the number of ordered ways to tile exactly nDays days.
 * @example waysToFill(4, [1, 2]) -> 5   (4×1, 1+1+2, 1+2+1, 2+1+1, 2+2)
 * @example waysToFill(0, [1, 2]) -> 1
 * @example waysToFill(3, [2]) -> 0   (2 doesn't divide 3)
 * Target: O(nDays * blockSizes.length) time, O(nDays) space.
 */
export function waysToFill(nDays: number, blockSizes: number[]): number {
  throw new Error('TODO: implement me')
}

/**
 * Length of the longest strictly growing revenue streak.
 *
 * The freelancer's daily revenues are recorded in `revenues`. Find the
 * length of the longest subsequence (indices need not be consecutive)
 * where each revenue is strictly greater than the previous — the longest
 * "upward trend" in the data.
 *
 * Use the O(n log n) tails approach (module-10 binary search inline).
 *
 * @param revenues - daily revenue figures (can be negative or zero).
 * @returns the length of the longest strictly increasing subsequence.
 * @example longestGrowthStreak([3, 1, 4, 1, 5, 9, 2, 6]) -> 4
 * @example longestGrowthStreak([]) -> 0
 * @example longestGrowthStreak([5, 5, 5]) -> 1
 * Target: O(n log n) time, O(n) space.
 */
export function longestGrowthStreak(revenues: number[]): number {
  throw new Error('TODO: implement me')
}

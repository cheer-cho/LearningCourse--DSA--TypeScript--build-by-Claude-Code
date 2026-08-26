/**
 * ex05 — Unbounded Knapsack: coin combinations and rod cutting
 *
 * Scenario: a cashier counts ways to make change (coins reusable), and a
 * factory maximises revenue by cutting a steel rod into saleable lengths.
 * Pattern covered: unbounded knapsack — each item may be reused any number
 * of times; coins-outer / amount-inner loop order gives combinations.
 * Check: npm test -- 19 -t ex05
 */

/**
 * Number of distinct ways to make `amount` using the given `coins`, where
 * each coin denomination may be used any number of times.
 * This counts COMBINATIONS (order does not matter: [1,2] === [2,1]).
 *
 * Loop order (crucial): coins in the outer loop, amount in the inner loop.
 * This fixes each coin's "era" before moving to the next, so e.g. using
 * coin 1 then coin 2 is the same combination as coin 2 then coin 1.
 * Contrast with module 18's checkpoint (order-matters / permutation count)
 * where the amount is the outer loop and coins are the inner loop.
 *
 * State: dp[a] = number of combination ways to reach amount a.
 * Base case: dp[0] = 1 (one way to make 0: use no coins).
 * Recurrence (coin c, current amount a): dp[a] += dp[a - c].
 *
 * @param coins  - available denominations (each reusable, each > 0)
 * @param amount - target amount (amount >= 0)
 * @returns number of distinct coin combinations that sum to amount
 * @example countCoinWays([1,2,5], 5) -> 4
 * @example countCoinWays([2], 3) -> 0
 * @example countCoinWays([10], 0) -> 1
 * Target: O(coins.length * amount) time, O(amount) space.
 */
export function countCoinWays(coins: number[], amount: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Maximise the total price obtained by cutting a rod of length `total` into
 * pieces of the specified `lengths`, each with a corresponding `price`.
 * Each piece length may be used any number of times (rod-cutting / unbounded).
 *
 * State: dp[w] = maximum price obtainable from a sub-rod of length w.
 * Base case: dp[0] = 0.
 * Recurrence: for each length lengths[i] <= w: dp[w] = max(dp[w], dp[w - lengths[i]] + prices[i]).
 * Loop order: lengths outer, capacity inner (forward) — matches unbounded knapsack.
 *
 * @param lengths - available cut lengths (each length > 0)
 * @param prices  - selling price for each cut length (parallel to lengths)
 * @param total   - total rod length to cut up (total >= 0)
 * @returns maximum total price achievable by cutting the rod
 * @example maxRibbonValue([1,2,3], [1,5,8], 4) -> 10
 * @example maxRibbonValue([2], [5], 3) -> 5   (one cut of 2, leftover 1 unused)
 * @example maxRibbonValue([1], [2], 5) -> 10
 * Target: O(lengths.length * total) time, O(total) space.
 */
export function maxRibbonValue(lengths: number[], prices: number[], total: number): number {
  throw new Error('TODO: implement me')
}

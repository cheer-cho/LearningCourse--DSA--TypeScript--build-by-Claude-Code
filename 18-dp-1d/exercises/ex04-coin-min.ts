/**
 * ex04 — Fewest coins to make change
 *
 * Scenario: a till has unlimited coins of each denomination in
 * `coins`; make exactly `amount` using as FEW coins as possible.
 * Unbounded choice (any coin can be reused any number of times) —
 * the first exercise where the "choice" loops over options instead
 * of a fixed 1-or-2 shape.
 *
 * Check: npm test -- 18 -t ex04
 */

/**
 * Fewest coins needed to make exactly `amount`, or -1 if it cannot be
 * made with the given denominations.
 *
 * State: fewest(a) = minimum coins to make amount a.
 * Choice: which coin to use last (any denomination, reusable).
 * Recurrence: fewest(a) = 1 + min over coin of fewest(a - coin), for
 * every coin <= a.
 * Base case: fewest(0) = 0 (zero coins needed to make zero).
 * Initialize every other amount with +Infinity ("not yet reachable")
 * — 0 would wrongly claim "free," and any finite guess could be beaten
 * out by a real, smaller total before it's ever corrected.
 *
 * Greedy ("always grab the biggest coin that fits") looks tempting but
 * is provably unsafe here — see module 17's honesty box. Counter-
 * example: coins = [1, 3, 4], amount = 6. Greedy takes 4, then 1, then
 * 1: three coins. The optimal answer is two 3s.
 *
 * @param coins - available denominations (positive integers, each
 *   reusable any number of times).
 * @param amount - the target amount (amount >= 0).
 * @returns the fewest coins that sum to `amount`, or -1 if impossible.
 * @example minCoins([1, 3, 4], 6) -> 2
 * @example minCoins([2], 3) -> -1
 * @example minCoins([1, 2, 5], 11) -> 3
 * Target: O(amount * coins.length) time, O(amount) space.
 */
export function minCoins(coins: number[], amount: number): number {
  throw new Error('TODO: implement me')
}

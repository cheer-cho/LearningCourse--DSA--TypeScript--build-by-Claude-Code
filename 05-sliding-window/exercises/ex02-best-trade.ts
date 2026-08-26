// One buy, one sell, maximize profit. Framed as a window whose left edge
// is "the best buy price seen so far" — it only ever slides forward when
// a cheaper day appears, and the right edge sweeps once left to right.
// Check: npm test -- 05 -t ex02

/**
 * Maximum profit from buying on one day and selling on a later day.
 *
 * @param prices - price on each day, in order.
 * @returns the max profit achievable, or 0 if no profitable trade exists
 *   (including when `prices` has fewer than 2 entries).
 *
 * @example maxProfit([7, 1, 5, 3, 6, 4]) -> 5   // buy at 1, sell at 6
 * @example maxProfit([7, 6, 4, 3, 1]) -> 0      // strictly falling
 *
 * Target: O(n) time, O(1) space.
 */
export function maxProfit(prices: number[]): number {
  throw new Error('TODO: implement me')
}

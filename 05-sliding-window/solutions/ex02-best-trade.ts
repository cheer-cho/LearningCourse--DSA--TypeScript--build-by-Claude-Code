// One buy, one sell, maximize profit. Framed as a window whose left edge
// is "the best buy price seen so far" — it only ever slides forward when
// a cheaper day appears, and the right edge sweeps once left to right.
// Check: npm test -- 05 -t ex02

/**
 * Pattern: min-so-far sweep, viewed as a one-sided window. `minSoFar` is
 * the window's left edge (it only ever moves to a cheaper day); the
 * right edge is the current day. At each day, either extend the window
 * (record the profit against the cheapest buy so far) or reset the left
 * edge because a cheaper buy just appeared. O(n) time, O(1) space.
 */
export function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0

  let minSoFar = prices[0]!
  let best = 0

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]!
    best = Math.max(best, price - minSoFar)
    minSoFar = Math.min(minSoFar, price)
  }

  return best
}

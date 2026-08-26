// ex04 — Search on the answer: minimum feasible processing rate.
// Scenario: a warehouse robot must clear every pile of parcels within
// a shift; find the slowest integer rate that still finishes on time.
// Check: npm test -- 10 -t ex04

/**
 * Finds the smallest integer rate `r` such that, processing one pile
 * at a time at `ceil(pile / r)` hours per pile, all piles finish
 * within `h` hours total.
 *
 * "Bigger rate never increases total time" is the monotone predicate:
 * `can(r) = totalHours(r) <= h`. Binary-search the first `r` where
 * `can(r)` is true, over `r` in `[1, max(piles)]` (rate `max(piles)`
 * always finishes every pile in exactly 1 hour each, so it's always
 * feasible).
 *
 * @param piles - pile sizes, all positive integers, non-empty
 * @param h - hours available, `h >= piles.length` (each pile needs
 *   at least one hour, however fast the rate)
 * @returns the minimum integer rate that finishes within `h` hours
 * @example minRate([3, 6, 7, 11], 8) -> 4
 * @example minRate([30, 11, 23, 4, 20], 5) -> 30
 * @example minRate([1, 1, 1], 3) -> 1
 * Target complexity: O(n log(max(piles))) time, O(1) space
 */
export function minRate(piles: number[], h: number): number {
  // Pattern: search on the answer. The candidate range is rates
  // [1, max(piles)]; can(r) = "total hours at rate r fits within h" is
  // monotone (a faster rate never needs more time), so the classic
  // template finds the first feasible r.
  // Time: O(n log(max(piles))) — each of O(log(max(piles))) candidate
  // rates costs an O(n) pass to sum total hours. Space: O(1).
  const totalHours = (rate: number): number =>
    piles.reduce((sum, pile) => sum + Math.ceil(pile / rate), 0)

  let lo = 1
  let hi = Math.max(...piles)

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    if (totalHours(mid) <= h) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }

  return lo
}

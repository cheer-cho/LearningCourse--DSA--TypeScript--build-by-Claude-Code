/**
 * ex02 — Min cost to climb a fee-per-step staircase
 *
 * Scenario: same staircase as ex01 (1 or 2 steps at a time), but now
 * each step charges a toll when you land on it, and you may START
 * from step 0 OR step 1 for free. Find the cheapest way to get past
 * the top step. First transfer: "count the ways" becomes "minimize a
 * cost" — same 5-step framework, a different combine rule (min + add
 * instead of sum).
 *
 * Check: npm test -- 18 -t ex02
 */

/**
 * Minimum total toll to climb past the last step of `costs`, starting
 * from index 0 or index 1 (free), moving 1 or 2 steps at a time, and
 * paying `costs[i]` every time you land ON step i. "The top" is one
 * past the last index — landing there is free.
 *
 * State: cheapest(i) = minimum toll paid to land on step i.
 * Choice: arrive at step i from step i - 1 or step i - 2.
 * Recurrence: cheapest(i) = costs[i] + min(cheapest(i-1), cheapest(i-2)).
 * Base cases: cheapest(0) = costs[0], cheapest(1) = costs[1] (both are
 * valid free starting points, so landing there costs only their own toll).
 *
 * @param costs - toll charged for landing on each step (costs.length >= 0).
 * @returns the minimum total toll to reach the top.
 * @example minCostClimb([10, 15, 20]) -> 15
 * @example minCostClimb([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]) -> 6
 * @example minCostClimb([]) -> 0
 * Target: O(n) time, O(1) space.
 */
export function minCostClimb(costs: number[]): number {
  throw new Error('TODO: implement me')
}

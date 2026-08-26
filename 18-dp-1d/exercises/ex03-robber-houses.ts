/**
 * ex03 — Warehouse heist: loot the most without triggering alarms
 *
 * Scenario: a row of warehouses along a street, each holding
 * `values[i]` worth of goods. Adjacent warehouses share a silent
 * alarm — hit two in a row and it trips. Maximize total loot without
 * ever hitting two adjacent warehouses. Second version: the
 * warehouses sit in a circle (first and last are also adjacent).
 *
 * Check: npm test -- 18 -t ex03
 */

/**
 * Maximum loot from a row of warehouses, never hitting two adjacent
 * ones.
 *
 * State: best(i) = max loot achievable using only the first i
 * warehouses (i.e. values[0..i)).
 * Choice: skip warehouse i - 1 entirely, or hit it (and add its value
 * to best(i - 2), since the warehouse right before it is now off-limits).
 * Recurrence: best(i) = max(best(i-1), best(i-2) + values[i-1]).
 * Base cases: best(0) = 0 (no warehouses to choose from), best(1) = 0
 * (skipping is always allowed, so the empty selection is valid).
 *
 * @param values - loot value per warehouse, left to right (may be
 *   negative — a warehouse not worth hitting).
 * @returns the maximum loot obtainable without hitting two adjacent
 *   warehouses.
 * @example maxLoot([2, 7, 9, 3, 1]) -> 12
 * @example maxLoot([]) -> 0
 * @example maxLoot([-1, -2]) -> 0 (skip every warehouse)
 * Target: O(n) time, O(1) space.
 */
export function maxLoot(values: number[]): number {
  throw new Error('TODO: implement me')
}

/**
 * Same problem, but the warehouses form a circle — warehouse 0 and
 * the last warehouse are ALSO adjacent, so you can never hit both.
 *
 * The reduction: any valid selection either skips warehouse 0 entirely
 * or skips the last warehouse entirely (it can never skip neither,
 * since that would allow hitting both ends of the circle). So the
 * answer is the better of two LINEAR runs of `maxLoot`: one over
 * everything except the last warehouse, one over everything except
 * the first.
 *
 * @param values - loot value per warehouse, arranged in a circle.
 * @returns the maximum loot obtainable without hitting two adjacent
 *   warehouses (circular adjacency included).
 * @example maxLootCircle([2, 3, 2]) -> 3
 * @example maxLootCircle([1, 2, 3, 1]) -> 4
 * @example maxLootCircle([5]) -> 5
 * Target: O(n) time, O(1) space.
 */
export function maxLootCircle(values: number[]): number {
  throw new Error('TODO: implement me')
}

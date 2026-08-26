/**
 * ex04 — amortized-append: one expensive op, paid for by many cheap ones.
 * Pattern(s): amortized analysis via a doubling dynamic array.
 * Check: npm test -- 01 -t ex04
 */

/**
 * Simulate n appends into a dynamic array that starts at capacity 1 and
 * doubles whenever it's full. Cost of an append: 1 if there's room, or
 * (current size + 1) when a resize is triggered — the "+1" pays for the
 * new element after copying every existing one into the bigger array.
 * @param n - number of appends to simulate, n >= 0
 * @returns the cost of each of the n appends, in order
 * input -> output: (3) -> [1, 2, 3]
 *   append 1: room (cap 1)          -> cost 1
 *   append 2: full at size 1, cost = 1 + 1 = 2, capacity grows to 2
 *   append 3: full at size 2, cost = 2 + 1 = 3, capacity grows to 4
 * Target complexity: O(n) time, O(n) space
 */
export function appendCosts(n: number): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Total cost of n appends — the sum of appendCosts(n).
 * @param n - number of appends to simulate, n >= 0
 * @returns the sum of every append's cost
 * input -> output: (3) -> 6
 * Target complexity: O(n) time, O(1) extra space
 */
export function totalCost(n: number): number {
  throw new Error('TODO: implement me')
}

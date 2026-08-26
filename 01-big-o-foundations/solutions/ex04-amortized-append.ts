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
  // Pattern: doubling dynamic array — resizes are rare (only at powers of
  // 2) and each one is paid for by the elements it copies. Summing the
  // costs shows the total stays linear. Time: O(n), Space: O(n) for the
  // returned list.
  const costs: number[] = []
  let capacity = 1
  let size = 0
  for (let i = 0; i < n; i++) {
    if (size === capacity) {
      costs.push(size + 1)
      capacity *= 2
    } else {
      costs.push(1)
    }
    size++
  }
  return costs
}

/**
 * Total cost of n appends — the sum of appendCosts(n).
 * @param n - number of appends to simulate, n >= 0
 * @returns the sum of every append's cost
 * input -> output: (3) -> 6
 * Target complexity: O(n) time, O(1) extra space
 */
export function totalCost(n: number): number {
  // Pattern: amortized cost = total cost / number of ops. Time: O(n),
  // Space: O(1) extra (appendCosts' O(n) array is the only allocation).
  return appendCosts(n).reduce((a, b) => a + b, 0)
}

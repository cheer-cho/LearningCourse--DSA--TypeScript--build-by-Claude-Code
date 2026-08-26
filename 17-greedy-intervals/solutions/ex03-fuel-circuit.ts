// Reference solution — ex03

/**
 * Pattern: greedy net-balance sweep. `total` decides feasibility at
 * all (sum of gas vs. sum of cost around the whole loop); the running
 * `tank` decides WHERE — the moment it goes negative, every station
 * tried since the current candidate start is proven unusable too (they
 * all arrive at this point with an equal-or-smaller surplus than
 * starting here did), so the candidate jumps straight past the
 * failure point.
 * Time: O(n). Space: O(1).
 */
export function startStation(gas: number[], cost: number[]): number {
  if (gas.length === 0) return -1

  let total = 0
  let tank = 0
  let start = 0

  for (let i = 0; i < gas.length; i++) {
    const delta = gas[i]! - cost[i]!
    total += delta
    tank += delta
    if (tank < 0) {
      start = i + 1
      tank = 0
    }
  }

  return total >= 0 ? start : -1
}

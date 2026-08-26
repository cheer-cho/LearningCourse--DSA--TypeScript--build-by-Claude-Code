// Reference solution — ex02

// State: cheapest(i) = minimum toll paid to land on step i.
// Choice: arrive at i from i - 1 or i - 2 (whichever was cheaper).
// Recurrence: cheapest(i) = costs[i] + min(cheapest(i-1), cheapest(i-2)).
// Base cases: cheapest(0) = costs[0], cheapest(1) = costs[1] (free starts).
// Order: bottom-up, but only the last two entries are ever read, so
// two rolling variables replace the table straight away.
// O(n) time, O(1) space.
export function minCostClimb(costs: number[]): number {
  const n = costs.length
  if (n <= 1) return 0

  let prev2 = costs[0]!
  let prev1 = costs[1]!
  for (let i = 2; i < n; i++) {
    const current = costs[i]! + Math.min(prev1, prev2)
    prev2 = prev1
    prev1 = current
  }
  // The top is one step past the last index — reachable for free from
  // either of the last two steps, so the answer is the cheaper of them.
  return Math.min(prev1, prev2)
}

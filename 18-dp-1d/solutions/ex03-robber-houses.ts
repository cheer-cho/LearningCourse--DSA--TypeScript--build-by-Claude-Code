// Reference solution — ex03

// State: best(i) = max loot using only the first i warehouses.
// Choice: skip warehouse i - 1, or hit it and add to best(i - 2).
// Recurrence: best(i) = max(best(i-1), best(i-2) + values[i-1]).
// Base cases: best(0) = 0, best(1) = 0 (skipping everything is valid).
// Order: bottom-up, rolling two variables (only the last two states
// are ever read). O(n) time, O(1) space.
export function maxLoot(values: number[]): number {
  let prev2 = 0 // best(i - 2)
  let prev1 = 0 // best(i - 1)
  for (const v of values) {
    const current = Math.max(prev1, prev2 + v)
    prev2 = prev1
    prev1 = current
  }
  return prev1
}

// State: circleBest = max loot over a circular arrangement of n warehouses.
// Choice: values[0] and values[n-1] are adjacent in a circle, so an optimal
// selection must fully exclude at least one of them — choose which end to drop.
// Recurrence: circleBest = max(maxLoot(values[0..n-2]), maxLoot(values[1..n-1])),
// reusing maxLoot's own recurrence on each excluded-end run.
// Base cases: n = 0 -> 0; n = 1 -> values[0] (single warehouse, no adjacency).
// Order: run the (bottom-up) maxLoot twice, once per excluded end, then
// take the max. O(n) time, O(1) space.
export function maxLootCircle(values: number[]): number {
  const n = values.length
  if (n === 0) return 0
  if (n === 1) return values[0]!

  const excludingLast = maxLoot(values.slice(0, n - 1))
  const excludingFirst = maxLoot(values.slice(1))
  return Math.max(excludingLast, excludingFirst)
}

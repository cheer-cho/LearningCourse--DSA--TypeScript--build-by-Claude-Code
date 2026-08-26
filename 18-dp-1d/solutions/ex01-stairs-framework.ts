// Reference solution — ex01

// State: ways(i) = number of distinct ways to reach step i.
// Choice: the last move onto step i was a 1-step or a 2-step.
// Recurrence: ways(i) = ways(i - 1) + ways(i - 2).
// Base cases: ways(0) = 1, ways(1) = 1.
// Order: none — plain top-down recursion, recomputes every overlapping
// subproblem from scratch. O(2^n) time, O(n) space (call stack).
export function climbWaysNaive(n: number, tick?: () => void): number {
  tick?.()
  if (n <= 1) return 1
  return climbWaysNaive(n - 1, tick) + climbWaysNaive(n - 2, tick)
}

// State / choice / recurrence / base cases: same as climbWaysNaive.
// Order: top-down, but a cache means each state is solved exactly
// once — the memoized call tree collapses to one node per distinct n.
// O(n) time, O(n) space (cache + call stack).
function climbWaysMemoHelper(n: number, tick: (() => void) | undefined, cache: Map<number, number>): number {
  const cached = cache.get(n)
  if (cached !== undefined) return cached

  const result = n <= 1 ? 1 : climbWaysMemoHelper(n - 1, tick, cache) + climbWaysMemoHelper(n - 2, tick, cache)
  tick?.()
  cache.set(n, result)
  return result
}

export function climbWaysMemo(n: number, tick?: () => void): number {
  return climbWaysMemoHelper(n, tick, new Map())
}

// State / choice / recurrence / base cases: same as above.
// Order: bottom-up — fill the table ascending from 0 to n, since each
// entry depends only on the two before it. O(n) time, O(n) space.
export function climbWaysTable(n: number): number {
  if (n <= 1) return 1
  const table = new Array<number>(n + 1)
  table[0] = 1
  table[1] = 1
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1]! + table[i - 2]!
  }
  return table[n]!
}

// State: ways(i) = number of distinct ways to reach step i.
// Choice: the last move onto step i was a 1-step or a 2-step.
// Recurrence: ways(i) = ways(i - 1) + ways(i - 2).
// Base cases: ways(0) = 1, ways(1) = 1.
// Order: bottom-up, but each entry only ever reads the two before it —
// no need to keep the whole table, just two rolling variables.
// O(n) time, O(1) space.
export function climbWaysOptimized(n: number): number {
  if (n <= 1) return 1
  let prev2 = 1 // ways(0)
  let prev1 = 1 // ways(1)
  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2
    prev2 = prev1
    prev1 = current
  }
  return prev1
}

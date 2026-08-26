// Reference solution — ex02

// Pattern: naive tree recursion, two un-cached calls per step. tick()
// fires at the top of every call, so it counts the exact call-tree
// size. O(2^n)-ish time, O(n) space (deepest path, not call count).
export function fibNaive(n: number, tick?: () => void): number {
  tick?.()
  if (n <= 1) return n
  return fibNaive(n - 1, tick) + fibNaive(n - 2, tick)
}

// Pattern: memoized recursion (top-down DP taste). A private helper
// carries the cache through the recursion; the exported function stays
// two-argument. tick() fires only when a value is newly computed, so
// it counts distinct sub-answers, not calls. O(n) time, O(n) space.
function fibMemoHelper(n: number, tick: (() => void) | undefined, cache: Map<number, number>): number {
  const cached = cache.get(n)
  if (cached !== undefined) return cached

  const result = n <= 1 ? n : fibMemoHelper(n - 1, tick, cache) + fibMemoHelper(n - 2, tick, cache)
  tick?.()
  cache.set(n, result)
  return result
}

export function fibMemo(n: number, tick?: () => void): number {
  return fibMemoHelper(n, tick, new Map())
}

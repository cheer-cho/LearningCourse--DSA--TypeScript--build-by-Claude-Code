// Reference solution — ex02

/**
 * Pattern: backtracking, combinations shape — a start index stops the
 * loop from re-picking anything already considered, so each
 * combination is generated exactly once, in ascending order. Prunes
 * once too few numbers remain to reach size k.
 * Time: O(C(n, k) * k). Space: O(k) recursion + path.
 */
export function combinationsOf(n: number, k: number): number[][] {
  const results: number[][] = []
  const path: number[] = []

  function backtrack(start: number): void {
    if (path.length === k) {
      results.push([...path])
      return
    }
    const remainingNeeded = k - path.length
    for (let i = start; i <= n - remainingNeeded + 1; i++) {
      path.push(i)
      backtrack(i + 1)
      path.pop()
    }
  }

  backtrack(1)
  return results
}

/**
 * Pattern: backtracking, combinations shape with REUSE — passing `i`
 * (not `i + 1`) as the next start index lets the same candidate be
 * picked again. Sort + break is the required prune: once a candidate
 * exceeds what's left to reach target, every later (larger, sorted)
 * candidate would too, so the whole rest of the loop is skipped.
 * Time: exponential worst case (inherent), heavily cut by the prune. Space: O(target / min(candidates)).
 */
export function combinationSum(candidates: number[], target: number): number[][] {
  const sorted = [...candidates].sort((a, b) => a - b)
  const results: number[][] = []
  const path: number[] = []

  function backtrack(start: number, remaining: number): void {
    if (remaining === 0) {
      results.push([...path])
      return
    }
    for (let i = start; i < sorted.length; i++) {
      const candidate = sorted[i]!
      if (candidate > remaining) break // sorted ascending: rest are too big too
      path.push(candidate)
      backtrack(i, remaining - candidate) // i, not i + 1: reuse allowed
      path.pop()
    }
  }

  backtrack(0, target)
  return results
}

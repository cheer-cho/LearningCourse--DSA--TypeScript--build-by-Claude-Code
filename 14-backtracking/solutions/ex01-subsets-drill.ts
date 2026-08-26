// Reference solution — ex01

/**
 * Pattern: backtracking, subsets shape — at each call, record the
 * current path (it's always a valid subset) then try every remaining
 * element as the next addition, using a start index so each element
 * is only ever added once per path (no [1,2] AND [2,1]).
 * Time: O(2^n * n) — 2^n paths, O(n) to copy each. Space: O(n) recursion + path.
 */
export function subsets(nums: number[]): number[][] {
  const results: number[][] = []
  const path: number[] = []

  function backtrack(start: number): void {
    results.push([...path])
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]!)
      backtrack(i + 1)
      path.pop()
    }
  }

  backtrack(0)
  return results
}

/**
 * Pattern: backtracking, subsets shape + duplicate handling. Sort
 * first so equal values sit together, then skip a value if it equals
 * the PREVIOUS value tried at the SAME recursion level
 * (`i > start && sorted[i] === sorted[i - 1]`) — that's what collapses
 * the duplicate branches without ever comparing full paths.
 * Time: O(2^n * n). Space: O(n log n) for the sort + O(n) recursion/path.
 */
export function subsetsWithDup(nums: number[]): number[][] {
  const sorted = [...nums].sort((a, b) => a - b)
  const results: number[][] = []
  const path: number[] = []

  function backtrack(start: number): void {
    results.push([...path])
    for (let i = start; i < sorted.length; i++) {
      if (i > start && sorted[i] === sorted[i - 1]) continue
      path.push(sorted[i]!)
      backtrack(i + 1)
      path.pop()
    }
  }

  backtrack(0)
  return results
}

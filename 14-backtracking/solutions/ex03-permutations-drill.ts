// Reference solution — ex03

/**
 * Pattern: backtracking, permutations shape — a `used` boolean array
 * tracks which INDICES are already placed (order is the answer, so
 * every element is eligible at every position, not just later ones).
 * Time: O(n! * n). Space: O(n) for `used` + recursion + path.
 */
export function permutations(nums: number[]): number[][] {
  const results: number[][] = []
  const path: number[] = []
  const used: boolean[] = new Array(nums.length).fill(false)

  function backtrack(): void {
    if (path.length === nums.length) {
      results.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      used[i] = true
      path.push(nums[i]!)
      backtrack()
      path.pop()
      used[i] = false
    }
  }

  backtrack()
  return results
}

/**
 * Pattern: backtracking, permutations shape + duplicate handling. A
 * plain `used[]` array tracks INDICES, so two equal values at
 * different indices would still both get tried at a position and
 * produce duplicate permutations. Instead, track remaining count PER
 * VALUE in a map: once a value's count hits 0 it's unavailable, and
 * trying it twice at the same position is impossible by construction
 * (no separate index to re-pick).
 * Time: O(n! * n) worst case, fewer when duplicates collapse branches. Space: O(n).
 */
export function permutationsUnique(nums: number[]): number[][] {
  const counts = new Map<number, number>()
  for (const n of nums) counts.set(n, (counts.get(n) ?? 0) + 1)

  const results: number[][] = []
  const path: number[] = []

  function backtrack(): void {
    if (path.length === nums.length) {
      results.push([...path])
      return
    }
    for (const [value, count] of counts) {
      if (count === 0) continue
      counts.set(value, count - 1)
      path.push(value)
      backtrack()
      path.pop()
      counts.set(value, count)
    }
  }

  backtrack()
  return results
}

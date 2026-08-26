// Reference solution — ex02

/**
 * Pattern: greedy furthest-reach sweep. Track the furthest index
 * reachable with jumps considered so far; if the sweep ever reaches an
 * index beyond that furthest point before extending it, nothing can
 * get past the gap.
 * Time: O(n). Space: O(1).
 */
export function canReachEnd(nums: number[]): boolean {
  let furthest = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > furthest) return false
    furthest = Math.max(furthest, i + nums[i]!)
    if (furthest >= nums.length - 1) return true
  }
  return furthest >= nums.length - 1
}

/**
 * Pattern: greedy current-window/next-window sweep (BFS-by-levels in
 * disguise: each "window" is one level of jumps). `currentEnd` is the
 * furthest reachable with jumps used so far; `farthest` is the furthest
 * reachable if one more jump is spent. A jump is only "paid for" when
 * the sweep steps past `currentEnd` — that keeps every index visited
 * exactly once, unlike the O(n^2) DP that re-scans predecessors.
 * Time: O(n). Space: O(1).
 */
export function minJumps(nums: number[]): number {
  const n = nums.length
  if (n <= 1) return 0

  let jumps = 0
  let currentEnd = 0
  let farthest = 0

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]!)
    if (i === currentEnd) {
      if (farthest === currentEnd) return -1 // stuck: this jump gains no ground
      jumps++
      currentEnd = farthest
      if (currentEnd >= n - 1) return jumps
    }
  }
  return currentEnd >= n - 1 ? jumps : -1
}

// Shortest contiguous run whose sum reaches a target, over non-negative
// numbers. The shrink direction inverts here versus the usual template:
// grow until the window IS valid (sum >= target), then shrink WHILE it's
// still valid to find the shortest one, recording the answer just before
// each shrink breaks validity.
// Check: npm test -- 05 -t ex05

/**
 * Pattern: variable-size window, inverted shrink condition. Grow the
 * right edge, and whenever the window's sum >= target, shrink the left
 * edge (recording the shorter length each time) until the sum drops
 * below target again. Because all values are non-negative, sum only
 * grows as the window grows and only shrinks as the window shrinks —
 * the monotonicity the shrink loop relies on. O(n) time, O(1) space.
 */
export function shortestSubarrayAtLeast(nums: number[], target: number): number {
  let left = 0
  let sum = 0
  let best = Infinity

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]!

    while (sum >= target && left <= right) {
      best = Math.min(best, right - left + 1)
      sum -= nums[left]!
      left++
    }
  }

  return best === Infinity ? 0 : best
}

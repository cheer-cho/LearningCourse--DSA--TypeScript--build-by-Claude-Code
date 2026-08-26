// ex05 — Search on the answer: minimum capacity / minimum largest part.
// Scenario: a shipping dock must load packages onto a truck IN ORDER
// across a fixed number of days; find the smallest truck capacity
// that still gets everything shipped on time.
// Check: npm test -- 10 -t ex05

/**
 * Finds the smallest truck capacity such that `weights` (loaded onto
 * the truck one at a time, in order, never splitting a package) can
 * all ship within `d` days — each day loads as many consecutive
 * packages as fit under the capacity before moving to the next day.
 *
 * `can(capacity)` = "packages fit within d days at this capacity" is
 * monotone (more capacity never needs more days), so search on the
 * answer over `capacity` in `[max(weights), sum(weights)]` — any
 * capacity smaller than the heaviest single package can never work,
 * and shipping everything in one day is always feasible.
 *
 * @param weights - package weights in shipping order, all positive,
 *   non-empty
 * @param d - number of days available, `1 <= d <= weights.length`
 * @returns the minimum capacity that ships everything within `d` days
 * @example minCapacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) -> 15
 * @example minCapacity([3, 2, 2, 4, 1, 4], 3) -> 6
 * @example minCapacity([1, 2, 3, 1, 1], 4) -> 3
 * Target complexity: O(n log(sum(weights))) time, O(1) space
 */
export function minCapacity(weights: number[], d: number): number {
  // Pattern: search on the answer over capacity, can(cap) = greedy
  // day-count at that capacity fits within d days. Monotone because a
  // bigger capacity can only pack a day fuller, never emptier.
  // Time: O(n log(sum(weights))), Space: O(1)
  return searchOnAnswer(
    Math.max(...weights),
    weights.reduce((a, b) => a + b, 0),
    (cap) => daysNeeded(weights, cap) <= d,
  )
}

function daysNeeded(items: number[], cap: number): number {
  let days = 1
  let current = 0
  for (const w of items) {
    if (current + w > cap) {
      days++
      current = 0
    }
    current += w
  }
  return days
}

/**
 * Splits `nums` into `k` CONTIGUOUS, non-empty parts (in order) to
 * minimize the largest part's sum, and returns that minimized value.
 *
 * Same predicate as `minCapacity`: "can we split into at most k
 * contiguous parts, each with sum <= x?" is monotone in `x` — this is
 * the identical search, with `d` (days) renamed `k` (parts) and
 * `weights` renamed `nums`. Say so out loud when you recognize it.
 *
 * @param nums - values in order, all non-negative, non-empty
 * @param k - number of parts, `1 <= k <= nums.length`
 * @returns the minimum possible value of the largest part's sum
 * @example splitMinLargest([7, 2, 5, 10, 8], 2) -> 18
 * @example splitMinLargest([1, 2, 3, 4, 5], 2) -> 9
 * @example splitMinLargest([1, 4, 4], 3) -> 4
 * Target complexity: O(n log(sum(nums))) time, O(1) space
 */
export function splitMinLargest(nums: number[], k: number): number {
  // Pattern: identical to minCapacity — "days" become "parts". Kept
  // as a separate call (not a thin alias) so the parallel is obvious
  // without hiding either name.
  // Time: O(n log(sum(nums))), Space: O(1)
  return searchOnAnswer(
    Math.max(...nums),
    nums.reduce((a, b) => a + b, 0),
    (cap) => daysNeeded(nums, cap) <= k,
  )
}

/** THE search-on-answer template: first x in [lo, hi] with can(x) true. */
function searchOnAnswer(lo: number, hi: number, can: (x: number) => boolean): number {
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    if (can(mid)) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }
  return lo
}

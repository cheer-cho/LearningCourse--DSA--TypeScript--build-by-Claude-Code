// ex01 — Classic binary search: THE course template, then a use of it.
// Scenario: a sorted leaderboard of scores; find a score's index, or
// count how many entries share a score.
// Check: npm test -- 10 -t ex01

/**
 * Finds `target` in a sorted (ascending) array using the half-open
 * `[lo, hi)` template: `while (lo < hi)`, `mid = lo + (hi-lo)/2`,
 * shrink to the side that could still hold `target`.
 *
 * @param nums - ascending sorted array (may contain duplicates)
 * @param target - value to find
 * @returns the index of one occurrence of `target`, or -1 if absent
 * @example binarySearch([1, 3, 5, 7, 9], 7) -> 3
 * @example binarySearch([1, 3, 5, 7, 9], 4) -> -1
 * @example binarySearch([], 4) -> -1
 * Target complexity: O(log n) time, O(1) space
 */
export function binarySearch(nums: number[], target: number): number {
  // Pattern: THE binary search template — half-open [lo, hi), while
  // (lo < hi) converges to the first index with nums[i] >= target.
  // Then a single check confirms an exact hit.
  // Time: O(log n), Space: O(1)
  let lo = 0
  let hi = nums.length

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    if (nums[mid]! < target) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  return lo < nums.length && nums[lo] === target ? lo : -1
}

/**
 * Counts how many elements equal `target` in a sorted array, using two
 * boundary searches (first index `>= target`, first index `> target`)
 * instead of scanning — no element is ever compared to `target` twice.
 *
 * @param nums - ascending sorted array (may contain duplicates)
 * @param target - value to count
 * @returns the number of elements equal to `target`
 * @example countOccurrences([1, 2, 2, 2, 3], 2) -> 3
 * @example countOccurrences([1, 2, 3], 5) -> 0
 * @example countOccurrences([], 1) -> 0
 * Target complexity: O(log n) time, O(1) space
 */
export function countOccurrences(nums: number[], target: number): number {
  // Pattern: two boundary searches (lower bound, upper bound) instead
  // of a scan — the count is just their difference.
  // Time: O(log n), Space: O(1)
  const first = boundary(nums, target, false) // first index >= target
  const last = boundary(nums, target, true) // first index > target
  return last - first
}

/** Shared halving loop: first index where nums[i] >= target (strict=false)
 * or nums[i] > target (strict=true). */
function boundary(nums: number[], target: number, strict: boolean): number {
  let lo = 0
  let hi = nums.length

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    const holds = strict ? nums[mid]! > target : nums[mid]! >= target
    if (holds) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }

  return lo
}

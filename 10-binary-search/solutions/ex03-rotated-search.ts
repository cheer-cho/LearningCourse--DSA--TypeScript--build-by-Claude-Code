// ex03 — Rotated sorted arrays: one half around `mid` is always sorted.
// Scenario: a sensor log that wraps around a circular buffer, so what
// was once one sorted run now looks "rotated" at some pivot.
// Check: npm test -- 10 -t ex03

/**
 * Finds the minimum value in a rotated ascending array of UNIQUE
 * values (rotated 0 or more times). Compares `nums[mid]` against the
 * current last element (`nums[hi - 1]`) to decide which side holds
 * the rotation point.
 *
 * @param nums - a rotated ascending array of unique values; never
 *   empty (caller guarantees at least one element)
 * @returns the minimum value in `nums`
 * @example minInRotated([4, 5, 6, 7, 0, 1, 2]) -> 0
 * @example minInRotated([1, 2, 3, 4, 5]) -> 1 (rotated by 0)
 * @example minInRotated([2, 1]) -> 1
 * Target complexity: O(log n) time, O(1) space
 */
export function minInRotated(nums: number[]): number {
  // Pattern: THE template on the question "is the rotation point (and
  // therefore the minimum) at or before mid, or strictly after it?"
  // If nums[mid] > nums[hi-1], the minimum is to the right of mid
  // (mid itself can't be it); otherwise mid could be the minimum, so
  // keep it in range.
  // Time: O(log n), Space: O(1)
  let lo = 0
  let hi = nums.length - 1 // closed range: hi is always a valid index

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    if (nums[mid]! > nums[hi]!) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  return nums[lo]!
}

/**
 * Finds `target` in a rotated ascending array of UNIQUE values.
 * At every `mid`, one of the two halves around it is guaranteed
 * sorted — check whether `target` falls in that sorted half's range
 * to decide which side to keep.
 *
 * @param nums - a rotated ascending array of unique values
 * @param target - value to find
 * @returns the index of `target`, or -1 if absent
 * @example searchRotated([4, 5, 6, 7, 0, 1, 2], 0) -> 4
 * @example searchRotated([4, 5, 6, 7, 0, 1, 2], 3) -> -1
 * @example searchRotated([1, 2, 3, 4, 5], 3) -> 2 (rotated by 0)
 * Target complexity: O(log n) time, O(1) space
 */
export function searchRotated(nums: number[], target: number): number {
  // Pattern: at each mid, decide which half is sorted by comparing
  // nums[lo] and nums[mid]; then a plain range check on the sorted
  // half tells us whether to keep it or the other half.
  // Time: O(log n), Space: O(1)
  let lo = 0
  let hi = nums.length - 1 // closed range

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    const midVal = nums[mid]!
    if (midVal === target) return mid

    const loVal = nums[lo]!
    if (loVal <= midVal) {
      // left half [lo..mid] is sorted
      if (loVal <= target && target < midVal) {
        hi = mid - 1
      } else {
        lo = mid + 1
      }
    } else {
      // right half [mid..hi] is sorted
      const hiVal = nums[hi]!
      if (midVal < target && target <= hiVal) {
        lo = mid + 1
      } else {
        hi = mid - 1
      }
    }
  }

  return -1
}

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
  throw new Error('TODO: implement me')
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
  throw new Error('TODO: implement me')
}

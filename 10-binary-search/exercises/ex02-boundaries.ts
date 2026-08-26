// ex02 — Boundary searches: lower bound, upper bound, insert position.
// Scenario: a sorted price list; find where a price would slot in, or
// the span of entries at an exact price.
// Check: npm test -- 10 -t ex02

/**
 * First index `i` such that `nums[i] >= x` (or `nums.length` if every
 * element is smaller). The classic template's condition, named.
 *
 * @param nums - ascending sorted array (may contain duplicates)
 * @param x - the boundary value
 * @returns the leftmost insertion index that keeps `nums` sorted
 * @example lowerBound([1, 3, 3, 3, 5], 3) -> 1
 * @example lowerBound([1, 2, 3], 10) -> 3
 * @example lowerBound([], 5) -> 0
 * Target complexity: O(log n) time, O(1) space
 */
export function lowerBound(nums: number[], x: number): number {
  throw new Error('TODO: implement me')
}

/**
 * First index `i` such that `nums[i] > x` (or `nums.length` if no
 * element is bigger). Same loop as `lowerBound`, `>` instead of `>=`.
 *
 * @param nums - ascending sorted array (may contain duplicates)
 * @param x - the boundary value
 * @returns the rightmost insertion index that keeps `nums` sorted
 * @example upperBound([1, 3, 3, 3, 5], 3) -> 4
 * @example upperBound([1, 2, 3], 10) -> 3
 * @example upperBound([], 5) -> 0
 * Target complexity: O(log n) time, O(1) space
 */
export function upperBound(nums: number[], x: number): number {
  throw new Error('TODO: implement me')
}

/**
 * The index where `x` should be inserted to keep `nums` sorted,
 * preferring the leftmost valid spot when `x` is already present
 * (i.e. identical to `lowerBound`) — named separately because
 * "insert position" is how this idea usually shows up in problems.
 *
 * @param nums - ascending sorted array (may contain duplicates)
 * @param x - the value to insert
 * @returns the leftmost index at which `x` keeps `nums` sorted
 * @example insertPosition([1, 3, 5, 7], 4) -> 2
 * @example insertPosition([1, 3, 5, 7], 0) -> 0
 * @example insertPosition([1, 3, 5, 7], 9) -> 4
 * Target complexity: O(log n) time, O(1) space
 */
export function insertPosition(nums: number[], x: number): number {
  throw new Error('TODO: implement me')
}

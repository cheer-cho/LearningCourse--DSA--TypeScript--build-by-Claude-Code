// ex06 — Prefix sums: build once, answer range queries in O(1), plus
// the pivot-index pattern. Pattern: prefix sums.
// Check: npm test -- 04 -t ex06

/**
 * Build the prefix-sum array of `nums`: length `n + 1`, `prefix[0] === 0`,
 * and `prefix[k] === nums[0] + ... + nums[k - 1]` for `k` from 1 to n.
 *
 * @param nums - input array
 * @returns the prefix-sum array, one longer than `nums`
 * @example
 * buildPrefix([3, 1, 4, 1, 5]) -> [0, 3, 4, 8, 9, 14]
 * buildPrefix([]) -> [0]
 *
 * Target: O(n) time, O(n) space.
 */
export function buildPrefix(nums: number[]): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Answers repeated inclusive range-sum queries over a fixed array in
 * O(1) each, after an O(n) one-time precompute in the constructor.
 *
 * @example
 * const rs = new RangeSum([3, 1, 4, 1, 5, 9, 2])
 * rs.query(2, 4) -> 10   // 4 + 1 + 5
 * rs.query(0, 0) -> 3
 *
 * Target: O(n) constructor, O(1) per query.
 */
export class RangeSum {
  constructor(nums: number[]) {
    throw new Error('TODO: implement me')
  }

  /**
   * Inclusive range sum: `nums[i] + nums[i + 1] + ... + nums[j]`.
   * @param i - start index, inclusive
   * @param j - end index, inclusive (`i <= j`)
   */
  query(i: number, j: number): number {
    throw new Error('TODO: implement me')
  }
}

/**
 * Find the smallest index `k` where the sum of everything strictly to
 * its left equals the sum of everything strictly to its right (the
 * element at `k` itself counts toward neither side).
 *
 * @param nums - input array
 * @returns the smallest pivot index, or -1 if none exists
 * @example
 * pivotIndex([1, 7, 3, 6, 5, 6]) -> 3   // left 1+7+3=11, right 5+6=11
 * pivotIndex([1, 2, 3]) -> -1
 *
 * Target: O(n) time, O(1) extra space.
 */
export function pivotIndex(nums: number[]): number {
  throw new Error('TODO: implement me')
}

// ex02 — Generalize the segment tree: range min query instead of sum.
// Pattern: segment tree / swappable merge function.
// Check: npm test -- 21 -t ex02

/**
 * Array-based segment tree answering range-minimum queries and point
 * updates in O(log n).
 *
 * The ONLY difference from SegmentTree (ex01) is the merge function
 * and its identity element:
 *   - sum tree:  merge = (a, b) => a + b,   identity = 0
 *   - min tree:  merge = (a, b) => Math.min(a, b), identity = +Infinity
 *
 * Noticing this abstraction is the lesson: one skeleton, many aggregates.
 *
 * @example
 * const rm = new RangeMinTree([3, 1, 4, 1, 5, 9])
 * rm.rangeMin(0, 5) // -> 1
 * rm.rangeMin(2, 5) // -> 1
 * rm.update(1, 10)
 * rm.rangeMin(0, 3) // -> 1  (index 3 still holds 1)
 * rm.rangeMin(0, 0) // -> 3
 *
 * Target: O(n) build, O(log n) per rangeMin, O(log n) per update.
 */
export class RangeMinTree {
  private readonly tree: number[]
  private readonly n: number

  constructor(nums: number[]) {
    this.n = nums.length
    this.tree = new Array(4 * this.n).fill(Infinity)
    if (this.n > 0) {
      this.build(nums, 0, 0, this.n - 1)
    }
  }

  /**
   * Returns the minimum of nums[i..j] (both endpoints inclusive).
   *
   * @param i - left endpoint (0-indexed, inclusive)
   * @param j - right endpoint (0-indexed, inclusive)
   * @returns minimum element in [i, j]
   * @remarks i must be <= j, and both must be valid indices.
   * @example rangeMin(1, 4) on [3,1,4,1,5] -> 1
   * Target: O(log n) time
   */
  rangeMin(i: number, j: number): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Sets nums[i] = value and propagates the change up the tree.
   *
   * @param i - 0-indexed position to update
   * @param value - new value at position i
   * @returns nothing
   * @example update(0, -5) on [3,1,4,1] makes rangeMin(0,3) -> -5
   * Target: O(log n) time
   */
  update(i: number, value: number): void {
    throw new Error('TODO: implement me')
  }

  private build(nums: number[], node: number, lo: number, hi: number): void {
    throw new Error('TODO: implement me')
  }
}

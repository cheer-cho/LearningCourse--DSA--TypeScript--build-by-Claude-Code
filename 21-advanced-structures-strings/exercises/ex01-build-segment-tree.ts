// ex01 — Build a segment tree from scratch: range sum query + point update.
// Pattern: segment tree / divide & conquer / mutable range aggregation.
// Check: npm test -- 21 -t ex01

/**
 * Array-based segment tree that answers range sum queries and point
 * updates in O(log n) each.
 *
 * Storage: an internal array of size 4 * n. Node at index `node` covers
 * data range [lo, hi]. Children are at `2*node+1` and `2*node+2`.
 *
 * @example
 * const st = new SegmentTree([2, 5, 1, 4, 9, 3])
 * st.rangeSum(1, 4) // -> 19  (5+1+4+9)
 * st.update(2, 10)
 * st.rangeSum(1, 4) // -> 28  (5+10+4+9)
 *
 * Target: O(n) build, O(log n) per rangeSum, O(log n) per update.
 */
export class SegmentTree {
  private readonly tree: number[]
  private readonly n: number

  constructor(nums: number[]) {
    this.n = nums.length
    this.tree = new Array(4 * this.n).fill(0)
    if (this.n > 0) {
      this.build(nums, 0, 0, this.n - 1)
    }
  }

  /**
   * Returns the sum of nums[i..j] (both endpoints inclusive).
   *
   * @param i - left endpoint (0-indexed, inclusive)
   * @param j - right endpoint (0-indexed, inclusive)
   * @returns sum of elements in [i, j]
   * @remarks i must be <= j, and both must be valid indices.
   * @example rangeSum(0, 2) on [2,5,1,4,9,3] -> 8
   * Target: O(log n) time, O(log n) stack space
   */
  rangeSum(i: number, j: number): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Sets nums[i] = value and propagates the change up the tree.
   *
   * @param i - 0-indexed position to update
   * @param value - new value at position i
   * @returns nothing
   * @example update(2, 10) on [2,5,1,4] makes rangeSum(0,3) -> 21
   * Target: O(log n) time, O(log n) stack space
   */
  update(i: number, value: number): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Recursively builds the segment tree from nums.
   * You may use this as a private helper — it is provided as a guide.
   * node: current tree-array index
   * lo, hi: data range this node covers
   */
  private build(nums: number[], node: number, lo: number, hi: number): void {
    throw new Error('TODO: implement me')
  }
}

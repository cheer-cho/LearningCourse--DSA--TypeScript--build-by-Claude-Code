// ex03 — Build a Fenwick tree (BIT) from scratch, then use it for
//        countSmallerAfter — a classic "count inversions" variant.
// Pattern: Fenwick tree / coordinate compression / prefix query.
// Check: npm test -- 21 -t ex03

/**
 * Fenwick Tree (Binary Indexed Tree) supporting point adds and
 * prefix-sum queries in O(log n) each.
 *
 * Uses 1-indexed positions internally (external callers use 0-indexed).
 *
 * The lowbit trick: `i & (-i)` isolates the lowest set bit.
 * - `add(i, delta)`:    walk UP   by adding lowbit(i) each step.
 * - `prefixSum(i)`:     walk DOWN by subtracting lowbit(i) each step.
 *
 * @example
 * const fw = new Fenwick(5)
 * fw.add(0, 3); fw.add(2, 2); fw.add(4, 1)
 * fw.prefixSum(4) // -> 6  (all five positions: 3+0+2+0+1)
 * fw.rangeSum(2, 4) // -> 3  (positions 2,3,4: 2+0+1)
 *
 * Target: O(n log n) build (or O(n) with smart build), O(log n) per add/query.
 */
export class Fenwick {
  private readonly tree: number[]
  private readonly size: number

  /**
   * Constructs a Fenwick tree for `n` elements, all initialised to 0.
   *
   * @param n - number of elements (0-indexed externally, 1-indexed internally)
   */
  constructor(n: number) {
    this.size = n
    this.tree = new Array(n + 1).fill(0)
  }

  /**
   * Adds `delta` to position `i` (0-indexed).
   *
   * @param i - 0-indexed position
   * @param delta - amount to add (may be negative)
   * @returns nothing
   * @example add(2, 5) increases nums[2] by 5
   * Target: O(log n) time
   */
  add(i: number, delta: number): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Returns the prefix sum of positions [0..i] (0-indexed, inclusive).
   *
   * @param i - 0-indexed right endpoint
   * @returns sum of nums[0], nums[1], ..., nums[i]
   * @example after add(0,3), add(2,2): prefixSum(2) -> 5
   * Target: O(log n) time
   */
  prefixSum(i: number): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Returns the sum of positions [i..j] (0-indexed, both inclusive).
   *
   * @param i - left endpoint (0-indexed)
   * @param j - right endpoint (0-indexed)
   * @returns sum of nums[i..j]; 0 if i > j
   * @example after add(0,3), add(2,2), add(4,1): rangeSum(2,4) -> 3
   * Target: O(log n) time (two prefix-sum calls)
   */
  rangeSum(i: number, j: number): number {
    throw new Error('TODO: implement me')
  }
}

/**
 * For each position `k` in `nums`, counts how many elements to the
 * RIGHT of `k` are strictly smaller than `nums[k]`.
 *
 * Strategy (the HARD part — read the comments below for scaffolding):
 * 1. Coordinate-compress the values to the range [0, unique-count).
 * 2. Scan right to left. For each element, query the Fenwick for how
 *    many elements already seen (i.e., to the right of the current
 *    position) have a compressed rank < current rank. Then add 1 to
 *    the current rank's bucket.
 *
 * Coordinate compression: sort the unique values, build a Map from
 * value → rank (0-indexed). This maps arbitrary integers onto [0, m)
 * where m = unique value count, preserving relative order.
 *
 * @param nums - array of integers (may have duplicates, negatives)
 * @returns array of the same length, result[k] = count of elements to
 *          the right of k that are strictly less than nums[k]
 * @remarks result[last] is always 0 (nothing to the right of the last element).
 * @example
 * countSmallerAfter([5, 2, 6, 1]) -> [2, 1, 1, 0]
 *   - 5: 2 and 1 are smaller to its right
 *   - 2: only 1 is smaller to its right
 *   - 6: only 1 is smaller to its right
 *   - 1: nothing to its right
 * @example
 * countSmallerAfter([1, 2, 3]) -> [0, 0, 0]  (already sorted)
 * @example
 * countSmallerAfter([3, 2, 1]) -> [2, 1, 0]  (reverse sorted)
 * Target: O(n log n) time, O(n) space
 */
export function countSmallerAfter(nums: number[]): number[] {
  throw new Error('TODO: implement me')
}

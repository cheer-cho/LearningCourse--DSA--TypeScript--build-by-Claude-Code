// Reference solution — ex02
// Pattern: segment tree (min merge). Identical structure to ex01 — only the
// merge function and identity element differ: Math.min vs +, Infinity vs 0.
// Build: O(n). Query & update each: O(log n). Space: O(n).

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

  rangeMin(i: number, j: number): number {
    return this.query(0, 0, this.n - 1, i, j)
  }

  update(i: number, value: number): void {
    this.pointUpdate(0, 0, this.n - 1, i, value)
  }

  private build(nums: number[], node: number, lo: number, hi: number): void {
    if (lo === hi) {
      this.tree[node] = nums[lo] ?? Infinity
      return
    }
    const mid = Math.floor((lo + hi) / 2)
    this.build(nums, 2 * node + 1, lo, mid)
    this.build(nums, 2 * node + 2, mid + 1, hi)
    this.tree[node] = Math.min(
      this.tree[2 * node + 1] ?? Infinity,
      this.tree[2 * node + 2] ?? Infinity,
    )
  }

  private query(node: number, lo: number, hi: number, i: number, j: number): number {
    // Case 1: entirely inside query range
    if (i <= lo && hi <= j) return this.tree[node] ?? Infinity
    // Case 2: no overlap — return identity element for min
    if (hi < i || lo > j) return Infinity
    // Case 3: partial overlap
    const mid = Math.floor((lo + hi) / 2)
    const left = this.query(2 * node + 1, lo, mid, i, j)
    const right = this.query(2 * node + 2, mid + 1, hi, i, j)
    return Math.min(left, right)
  }

  private pointUpdate(node: number, lo: number, hi: number, i: number, value: number): void {
    if (lo === hi) {
      this.tree[node] = value
      return
    }
    const mid = Math.floor((lo + hi) / 2)
    if (i <= mid) {
      this.pointUpdate(2 * node + 1, lo, mid, i, value)
    } else {
      this.pointUpdate(2 * node + 2, mid + 1, hi, i, value)
    }
    this.tree[node] = Math.min(
      this.tree[2 * node + 1] ?? Infinity,
      this.tree[2 * node + 2] ?? Infinity,
    )
  }
}

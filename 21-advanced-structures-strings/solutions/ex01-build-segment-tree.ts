// Reference solution — ex01
// Pattern: segment tree (sum merge). Array-based, children at 2*node+1 / 2*node+2.
// Build: O(n). Query & update each: O(log n) — at most 4 nodes per level, log n levels.
// Space: O(n) tree array; O(log n) recursion stack.

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

  rangeSum(i: number, j: number): number {
    return this.query(0, 0, this.n - 1, i, j)
  }

  update(i: number, value: number): void {
    this.pointUpdate(0, 0, this.n - 1, i, value)
  }

  private build(nums: number[], node: number, lo: number, hi: number): void {
    if (lo === hi) {
      this.tree[node] = nums[lo] ?? 0
      return
    }
    const mid = Math.floor((lo + hi) / 2)
    this.build(nums, 2 * node + 1, lo, mid)
    this.build(nums, 2 * node + 2, mid + 1, hi)
    this.tree[node] = (this.tree[2 * node + 1] ?? 0) + (this.tree[2 * node + 2] ?? 0)
  }

  private query(node: number, lo: number, hi: number, i: number, j: number): number {
    // Case 1: entire segment is inside query range
    if (i <= lo && hi <= j) return this.tree[node] ?? 0
    // Case 2: no overlap
    if (hi < i || lo > j) return 0
    // Case 3: partial overlap — recurse
    const mid = Math.floor((lo + hi) / 2)
    const left = this.query(2 * node + 1, lo, mid, i, j)
    const right = this.query(2 * node + 2, mid + 1, hi, i, j)
    return left + right
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
    this.tree[node] = (this.tree[2 * node + 1] ?? 0) + (this.tree[2 * node + 2] ?? 0)
  }
}

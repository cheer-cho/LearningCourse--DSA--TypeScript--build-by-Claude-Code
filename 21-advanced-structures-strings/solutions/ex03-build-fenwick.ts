// Reference solution — ex03
// Pattern: Fenwick tree (BIT). Lowbit trick: i & (-i) isolates lowest set bit.
// add: walk UP (i += lowbit(i)) — O(log n). prefixSum: walk DOWN (i -= lowbit(i)) — O(log n).
// countSmallerAfter: coordinate-compress then scan right-to-left, querying prefix [0, rank-1].
// Time: O(n log n). Space: O(n).

export class Fenwick {
  private readonly tree: number[]
  private readonly size: number

  constructor(n: number) {
    this.size = n
    this.tree = new Array(n + 1).fill(0)
  }

  add(i: number, delta: number): void {
    let pos = i + 1 // convert to 1-indexed
    while (pos <= this.size) {
      this.tree[pos] = (this.tree[pos] ?? 0) + delta
      pos += pos & -pos // climb to parent
    }
  }

  prefixSum(i: number): number {
    let pos = i + 1 // convert to 1-indexed
    let sum = 0
    while (pos > 0) {
      sum += this.tree[pos] ?? 0
      pos -= pos & -pos // move to preceding chunk
    }
    return sum
  }

  rangeSum(i: number, j: number): number {
    if (i > j) return 0
    return this.prefixSum(j) - (i > 0 ? this.prefixSum(i - 1) : 0)
  }
}

export function countSmallerAfter(nums: number[]): number[] {
  const n = nums.length
  if (n === 0) return []

  // Coordinate compression: map arbitrary values to [0, m)
  const sorted = [...new Set(nums)].sort((a, b) => a - b)
  const rank = new Map<number, number>()
  sorted.forEach((v, i) => rank.set(v, i))
  const m = sorted.length

  const fw = new Fenwick(m)
  const result = new Array<number>(n).fill(0)

  // Scan right to left: for each element, query how many already-seen
  // elements (to the right) have rank strictly less than current rank.
  for (let i = n - 1; i >= 0; i--) {
    const r = rank.get(nums[i] ?? 0) ?? 0
    // count of elements with rank in [0, r-1] already inserted
    result[i] = r > 0 ? fw.prefixSum(r - 1) : 0
    fw.add(r, 1)
  }

  return result
}

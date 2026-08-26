// Reference solution — checkpoint 21
// Combines: two segment trees (sum + min) for record/windowTotal/windowLow,
// KMP for alertScan (guaranteed O(n+m), no hash collisions possible),
// prefix sums for busiestWindow (simple O(n) scan, no deque needed for sums).

// ── Segment tree helpers ──────────────────────────────────────────────────────

class SegTree {
  private readonly tree: number[]
  private readonly n: number
  private readonly identity: number
  private readonly merge: (a: number, b: number) => number

  constructor(
    nums: number[],
    identity: number,
    merge: (a: number, b: number) => number,
  ) {
    this.n = nums.length
    this.identity = identity
    this.merge = merge
    this.tree = new Array(4 * this.n).fill(identity)
    if (this.n > 0) this.build(nums, 0, 0, this.n - 1)
  }

  query(i: number, j: number): number {
    return this.queryHelper(0, 0, this.n - 1, i, j)
  }

  update(i: number, value: number): void {
    this.updateHelper(0, 0, this.n - 1, i, value)
  }

  private build(nums: number[], node: number, lo: number, hi: number): void {
    if (lo === hi) {
      this.tree[node] = nums[lo] ?? this.identity
      return
    }
    const mid = Math.floor((lo + hi) / 2)
    this.build(nums, 2 * node + 1, lo, mid)
    this.build(nums, 2 * node + 2, mid + 1, hi)
    this.tree[node] = this.merge(
      this.tree[2 * node + 1] ?? this.identity,
      this.tree[2 * node + 2] ?? this.identity,
    )
  }

  private queryHelper(node: number, lo: number, hi: number, i: number, j: number): number {
    if (i <= lo && hi <= j) return this.tree[node] ?? this.identity
    if (hi < i || lo > j) return this.identity
    const mid = Math.floor((lo + hi) / 2)
    return this.merge(
      this.queryHelper(2 * node + 1, lo, mid, i, j),
      this.queryHelper(2 * node + 2, mid + 1, hi, i, j),
    )
  }

  private updateHelper(node: number, lo: number, hi: number, i: number, value: number): void {
    if (lo === hi) {
      this.tree[node] = value
      return
    }
    const mid = Math.floor((lo + hi) / 2)
    if (i <= mid) this.updateHelper(2 * node + 1, lo, mid, i, value)
    else this.updateHelper(2 * node + 2, mid + 1, hi, i, value)
    this.tree[node] = this.merge(
      this.tree[2 * node + 1] ?? this.identity,
      this.tree[2 * node + 2] ?? this.identity,
    )
  }
}

// ── KMP helpers ───────────────────────────────────────────────────────────────

function buildFailureTable(pattern: string): number[] {
  const m = pattern.length
  const table = new Array<number>(m).fill(0)
  let k = 0
  for (let i = 1; i < m; i++) {
    while (k > 0 && pattern[k] !== pattern[i]) k = table[k - 1] ?? 0
    if (pattern[k] === pattern[i]) k++
    table[i] = k
  }
  return table
}

function kmpFindAll(text: string, pattern: string): number[] {
  const n = text.length
  const m = pattern.length
  if (m === 0 || m > n) return []
  const table = buildFailureTable(pattern)
  const result: number[] = []
  let k = 0
  for (let i = 0; i < n; i++) {
    while (k > 0 && pattern[k] !== text[i]) k = table[k - 1] ?? 0
    if (pattern[k] === text[i]) k++
    if (k === m) {
      result.push(i - m + 1)
      k = table[k - 1] ?? 0
    }
  }
  return result
}

// ── MetricsBoard ─────────────────────────────────────────────────────────────

export class MetricsBoard {
  private readonly sumTree: SegTree
  private readonly minTree: SegTree

  constructor(initialValues: number[]) {
    this.sumTree = new SegTree(initialValues, 0, (a, b) => a + b)
    this.minTree = new SegTree(initialValues, Infinity, (a, b) => Math.min(a, b))
  }

  record(i: number, v: number): void {
    this.sumTree.update(i, v)
    this.minTree.update(i, v)
  }

  windowTotal(i: number, j: number): number {
    return this.sumTree.query(i, j)
  }

  windowLow(i: number, j: number): number {
    return this.minTree.query(i, j)
  }

  /**
   * Uses KMP — guaranteed O(n + m) with no hash collisions, making it the
   * safest choice when the log is large and adversarial inputs are possible.
   */
  alertScan(logText: string, signature: string): number[] {
    return kmpFindAll(logText, signature)
  }

  /**
   * Uses prefix sums — window sum queries are invertible (unlike min), so
   * prefix sums give an O(n) solution that is simpler than a deque.
   */
  busiestWindow(readings: number[], k: number): number {
    const n = readings.length
    if (n === 0 || k > n) return 0

    // Build prefix sums
    const prefix = new Array<number>(n + 1).fill(0)
    for (let i = 0; i < n; i++) {
      prefix[i + 1] = (prefix[i] ?? 0) + (readings[i] ?? 0)
    }

    let best = -Infinity
    for (let i = k; i <= n; i++) {
      const windowSum = (prefix[i] ?? 0) - (prefix[i - k] ?? 0)
      if (windowSum > best) best = windowSum
    }

    return best === -Infinity ? 0 : best
  }
}

/**
 * ex04 — K closest points to the origin
 *
 * Scenario: given sensor readings as (x, y) offsets, find the k
 * closest to the origin. Pattern: size-k heap, but INVERTED from
 * ex03 — a MAX-heap of size k keeps the k smallest distances (evict
 * the farthest whenever the heap grows past k).
 *
 * A generic MinHeap<T> is PROVIDED below (do not edit); give it a
 * comparator that puts the LARGEST distance on top to use it as a
 * max-heap.
 *
 * Check: npm test -- 12 -t ex04
 */

// ---- provided — do not edit --------------------------------------------
class MinHeap<T> {
  private heap: T[] = []
  constructor(private readonly compare: (a: T, b: T) => number) {}

  push(val: T): void {
    this.heap.push(val)
    this.siftUp(this.heap.length - 1)
  }

  pop(): T {
    if (this.heap.length === 0) throw new Error('MinHeap.pop: heap is empty')
    const top = this.heap[0]!
    const last = this.heap.pop()!
    if (this.heap.length > 0) {
      this.heap[0] = last
      this.siftDown(0)
    }
    return top
  }

  peek(): T {
    if (this.heap.length === 0) throw new Error('MinHeap.peek: heap is empty')
    return this.heap[0]!
  }

  size(): number {
    return this.heap.length
  }

  isEmpty(): boolean {
    return this.heap.length === 0
  }

  private siftUp(index: number): void {
    let i = index
    while (i > 0) {
      const parent = (i - 1) >> 1
      if (this.compare(this.heap[parent]!, this.heap[i]!) <= 0) break
      this.swap(i, parent)
      i = parent
    }
  }

  private siftDown(index: number): void {
    let i = index
    const n = this.heap.length
    while (true) {
      const left = 2 * i + 1
      const right = 2 * i + 2
      let top = i
      if (left < n && this.compare(this.heap[left]!, this.heap[top]!) < 0) top = left
      if (right < n && this.compare(this.heap[right]!, this.heap[top]!) < 0) top = right
      if (top === i) break
      this.swap(i, top)
      i = top
    }
  }

  private swap(i: number, j: number): void {
    const tmp = this.heap[i]!
    this.heap[i] = this.heap[j]!
    this.heap[j] = tmp
  }
}
// -------------------------------------------------------------------------

/**
 * Find the k points closest to the origin (0, 0).
 *
 * Compare squared distances (x^2 + y^2) — never sqrt: it's monotonic
 * with true distance, so it orders points identically while avoiding
 * float rounding and the extra cost entirely.
 *
 * @param points - points as [x, y] pairs
 * @param k - how many closest points to return, 0 <= k <= points.length
 * @returns the k closest points, in ANY order
 * input: points=[[1,3],[-2,2],[5,8],[0,1]], k=2 -> [[-2,2],[0,1]] (order may vary)
 * Target: O(n log k) time, O(k) space
 * (compare: heapify-all-then-pop-k is O(n + k log n) — also valid, and
 * better when k is close to n)
 */
export function kClosest(points: Array<[number, number]>, k: number): Array<[number, number]> {
  throw new Error('TODO: implement me')
}

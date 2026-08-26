/**
 * ex03 — Top-K frequent elements
 *
 * Scenario: given a log of numeric event codes, find the k codes that
 * fired most often. Pattern: count, then a size-k heap (the "keep
 * only k" trick from the lesson).
 *
 * A generic MinHeap<T> is PROVIDED below (do not edit) — same
 * push/pop/peek logic as ex01's MinHeap, generalized with a
 * comparator so it can heap any type in any order.
 *
 * Check: npm test -- 12 -t ex03
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
 * Find the k most frequent values in nums.
 *
 * Keep a MIN-heap of size k keyed by frequency: whichever entry has
 * the smallest frequency sits on top, so once the heap grows past k,
 * popping evicts the least-frequent of the current top-k candidates.
 * A min-heap answering a "top-k LARGEST" query is the inversion the
 * lesson warns about.
 *
 * @param nums - values to count (non-empty)
 * @param k - how many of the most frequent values to return, 1 <= k <= distinct count
 * @returns the k most frequent values, in ANY order
 * edge cases: all values equal -> returns that one value; k equal to
 *   the number of distinct values -> returns all of them
 * input: nums=[1,1,1,2,2,3], k=2 -> [1,2] (order may vary)
 * Target: O(n log k) time, O(n) space
 * (compare: sort-everything is O(n log n); bucket sort by frequency is O(n))
 */
export function topKFrequent(nums: number[], k: number): number[] {
  throw new Error('TODO: implement me')
}

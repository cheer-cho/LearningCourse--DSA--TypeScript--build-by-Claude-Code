/**
 * ex05 — Kth largest in a stream
 *
 * Scenario: a live leaderboard needs "what's currently the kth-highest
 * score?" answered after every new score arrives. Pattern: a MIN-heap
 * of size k — its root is always the kth largest seen so far.
 *
 * A generic MinHeap<T> is PROVIDED below (do not edit).
 *
 * Check: npm test -- 12 -t ex05
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

export class KthLargest {
  /**
   * @param k - which rank to track (k=1 is the running maximum)
   * @param initial - scores already seen before construction
   * Target: O(n log k) time for the initial load, O(k) space
   */
  constructor(k: number, initial: number[]) {
    throw new Error('TODO: implement me')
  }

  /**
   * Record a new score and report the current kth largest.
   * @param val - the new score
   * @returns the kth largest score across every score seen so far
   *   (the initial list plus every call to add, including this one)
   * input: k=3, after initial=[4,5,8,2] then add(3) -> 4
   * Target: O(log k) time, O(1) additional space
   */
  add(val: number): number {
    throw new Error('TODO: implement me')
  }
}

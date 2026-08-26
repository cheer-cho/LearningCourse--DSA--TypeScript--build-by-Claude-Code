/**
 * ex06 — Running median (HARD)
 *
 * Scenario: track the median of a growing stream of numbers (e.g.
 * live latency samples) after every new sample, without re-sorting
 * from scratch each time. Pattern: two balanced heaps.
 *
 * `lows` is a MAX-heap holding the smaller half of the numbers seen
 * so far; `highs` is a MIN-heap holding the larger half. Invariant
 * after every add: lows.size() equals highs.size(), or is exactly one
 * more. That invariant is what makes median() O(1) — the median is
 * either lows' top, or the average of both tops.
 *
 * A generic MinHeap<T> is PROVIDED below (do not edit); build `lows`
 * by passing a comparator that inverts the natural order.
 *
 * Check: npm test -- 12 -t ex06
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

export class MedianFinder {
  /**
   * Add a number to the running stream.
   * Route it to `lows` or `highs` by comparing against lows' current
   * max, then rebalance so the two heaps never differ in size by more
   * than one.
   * Target: O(log n) time per call, O(n) total space
   */
  add(num: number): void {
    throw new Error('TODO: implement me')
  }

  /**
   * @returns the median of every number added so far
   * @throws if no numbers have been added yet
   * Target: O(1) time
   */
  median(): number {
    throw new Error('TODO: implement me')
  }
}

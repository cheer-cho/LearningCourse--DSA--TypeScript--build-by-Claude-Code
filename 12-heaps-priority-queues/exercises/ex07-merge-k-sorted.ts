/**
 * ex07 — Merge k sorted lists
 *
 * Scenario: k already-sorted log shards need to become one sorted
 * stream. Pattern: a heap holding one "next candidate" per shard,
 * keyed by value and tagged with which list and index it came from,
 * so popping tells you exactly what to push next.
 *
 * A generic MinHeap<T> is PROVIDED below (do not edit).
 *
 * Check: npm test -- 12 -t ex07
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
 * Merge k already-sorted (ascending) arrays into one sorted array.
 * @param lists - k sorted arrays (any may be empty)
 * @returns a single ascending array containing every element from every list
 * input: lists=[[1,4,7],[2,3],[0,9]] -> [0,1,2,3,4,7,9]
 * Target: O(n log k) time, O(k) heap space (n = total elements, k = lists.length)
 * (compare: repeatedly merging the running result with the next list
 * one at a time is O(nk); the heap keeps only k candidates alive at once)
 */
export function mergeKSorted(lists: number[][]): number[] {
  throw new Error('TODO: implement me')
}

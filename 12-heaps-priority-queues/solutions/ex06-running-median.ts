// Reference solution — ex06
// Pattern: two balanced heaps. `lows` (max-heap) holds the smaller
// half, `highs` (min-heap) holds the larger half, kept within one
// element of each other in size. Rebalancing on add is O(log n);
// reading the median off the two tops is O(1) -- the whole point of
// paying the heap cost on every add instead of re-sorting on every
// median() call.

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
  private lows = new MinHeap<number>((a, b) => b - a) // max-heap: largest on top
  private highs = new MinHeap<number>((a, b) => a - b) // min-heap: smallest on top

  add(num: number): void {
    if (this.lows.isEmpty() || num <= this.lows.peek()) {
      this.lows.push(num)
    } else {
      this.highs.push(num)
    }

    if (this.lows.size() > this.highs.size() + 1) {
      this.highs.push(this.lows.pop())
    } else if (this.highs.size() > this.lows.size()) {
      this.lows.push(this.highs.pop())
    }
  }

  median(): number {
    if (this.lows.isEmpty() && this.highs.isEmpty()) {
      throw new Error('MedianFinder.median: no numbers added yet')
    }
    if (this.lows.size() > this.highs.size()) return this.lows.peek()
    return (this.lows.peek() + this.highs.peek()) / 2
  }
}

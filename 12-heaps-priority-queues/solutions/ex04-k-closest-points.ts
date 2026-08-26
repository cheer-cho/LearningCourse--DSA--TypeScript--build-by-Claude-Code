// Reference solution — ex04
// Pattern: size-k max-heap (the same generic MinHeap, with a
// comparator flipped so the LARGEST distance sits on top). Whenever
// the heap grows past k, popping evicts the farthest of the current
// k-closest candidates. O(n log k) time, O(k) heap space.

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

const sqDist = ([x, y]: [number, number]): number => x * x + y * y

export function kClosest(points: Array<[number, number]>, k: number): Array<[number, number]> {
  const heap = new MinHeap<[number, number]>((a, b) => sqDist(b) - sqDist(a))

  for (const p of points) {
    heap.push(p)
    if (heap.size() > k) heap.pop()
  }

  const result: Array<[number, number]> = []
  while (!heap.isEmpty()) result.push(heap.pop())
  return result
}

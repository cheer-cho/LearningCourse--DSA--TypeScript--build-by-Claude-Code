// Reference solution — ex07
// Pattern: heap of "next candidate", one entry per list, keyed by
// value and tagged with [listIdx, elemIdx] so popping tells you
// exactly what to push next. Each element enters and leaves the heap
// exactly once, and the heap never holds more than k entries: O(n log
// k) time (n total elements), O(k) heap space plus O(n) for the output.

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

export function mergeKSorted(lists: number[][]): number[] {
  const heap = new MinHeap<[number, number, number]>((a, b) => a[0] - b[0])

  for (let listIdx = 0; listIdx < lists.length; listIdx++) {
    const list = lists[listIdx]!
    if (list.length > 0) heap.push([list[0]!, listIdx, 0])
  }

  const result: number[] = []
  while (!heap.isEmpty()) {
    const [value, listIdx, elemIdx] = heap.pop()
    result.push(value)
    const list = lists[listIdx]!
    const nextIdx = elemIdx + 1
    if (nextIdx < list.length) heap.push([list[nextIdx]!, listIdx, nextIdx])
  }

  return result
}

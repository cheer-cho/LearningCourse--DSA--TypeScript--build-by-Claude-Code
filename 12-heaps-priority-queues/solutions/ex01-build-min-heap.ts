// Reference solution — ex01
// Pattern: array-packed complete binary tree. Sift-up restores the
// property after an insert at the end; sift-down restores it after
// the root is replaced. Bottom-up heapify is O(n) (not O(n log n))
// because most nodes live near the leaves, where a sift-down only
// travels a short distance — see LESSON.md for the full argument.

export class MinHeap {
  private heap: number[] = []

  static heapify(nums: number[]): MinHeap {
    const h = new MinHeap()
    h.heap = [...nums]
    for (let i = Math.floor(h.heap.length / 2) - 1; i >= 0; i--) {
      h.siftDown(i)
    }
    return h
  }

  push(val: number): void {
    this.heap.push(val)
    this.siftUp(this.heap.length - 1)
  }

  pop(): number {
    if (this.heap.length === 0) throw new Error('MinHeap.pop: heap is empty')
    const min = this.heap[0]!
    const last = this.heap.pop()!
    if (this.heap.length > 0) {
      this.heap[0] = last
      this.siftDown(0)
    }
    return min
  }

  peek(): number {
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
      if (this.heap[parent]! <= this.heap[i]!) break
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
      let smallest = i
      if (left < n && this.heap[left]! < this.heap[smallest]!) smallest = left
      if (right < n && this.heap[right]! < this.heap[smallest]!) smallest = right
      if (smallest === i) break
      this.swap(i, smallest)
      i = smallest
    }
  }

  private swap(i: number, j: number): void {
    const tmp = this.heap[i]!
    this.heap[i] = this.heap[j]!
    this.heap[j] = tmp
  }
}

// Reference solution — ex05
// Pattern: Prim's algorithm. Grow one tree from point 0. A min-heap
// holds (distance, point) candidates reachable from the tree so far;
// popping the cheapest and, if unvisited, adding it and pushing its
// distances to every other point is the frontier expansion. Edges are
// generated lazily (never all n^2/2 of them at once), which is why
// Prim beats sorting the full edge list on a dense/complete graph.
// Time: O(n^2 log n), Space: O(n)

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

function manhattan(a: [number, number], b: [number, number]): number {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
}

export function minCostConnectPoints(points: [number, number][]): number {
  const n = points.length
  if (n <= 1) return 0

  const visited = new Array(n).fill(false)
  const heap = new MinHeap<[number, number]>((a, b) => a[0] - b[0]) // [distance, pointIndex]
  heap.push([0, 0])

  let totalCost = 0
  let visitedCount = 0

  while (visitedCount < n) {
    const [dist, point] = heap.pop()
    if (visited[point]) continue // stale entry — a cheaper route already won
    visited[point] = true
    totalCost += dist
    visitedCount++

    for (let next = 0; next < n; next++) {
      if (!visited[next]) heap.push([manhattan(points[point]!, points[next]!), next])
    }
  }

  return totalCost
}

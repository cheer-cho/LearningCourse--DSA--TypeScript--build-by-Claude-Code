/**
 * ex05 — Minimum spanning tree via Prim's algorithm
 *
 * Scenario: n sensor towers on a grid; any pair can be wired directly,
 * cost = Manhattan distance. That's a COMPLETE graph (n*(n-1)/2 edges)
 * — sorting all of them for Kruskal wastes time on edges that will
 * mostly be skipped. Prim grows one tree instead: a heap always offers
 * the cheapest edge from the tree so far to an unvisited point.
 *
 * A generic MinHeap<T> is PROVIDED below (do not edit).
 *
 * Check: npm test -- 16 -t ex05
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
 * Minimum total cost to connect every point, where any two points can
 * be directly wired at their Manhattan distance.
 * @param points - [x, y] coordinates, at least one point
 * @returns the MST cost over the complete Manhattan-distance graph
 * input: points=[[0,0],[2,2],[3,10],[5,2],[7,0]] -> 20
 * Target: O(n^2 log n) time, O(n) space (n = points.length; edges are
 *   generated lazily from the frontier, never all materialized at once)
 */
export function minCostConnectPoints(points: [number, number][]): number {
  throw new Error('TODO: implement me')
}

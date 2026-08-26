/**
 * ex06 — Shortest weighted paths via Dijkstra
 *
 * Scenario: a delivery network, directed roads with travel times.
 * Pattern: a min-heap always expands the currently-cheapest frontier
 * node. Heap entries can go stale (a cheaper route to the same node
 * was already found) — use the lazy-deletion pattern: skip a popped
 * entry if it's worse than the best distance already recorded.
 *
 * A generic MinHeap<T> is PROVIDED below (do not edit).
 *
 * Check: npm test -- 16 -t ex06
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
 * Shortest travel time from `source` to every node.
 * @param n - number of nodes, labeled 0..n-1
 * @param edges - directed roads as [from, to, time], time >= 0
 * @param source - the starting node
 * @returns dist[i] = shortest time from source to i, or -1 if i is
 *   unreachable; dist[source] === 0
 * input: n=3, edges=[[0,1,4],[0,2,1],[2,1,1]], source=0 -> [0, 2, 1]
 * Target: O(E log V) time, O(V + E) space
 */
export function deliveryTimes(n: number, edges: [number, number, number][], source: number): number[] {
  throw new Error('TODO: implement me')
}

/**
 * The shortest path from a to b, as a sequence of node labels.
 * @param n - number of nodes, labeled 0..n-1
 * @param edges - directed roads as [from, to, time], time >= 0
 * @param a - start node
 * @param b - destination node
 * @returns the path from a to b (inclusive) with minimum total time,
 *   or null if b is unreachable from a; [a] if a === b
 * input: n=3, edges=[[0,1,4],[0,2,1],[2,1,1]], a=0, b=1 -> [0, 2, 1]
 * Target: O(E log V) time, O(V + E) space
 */
export function shortestRoute(
  n: number,
  edges: [number, number, number][],
  a: number,
  b: number,
): number[] | null {
  throw new Error('TODO: implement me')
}

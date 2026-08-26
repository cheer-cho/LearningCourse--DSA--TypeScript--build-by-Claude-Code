// Reference solution — ex06
// Pattern: Dijkstra with a lazy-deletion min-heap. The heap can hold
// several stale (distance, node) entries for the same node — pushed
// before a cheaper route to it was found. Skipping a popped entry
// whose distance is worse than the recorded best avoids reprocessing
// a node with an outdated distance, which is what keeps this correct
// without a "decrease-key" heap operation.
// Time: O(E log V), Space: O(V + E)

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

function buildAdjacency(n: number, edges: [number, number, number][]): [number, number][][] {
  const adj: [number, number][][] = Array.from({ length: n }, () => [])
  for (const [from, to, weight] of edges) adj[from]!.push([to, weight])
  return adj
}

/** Runs Dijkstra and returns both the distance array and, for every
 * node, the node it was reached from (or -1 for the source / unreached). */
function dijkstra(n: number, edges: [number, number, number][], source: number): { dist: number[]; parent: number[] } {
  const adj = buildAdjacency(n, edges)
  const dist = new Array(n).fill(Infinity)
  const parent = new Array(n).fill(-1)
  dist[source] = 0

  const heap = new MinHeap<[number, number]>((a, b) => a[0] - b[0]) // [distance, node]
  heap.push([0, source])

  while (!heap.isEmpty()) {
    const [d, node] = heap.pop()
    if (d > dist[node]!) continue // stale entry — a cheaper route already won

    for (const [next, weight] of adj[node]!) {
      const candidate = d + weight
      if (candidate < dist[next]!) {
        dist[next] = candidate
        parent[next] = node
        heap.push([candidate, next])
      }
    }
  }

  return { dist, parent }
}

export function deliveryTimes(n: number, edges: [number, number, number][], source: number): number[] {
  const { dist } = dijkstra(n, edges, source)
  return dist.map((d) => (d === Infinity ? -1 : d))
}

export function shortestRoute(
  n: number,
  edges: [number, number, number][],
  a: number,
  b: number,
): number[] | null {
  if (a === b) return [a]
  const { dist, parent } = dijkstra(n, edges, a)
  if (dist[b] === Infinity) return null

  const path: number[] = []
  let cur = b
  while (cur !== -1) {
    path.push(cur)
    cur = parent[cur]!
  }
  path.reverse()
  return path
}

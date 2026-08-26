// Reference solution — checkpoint: City infrastructure
// Four classic graph problems wired together from one dataset.
// projectOrder: Kahn's topo sort — O(P + D) time, O(P + D) space
// cheapestGrid: Kruskal MST via provided UnionFind — O(R log R) time, O(V) space
// fastestSignal: Dijkstra with lazy-deletion heap — O(R log V) time, O(V + R) space
// sameNetwork: union-find batch connectivity — O((R + Q) * alpha(n)) time, O(V) space

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

class UnionFind {
  private readonly parent: number[]
  private readonly rank: number[]

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i)
    this.rank = new Array(n).fill(0)
  }

  find(x: number): number {
    let root = x
    while (this.parent[root] !== root) root = this.parent[root]!
    let cur = x
    while (this.parent[cur] !== root) {
      const next = this.parent[cur]!
      this.parent[cur] = root
      cur = next
    }
    return root
  }

  union(x: number, y: number): boolean {
    const rootX = this.find(x)
    const rootY = this.find(y)
    if (rootX === rootY) return false
    if (this.rank[rootX]! < this.rank[rootY]!) {
      this.parent[rootX] = rootY
    } else if (this.rank[rootX]! > this.rank[rootY]!) {
      this.parent[rootY] = rootX
    } else {
      this.parent[rootY] = rootX
      this.rank[rootX]!++
    }
    return true
  }

  connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y)
  }
}
// -------------------------------------------------------------------------

export function projectOrder(projectCount: number, deps: [number, number][]): number[] | null {
  // Kahn's algorithm: seed a queue with every in-degree-0 project;
  // decrement neighbors' in-degrees as each project is "completed".
  // If processed count < projectCount, a cycle blocks the rest.
  const adj: number[][] = Array.from({ length: projectCount }, () => [])
  const inDegree = new Array(projectCount).fill(0)

  for (const [project, dependsOn] of deps) {
    adj[dependsOn]!.push(project)
    inDegree[project]!++
  }

  const queue: number[] = []
  for (let i = 0; i < projectCount; i++) {
    if (inDegree[i] === 0) queue.push(i)
  }

  const order: number[] = []
  let head = 0
  while (head < queue.length) {
    const node = queue[head++]!
    order.push(node)
    for (const next of adj[node]!) {
      inDegree[next]!--
      if (inDegree[next] === 0) queue.push(next)
    }
  }

  return order.length === projectCount ? order : null
}

export function cheapestGrid(n: number, routes: [number, number, number][]): number | null {
  // Kruskal: sort routes by cost, union greedily skipping cycle-closers.
  // A spanning tree on n nodes needs exactly n-1 edges; fewer means
  // the graph is disconnected.
  if (n <= 1) return 0

  const sorted = [...routes].sort((a, b) => a[2] - b[2])
  const uf = new UnionFind(n)
  let totalCost = 0
  let edgesUsed = 0

  for (const [a, b, cost] of sorted) {
    if (uf.union(a, b)) {
      totalCost += cost
      edgesUsed++
      if (edgesUsed === n - 1) break
    }
  }

  return edgesUsed === n - 1 ? totalCost : null
}

export function fastestSignal(n: number, routes: [number, number, number][], hub: number): number[] {
  // Dijkstra with lazy-deletion: skip stale heap entries whose recorded
  // distance has already been beaten. Routes are undirected, so each one
  // is pushed onto both endpoints' adjacency lists. Returns -1 for
  // unreachable districts.
  const adj: [number, number][][] = Array.from({ length: n }, () => [])
  for (const [a, b, time] of routes) {
    adj[a]!.push([b, time])
    adj[b]!.push([a, time])
  }

  const dist = new Array(n).fill(Infinity)
  dist[hub] = 0

  const heap = new MinHeap<[number, number]>((a, b) => a[0] - b[0]) // [dist, node]
  heap.push([0, hub])

  while (!heap.isEmpty()) {
    const [d, node] = heap.pop()
    if (d > dist[node]!) continue // stale entry — a cheaper route already won

    for (const [next, time] of adj[node]!) {
      const candidate = d + time
      if (candidate < dist[next]!) {
        dist[next] = candidate
        heap.push([candidate, next])
      }
    }
  }

  return dist.map((d) => (d === Infinity ? -1 : d))
}

export function sameNetwork(
  n: number,
  builtRoutes: [number, number][],
  queries: [number, number][],
): boolean[] {
  // Build the union-find once over all builtRoutes, then answer every
  // query in O(alpha(n)) each. Total: O((R + Q) * alpha(n)).
  const uf = new UnionFind(n)
  for (const [a, b] of builtRoutes) uf.union(a, b)
  return queries.map(([a, b]) => uf.connected(a, b))
}

/**
 * Checkpoint — City infrastructure
 *
 * Scenario: a city planning office needs four answers out of the same
 * kind of network data: what ORDER must construction projects run in
 * (dependencies), what's the CHEAPEST way to wire every district
 * (minimum spanning tree), how fast does a signal reach every
 * district from the hub (shortest weighted paths), and are two
 * districts on the SAME network after a batch of routes are built
 * (union-find batch queries).
 *
 * A generic MinHeap<T> and a compact UnionFind are PROVIDED below (do
 * not edit) — the graded work here is wiring them into each scenario,
 * not rebuilding them (that's ex02, ex05 and ex06).
 *
 * Check: npm test -- 16 -t checkpoint
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

/**
 * A valid construction order for `projectCount` projects, or null if
 * the dependencies contain a cycle.
 * @param projectCount - number of projects, labeled 0..projectCount-1
 * @param deps - deps[i] = [project, dependsOn] means `dependsOn` must
 *   be built before `project`
 * @returns a valid build order for all projects, or null on a cycle
 * Target: O(P + D) time, O(P + D) space
 */
export function projectOrder(projectCount: number, deps: [number, number][]): number[] | null {
  throw new Error('TODO: implement me')
}

/**
 * Minimum total cost to connect all n districts with cable routes, or
 * null if the candidate routes can't connect every district.
 * @param n - number of districts, labeled 0..n-1
 * @param routes - candidate routes as [a, b, cost] (undirected)
 * @returns the minimum spanning tree's total cost, or null if impossible
 * Target: O(R log R) time, O(V) space (R = routes.length)
 */
export function cheapestGrid(n: number, routes: [number, number, number][]): number | null {
  throw new Error('TODO: implement me')
}

/**
 * Shortest signal travel time from `hub` to every district.
 * @param n - number of districts, labeled 0..n-1
 * @param routes - undirected links as [a, b, time] (each route works both
 *   ways), time >= 0
 * @param hub - the broadcasting district
 * @returns dist[i] = shortest time from hub to i, or -1 if unreachable
 * Target: O(R log V) time, O(V + R) space
 */
export function fastestSignal(n: number, routes: [number, number, number][], hub: number): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Batch connectivity check: after building every route in
 * `builtRoutes`, is each query pair on the same network?
 * @param n - number of districts, labeled 0..n-1
 * @param builtRoutes - undirected routes as [a, b], already built
 * @param queries - pairs to check as [a, b]
 * @returns one boolean per query, same order as `queries`
 * Target: O((R + Q) * alpha(n)) time, O(V) space (R = builtRoutes.length, Q = queries.length)
 */
export function sameNetwork(
  n: number,
  builtRoutes: [number, number][],
  queries: [number, number][],
): boolean[] {
  throw new Error('TODO: implement me')
}

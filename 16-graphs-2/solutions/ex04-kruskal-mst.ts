// Reference solution — ex04
// Pattern: Kruskal's algorithm. Sort edges ascending by weight; a
// greedy scan adds each edge unless union-find reports its endpoints
// are already connected (which would close a cycle). Stopping once
// n-1 edges are added is safe because a tree on n nodes has exactly
// n-1 edges — anything more would be a cycle, anything less can't
// span every node.
// Time: O(E log E) (dominated by the sort), Space: O(V)

import { UnionFind } from './ex02-build-union-find'

export function minConnectionCost(n: number, weightedEdges: [number, number, number][]): number | null {
  if (n <= 1) return 0

  const sorted = [...weightedEdges].sort((a, b) => a[2] - b[2])
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

// Reference solution — ex03
// Pattern: union edges in input order; the first union() that returns
// false (endpoints already connected) is the edge closing the cycle.
// countProvinces unions every matrix[i][j] === 1 pair and reads off
// componentCount() — union-find turns "merge as connections are seen"
// into a single linear pass.
// Time: O(n * alpha(n)) / O(n^2 * alpha(n)), Space: O(n)

import { UnionFind } from './ex02-build-union-find'

export function redundantConnection(edges: [number, number][]): [number, number] {
  const n = edges.length
  // Nodes are labeled 1..n; UnionFind is 0-indexed, so shift by one.
  const uf = new UnionFind(n + 1)
  for (const [a, b] of edges) {
    if (!uf.union(a, b)) return [a, b]
  }
  throw new Error('redundantConnection: input has no cycle')
}

export function countProvinces(matrix: number[][]): number {
  const n = matrix.length
  const uf = new UnionFind(n)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (matrix[i]![j] === 1) uf.union(i, j)
    }
  }
  return uf.componentCount()
}

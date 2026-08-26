// Reference solution — ex01

/**
 * Pattern: representation conversion. Pre-seed every node 0..n-1 with
 * an empty array so isolated nodes still appear, then push each edge's
 * endpoint(s) onto the right list(s).
 * Time: O(n + e). Space: O(n + e).
 */
export function toAdjacencyList(
  n: number,
  edges: [number, number][],
  directed: boolean,
): Map<number, number[]> {
  const adj = new Map<number, number[]>()
  for (let i = 0; i < n; i++) adj.set(i, [])

  for (const [u, v] of edges) {
    adj.get(u)!.push(v)
    if (!directed) adj.get(v)!.push(u)
  }

  return adj
}

/**
 * Pattern: single pass over the Map, reading each list's length.
 * Time: O(n + e). Space: O(n).
 */
export function degrees(adj: Map<number, number[]>): Map<number, number> {
  const result = new Map<number, number>()
  for (const [node, neighbors] of adj) result.set(node, neighbors.length)
  return result
}

/**
 * Pattern: representation conversion, matrix -> list. Every cell must
 * be inspected once — that's the O(n^2) floor for a dense format.
 * Time: O(n^2). Space: O(n + e).
 */
export function matrixToList(matrix: number[][]): Map<number, number[]> {
  const n = matrix.length
  const adj = new Map<number, number[]>()
  for (let u = 0; u < n; u++) adj.set(u, [])

  for (let u = 0; u < n; u++) {
    const row = matrix[u]!
    for (let v = 0; v < row.length; v++) {
      if (row[v] !== 0) adj.get(u)!.push(v)
    }
  }

  return adj
}

/**
 * Pattern: representation conversion, list -> matrix. Allocate the
 * n x n grid first, then flip a 1 for every listed edge.
 * Time: O(n^2 + e). Space: O(n^2).
 */
export function listToMatrix(adj: Map<number, number[]>, n: number): number[][] {
  const matrix: number[][] = Array.from({ length: n }, () => new Array(n).fill(0))

  for (const [u, neighbors] of adj) {
    if (u < 0 || u >= n) continue
    const row = matrix[u]!
    for (const v of neighbors) {
      if (v < 0 || v >= n) continue
      row[v] = 1
    }
  }

  return matrix
}

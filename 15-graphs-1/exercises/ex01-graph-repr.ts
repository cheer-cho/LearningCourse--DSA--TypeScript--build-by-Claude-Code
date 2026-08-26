// Graph representations: build an adjacency list from an edge list,
// and convert to/from an adjacency matrix. No traversal yet — this
// sets up the Map<number, number[]> shape every later exercise uses.
// Check: npm test -- 15 -t ex01

/**
 * Build an adjacency list for a graph with nodes `0..n-1` from an edge list.
 *
 * @param n - number of nodes (0-indexed: 0..n-1).
 * @param edges - list of `[u, v]` pairs.
 * @param directed - if false (undirected), each edge adds v to u's list
 *   AND u to v's list. If true, only `u -> v` is added.
 * @returns a Map from every node `0..n-1` to its neighbor list (nodes
 *   with no edges still get an empty-array entry).
 * @remarks Edge cases: `n = 0` -> empty map. A self-loop `[u, u]` adds
 *   u to its own list (once for directed, twice for undirected — both
 *   endpoints are u).
 * @example toAdjacencyList(3, [[0,1],[1,2]], false)
 *   -> Map { 0 -> [1], 1 -> [0, 2], 2 -> [1] }
 * Target complexity: O(n + e) time and space, e = edges.length.
 */
export function toAdjacencyList(
  n: number,
  edges: [number, number][],
  directed: boolean,
): Map<number, number[]> {
  throw new Error('TODO: implement me')
}

/**
 * Out-degree (neighbor-list length) of every node.
 *
 * @param adj - adjacency list (Map node -> neighbors).
 * @returns Map from each node in `adj` to its neighbor-list length.
 * @remarks For an undirected list built by `toAdjacencyList`, this is
 *   the node's true degree; for a directed list, it's the OUT-degree only.
 * @example degrees(new Map([[0,[1,2]],[1,[0]],[2,[0]]])) -> Map { 0 -> 2, 1 -> 1, 2 -> 1 }
 * Target complexity: O(n + e) time, O(n) space.
 */
export function degrees(adj: Map<number, number[]>): Map<number, number> {
  throw new Error('TODO: implement me')
}

/**
 * Convert an n x n adjacency matrix (`matrix[u][v] !== 0` means an
 * edge `u -> v`) into an adjacency list.
 *
 * @param matrix - square matrix; `matrix[u][v]` truthy (nonzero) means an edge u -> v.
 * @returns adjacency list; every row index `0..n-1` is present (even with an empty list).
 * @example matrixToList([[0,1],[0,0]]) -> Map { 0 -> [1], 1 -> [] }
 * Target complexity: O(n^2) time (every cell must be scanned), O(n + e) space.
 */
export function matrixToList(matrix: number[][]): Map<number, number[]> {
  throw new Error('TODO: implement me')
}

/**
 * Convert an adjacency list back into an n x n 0/1 adjacency matrix.
 *
 * @param adj - adjacency list.
 * @param n - number of nodes (matrix dimension); nodes are assumed `0..n-1`.
 * @returns n x n matrix where `matrix[u][v] = 1` if v is in `adj.get(u)`, else 0.
 * @example listToMatrix(new Map([[0,[1]],[1,[]]]), 2) -> [[0,1],[0,0]]
 * Target complexity: O(n^2 + e) time, O(n^2) space.
 */
export function listToMatrix(adj: Map<number, number[]>, n: number): number[][] {
  throw new Error('TODO: implement me')
}

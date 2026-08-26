/**
 * ex03 — Redundant link & province count, via union-find
 *
 * Scenario: a network was supposed to be a tree (n nodes, n-1 edges,
 * no cycles) but one extra cable was added, creating exactly one
 * cycle. Pattern: union edges in order; the first edge whose endpoints
 * are ALREADY connected is the one that closes the cycle.
 *
 * Imports UnionFind from ex02 — building on your own structure.
 *
 * Check: npm test -- 16 -t ex03
 */

import { UnionFind } from './ex02-build-union-find'

/**
 * Given a network that was a tree plus exactly one extra edge, find
 * the extra edge — the one that, added in input order, first
 * reconnects two nodes already connected.
 * @param edges - n edges over nodes labeled 1..n (n = edges.length);
 *   the network is connected and has exactly one cycle
 * @returns the edge that closes the first cycle, as given in `edges`
 * input: edges=[[1,2],[1,3],[2,3]] -> [2,3] (1-2 and 1-3 already connect
 *   1, 2 and 3; 2-3 closes the cycle)
 * Target: O(n * alpha(n)) time, O(n) space
 */
export function redundantConnection(edges: [number, number][]): [number, number] {
  throw new Error('TODO: implement me')
}

/**
 * Count connected provinces (groups of directly-or-indirectly
 * connected cities) from an adjacency matrix.
 *
 * DFS/BFS from module 15 also solves this — union-find is a natural
 * fit here because "merge as edges are seen" is exactly what it's
 * built for, and it generalizes better if edges arrived one at a time
 * instead of all at once as a matrix.
 *
 * @param matrix - n x n adjacency matrix; matrix[i][j] === 1 means
 *   cities i and j are directly connected (matrix[i][i] === 1 always)
 * @returns the number of connected provinces
 * input: matrix=[[1,1,0],[1,1,0],[0,0,1]] -> 2
 * Target: O(n^2 * alpha(n)) time, O(n) space
 */
export function countProvinces(matrix: number[][]): number {
  throw new Error('TODO: implement me')
}

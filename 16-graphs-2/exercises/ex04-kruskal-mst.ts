/**
 * ex04 — Minimum spanning tree via Kruskal's algorithm
 *
 * Scenario: n districts, a list of candidate cable routes with costs.
 * Pattern: sort routes cheapest-first, add a route unless it would
 * connect two districts already in the same group (that's a cycle —
 * skip it). Stop once n-1 routes are added.
 *
 * Imports UnionFind from ex02 — building on your own structure.
 *
 * Check: npm test -- 16 -t ex04
 */

import { UnionFind } from './ex02-build-union-find'

/**
 * Minimum total cost to connect all n districts, or null if it's
 * impossible (the candidate routes don't connect every district).
 * @param n - number of districts, labeled 0..n-1
 * @param weightedEdges - candidate routes as [a, b, cost] (undirected)
 * @returns the minimum spanning tree's total cost, or null if the
 *   districts can't all be connected
 * input: n=4, weightedEdges=[[0,1,1],[1,2,2],[2,3,3],[0,3,10]] -> 6
 * input: n=3, weightedEdges=[[0,1,5]] -> null (district 2 unreachable)
 * Target: O(E log E) time, O(V) space (E = weightedEdges.length)
 */
export function minConnectionCost(n: number, weightedEdges: [number, number, number][]): number | null {
  throw new Error('TODO: implement me')
}

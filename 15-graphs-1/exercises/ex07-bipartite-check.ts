// Can we split the nodes of an undirected graph into two teams so that
// every edge connects a node on team A to a node on team B (no same-team
// edge)? This is exactly 2-colorability, checked via BFS. Works on
// disconnected graphs — every component must be bipartite.
// Check: npm test -- 15 -t ex07

/**
 * BFS 2-coloring check: assign each node one of two colors (0 or 1),
 * flipping for every neighbor. If any neighbor already has the same
 * color, the graph is NOT bipartite.
 *
 * Problem framing: "Can we split users into two rival teams such that
 * every friendship connects someone from Team A to Team B, never two
 * people on the same team?"
 *
 * @param adj - adjacency list of an UNDIRECTED graph. May be
 *   disconnected (nodes with empty neighbor lists count as their own
 *   isolated component, and isolated nodes are trivially bipartite).
 * @returns true if the graph is bipartite (2-colorable), false otherwise.
 * @remarks The disconnected-graph trap: you must start a BFS from EVERY
 *   unvisited node, not just node 0 — a graph can have many components
 *   and only one of them might break bipartiteness.
 * @example
 *   // Square (0-1-2-3-0): alternating colors, bipartite
 *   isBipartite(new Map([[0,[1,3]],[1,[0,2]],[2,[1,3]],[3,[0,2]]])) -> true
 *   // Triangle (0-1-2-0): odd cycle, cannot 2-color
 *   isBipartite(new Map([[0,[1,2]],[1,[0,2]],[2,[0,1]]])) -> false
 * Target complexity: O(n + e) time, O(n) space.
 */
export function isBipartite(adj: Map<number, number[]>): boolean {
  throw new Error('TODO: implement me')
}

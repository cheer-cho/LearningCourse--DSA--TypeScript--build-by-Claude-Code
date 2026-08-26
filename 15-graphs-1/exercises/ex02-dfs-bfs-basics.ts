// DFS and BFS basics on an adjacency-list graph (the Map shape from
// ex01). The one new rule versus tree traversal: a visited set, since
// graphs can have cycles.
// Check: npm test -- 15 -t ex02

/**
 * Every node reachable from `start` (including `start` itself), via DFS.
 *
 * @param adj - adjacency list.
 * @param start - starting node (must be a key of `adj`).
 * @returns set of reachable nodes.
 * @remarks Recursive or iterative — either meets the target here.
 * @example reachable(Map{0->[1],1->[0,2],2->[1],3->[]}, 0) -> Set{0, 1, 2}
 * Target complexity: O(n + e) time, O(n) space.
 */
export function reachable(adj: Map<number, number[]>, start: number): Set<number> {
  throw new Error('TODO: implement me')
}

/**
 * BFS visit order starting at `start`. Neighbors are explored in the
 * order they appear in each node's neighbor list (the tie-break rule).
 *
 * @param adj - adjacency list.
 * @param start - starting node.
 * @returns nodes in the order BFS first visits them.
 * @remarks Mark a node visited the moment it's ENQUEUED, not when it's
 *   dequeued — see the LESSON gotcha. Marking late causes duplicate enqueues.
 * @example bfsOrder(Map{0->[1,2],1->[0],2->[0]}, 0) -> [0, 1, 2]
 * Target complexity: O(n + e) time, O(n) space.
 */
export function bfsOrder(adj: Map<number, number[]>, start: number): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Count connected components in an undirected graph.
 *
 * @param adj - adjacency list (assume undirected: symmetric).
 * @returns number of connected components; isolated nodes count as their own.
 * @example connectedComponents(Map{0->[1],1->[0],2->[]}) -> 2
 * Target complexity: O(n + e) time, O(n) space.
 */
export function connectedComponents(adj: Map<number, number[]>): number {
  throw new Error('TODO: implement me')
}

/**
 * Whether any path connects `a` to `b`.
 *
 * @param adj - adjacency list.
 * @param a - source node.
 * @param b - target node.
 * @returns true if `b` is reachable from `a` (`a === b` is trivially true).
 * @example pathExists(Map{0->[1],1->[0,2],2->[1],3->[]}, 0, 2) -> true
 * Target complexity: O(n + e) time, O(n) space.
 */
export function pathExists(adj: Map<number, number[]>, a: number, b: number): boolean {
  throw new Error('TODO: implement me')
}

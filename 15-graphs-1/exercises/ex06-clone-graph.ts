// Deep-copy a graph reachable from a given node. Pattern: BFS/DFS plus
// a Map<oldNode, newNode> so each original node gets exactly one
// clone, even when multiple paths (or a cycle) reach it.
// GraphNode is provided below — you build cloneGraph.
// Check: npm test -- 15 -t ex06

export class GraphNode {
  val: number
  neighbors: GraphNode[]

  constructor(val: number, neighbors: GraphNode[] = []) {
    this.val = val
    this.neighbors = neighbors
  }
}

/**
 * Deep-copy the connected graph reachable from `node`: every node and
 * every edge duplicated, with NO shared references to the original graph.
 *
 * @param node - any node of the graph to clone, or null.
 * @returns the clone of `node` (same `val`, all-new node objects), or null.
 * @remarks Use a `Map<GraphNode, GraphNode>` from original node to its
 *   clone so a node reached via two different paths (or a cycle) is
 *   cloned exactly once and recursion/traversal terminates.
 * @example a 3-node triangle (each node linked to the other two) clones
 *   to a structurally identical triangle where every cloned node is a
 *   different object (`clone !== original`) but `clone.val` matches.
 * Target complexity: O(n + e) time, O(n) space.
 */
export function cloneGraph(node: GraphNode | null): GraphNode | null {
  throw new Error('TODO: implement me')
}

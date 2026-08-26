// Reference solution — ex06

export class GraphNode {
  val: number
  neighbors: GraphNode[]

  constructor(val: number, neighbors: GraphNode[] = []) {
    this.val = val
    this.neighbors = neighbors
  }
}

/**
 * Pattern: BFS (or DFS) plus a Map<original, clone> so a node that is
 * reachable via multiple paths (or cycles back to itself) gets exactly
 * ONE clone and all edges in the clone correctly point to that same clone.
 * The map doubles as the visited set — if a node is already a key, skip it.
 * Time: O(n + e). Space: O(n) for the map.
 */
export function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (node === null) return null

  const cloneMap = new Map<GraphNode, GraphNode>()
  const queue: GraphNode[] = [node]
  cloneMap.set(node, new GraphNode(node.val))

  while (queue.length > 0) {
    const cur = queue.shift()!
    const curClone = cloneMap.get(cur)!

    for (const neighbor of cur.neighbors) {
      if (!cloneMap.has(neighbor)) {
        cloneMap.set(neighbor, new GraphNode(neighbor.val))
        queue.push(neighbor)
      }
      curClone.neighbors.push(cloneMap.get(neighbor)!)
    }
  }

  return cloneMap.get(node)!
}

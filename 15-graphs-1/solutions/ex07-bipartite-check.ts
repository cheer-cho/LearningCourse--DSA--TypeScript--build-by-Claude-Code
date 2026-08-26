// Reference solution — ex07

/**
 * Pattern: BFS 2-coloring over every unvisited node so disconnected
 * components are all checked. A color conflict (neighbor has the same
 * color as the current node) is the only way bipartiteness can fail.
 * Time: O(n + e). Space: O(n).
 */
export function isBipartite(adj: Map<number, number[]>): boolean {
  const color = new Map<number, number>() // 0 or 1

  for (const start of adj.keys()) {
    if (color.has(start)) continue // already colored by a previous BFS

    // BFS from an unvisited node
    const queue: number[] = [start]
    color.set(start, 0)

    let head = 0
    while (head < queue.length) {
      const node = queue[head++]!
      const nodeColor = color.get(node)!

      for (const neighbor of adj.get(node) ?? []) {
        if (!color.has(neighbor)) {
          color.set(neighbor, 1 - nodeColor) // flip color
          queue.push(neighbor)
        } else if (color.get(neighbor) === nodeColor) {
          return false // conflict — same team on both ends of an edge
        }
      }
    }
  }

  return true
}

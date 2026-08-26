// Reference solution — checkpoint
//
// Self-contained: verify-solutions.mjs copies this file directly over
// the module-root checkpoint.ts, so it cannot import from it.

/** Build an undirected adjacency list from an edge list for nodes 0..n-1. */
function buildAdj(edges: [number, number][], n: number): Map<number, number[]> {
  const adj = new Map<number, number[]>()
  for (let i = 0; i < n; i++) adj.set(i, [])
  for (const [u, v] of edges) {
    adj.get(u)!.push(v)
    adj.get(v)!.push(u)
  }
  return adj
}

/**
 * Pattern: DFS over every unvisited node; each DFS covers one component.
 * Time: O(n + e). Space: O(n + e).
 */
export function friendCircles(edges: [number, number][], n: number): number {
  if (n === 0) return 0
  const adj = buildAdj(edges, n)
  const visited = new Set<number>()
  let count = 0

  for (const node of adj.keys()) {
    if (visited.has(node)) continue
    count++
    const stack = [node]
    visited.add(node)
    while (stack.length > 0) {
      const cur = stack.pop()!
      for (const next of adj.get(cur) ?? []) {
        if (!visited.has(next)) {
          visited.add(next)
          stack.push(next)
        }
      }
    }
  }

  return count
}

/**
 * Pattern: BFS from `a`, tracking level (distance). The first time `b`
 * is dequeued its distance is the shortest path length.
 * Time: O(n + e). Space: O(n + e).
 */
export function degreesOfSeparation(edges: [number, number][], a: number, b: number): number {
  if (a === b) return 0

  // Collect all nodes so isolated ones are included
  const allNodes = new Set<number>([a, b])
  for (const [u, v] of edges) {
    allNodes.add(u)
    allNodes.add(v)
  }
  const n = Math.max(...allNodes) + 1
  const adj = buildAdj(edges, n)

  const dist = new Map<number, number>([[a, 0]])
  const queue: number[] = [a]
  let head = 0

  while (head < queue.length) {
    const node = queue[head++]!
    const d = dist.get(node)!
    for (const next of adj.get(node) ?? []) {
      if (dist.has(next)) continue
      dist.set(next, d + 1)
      if (next === b) return d + 1
      queue.push(next)
    }
  }

  return -1
}

/**
 * Pattern: build adjacency, find all direct friends of `user`, then
 * collect friends-of-friends, filtering out direct friends and `user`
 * itself. Sort ascending.
 * Time: O(n + e). Space: O(n + e).
 */
export function suggestedFriends(edges: [number, number][], user: number): number[] {
  // Build adj for all encountered nodes
  const adj = new Map<number, number[]>()
  const ensureNode = (u: number): void => {
    if (!adj.has(u)) adj.set(u, [])
  }
  ensureNode(user)
  for (const [u, v] of edges) {
    ensureNode(u)
    ensureNode(v)
    adj.get(u)!.push(v)
    adj.get(v)!.push(u)
  }

  const directFriends = new Set<number>(adj.get(user) ?? [])
  const suggestions = new Set<number>()

  for (const friend of directFriends) {
    for (const fof of adj.get(friend) ?? []) {
      if (fof !== user && !directFriends.has(fof)) {
        suggestions.add(fof)
      }
    }
  }

  return [...suggestions].sort((a, b) => a - b)
}

/**
 * Pattern: BFS 2-coloring from every unvisited node (handles
 * disconnected graphs). A color conflict means the graph is not bipartite.
 * Time: O(n + e). Space: O(n + e).
 */
export function canTwoTeam(edges: [number, number][], n: number): boolean {
  const adj = buildAdj(edges, n)
  const color = new Map<number, number>()

  for (const start of adj.keys()) {
    if (color.has(start)) continue
    color.set(start, 0)
    const queue: number[] = [start]
    let head = 0

    while (head < queue.length) {
      const node = queue[head++]!
      const nodeColor = color.get(node)!

      for (const neighbor of adj.get(node) ?? []) {
        if (!color.has(neighbor)) {
          color.set(neighbor, 1 - nodeColor)
          queue.push(neighbor)
        } else if (color.get(neighbor) === nodeColor) {
          return false
        }
      }
    }
  }

  return true
}

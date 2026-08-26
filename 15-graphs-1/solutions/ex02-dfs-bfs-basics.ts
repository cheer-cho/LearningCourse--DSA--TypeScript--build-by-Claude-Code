// Reference solution — ex02

/**
 * Pattern: DFS with an explicit stack (iterative, avoids recursion
 * depth concerns) and a visited set to survive cycles.
 * Time: O(n + e). Space: O(n).
 */
export function reachable(adj: Map<number, number[]>, start: number): Set<number> {
  const visited = new Set<number>([start])
  const stack = [start]

  while (stack.length > 0) {
    const node = stack.pop()!
    for (const next of adj.get(node) ?? []) {
      if (visited.has(next)) continue
      visited.add(next)
      stack.push(next)
    }
  }

  return visited
}

/**
 * Pattern: BFS with a queue, marking `visited` at ENQUEUE time so a
 * node is never pushed twice, even if several neighbors point to it.
 * Time: O(n + e). Space: O(n).
 */
export function bfsOrder(adj: Map<number, number[]>, start: number): number[] {
  const order: number[] = []
  const visited = new Set<number>([start])
  const queue: number[] = [start]
  let head = 0

  while (head < queue.length) {
    const node = queue[head++]!
    order.push(node)
    for (const next of adj.get(node) ?? []) {
      if (visited.has(next)) continue
      visited.add(next)
      queue.push(next)
    }
  }

  return order
}

/**
 * Pattern: run a traversal from every unvisited node; each run covers
 * exactly one component.
 * Time: O(n + e). Space: O(n).
 */
export function connectedComponents(adj: Map<number, number[]>): number {
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
        if (visited.has(next)) continue
        visited.add(next)
        stack.push(next)
      }
    }
  }

  return count
}

/**
 * Pattern: DFS/BFS reachability, stopping early the moment `b` is found.
 * Time: O(n + e). Space: O(n).
 */
export function pathExists(adj: Map<number, number[]>, a: number, b: number): boolean {
  if (a === b) return true

  const visited = new Set<number>([a])
  const stack = [a]

  while (stack.length > 0) {
    const node = stack.pop()!
    for (const next of adj.get(node) ?? []) {
      if (next === b) return true
      if (visited.has(next)) continue
      visited.add(next)
      stack.push(next)
    }
  }

  return false
}

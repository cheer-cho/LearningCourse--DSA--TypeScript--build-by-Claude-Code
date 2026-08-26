// Reference solution — ex01
// Pattern: Kahn's algorithm. Track in-degrees, seed a queue with every
// in-degree-0 node, and "unlock" neighbors as their in-degree hits 0.
// If fewer than n nodes get processed, the leftover nodes are stuck in
// a cycle (every one of them still has an unfinished prerequisite).
// Time: O(n + p), Space: O(n + p)

function kahnOrder(n: number, prereqs: [number, number][]): number[] | null {
  const adj: number[][] = Array.from({ length: n }, () => [])
  const inDegree = new Array(n).fill(0)

  for (const [course, prereq] of prereqs) {
    adj[prereq]!.push(course)
    inDegree[course]!++
  }

  const queue: number[] = []
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) queue.push(i)
  }

  const order: number[] = []
  let head = 0
  while (head < queue.length) {
    const node = queue[head++]!
    order.push(node)
    for (const next of adj[node]!) {
      inDegree[next]!--
      if (inDegree[next] === 0) queue.push(next)
    }
  }

  return order.length === n ? order : null
}

export function buildOrder(n: number, prereqs: [number, number][]): number[] | null {
  return kahnOrder(n, prereqs)
}

export function canFinish(n: number, prereqs: [number, number][]): boolean {
  return kahnOrder(n, prereqs) !== null
}

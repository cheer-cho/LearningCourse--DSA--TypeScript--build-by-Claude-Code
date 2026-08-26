import { describe, expect, it } from 'vitest'
import { GraphNode, cloneGraph } from './ex06-clone-graph'

/** Build a graph from an adjacency list: node i has the neighbors listed at index i. */
function buildGraph(adjList: number[][]): GraphNode | null {
  if (adjList.length === 0) return null
  const nodes = adjList.map((_, i) => new GraphNode(i + 1))
  for (let i = 0; i < adjList.length; i++) {
    for (const neighborIdx of adjList[i]!) {
      nodes[i]!.neighbors.push(nodes[neighborIdx - 1]!)
    }
  }
  return nodes[0]!
}

/** Collect all nodes reachable from `node`, sorted by val. */
function collectNodes(node: GraphNode | null): GraphNode[] {
  if (node === null) return []
  const seen = new Set<GraphNode>()
  const queue = [node]
  while (queue.length > 0) {
    const cur = queue.shift()!
    if (seen.has(cur)) continue
    seen.add(cur)
    for (const nb of cur.neighbors) queue.push(nb)
  }
  return [...seen].sort((a, b) => a.val - b.val)
}

describe('ex15/ex06 — cloneGraph', () => {
  it('null input returns null', () => {
    expect(cloneGraph(null)).toBeNull()
  })

  it('single node with no neighbors', () => {
    const node = new GraphNode(1)
    const clone = cloneGraph(node)
    expect(clone).not.toBeNull()
    expect(clone!.val).toBe(1)
    expect(clone).not.toBe(node) // must be a NEW object
    expect(clone!.neighbors).toHaveLength(0)
  })

  it('two nodes pointing at each other (undirected edge)', () => {
    const a = new GraphNode(1)
    const b = new GraphNode(2)
    a.neighbors = [b]
    b.neighbors = [a]

    const cloneA = cloneGraph(a)!
    const cloneB = cloneA.neighbors[0]!
    // structural check
    expect(cloneA.val).toBe(1)
    expect(cloneB.val).toBe(2)
    expect(cloneB.neighbors[0]).toBe(cloneA) // cycle preserved
    // identity check — nothing shared with original
    expect(cloneA).not.toBe(a)
    expect(cloneB).not.toBe(b)
  })

  it('4-node square (LeetCode classic shape)', () => {
    // 1—2
    // |  |
    // 4—3
    const root = buildGraph([[2, 4], [1, 3], [2, 4], [1, 3]])
    const clone = cloneGraph(root)!

    const origNodes = collectNodes(root)
    const cloneNodes = collectNodes(clone)

    // Same values
    expect(cloneNodes.map((n) => n.val)).toEqual(origNodes.map((n) => n.val))
    // Same neighbor-val structure
    for (let i = 0; i < origNodes.length; i++) {
      expect(cloneNodes[i]!.neighbors.map((n) => n.val).sort()).toEqual(
        origNodes[i]!.neighbors.map((n) => n.val).sort(),
      )
    }
    // Every cloned node is a DIFFERENT object from every original
    const origSet = new Set(origNodes)
    for (const cn of cloneNodes) {
      expect(origSet.has(cn)).toBe(false)
    }
  })

  it('triangle (each node links to the other two): each original node cloned exactly once', () => {
    const n1 = new GraphNode(1)
    const n2 = new GraphNode(2)
    const n3 = new GraphNode(3)
    n1.neighbors = [n2, n3]
    n2.neighbors = [n1, n3]
    n3.neighbors = [n1, n2]

    const clone = cloneGraph(n1)!
    const cloneNodes = collectNodes(clone)

    // Exactly 3 distinct node objects in the clone
    expect(cloneNodes.length).toBe(3)
    // No original nodes appear in the clone
    const origSet = new Set([n1, n2, n3])
    for (const cn of cloneNodes) {
      expect(origSet.has(cn)).toBe(false)
    }
  })

  it('a node reached via two different paths is only cloned once (no duplicates)', () => {
    // 1 -> 2 -> 3
    // 1 -> 3   (two paths from 1 to 3)
    const n1 = new GraphNode(1)
    const n2 = new GraphNode(2)
    const n3 = new GraphNode(3)
    n1.neighbors = [n2, n3]
    n2.neighbors = [n3]
    n3.neighbors = []

    const clone = cloneGraph(n1)!
    const cloneNodes = collectNodes(clone)

    // Should be exactly 3 distinct nodes, not 4 (would be 4 if n3 cloned twice)
    expect(cloneNodes.length).toBe(3)
    // Both of clone-1's neighbors should point to the SAME clone-3 object
    const clone1 = clone
    const clone3viaNeighbors = clone1.neighbors.find((n) => n.val === 3)!
    const clone3viaCollection = cloneNodes.find((n) => n.val === 3)!
    expect(clone3viaNeighbors).toBe(clone3viaCollection)
  })
})

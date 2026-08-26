import { describe, expect, it } from 'vitest'
import { bfsOrder, connectedComponents, pathExists, reachable } from './ex02-dfs-bfs-basics'

describe('ex15/ex02 — reachable', () => {
  it('finds every node in a connected component', () => {
    const adj = new Map<number, number[]>([[0, [1]], [1, [0, 2]], [2, [1]], [3, []]])
    expect(reachable(adj, 0)).toEqual(new Set([0, 1, 2]))
  })

  it('start node with no neighbors reaches only itself', () => {
    const adj = new Map<number, number[]>([[0, []]])
    expect(reachable(adj, 0)).toEqual(new Set([0]))
  })

  it('does not cross into a disconnected component', () => {
    const adj = new Map<number, number[]>([[0, [1]], [1, [0]], [2, [3]], [3, [2]]])
    expect(reachable(adj, 0)).toEqual(new Set([0, 1]))
  })

  it('handles a cycle without infinite looping', () => {
    const adj = new Map<number, number[]>([[0, [1]], [1, [2]], [2, [0]]])
    expect(reachable(adj, 0)).toEqual(new Set([0, 1, 2]))
  })
})

describe('ex15/ex02 — bfsOrder', () => {
  it('visits in ring order, tie-broken by neighbor-list order', () => {
    const adj = new Map<number, number[]>([
      [0, [1, 2]],
      [1, [0, 3]],
      [2, [0, 3]],
      [3, [1, 2]],
    ])
    expect(bfsOrder(adj, 0)).toEqual([0, 1, 2, 3])
  })

  it('a single node with no neighbors', () => {
    expect(bfsOrder(new Map([[5, []]]), 5)).toEqual([5])
  })

  it('does not revisit nodes reachable via multiple paths', () => {
    // diamond: 0 -> 1,2 ; 1 -> 3 ; 2 -> 3
    const adj = new Map<number, number[]>([
      [0, [1, 2]],
      [1, [0, 3]],
      [2, [0, 3]],
      [3, [1, 2]],
    ])
    const order = bfsOrder(adj, 0)
    expect(order.length).toBe(4)
    expect(new Set(order).size).toBe(4)
  })

  it('a long chain visits in strict distance order', () => {
    const adj = new Map<number, number[]>()
    for (let i = 0; i < 6; i++) {
      const neighbors: number[] = []
      if (i > 0) neighbors.push(i - 1)
      if (i < 5) neighbors.push(i + 1)
      adj.set(i, neighbors)
    }
    expect(bfsOrder(adj, 0)).toEqual([0, 1, 2, 3, 4, 5])
  })
})

describe('ex15/ex02 — connectedComponents', () => {
  it('counts multiple components including isolated nodes', () => {
    const adj = new Map<number, number[]>([
      [0, [1]],
      [1, [0]],
      [2, []],
      [3, [4]],
      [4, [3]],
    ])
    expect(connectedComponents(adj)).toBe(3)
  })

  it('fully connected graph is one component', () => {
    const adj = new Map<number, number[]>([
      [0, [1, 2]],
      [1, [0, 2]],
      [2, [0, 1]],
    ])
    expect(connectedComponents(adj)).toBe(1)
  })

  it('empty graph has zero components', () => {
    expect(connectedComponents(new Map())).toBe(0)
  })
})

describe('ex15/ex02 — pathExists', () => {
  it('same node is trivially reachable', () => {
    const adj = new Map<number, number[]>([[0, []]])
    expect(pathExists(adj, 0, 0)).toBe(true)
  })

  it('finds a multi-hop path', () => {
    const adj = new Map<number, number[]>([[0, [1]], [1, [0, 2]], [2, [1]], [3, []]])
    expect(pathExists(adj, 0, 2)).toBe(true)
  })

  it('reports false across disconnected components', () => {
    const adj = new Map<number, number[]>([[0, [1]], [1, [0]], [2, [3]], [3, [2]]])
    expect(pathExists(adj, 0, 3)).toBe(false)
  })
})

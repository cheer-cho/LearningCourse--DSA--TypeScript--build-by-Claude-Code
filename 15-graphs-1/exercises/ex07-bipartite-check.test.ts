import { describe, expect, it } from 'vitest'
import { isBipartite } from './ex07-bipartite-check'

describe('ex15/ex07 — isBipartite', () => {
  it('a square (4-cycle) is bipartite — alternating colors', () => {
    // 0-1-2-3-0, even cycle
    const adj = new Map<number, number[]>([
      [0, [1, 3]],
      [1, [0, 2]],
      [2, [1, 3]],
      [3, [0, 2]],
    ])
    expect(isBipartite(adj)).toBe(true)
  })

  it('a triangle (3-cycle) is NOT bipartite — odd cycle', () => {
    const adj = new Map<number, number[]>([
      [0, [1, 2]],
      [1, [0, 2]],
      [2, [0, 1]],
    ])
    expect(isBipartite(adj)).toBe(false)
  })

  it('a complete bipartite graph K_{2,3} returns true', () => {
    // Team A: {0,1}, Team B: {2,3,4} — every A-node connects to every B-node
    const adj = new Map<number, number[]>([
      [0, [2, 3, 4]],
      [1, [2, 3, 4]],
      [2, [0, 1]],
      [3, [0, 1]],
      [4, [0, 1]],
    ])
    expect(isBipartite(adj)).toBe(true)
  })

  it('a single edge is bipartite', () => {
    const adj = new Map<number, number[]>([[0, [1]], [1, [0]]])
    expect(isBipartite(adj)).toBe(true)
  })

  it('an isolated node is trivially bipartite', () => {
    const adj = new Map<number, number[]>([[0, []]])
    expect(isBipartite(adj)).toBe(true)
  })

  it('empty graph (no nodes) is vacuously bipartite', () => {
    expect(isBipartite(new Map())).toBe(true)
  })

  it('disconnected graph: first component bipartite but second not — returns false', () => {
    // Component 1: 0-1 (bipartite)
    // Component 2: 2-3-4-2 (triangle, NOT bipartite)
    const adj = new Map<number, number[]>([
      [0, [1]],
      [1, [0]],
      [2, [3, 4]],
      [3, [2, 4]],
      [4, [2, 3]],
    ])
    expect(isBipartite(adj)).toBe(false)
  })

  it('disconnected graph: both components bipartite — returns true', () => {
    // Component 1: 0-1-2-0 is NOT bipartite... so use two separate edges instead
    // Component 1: 0-1 (bipartite), Component 2: 2-3 (bipartite)
    const adj = new Map<number, number[]>([
      [0, [1]],
      [1, [0]],
      [2, [3]],
      [3, [2]],
    ])
    expect(isBipartite(adj)).toBe(true)
  })

  it('a path graph of length 5 is bipartite (even and odd indexed nodes)', () => {
    // 0-1-2-3-4  (path, always bipartite)
    const adj = new Map<number, number[]>([
      [0, [1]],
      [1, [0, 2]],
      [2, [1, 3]],
      [3, [2, 4]],
      [4, [3]],
    ])
    expect(isBipartite(adj)).toBe(true)
  })

  it('a 5-cycle is NOT bipartite (odd cycle)', () => {
    // 0-1-2-3-4-0
    const adj = new Map<number, number[]>([
      [0, [1, 4]],
      [1, [0, 2]],
      [2, [1, 3]],
      [3, [2, 4]],
      [4, [3, 0]],
    ])
    expect(isBipartite(adj)).toBe(false)
  })
})

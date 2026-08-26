import { describe, expect, it } from 'vitest'
import { minConnectionCost } from './ex04-kruskal-mst'

describe('16/ex04 — minConnectionCost (Kruskal)', () => {
  it('connects a simple chain at minimum cost', () => {
    const edges: [number, number, number][] = [
      [0, 1, 1],
      [1, 2, 2],
      [2, 3, 3],
      [0, 3, 10],
    ]
    expect(minConnectionCost(4, edges)).toBe(6)
  })

  it('skips a cycle-forming edge even if it looks cheap', () => {
    const edges: [number, number, number][] = [
      [0, 1, 1],
      [1, 2, 1],
      [0, 2, 1], // closes a triangle — must be skipped
    ]
    expect(minConnectionCost(3, edges)).toBe(2)
  })

  it('returns null when the districts cannot all be connected', () => {
    const edges: [number, number, number][] = [[0, 1, 5]]
    expect(minConnectionCost(3, edges)).toBeNull()
  })

  it('returns null when there are no edges at all and n > 1', () => {
    expect(minConnectionCost(2, [])).toBeNull()
  })

  it('handles a single district with no edges (already "connected")', () => {
    expect(minConnectionCost(1, [])).toBe(0)
  })

  it('picks a consistent minimum when several edges share the same weight', () => {
    const edges: [number, number, number][] = [
      [0, 1, 4],
      [1, 2, 4],
      [2, 3, 4],
      [0, 3, 4],
      [0, 2, 4],
    ]
    // Any spanning tree here costs 3 * 4 = 12 — the point is picking
    // exactly n-1 = 3 edges without forming a cycle, regardless of
    // which same-weight edges are chosen.
    expect(minConnectionCost(4, edges)).toBe(12)
  })

  it('handles a graph that is already a minimum tree (no cheaper alternative)', () => {
    const edges: [number, number, number][] = [
      [0, 1, 2],
      [1, 2, 2],
    ]
    expect(minConnectionCost(3, edges)).toBe(4)
  })
})

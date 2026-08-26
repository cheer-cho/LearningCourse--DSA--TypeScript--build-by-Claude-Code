import { describe, expect, it } from 'vitest'
import { degrees, listToMatrix, matrixToList, toAdjacencyList } from './ex01-graph-repr'

function sortAdj(adj: Map<number, number[]>): [number, number[]][] {
  return [...adj.entries()].sort((a, b) => a[0] - b[0]).map(([k, v]) => [k, [...v].sort((a, b) => a - b)])
}

describe('ex15/ex01 — toAdjacencyList', () => {
  it('builds an undirected list: each edge added both ways', () => {
    const adj = toAdjacencyList(3, [[0, 1], [1, 2]], false)
    expect(sortAdj(adj)).toEqual([[0, [1]], [1, [0, 2]], [2, [1]]])
  })

  it('builds a directed list: only u -> v added', () => {
    const adj = toAdjacencyList(3, [[0, 1], [1, 2]], true)
    expect(sortAdj(adj)).toEqual([[0, [1]], [1, [2]], [2, []]])
  })

  it('nodes with no edges still get an empty entry', () => {
    const adj = toAdjacencyList(4, [[0, 1]], false)
    expect(adj.has(2)).toBe(true)
    expect(adj.get(2)).toEqual([])
    expect(adj.has(3)).toBe(true)
    expect(adj.get(3)).toEqual([])
  })

  it('n = 0 with no edges -> empty map', () => {
    expect(toAdjacencyList(0, [], false).size).toBe(0)
  })

  it('self-loop: undirected adds both endpoints (both are u)', () => {
    const adj = toAdjacencyList(2, [[0, 0]], false)
    expect(adj.get(0)).toEqual([0, 0])
  })
})

describe('ex15/ex01 — degrees', () => {
  it('counts neighbor-list length per node', () => {
    const adj = new Map<number, number[]>([[0, [1, 2]], [1, [0]], [2, [0]]])
    expect(degrees(adj)).toEqual(new Map([[0, 2], [1, 1], [2, 1]]))
  })

  it('isolated node has degree 0', () => {
    const adj = new Map<number, number[]>([[0, []]])
    expect(degrees(adj)).toEqual(new Map([[0, 0]]))
  })

  it('empty adjacency list -> empty degree map', () => {
    expect(degrees(new Map()).size).toBe(0)
  })
})

describe('ex15/ex01 — matrixToList', () => {
  it('converts a small matrix', () => {
    const adj = matrixToList([
      [0, 1],
      [0, 0],
    ])
    expect(sortAdj(adj)).toEqual([[0, [1]], [1, []]])
  })

  it('treats any nonzero cell as an edge', () => {
    const adj = matrixToList([
      [0, 5],
      [0, 0],
    ])
    expect(adj.get(0)).toEqual([1])
  })

  it('every row index is present even with no edges', () => {
    const adj = matrixToList([
      [0, 0],
      [0, 0],
    ])
    expect(adj.get(0)).toEqual([])
    expect(adj.get(1)).toEqual([])
  })
})

describe('ex15/ex01 — listToMatrix', () => {
  it('converts a small list', () => {
    const matrix = listToMatrix(new Map([[0, [1]], [1, []]]), 2)
    expect(matrix).toEqual([
      [0, 1],
      [0, 0],
    ])
  })

  it('n larger than any node referenced still produces n x n', () => {
    const matrix = listToMatrix(new Map([[0, [1]], [1, [0]]]), 3)
    expect(matrix.length).toBe(3)
    expect(matrix.every((row) => row.length === 3)).toBe(true)
    expect(matrix[2]).toEqual([0, 0, 0])
  })

  it('round-trips with matrixToList', () => {
    const original = [
      [0, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ]
    const roundTripped = listToMatrix(matrixToList(original), 3)
    expect(roundTripped).toEqual(original)
  })
})

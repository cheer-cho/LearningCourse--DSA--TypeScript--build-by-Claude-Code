import { describe, expect, it } from 'vitest'
import { countIslands, maxIslandArea } from './ex03-island-count'

// Three genuinely-separate islands: {(0,0),(0,1),(1,0)} size 3,
// {(1,3)} size 1, {(2,2)} size 1.  Row 2 col 3 is water so the
// single-cell island at (1,3) is not 4-directionally connected to (2,2).
const SAMPLE = [
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
]

describe('ex15/ex03 — countIslands', () => {
  it('counts the worked-example grid', () => {
    expect(countIslands(SAMPLE)).toBe(3)
  })

  it('empty grid has no islands', () => {
    expect(countIslands([])).toBe(0)
  })

  it('all water has no islands', () => {
    expect(
      countIslands([
        [0, 0],
        [0, 0],
      ]),
    ).toBe(0)
  })

  it('all land is one island', () => {
    expect(
      countIslands([
        [1, 1],
        [1, 1],
      ]),
    ).toBe(1)
  })

  it('diagonal land cells do NOT connect (4-directional only)', () => {
    expect(
      countIslands([
        [1, 0],
        [0, 1],
      ]),
    ).toBe(2)
  })

  it('does not double count a single wide island', () => {
    expect(countIslands([[1, 1, 1, 1, 1]])).toBe(1)
  })

  it('handles a 300x300 grid efficiently (checkerboard-free stress case)', () => {
    const size = 300
    const grid: number[][] = Array.from({ length: size }, () => new Array(size).fill(0))
    // A handful of separated square islands so the answer is checkable,
    // plus a giant connected blob covering most of the grid to force
    // real traversal work (an O(rows*cols) pass must finish instantly;
    // an approach with hidden O((rows*cols)^2) behavior would not).
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size / 2; c++) {
        grid[r]![c] = 1
      }
    }
    grid[10]![size - 10] = 1
    grid[200]![size - 5] = 1
    expect(countIslands(grid)).toBe(3)
  })
})

describe('ex15/ex03 — maxIslandArea', () => {
  it('finds the largest island in the worked-example grid', () => {
    expect(maxIslandArea(SAMPLE)).toBe(3)
  })

  it('no land -> area 0', () => {
    expect(maxIslandArea([[0, 0]])).toBe(0)
  })

  it('single-cell island', () => {
    expect(maxIslandArea([[1]])).toBe(1)
  })

  it('picks the bigger of two separated islands', () => {
    const grid = [
      [1, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 0],
    ]
    expect(maxIslandArea(grid)).toBe(4)
  })
})

import { describe, expect, it } from 'vitest'
import { countPaths, countPathsBlocked, minPathCost } from './ex01-grid-paths'

describe('ex19/ex01 — countPaths', () => {
  it('returns 1 for a 1x1 grid', () => {
    expect(countPaths(1, 1)).toBe(1)
  })

  it('returns 1 for a single row', () => {
    expect(countPaths(1, 5)).toBe(1)
  })

  it('returns 1 for a single column', () => {
    expect(countPaths(5, 1)).toBe(1)
  })

  it('3x3 grid has 6 paths', () => {
    expect(countPaths(3, 3)).toBe(6)
  })

  it('3x7 grid has 28 paths', () => {
    expect(countPaths(3, 7)).toBe(28)
  })

  it('matches the combinatorial formula C(m+n-2, m-1) for several grids', () => {
    // For a rows x cols grid: C(rows+cols-2, rows-1) paths
    expect(countPaths(2, 2)).toBe(2)
    expect(countPaths(4, 4)).toBe(20)
    expect(countPaths(5, 5)).toBe(70)
  })

  it('handles a large grid without stack overflow (efficiency test)', () => {
    // 1000x1000 — naive enumeration would be astronomical; DP is fast
    const result = countPaths(1000, 1000)
    expect(typeof result).toBe('number')
    expect(result).toBeGreaterThan(0)
  })
})

describe('ex19/ex01 — countPathsBlocked', () => {
  it('returns 2 for the standard 3x3 grid with centre obstacle', () => {
    expect(
      countPathsBlocked([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
    ).toBe(2)
  })

  it('returns 0 when the start cell is blocked', () => {
    expect(
      countPathsBlocked([
        [1, 0],
        [0, 0],
      ])
    ).toBe(0)
  })

  it('returns 0 when the end cell is blocked', () => {
    expect(
      countPathsBlocked([
        [0, 0],
        [0, 1],
      ])
    ).toBe(0)
  })

  it('returns 1 for a single open cell', () => {
    expect(countPathsBlocked([[0]])).toBe(1)
  })

  it('returns 0 for a single blocked cell', () => {
    expect(countPathsBlocked([[1]])).toBe(1 - 1)
  })

  it('handles a fully clear grid (matches countPaths)', () => {
    const grid = Array.from({ length: 3 }, () => [0, 0, 0])
    expect(countPathsBlocked(grid)).toBe(6)
  })

  it('obstacle blocks all paths in a corridor', () => {
    // Only route is blocked in the middle of the single-row corridor
    expect(countPathsBlocked([[0, 1, 0]])).toBe(0)
  })
})

describe('ex19/ex01 — minPathCost', () => {
  it('classic 3x3 example yields 7', () => {
    expect(
      minPathCost([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ])
    ).toBe(7)
  })

  it('2x2 grid: 1+2+4=7 or 1+3+4=8 — picks 7', () => {
    expect(
      minPathCost([
        [1, 2],
        [3, 4],
      ])
    ).toBe(7)
  })

  it('single cell returns that cell value', () => {
    expect(minPathCost([[5]])).toBe(5)
  })

  it('single row sums all cells', () => {
    expect(minPathCost([[1, 2, 3]])).toBe(6)
  })

  it('single column sums all cells', () => {
    expect(minPathCost([[1], [2], [3]])).toBe(6)
  })

  it('all-zero grid has cost 0', () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    expect(minPathCost(grid)).toBe(0)
  })
})

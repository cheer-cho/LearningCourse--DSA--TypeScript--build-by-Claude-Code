import { describe, expect, it } from 'vitest'
import { searchMatrix } from './ex06-matrix-search'

const GRID = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
]

describe('ex10/ex06 — searchMatrix', () => {
  it('finds a value in the first row', () => {
    expect(searchMatrix(GRID, 3)).toBe(true)
  })

  it('finds a value in a middle row', () => {
    expect(searchMatrix(GRID, 16)).toBe(true)
  })

  it('finds a value in the last row', () => {
    expect(searchMatrix(GRID, 60)).toBe(true)
  })

  it('returns false for an absent value inside the overall range', () => {
    expect(searchMatrix(GRID, 13)).toBe(false)
  })

  it('returns false for a value below or above the whole grid', () => {
    expect(searchMatrix(GRID, 0)).toBe(false)
    expect(searchMatrix(GRID, 100)).toBe(false)
  })

  it('handles a single-cell grid', () => {
    expect(searchMatrix([[1]], 1)).toBe(true)
    expect(searchMatrix([[1]], 2)).toBe(false)
  })

  it('handles a single row', () => {
    expect(searchMatrix([[1, 3, 5, 7, 9]], 7)).toBe(true)
    expect(searchMatrix([[1, 3, 5, 7, 9]], 4)).toBe(false)
  })

  it('handles a single column', () => {
    expect(searchMatrix([[1], [3], [5], [7]], 5)).toBe(true)
    expect(searchMatrix([[1], [3], [5], [7]], 4)).toBe(false)
  })

  it('finds exact row/col boundary values', () => {
    expect(searchMatrix(GRID, 1)).toBe(true) // very first
    expect(searchMatrix(GRID, 60)).toBe(true) // very last
    expect(searchMatrix(GRID, 10)).toBe(true) // first of a row
    expect(searchMatrix(GRID, 7)).toBe(true) // last of a row
  })

  it('stays O(log(rows*cols)) on a huge grid', () => {
    const cols = 1000
    const rows = 1000
    const grid = Array.from({ length: rows }, (_, r) =>
      Array.from({ length: cols }, (_, c) => r * cols + c),
    )
    expect(searchMatrix(grid, 999_999)).toBe(true)
    expect(searchMatrix(grid, 1_000_000)).toBe(false)
  })
})

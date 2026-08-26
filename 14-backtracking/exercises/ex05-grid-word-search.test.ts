import { describe, expect, it } from 'vitest'
import { existsInGrid } from './ex05-grid-word-search'

describe('ex14/ex05 — existsInGrid', () => {
  it('finds a word tracing an L-shaped path', () => {
    const board = [
      ['a', 'b'],
      ['c', 'd'],
    ]
    expect(existsInGrid(board, 'abdc')).toBe(true)
  })

  it('word not present at all', () => {
    const board = [
      ['a', 'b'],
      ['c', 'd'],
    ]
    expect(existsInGrid(board, 'abz')).toBe(false)
  })

  it('reuse-forbidden trap: word needs more of a letter than distinct connected cells provide', () => {
    // 'a' cells are (0,0), (1,0), (1,1) — a connected chain of length 3.
    // Without in-place visited marking, a buggy DFS could ping-pong
    // between two adjacent 'a' cells to "find" a 4th 'a' that doesn't exist.
    const board = [
      ['a', 'b'],
      ['a', 'a'],
    ]
    expect(existsInGrid(board, 'aaaa')).toBe(false)
    expect(existsInGrid(board, 'aaa')).toBe(true)
  })

  it('full-grid snake path uses every cell exactly once, and restores the board', () => {
    const board = [
      ['a', 'b', 'c'],
      ['f', 'e', 'd'],
    ]
    const snapshot = board.map((row) => [...row])

    expect(existsInGrid(board, 'abcdef')).toBe(true)
    expect(board).toEqual(snapshot) // backtracking must restore every mutated cell
  })

  it('word longer than the number of cells is impossible', () => {
    const board = [['a']]
    expect(existsInGrid(board, 'aa')).toBe(false)
  })

  it('single-cell board matching the word', () => {
    expect(existsInGrid([['x']], 'x')).toBe(true)
  })
})

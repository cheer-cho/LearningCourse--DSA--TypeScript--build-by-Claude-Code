import { describe, expect, it } from 'vitest'
import { countNQueens, solveNQueens } from './ex07-n-queens'

function normalizeBoards(boards: string[][]): string[] {
  return boards.map((board) => board.join('|')).sort()
}

// Independently checks a solved board for correctness, so the test
// doesn't just trust the solver's own constraint bookkeeping.
function isValidBoard(board: string[]): boolean {
  const n = board.length
  const cols: number[] = []
  for (const row of board) {
    const col = row.indexOf('Q')
    if (col === -1 || row.split('Q').length - 1 !== 1) return false
    cols.push(col)
  }
  for (let r1 = 0; r1 < n; r1++) {
    for (let r2 = r1 + 1; r2 < n; r2++) {
      const c1 = cols[r1]!
      const c2 = cols[r2]!
      if (c1 === c2) return false
      if (Math.abs(c1 - c2) === Math.abs(r1 - r2)) return false
    }
  }
  return true
}

describe('ex14/ex07 — solveNQueens', () => {
  it('n = 1 -> a single trivial solution', () => {
    expect(solveNQueens(1)).toEqual([['Q']])
  })

  it('n = 2 and n = 3 have no solutions', () => {
    expect(solveNQueens(2)).toEqual([])
    expect(solveNQueens(3)).toEqual([])
  })

  it('n = 4 -> exactly the 2 known boards', () => {
    expect(normalizeBoards(solveNQueens(4))).toEqual(
      normalizeBoards([
        ['.Q..', '...Q', 'Q...', '..Q.'],
        ['..Q.', 'Q...', '...Q', '.Q..'],
      ]),
    )
  })

  it('every board returned for n = 6 is independently valid and has no duplicates', () => {
    const boards = solveNQueens(6)
    expect(boards.length).toBeGreaterThan(0)
    for (const board of boards) {
      expect(board.length).toBe(6)
      expect(isValidBoard(board)).toBe(true)
    }
    expect(new Set(normalizeBoards(boards)).size).toBe(boards.length)
  })
})

describe('ex14/ex07 — countNQueens', () => {
  it('n = 1 -> 1', () => {
    expect(countNQueens(1)).toBe(1)
  })

  it('n = 2 and n = 3 -> 0', () => {
    expect(countNQueens(2)).toBe(0)
    expect(countNQueens(3)).toBe(0)
  })

  it('n = 4 -> 2', () => {
    expect(countNQueens(4)).toBe(2)
  })

  it('n = 8 -> 92 (the classic result, and fast thanks to O(1) constraint checks)', () => {
    expect(countNQueens(8)).toBe(92)
  })

  it('agrees with the length of solveNQueens for the same n', () => {
    expect(countNQueens(5)).toBe(solveNQueens(5).length)
  })
})

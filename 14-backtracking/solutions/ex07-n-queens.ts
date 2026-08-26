// Reference solution — ex07

/**
 * Pattern: backtracking, one queen per row, pruned with O(1)
 * constraint checks: a column is unsafe if already used; a diagonal
 * is unsafe if its constant identity (`row - col` for one diagonal
 * direction, `row + col` for the other) is already used. Sets give
 * O(1) membership instead of rescanning placed queens.
 * Time: O(n!) worst case (inherent to the search). Space: O(n) for the sets + recursion.
 */
export function solveNQueens(n: number): string[][] {
  const results: string[][] = []
  const usedCols = new Set<number>()
  const usedDiag1 = new Set<number>() // row - col
  const usedDiag2 = new Set<number>() // row + col
  const queenCol: number[] = [] // queenCol[row] = column of the queen placed in that row

  function backtrack(row: number): void {
    if (row === n) {
      const board = queenCol.map((col) => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1))
      results.push(board)
      return
    }
    for (let col = 0; col < n; col++) {
      const d1 = row - col
      const d2 = row + col
      if (usedCols.has(col) || usedDiag1.has(d1) || usedDiag2.has(d2)) continue

      usedCols.add(col)
      usedDiag1.add(d1)
      usedDiag2.add(d2)
      queenCol.push(col)

      backtrack(row + 1)

      queenCol.pop()
      usedCols.delete(col)
      usedDiag1.delete(d1)
      usedDiag2.delete(d2)
    }
  }

  backtrack(0)
  return results
}

/**
 * Pattern: identical search to `solveNQueens`, but counts leaves
 * instead of materializing board strings — cheaper per solution found.
 * Time: O(n!) worst case. Space: O(n) for the sets + recursion (no board strings).
 */
export function countNQueens(n: number): number {
  let count = 0
  const usedCols = new Set<number>()
  const usedDiag1 = new Set<number>()
  const usedDiag2 = new Set<number>()

  function backtrack(row: number): void {
    if (row === n) {
      count++
      return
    }
    for (let col = 0; col < n; col++) {
      const d1 = row - col
      const d2 = row + col
      if (usedCols.has(col) || usedDiag1.has(d1) || usedDiag2.has(d2)) continue

      usedCols.add(col)
      usedDiag1.add(d1)
      usedDiag2.add(d2)

      backtrack(row + 1)

      usedCols.delete(col)
      usedDiag1.delete(d1)
      usedDiag2.delete(d2)
    }
  }

  backtrack(0)
  return count
}

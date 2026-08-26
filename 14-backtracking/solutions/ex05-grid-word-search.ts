// Reference solution — ex05

/**
 * Pattern: backtracking DFS over a grid. Mark the current cell as
 * visited IN PLACE (overwrite it with a sentinel that can't match any
 * letter) before recursing into neighbors, then restore the original
 * character on the way back out — that's choose/explore/unchoose
 * applied to a grid cell instead of a path array.
 * Time: O(rows * cols * 4^L), L = word.length. Space: O(L) recursion, O(1) extra (board reused).
 */
export function existsInGrid(board: string[][], word: string): boolean {
  const rows = board.length
  if (rows === 0) return word.length === 0
  const cols = board[0]!.length

  function dfs(row: number, col: number, index: number): boolean {
    if (index === word.length) return true
    if (row < 0 || row >= rows || col < 0 || col >= cols) return false

    const gridRow = board[row]!
    if (gridRow[col] !== word[index]) return false

    const original = gridRow[col]!
    gridRow[col] = '#' // choose: mark visited so this path can't reuse the cell
    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1)
    gridRow[col] = original // unchoose: restore before trying the next start/branch

    return found
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) return true
    }
  }
  return false
}

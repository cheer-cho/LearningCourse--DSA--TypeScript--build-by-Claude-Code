// The classic N-queens puzzle: place N queens on an N x N board so
// none attack another (no shared row, column, or diagonal). HARD.
// Pattern: backtracking, one queen per row, pruned with O(1)
// column/diagonal constraint SETS instead of rescanning the board.
// Check: npm test -- 14 -t ex07

/**
 * Every distinct way to place `n` non-attacking queens on an `n x n`
 * board. Each solution is a list of `n` row-strings, `n` characters
 * each: `'Q'` at the queen's column, `'.'` elsewhere.
 *
 * Required optimization: track used columns, and used "diagonals" via
 * the two constant-per-diagonal identities `row - col` and `row + col`,
 * as three Sets — so checking "is this cell safe?" is O(1), not an
 * O(n) rescan of every previously placed queen.
 *
 * @param n - board size / queen count, n >= 1.
 * @returns every solution board; order does not matter.
 * @remarks Edge case: `n === 1` -> one solution (`['Q']`). `n === 2` or `n === 3` -> `[]` (no solution exists).
 * @example solveNQueens(1) -> [['Q']]
 * Target complexity: O(n!) time worst case (inherent to the search), O(1)-per-check safety
 *   via the constraint sets rather than O(n) per check.
 */
export function solveNQueens(n: number): string[][] {
  throw new Error('TODO: implement me')
}

/**
 * The COUNT of distinct non-attacking n-queens placements — same
 * search as `solveNQueens`, but without materializing the boards
 * (just count leaves), so it stays fast for larger `n`.
 *
 * @param n - board size / queen count, n >= 1.
 * @returns the number of solutions.
 * @example countNQueens(4) -> 2
 * Target complexity: O(n!) time worst case, O(n) extra space (no board strings built).
 */
export function countNQueens(n: number): number {
  throw new Error('TODO: implement me')
}

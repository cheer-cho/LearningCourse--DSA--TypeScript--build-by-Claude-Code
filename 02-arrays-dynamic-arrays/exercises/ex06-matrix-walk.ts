/**
 * Row-major grid indexing: grid[row][col]. These four walks are the
 * building blocks later grid/graph modules (paths, islands, DP tables)
 * reuse constantly.
 *
 * Test: npm test -- 02 -t ex06
 */

/**
 * Sum of every row.
 *
 * @example rowSums([[1, 2], [3, 4]]) -> [3, 7]
 *
 * Target complexity: O(rows * cols) time, O(rows) space
 */
export function rowSums(grid: number[][]): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Sum of every column.
 *
 * @example colSums([[1, 2], [3, 4]]) -> [4, 6]
 *
 * Target complexity: O(rows * cols) time, O(cols) space
 */
export function colSums(grid: number[][]): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Elements at (0,0), (1,1), (2,2)... for as many steps as the shorter
 * dimension allows. Works for non-square grids.
 *
 * @example mainDiagonal([[1, 2, 3], [4, 5, 6]]) -> [1, 5]
 *
 * Target complexity: O(min(rows, cols)) time, O(min(rows, cols)) space
 */
export function mainDiagonal(grid: number[][]): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Transpose `grid` into a NEW grid (rows become columns). Works for
 * non-square grids: an r x c grid transposes to a c x r grid.
 *
 * @example transpose([[1, 2, 3], [4, 5, 6]]) -> [[1, 4], [2, 5], [3, 6]]
 *
 * Target complexity: O(rows * cols) time, O(rows * cols) space
 */
export function transpose(grid: number[][]): number[][] {
  throw new Error('TODO: implement me')
}

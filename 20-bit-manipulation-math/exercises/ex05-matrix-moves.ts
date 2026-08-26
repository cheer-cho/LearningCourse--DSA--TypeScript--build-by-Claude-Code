/**
 * ex05 — Matrix moves
 *
 * Scenario: a firmware image processor needs three in-place grid
 * operations: rotate a camera frame 90° clockwise, read a sensor
 * grid in spiral order (for a 1-D readout), and zero out any row or
 * column that contains a fault code (zero) without using extra space.
 * Pattern: in-place matrix tricks — transpose+reverse, four shrinking
 * bounds, first-row/col as marker.
 *
 * Check: npm test -- 20 -t ex05
 */

/**
 * Rotate an n×n grid 90° clockwise **in place** (no extra matrix).
 * Recipe: transpose (grid[i][j] <-> grid[j][i]) then reverse each row.
 * @param grid - n×n matrix of numbers, n >= 1; mutated in place
 * @returns void (grid is modified directly)
 * edge cases: n = 1 -> no visible change; already-correct -> idempotent after 4 rotations
 * input: [[1,2,3],[4,5,6],[7,8,9]] -> [[7,4,1],[8,5,2],[9,6,3]]
 * Target: O(n²) time, O(1) extra space
 */
export function rotate90InPlace(grid: number[][]): void {
  throw new Error('TODO: implement me')
}

/**
 * Return all elements of an m×n grid in clockwise spiral order,
 * starting from the top-left corner.
 * Walk using four shrinking bounds (top, bottom, left, right):
 * right across top row → down right column → left across bottom row →
 * up left column → shrink all four bounds inward → repeat.
 * @param grid - m×n matrix, m >= 1, n >= 1
 * @returns elements in spiral order
 * edge cases: 1×1 -> [element]; single row -> that row; single col -> that col
 * input: [[1,2,3],[4,5,6],[7,8,9]] -> [1,2,3,6,9,8,7,4,5]
 * Target: O(m*n) time, O(1) extra space (excluding the output array)
 */
export function spiralOrder(grid: number[][]): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Zero out every element in the same row OR column as any zero, in place.
 * Use the first row and first column as marker storage (O(1) extra space
 * beyond two booleans), per the classic trick:
 *   1. Record whether the first row and first col themselves have a zero
 *      (because we're about to overwrite them with markers).
 *   2. Scan the interior: whenever grid[i][j] == 0, write a 0 marker at
 *      grid[i][0] and grid[0][j].
 *   3. Zero out interior cells guided by those markers.
 *   4. Apply the two saved booleans to zero out the first row/col if needed.
 * @param grid - m×n matrix of numbers; mutated in place
 * @returns void
 * edge cases: no zeros -> unchanged; a zero in the first row/col cascades
 *   to the entire row/col (covered by the saved-boolean step).
 * input: [[1,1,1],[1,0,1],[1,1,1]] -> [[1,0,1],[0,0,0],[1,0,1]]
 * Target: O(m*n) time, O(1) extra space
 */
export function zeroRowsCols(grid: number[][]): void {
  throw new Error('TODO: implement me')
}

// Flood fill (paint-bucket tool) and captured territory. Pattern:
// grid-as-graph DFS/BFS from a seed cell, or from every border cell.
// Check: npm test -- 15 -t ex04

/**
 * Paint-bucket flood fill: starting at (row, col), change every
 * 4-directionally connected cell that shares the SAME original color
 * as (row, col) to `color`.
 *
 * @param image - grid of color ids.
 * @param row - starting row.
 * @param col - starting col.
 * @param color - new color to paint the region.
 * @returns a new grid (does not need to mutate `image`) with the region repainted.
 * @remarks Edge case: `color` equal to the starting cell's color ->
 *   return the grid unchanged (guard this FIRST, or a naive fill
 *   infinite-loops repainting a color with itself).
 * @example floodFill([[1,1,0],[1,1,0],[0,0,0]], 0, 0, 2)
 *   -> [[2,2,0],[2,2,0],[0,0,0]]
 * Target complexity: O(rows * cols) time, O(rows * cols) space worst case.
 */
export function floodFill(image: number[][], row: number, col: number, color: number): number[][] {
  throw new Error('TODO: implement me')
}

/**
 * Territory capture: 'R' cells 4-directionally connected to the BOARD
 * BORDER survive as 'R'; every other 'R' gets captured to 'C'. '.'
 * cells never change.
 *
 * @param board - grid of 'R' (region) / '.' (empty) cells.
 * @returns a new board with fully-interior regions captured.
 * @remarks The trick: it's much easier to find the (few) SURVIVING
 *   regions first — flood-fill from every border 'R' — than to prove
 *   each interior region is fully enclosed directly. Invert the
 *   question, then flip everything NOT marked as a survivor.
 * @example captureRegions([['.','.','.'],['.','R','.'],['.','.','.']])
 *   -> [['.','.','.'],['.','C','.'],['.','.','.']]  (fully interior: captured)
 * Target complexity: O(rows * cols) time, O(rows * cols) space.
 */
export function captureRegions(board: string[][]): string[][] {
  throw new Error('TODO: implement me')
}

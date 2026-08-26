// ex06 — 2D matrix search: a grid that's really one sorted array.
// Scenario: a seating chart where each row is sorted left to right,
// and every row's first seat number beats the previous row's last.
// Check: npm test -- 10 -t ex06

/**
 * Searches for `target` in `grid`, where every row is sorted
 * ascending AND the first element of each row is greater than the
 * last element of the previous row. That second property means the
 * whole grid, read row by row, is one sorted sequence — so treat it
 * as a single sorted array of `rows * cols` elements addressed by a
 * flat index (`row = Math.floor(idx / cols)`, `col = idx % cols`) and
 * run ONE binary search over it. No nested search per row.
 *
 * @param grid - a non-empty rectangular grid (all rows same length),
 *   sorted as described above
 * @param target - value to find
 * @returns true if `target` appears anywhere in `grid`
 * @example searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3) -> true
 * @example searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13) -> false
 * @example searchMatrix([[1]], 1) -> true
 * Target complexity: O(log(rows * cols)) time, O(1) space
 */
export function searchMatrix(grid: number[][], target: number): boolean {
  throw new Error('TODO: implement me')
}

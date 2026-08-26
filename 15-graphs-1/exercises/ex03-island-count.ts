// Island counting on a 0/1 grid: land (1) cells connected
// 4-directionally form one island. Pattern: grid-as-graph DFS/BFS with
// a visited grid (or in-place sinking). The efficiency test uses a
// 300x300 grid — use iterative traversal or be careful with recursion.
// Check: npm test -- 15 -t ex03

/**
 * Count islands (connected groups of 1s, 4-directional) in `grid`.
 *
 * @param grid - rows of 0 (water) / 1 (land).
 * @returns number of islands.
 * @remarks Edge cases: empty grid -> 0; all water -> 0; all land -> 1.
 * @example countIslands([[1,1,0],[0,1,0],[0,0,1]]) -> 2
 * Target complexity: O(rows * cols) time, O(rows * cols) space worst case.
 */
export function countIslands(grid: number[][]): number {
  throw new Error('TODO: implement me')
}

/**
 * Area (cell count) of the largest island; 0 if there is no land.
 *
 * @param grid - rows of 0 (water) / 1 (land).
 * @returns size of the biggest connected group of 1s, or 0.
 * @example maxIslandArea([[1,1,0],[0,1,0],[0,0,1]]) -> 3
 * Target complexity: O(rows * cols) time, O(rows * cols) space worst case.
 */
export function maxIslandArea(grid: number[][]): number {
  throw new Error('TODO: implement me')
}

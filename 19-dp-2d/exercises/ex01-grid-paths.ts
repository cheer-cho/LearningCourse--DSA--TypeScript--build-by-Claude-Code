/**
 * ex01 — Grid path counting and minimum-cost traversal
 *
 * Scenario: a robot moves only right or down on a 2-D grid; count the
 * distinct routes, handle obstacles, and find the cheapest route.
 * Pattern: grid DP (state = cell reached, transitions = from above or left).
 *
 * Check: npm test -- 19 -t ex01
 */

/**
 * Count distinct paths from the top-left to the bottom-right of an
 * `rows x cols` grid, moving only right or down.
 *
 * State: dp[r][c] = number of ways to reach cell (r, c).
 * Choice: arrived from the cell above (r-1, c) or from the left (r, c-1).
 * Recurrence: dp[r][c] = dp[r-1][c] + dp[r][c-1].
 * Base case: dp[0][c] = 1 (only one way to reach any cell in row 0);
 *   dp[r][0] = 1 (only one way to reach any cell in column 0).
 * Space optimization (required in your solution): collapse to a single
 *   1-D array of length `cols`, updating left-to-right each row — the
 *   current cell only needs "cell above" (dp[c] before update) and
 *   "cell to the left" (dp[c-1] just updated).
 *
 * @param rows - number of rows (rows >= 1).
 * @param cols - number of columns (cols >= 1).
 * @returns the number of distinct paths from (0,0) to (rows-1, cols-1).
 * @example countPaths(3, 3) -> 6
 * @example countPaths(3, 7) -> 28
 * @example countPaths(1, 1) -> 1
 * Target: O(rows * cols) time, O(cols) space (1-row optimization required).
 */
export function countPaths(rows: number, cols: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Count distinct paths from (0,0) to (rows-1, cols-1) in a grid that
 * may contain obstacles.
 *
 * `grid[r][c] === 1` means the cell is blocked; `0` means open. The
 * robot may only pass through open cells and may only move right or down.
 * If the start or end cell is blocked, return 0.
 *
 * State / choice / recurrence: same as `countPaths` except any blocked
 *   cell contributes 0 paths.
 *
 * @param grid - a 2-D grid where 0 = open and 1 = obstacle.
 * @returns the number of distinct unobstructed paths, or 0 if none exist.
 * @example countPathsBlocked([[0,0,0],[0,1,0],[0,0,0]]) -> 2
 * @example countPathsBlocked([[0,1],[0,0]]) -> 1
 * @example countPathsBlocked([[1,0],[0,0]]) -> 0
 * Target: O(rows * cols) time, O(cols) space.
 */
export function countPathsBlocked(grid: number[][]): number {
  throw new Error('TODO: implement me')
}

/**
 * Minimum-cost path from the top-left to the bottom-right of a grid of
 * non-negative integers, moving only right or down. The cost of a path
 * is the sum of all cells visited (including start and end).
 *
 * State: dp[r][c] = minimum cost to reach cell (r, c).
 * Choice: arrive from above or from the left; take the cheaper option.
 * Recurrence: dp[r][c] = grid[r][c] + min(dp[r-1][c], dp[r][c-1]).
 * Base cases: dp[0][c] accumulates the first row left-to-right;
 *   dp[r][0] accumulates the first column top-to-bottom.
 *
 * @param grid - a 2-D array of non-negative integers.
 * @returns the minimum path cost from (0,0) to (rows-1, cols-1).
 * @example minPathCost([[1,3,1],[1,5,1],[4,2,1]]) -> 7
 * @example minPathCost([[1,2],[3,4]]) -> 7
 * @example minPathCost([[5]]) -> 5
 * Target: O(rows * cols) time, O(cols) space.
 */
export function minPathCost(grid: number[][]): number {
  throw new Error('TODO: implement me')
}

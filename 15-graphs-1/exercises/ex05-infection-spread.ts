// Multi-source BFS: spreads that start from MANY cells at once.
// Pattern: seed the BFS queue with every source before the first step,
// so all sources expand simultaneously (their "rings" merge naturally).
// Check: npm test -- 15 -t ex05

/**
 * Server-room malware spread. Grid cells: 0 = empty, 1 = healthy
 * server, 2 = already-infected server. Each minute, every infected
 * server infects its 4-directional healthy neighbors, simultaneously.
 *
 * @param grid - rows of 0/1/2.
 * @returns minutes until every healthy server is infected, or -1 if
 *   some healthy server can never be reached.
 * @remarks Edge cases: no healthy servers -> 0 minutes. No infected
 *   servers but some healthy ones remain -> -1 (nothing ever spreads).
 * @example minutesToInfect([[2,1,1],[1,1,0],[0,1,1]]) -> 4
 * Target complexity: O(rows * cols) time, O(rows * cols) space.
 */
export function minutesToInfect(grid: number[][]): number {
  throw new Error('TODO: implement me')
}

/**
 * Shortest escape from a 0/1 maze: fewest steps from `start` to ANY
 * open cell on the maze's border (an exit). Moves are 4-directional
 * through 0 (open) cells; 1 = wall.
 *
 * @param maze - rows of 0 (open) / 1 (wall).
 * @param start - `[row, col]` starting cell (guaranteed open).
 * @returns fewest steps to reach a border cell, 0 if `start` is already
 *   on the border, or -1 if no border cell is reachable.
 * @example shortestExit(
 *   [[1,1,1,1],[1,0,0,1],[1,0,0,0],[1,1,1,1]], [1,1]
 * ) -> 3
 * Target complexity: O(rows * cols) time, O(rows * cols) space.
 */
export function shortestExit(maze: number[][], start: [number, number]): number {
  throw new Error('TODO: implement me')
}

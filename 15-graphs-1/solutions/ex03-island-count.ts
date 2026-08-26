// Reference solution — ex03

const DIRS: [number, number][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]

/**
 * Shared iterative flood-fill: sinks the island containing (row, col)
 * using an explicit stack (safe on large grids where recursion could
 * blow the call stack) and returns its area.
 */
function sinkIsland(grid: number[][], visited: boolean[][], row: number, col: number): number {
  const rows = grid.length
  const cols = grid[0]!.length
  const stack: [number, number][] = [[row, col]]
  visited[row]![col] = true
  let area = 0

  while (stack.length > 0) {
    const [r, c] = stack.pop()!
    area++
    for (const [dr, dc] of DIRS) {
      const nr = r + dr
      const nc = c + dc
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue
      if (visited[nr]![nc] || grid[nr]![nc] !== 1) continue
      visited[nr]![nc] = true
      stack.push([nr, nc])
    }
  }

  return area
}

/**
 * Pattern: grid-as-graph, iterative DFS (explicit stack) with a
 * visited grid — one sink per unvisited land cell counts one island.
 * Time: O(rows * cols). Space: O(rows * cols) for visited + stack.
 */
export function countIslands(grid: number[][]): number {
  const rows = grid.length
  if (rows === 0) return 0
  const cols = grid[0]!.length
  const visited: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false))

  let count = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r]![c] === 1 && !visited[r]![c]) {
        sinkIsland(grid, visited, r, c)
        count++
      }
    }
  }

  return count
}

/**
 * Pattern: same grid-as-graph sink, but track the max area instead of
 * just counting.
 * Time: O(rows * cols). Space: O(rows * cols).
 */
export function maxIslandArea(grid: number[][]): number {
  const rows = grid.length
  if (rows === 0) return 0
  const cols = grid[0]!.length
  const visited: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false))

  let best = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r]![c] === 1 && !visited[r]![c]) {
        best = Math.max(best, sinkIsland(grid, visited, r, c))
      }
    }
  }

  return best
}

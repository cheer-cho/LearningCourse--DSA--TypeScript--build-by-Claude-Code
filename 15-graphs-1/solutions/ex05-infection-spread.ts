// Reference solution — ex05

const DIRS: [number, number][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]

/**
 * Pattern: multi-source BFS — seed the queue with EVERY infected cell
 * before the first step, so all fronts expand together; the answer is
 * the number of levels the BFS takes, tracked while draining the
 * queue level-by-level.
 * Time: O(rows * cols). Space: O(rows * cols).
 */
export function minutesToInfect(grid: number[][]): number {
  const rows = grid.length
  if (rows === 0) return 0
  const cols = grid[0]!.length

  let queue: [number, number][] = []
  let healthyCount = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r]![c] === 2) queue.push([r, c])
      else if (grid[r]![c] === 1) healthyCount++
    }
  }

  if (healthyCount === 0) return 0

  let minutes = 0
  while (queue.length > 0 && healthyCount > 0) {
    const next: [number, number][] = []
    for (const [r, c] of queue) {
      for (const [dr, dc] of DIRS) {
        const nr = r + dr
        const nc = c + dc
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue
        if (grid[nr]![nc] !== 1) continue
        grid[nr]![nc] = 2
        healthyCount--
        next.push([nr, nc])
      }
    }
    if (next.length > 0) minutes++
    queue = next
  }

  return healthyCount === 0 ? minutes : -1
}

/**
 * Pattern: single-source BFS from `start`, stopping the instant a
 * border cell is dequeued (BFS guarantees that's the SHORTEST such cell).
 * Time: O(rows * cols). Space: O(rows * cols).
 */
export function shortestExit(maze: number[][], start: [number, number]): number {
  const rows = maze.length
  if (rows === 0) return -1
  const cols = maze[0]!.length
  const [startRow, startCol] = start

  const isBorder = (r: number, c: number): boolean =>
    r === 0 || r === rows - 1 || c === 0 || c === cols - 1

  if (isBorder(startRow, startCol)) return 0

  const visited: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false))
  visited[startRow]![startCol] = true
  let queue: [number, number][] = [[startRow, startCol]]
  let steps = 0

  while (queue.length > 0) {
    steps++
    const next: [number, number][] = []
    for (const [r, c] of queue) {
      for (const [dr, dc] of DIRS) {
        const nr = r + dr
        const nc = c + dc
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue
        if (visited[nr]![nc] || maze[nr]![nc] !== 0) continue
        if (isBorder(nr, nc)) return steps
        visited[nr]![nc] = true
        next.push([nr, nc])
      }
    }
    queue = next
  }

  return -1
}

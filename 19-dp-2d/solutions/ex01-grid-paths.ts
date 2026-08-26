// Reference solution — ex01

// --- countPaths ---
// State: dp[j] = number of paths to reach the current row's cell j.
// Initially all 1s (the first row has exactly one path to each cell).
// Each subsequent row: dp[j] += dp[j-1] (add paths from the left).
// After iterating all rows, dp[cols-1] holds the answer.
// Order: row by row, left to right. O(rows*cols) time, O(cols) space.
export function countPaths(rows: number, cols: number): number {
  const dp = new Array<number>(cols).fill(1)
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      dp[c] = (dp[c] ?? 0) + (dp[c - 1] ?? 0)
    }
  }
  return dp[cols - 1] ?? 1
}

// --- countPathsBlocked ---
// State: dp[c] = number of unobstructed paths to the current row at column c.
// Choice: same as countPaths, but a blocked cell contributes 0 paths.
// Recurrence: dp[c] += dp[c-1] when open; dp[c] = 0 when blocked. When
// c === 0 and r > 0, dp[c] already holds the value carried down from above.
// Order: row by row, left to right. O(rows*cols) time, O(cols) space.
export function countPathsBlocked(grid: number[][]): number {
  const rows = grid.length
  const cols = grid[0]?.length ?? 0
  if (rows === 0 || cols === 0) return 0

  const dp = new Array<number>(cols).fill(0)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if ((grid[r]?.[c] ?? 1) === 1) {
        dp[c] = 0
        continue
      }
      if (r === 0 && c === 0) {
        dp[c] = 1
      } else if (c > 0) {
        dp[c] = (dp[c] ?? 0) + (dp[c - 1] ?? 0)
      }
      // c === 0 and r > 0: dp[c] already holds the value from above.
    }
  }

  return dp[cols - 1] ?? 0
}

// --- minPathCost ---
// State: dp[c] = minimum cost to reach the current row at column c.
// Choice: arrive from above (dp[c] pre-update) or from the left
// (dp[c-1] just updated); take the cheaper option.
// Recurrence: dp[c] = grid[r][c] + min(dp[c], dp[c-1]), with row 0 /
// column 0 only accumulating (no "other" direction to compare).
// Order: row by row, left to right. O(rows*cols) time, O(cols) space.
export function minPathCost(grid: number[][]): number {
  const rows = grid.length
  const cols = grid[0]?.length ?? 0
  if (rows === 0 || cols === 0) return 0

  const dp = new Array<number>(cols).fill(0)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = grid[r]?.[c] ?? 0
      if (r === 0 && c === 0) {
        dp[c] = cell
      } else if (r === 0) {
        dp[c] = (dp[c - 1] ?? 0) + cell
      } else if (c === 0) {
        dp[c] = (dp[c] ?? 0) + cell
      } else {
        dp[c] = Math.min(dp[c] ?? Infinity, dp[c - 1] ?? Infinity) + cell
      }
    }
  }

  return dp[cols - 1] ?? 0
}

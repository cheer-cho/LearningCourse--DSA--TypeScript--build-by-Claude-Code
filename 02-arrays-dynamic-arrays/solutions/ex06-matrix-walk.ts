// Pattern: straight row-major / column-major sweeps over a 2D array —
// the same indexing habits later grid and DP-table modules build on.
// Complexity: each function makes one pass over every cell,
// O(rows * cols) time; space is the size of the output produced.

export function rowSums(grid: number[][]): number[] {
  return grid.map((row) => row.reduce((sum, v) => sum + v, 0))
}

export function colSums(grid: number[][]): number[] {
  if (grid.length === 0) return []
  const cols = (grid[0] as number[]).length
  const sums = new Array<number>(cols).fill(0)
  for (const row of grid) {
    for (let c = 0; c < cols; c++) {
      sums[c] = (sums[c] as number) + (row[c] as number)
    }
  }
  return sums
}

export function mainDiagonal(grid: number[][]): number[] {
  if (grid.length === 0) return []
  const cols = (grid[0] as number[]).length
  const steps = Math.min(grid.length, cols)
  const result: number[] = []
  for (let i = 0; i < steps; i++) {
    result.push((grid[i] as number[])[i] as number)
  }
  return result
}

export function transpose(grid: number[][]): number[][] {
  if (grid.length === 0) return []
  const rows = grid.length
  const cols = (grid[0] as number[]).length
  const result: number[][] = Array.from({ length: cols }, () => new Array<number>(rows).fill(0))
  for (let r = 0; r < rows; r++) {
    const srcRow = grid[r] as number[]
    for (let c = 0; c < cols; c++) {
      const destRow = result[c] as number[]
      destRow[r] = srcRow[c] as number
    }
  }
  return result
}

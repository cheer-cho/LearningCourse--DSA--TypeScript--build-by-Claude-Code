// Reference solution — ex05
// Pattern: in-place matrix tricks.
// rotate90InPlace: transpose (grid[i][j] <-> grid[j][i]) then reverse each
//   row — two O(n²) passes, O(1) extra space.
// spiralOrder: four shrinking bounds (top/bottom/left/right) walk each cell
//   exactly once — O(m*n) time, O(1) extra space (output excluded).
// zeroRowsCols: use the first row and first column as O(1) marker storage;
//   scan interior first, apply markers to interior, then fix the first
//   row/col using two saved booleans — O(m*n) time, O(1) space.

export function rotate90InPlace(grid: number[][]): void {
  const n = grid.length
  // Step 1: transpose (swap across the main diagonal)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const tmp = grid[i]![j]!
      grid[i]![j] = grid[j]![i]!
      grid[j]![i] = tmp
    }
  }
  // Step 2: reverse each row
  for (let i = 0; i < n; i++) {
    grid[i]!.reverse()
  }
}

export function spiralOrder(grid: number[][]): number[] {
  const result: number[] = []
  let top = 0
  let bottom = grid.length - 1
  let left = 0
  let right = grid[0]!.length - 1

  while (top <= bottom && left <= right) {
    // sweep right across the top row
    for (let c = left; c <= right; c++) result.push(grid[top]![c]!)
    top++
    // sweep down the right column
    for (let r = top; r <= bottom; r++) result.push(grid[r]![right]!)
    right--
    // sweep left across the bottom row (only if a row remains)
    if (top <= bottom) {
      for (let c = right; c >= left; c--) result.push(grid[bottom]![c]!)
      bottom--
    }
    // sweep up the left column (only if a column remains)
    if (left <= right) {
      for (let r = bottom; r >= top; r--) result.push(grid[r]![left]!)
      left++
    }
  }
  return result
}

export function zeroRowsCols(grid: number[][]): void {
  const m = grid.length
  const n = grid[0]!.length

  // Save whether the first row and first column originally contain a zero
  let firstRowHasZero = false
  let firstColHasZero = false
  for (let c = 0; c < n; c++) {
    if (grid[0]![c] === 0) { firstRowHasZero = true; break }
  }
  for (let r = 0; r < m; r++) {
    if (grid[r]![0] === 0) { firstColHasZero = true; break }
  }

  // Use row 0 and col 0 as markers for the interior
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      if (grid[r]![c] === 0) {
        grid[r]![0] = 0  // mark row r
        grid[0]![c] = 0  // mark col c
      }
    }
  }

  // Zero out interior cells based on markers
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      if (grid[r]![0] === 0 || grid[0]![c] === 0) {
        grid[r]![c] = 0
      }
    }
  }

  // Zero out first row and first column if they originally had zeros
  if (firstRowHasZero) {
    for (let c = 0; c < n; c++) grid[0]![c] = 0
  }
  if (firstColHasZero) {
    for (let r = 0; r < m; r++) grid[r]![0] = 0
  }
}

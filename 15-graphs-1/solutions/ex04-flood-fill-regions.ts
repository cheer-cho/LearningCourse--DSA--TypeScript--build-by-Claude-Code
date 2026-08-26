// Reference solution — ex04

const DIRS: [number, number][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]

/**
 * Pattern: grid-as-graph BFS from the seed cell, guarded by the
 * "new color === old color" no-op check so the fill can't loop forever
 * repainting a color with itself.
 * Time: O(rows * cols). Space: O(rows * cols).
 */
export function floodFill(image: number[][], row: number, col: number, color: number): number[][] {
  const rows = image.length
  const cols = image[0]?.length ?? 0
  const result = image.map((r) => [...r])
  const startColor = result[row]?.[col]
  if (startColor === undefined || startColor === color) return result

  const queue: [number, number][] = [[row, col]]
  result[row]![col] = color
  let head = 0

  while (head < queue.length) {
    const [r, c] = queue[head++]!
    for (const [dr, dc] of DIRS) {
      const nr = r + dr
      const nc = c + dc
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue
      if (result[nr]![nc] !== startColor) continue
      result[nr]![nc] = color
      queue.push([nr, nc])
    }
  }

  return result
}

/**
 * Pattern: invert the question. Flood-fill from every 'R' on the
 * border first and mark those as survivors; every 'R' NOT marked is
 * fully enclosed, so it gets captured.
 * Time: O(rows * cols). Space: O(rows * cols).
 */
export function captureRegions(board: string[][]): string[][] {
  const rows = board.length
  if (rows === 0) return []
  const cols = board[0]!.length
  const survivor: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false))

  function bfsFrom(row: number, col: number): void {
    if (survivor[row]![col] || board[row]![col] !== 'R') return
    const queue: [number, number][] = [[row, col]]
    survivor[row]![col] = true
    let head = 0
    while (head < queue.length) {
      const [r, c] = queue[head++]!
      for (const [dr, dc] of DIRS) {
        const nr = r + dr
        const nc = c + dc
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue
        if (survivor[nr]![nc] || board[nr]![nc] !== 'R') continue
        survivor[nr]![nc] = true
        queue.push([nr, nc])
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    bfsFrom(r, 0)
    bfsFrom(r, cols - 1)
  }
  for (let c = 0; c < cols; c++) {
    bfsFrom(0, c)
    bfsFrom(rows - 1, c)
  }

  return board.map((rowCells, r) =>
    rowCells.map((cell, c) => (cell === 'R' && !survivor[r]![c] ? 'C' : cell)),
  )
}

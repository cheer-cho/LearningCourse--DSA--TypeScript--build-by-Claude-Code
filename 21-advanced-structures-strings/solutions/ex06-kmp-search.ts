// Reference solution — ex06
// Pattern: KMP (Knuth-Morris-Pratt). Failure table built in O(m); search in O(n).
// Text pointer never moves backward — total work O(n + m).
// Space: O(m) for the failure table.

export function buildFailureTable(pattern: string): number[] {
  const m = pattern.length
  const table = new Array<number>(m).fill(0)
  let k = 0 // length of current longest border

  for (let i = 1; i < m; i++) {
    // Fall back through borders until we find a match or exhaust all options
    while (k > 0 && pattern[k] !== pattern[i]) {
      k = table[k - 1] ?? 0
    }
    if (pattern[k] === pattern[i]) k++
    table[i] = k
  }

  return table
}

export function kmpFindAll(text: string, pattern: string): number[] {
  const n = text.length
  const m = pattern.length
  if (m === 0 || m > n) return []

  const table = buildFailureTable(pattern)
  const result: number[] = []
  let k = 0 // number of characters matched so far in pattern

  for (let i = 0; i < n; i++) {
    // Fall back on mismatch
    while (k > 0 && pattern[k] !== text[i]) {
      k = table[k - 1] ?? 0
    }
    if (pattern[k] === text[i]) k++

    if (k === m) {
      result.push(i - m + 1)
      // Use failure table to look for overlapping matches
      k = table[k - 1] ?? 0
    }
  }

  return result
}

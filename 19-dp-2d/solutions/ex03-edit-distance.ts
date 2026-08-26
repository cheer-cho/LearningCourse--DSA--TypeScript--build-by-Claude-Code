// Reference solution — ex03

// Wagner-Fischer algorithm.
// State: dp[i][j] = edit distance between a[0..i-1] and b[0..j-1].
// Base cases: dp[0][j] = j (j inserts from empty); dp[i][0] = i (i deletes).
// Recurrence:
//   if a[i-1] === b[j-1]: dp[i][j] = dp[i-1][j-1]      (↖ match — free)
//   else dp[i][j] = 1 + min(
//     dp[i-1][j-1],  // ↖ replace
//     dp[i][j-1],    // ← insert into b side
//     dp[i-1][j]     // ↑ delete from a
//   )
// Order: i from 1..n, j from 1..m. O(n*m) time, O(n*m) space.
export function editDistance(a: string, b: string): number {
  const n = a.length
  const m = b.length

  // dp[i][j]: distance for a[0..i-1] -> b[0..j-1]
  const dp: number[][] = Array.from({ length: n + 1 }, (_, i) => {
    const row = new Array<number>(m + 1).fill(0)
    row[0] = i // delete i chars from a to reach empty
    return row
  })

  // First row: insert j chars into empty a to reach b[0..j-1]
  for (let j = 0; j <= m; j++) {
    dp[0]![j] = j
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (a[i - 1] === b[j - 1]) {
        // ↖ match: no cost
        dp[i]![j] = dp[i - 1]?.[j - 1] ?? 0
      } else {
        const replace = dp[i - 1]?.[j - 1] ?? Infinity  // ↖
        const insert  = dp[i]?.[j - 1] ?? Infinity       // ←
        const del     = dp[i - 1]?.[j] ?? Infinity       // ↑
        dp[i]![j] = 1 + Math.min(replace, insert, del)
      }
    }
  }

  return dp[n]![m] ?? 0
}

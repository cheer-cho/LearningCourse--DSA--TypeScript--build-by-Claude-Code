// Reference solution — ex02

// --- lcsLength ---
// State: dp[i][j] = LCS length of a[0..i-1] and b[0..j-1].
// Choice: match a[i-1] with b[j-1] when equal (extend diagonal), else
//   max of dropping last char of a (dp[i-1][j]) or b (dp[i][j-1]).
// Order: i from 1..n, j from 1..m. O(n*m) time, O(n*m) space.
export function lcsLength(a: string, b: string): number {
  const n = a.length
  const m = b.length
  // dp is (n+1) x (m+1), all initialized to 0
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0))

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i]![j] = (dp[i - 1]?.[j - 1] ?? 0) + 1
      } else {
        dp[i]![j] = Math.max(dp[i - 1]?.[j] ?? 0, dp[i]?.[j - 1] ?? 0)
      }
    }
  }

  return dp[n]![m] ?? 0
}

// --- lcsString ---
// Fill the same table as lcsLength, then backtrack from dp[n][m]:
//   - If a[i-1] === b[j-1]: char is in the LCS; prepend it, move ↖.
//   - Else if dp[i-1][j] >= dp[i][j-1]: move ↑ (dropped a's last char).
//   - Else: move ← (dropped b's last char).
// Collect in reverse then reverse at the end.
// O(n*m) time, O(n*m) space.
export function lcsString(a: string, b: string): string {
  const n = a.length
  const m = b.length
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0))

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i]![j] = (dp[i - 1]?.[j - 1] ?? 0) + 1
      } else {
        dp[i]![j] = Math.max(dp[i - 1]?.[j] ?? 0, dp[i]?.[j - 1] ?? 0)
      }
    }
  }

  // Backtrack
  const chars: string[] = []
  let i = n
  let j = m
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      chars.push(a[i - 1]!)
      i--
      j--
    } else if ((dp[i - 1]?.[j] ?? 0) >= (dp[i]?.[j - 1] ?? 0)) {
      i--
    } else {
      j--
    }
  }

  return chars.reverse().join('')
}

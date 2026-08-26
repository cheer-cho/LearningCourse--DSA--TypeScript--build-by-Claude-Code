// Reference solution — checkpoint 19

// --- bestFeatureSet (0/1 knapsack with reconstruction) ---
// Build full 2-D dp[i][w] table: dp[i][w] = max impact using features 0..i-1
// with budget w. Then backtrack: if dp[i][w] !== dp[i-1][w], item i-1 chosen.
// O(n * budget) time, O(n * budget) space.
export function bestFeatureSet(costs: number[], impacts: number[], budget: number): number[] {
  const n = costs.length
  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    new Array<number>(budget + 1).fill(0)
  )

  for (let i = 1; i <= n; i++) {
    const ci = costs[i - 1]!
    const vi = impacts[i - 1]!
    for (let w = 0; w <= budget; w++) {
      const skip = dp[i - 1]![w]!
      const take = w >= ci ? (dp[i - 1]![w - ci] ?? 0) + vi : -Infinity
      dp[i]![w] = Math.max(skip, take)
    }
  }

  // Backtrack to find chosen items
  const chosen: number[] = []
  let w = budget
  for (let i = n; i >= 1; i--) {
    if (dp[i]![w] !== dp[i - 1]![w]) {
      // Item i-1 was included
      chosen.push(i - 1)
      w -= costs[i - 1]!
    }
  }

  return chosen.sort((a, b) => a - b)
}

// --- sloganSimilarity (edit distance) ---
// Wagner-Fischer: same implementation as ex03.
// O(n * m) time, O(n * m) space.
export function sloganSimilarity(a: string, b: string): number {
  const n = a.length
  const m = b.length
  const dp: number[][] = Array.from({ length: n + 1 }, (_, i) => {
    const row = new Array<number>(m + 1).fill(0)
    row[0] = i
    return row
  })
  for (let j = 0; j <= m; j++) dp[0]![j] = j

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i]![j] = dp[i - 1]?.[j - 1] ?? 0
      } else {
        dp[i]![j] = 1 + Math.min(
          dp[i - 1]?.[j - 1] ?? Infinity,  // replace ↖
          dp[i]?.[j - 1] ?? Infinity,       // insert ←
          dp[i - 1]?.[j] ?? Infinity        // delete ↑
        )
      }
    }
  }
  return dp[n]![m] ?? 0
}

// --- bundleWays (unbounded combination count) ---
// dp[0] = 1; pack sizes outer, order inner (forward) = combinations.
// O(packSizes.length * orderSize) time, O(orderSize) space.
export function bundleWays(packSizes: number[], orderSize: number): number {
  const dp = new Array<number>(orderSize + 1).fill(0)
  dp[0] = 1
  for (const size of packSizes) {
    for (let a = size; a <= orderSize; a++) {
      dp[a] = (dp[a] ?? 0) + (dp[a - size] ?? 0)
    }
  }
  return dp[orderSize] ?? 0
}

// --- isFairSplit (equal partition via subset-sum) ---
// Same as canPartitionEqual from ex04: reduce to subset-sum of total/2.
// O(n * total) time, O(total) space.
export function isFairSplit(workloads: number[]): boolean {
  const total = workloads.reduce((s, n) => s + n, 0)
  if (total % 2 !== 0) return false
  const target = total / 2

  const dp = new Array<boolean>(target + 1).fill(false)
  dp[0] = true

  for (const w of workloads) {
    for (let x = target; x >= w; x--) {
      dp[x] = dp[x]! || (dp[x - w] ?? false)
    }
  }

  return dp[target] ?? false
}

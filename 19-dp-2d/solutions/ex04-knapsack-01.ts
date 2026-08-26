// Reference solution — ex04

// --- maxValue (0/1 knapsack, 1-D reverse) ---
// State: dp[w] = max value achievable with weight budget w.
// Choice: include or exclude each item (at most once).
// Recurrence: for each item i with weight w_i and value v_i,
//   iterate w from capacity down to w_i: dp[w] = max(dp[w], dp[w - w_i] + v_i).
// Reverse iteration ensures item i is used at most once (0/1 constraint).
// O(n * capacity) time, O(capacity) space.
export function maxValue(weights: number[], values: number[], capacity: number): number {
  const dp = new Array<number>(capacity + 1).fill(0)
  for (let i = 0; i < weights.length; i++) {
    const wi = weights[i]!
    const vi = values[i]!
    for (let w = capacity; w >= wi; w--) {
      dp[w] = Math.max(dp[w]!, (dp[w - wi] ?? 0) + vi)
    }
  }
  return dp[capacity] ?? 0
}

// --- canPartitionEqual ---
// Reduction: equal partition ↔ subset-sum to total/2.
//   total must be even; target = total / 2.
//   dp[w] = true if some subset of the items seen so far sums to w.
//   For each num: iterate w from target down to num; dp[w] ||= dp[w - num].
//   The reverse direction enforces 0/1 (each number used at most once).
// O(n * total) time, O(total) space.
export function canPartitionEqual(nums: number[]): boolean {
  const total = nums.reduce((s, n) => s + n, 0)
  if (total % 2 !== 0) return false
  const target = total / 2

  const dp = new Array<boolean>(target + 1).fill(false)
  dp[0] = true

  for (const num of nums) {
    for (let w = target; w >= num; w--) {
      dp[w] = dp[w]! || (dp[w - num] ?? false)
    }
  }

  return dp[target] ?? false
}

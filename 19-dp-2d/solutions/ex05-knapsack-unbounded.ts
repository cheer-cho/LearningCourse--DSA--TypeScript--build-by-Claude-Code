// Reference solution — ex05

// --- countCoinWays (unbounded combination count) ---
// State: dp[a] = number of combination ways to reach amount a.
// Base case: dp[0] = 1 (one way to make 0: take nothing).
// Loop order: coin outer, amount inner (forward).
//   Outer coin loop fixes which coins are "available so far", preventing
//   the same multiset from being counted in multiple orderings.
//   This is the key difference from the permutation variant (amount outer).
// O(coins.length * amount) time, O(amount) space.
export function countCoinWays(coins: number[], amount: number): number {
  const dp = new Array<number>(amount + 1).fill(0)
  dp[0] = 1
  for (const coin of coins) {
    for (let a = coin; a <= amount; a++) {
      dp[a] = (dp[a] ?? 0) + (dp[a - coin] ?? 0)
    }
  }
  return dp[amount] ?? 0
}

// --- maxRibbonValue (rod cutting / unbounded value knapsack) ---
// State: dp[w] = maximum price for a sub-rod of length w.
// Base case: dp[0] = 0.
// Recurrence: for each length l_i with price p_i,
//   dp[w] = max(dp[w], dp[w - l_i] + p_i) for w >= l_i.
// Loop order: lengths outer, capacity inner (forward) → unbounded reuse.
// O(lengths.length * total) time, O(total) space.
export function maxRibbonValue(lengths: number[], prices: number[], total: number): number {
  const dp = new Array<number>(total + 1).fill(0)
  for (let i = 0; i < lengths.length; i++) {
    const len = lengths[i]!
    const price = prices[i]!
    for (let w = len; w <= total; w++) {
      dp[w] = Math.max(dp[w]!, (dp[w - len] ?? 0) + price)
    }
  }
  return dp[total] ?? 0
}

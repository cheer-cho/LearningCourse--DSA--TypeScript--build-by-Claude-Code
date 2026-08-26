// Reference solution — ex06

// --- waysToTarget ---
// Reduction to subset-sum:
//   Let P = subset assigned '+', N = subset assigned '-'.
//   P + N = sum(nums),  P - N = target
//   → 2P = sum + target  →  P = (sum + target) / 2
//   If (sum + target) is odd, or |target| > sum: impossible.
//   Otherwise count 0/1 subsets that sum to P.
//
// dp[w] = number of subsets seen so far that sum to w.
// Base case: dp[0] = 1.
// For each num (0/1): iterate w downward from P to num:
//   dp[w] += dp[w - num].
// Downward iteration enforces each number is used at most once.
//
// Zero handling: a zero num iterates w from 0 down to 0 (only w=0),
//   so dp[0] doubles — each zero doubles the number of ways, correct
//   because +0 and -0 are distinct assignments.
// O(n * P) time, O(P) space.
export function waysToTarget(nums: number[], target: number): number {
  const sum = nums.reduce((s, n) => s + n, 0)
  if (Math.abs(target) > sum) return 0
  const combined = sum + target
  if (combined % 2 !== 0) return 0
  const P = combined / 2

  const dp = new Array<number>(P + 1).fill(0)
  dp[0] = 1

  for (const num of nums) {
    // Iterate downward to enforce 0/1 (each number used at most once)
    for (let w = P; w >= num; w--) {
      dp[w] = (dp[w] ?? 0) + (dp[w - num] ?? 0)
    }
    // Special case: zero items add to dp[0] → handled automatically
    // because the loop runs for w >= 0 (num = 0 → w >= 0, loop body runs at w=0)
    // But the range condition w >= num means w >= 0 which includes w=0.
  }

  return dp[P] ?? 0
}

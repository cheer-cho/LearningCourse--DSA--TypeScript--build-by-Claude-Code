// Reference solution — ex07
//
// Pattern: prefix sum + hash map of prefix-sum frequencies. A subarray
// ending "here" sums to k exactly when an earlier prefix sum equalled
// runningSum - k; the map lets that lookup be O(1).
// Time: O(n) — one pass, O(1) map operations.
// Space: O(n) — the map can hold up to n distinct prefix sums.

export function countSubarraysWithSum(nums: number[], k: number): number {
  const prefixCounts = new Map<number, number>([[0, 1]])
  let runningSum = 0
  let count = 0

  for (const num of nums) {
    runningSum += num
    const needed = runningSum - k
    count += prefixCounts.get(needed) ?? 0
    prefixCounts.set(runningSum, (prefixCounts.get(runningSum) ?? 0) + 1)
  }

  return count
}

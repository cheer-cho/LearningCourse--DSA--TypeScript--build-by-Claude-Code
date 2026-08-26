export function pairSum(nums: number[], target: number): [number, number] | undefined {
  // Pattern: complement lookup. For each value, ask "have I already
  // seen the number that completes this pair?" before recording the
  // current value's index. One pass, one map. Time: O(n). Space: O(n).
  const indexOf = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    if (value === undefined) continue
    const complement = target - value
    const complementIndex = indexOf.get(complement)
    if (complementIndex !== undefined) return [complementIndex, i]
    indexOf.set(value, i)
  }
  return undefined
}

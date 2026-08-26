export function firstUniqueIndex(s: string): number {
  // Pattern: counting map. Pass 1 tallies every character; pass 2 finds
  // the first index whose tally is 1. Two O(n) passes stay O(n) total.
  // Time: O(n). Space: O(k) for k distinct characters.
  const counts = new Map<string, number>()
  for (const ch of s) {
    counts.set(ch, (counts.get(ch) ?? 0) + 1)
  }

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch !== undefined && counts.get(ch) === 1) return i
  }
  return -1
}

export function majorityItem(nums: number[]): number {
  // Pattern: counting map. Tally every value; return the first one
  // whose count clears half the list. Time: O(n). Space: O(n) worst
  // case (every value distinct until the majority element appears).
  const counts = new Map<number, number>()
  const threshold = nums.length / 2
  for (const n of nums) {
    const next = (counts.get(n) ?? 0) + 1
    counts.set(n, next)
    if (next > threshold) return n
  }
  throw new Error('no majority element found')
}

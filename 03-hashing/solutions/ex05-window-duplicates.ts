export function hasNearbyDuplicate(nums: number[], k: number): boolean {
  // Pattern: last-seen-index map. Instead of scanning a literal window
  // of size k, remember each value's most recent index and compare the
  // gap directly. Time: O(n). Space: O(n) — the map holds one entry
  // per distinct value and is never pruned (a bounded-window eviction
  // variant could tighten this to O(min(n, k))).
  const lastSeenAt = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    if (value === undefined) continue
    const previous = lastSeenAt.get(value)
    if (previous !== undefined && i - previous <= k) return true
    lastSeenAt.set(value, i)
  }
  return false
}

export function firstRepeatedWithin(stream: number[], k: number): number | undefined {
  // Same last-seen-index map as hasNearbyDuplicate, returning the
  // offending value at the first hit instead of a boolean.
  // Time: O(n). Space: O(n) — never pruned (see hasNearbyDuplicate).
  const lastSeenAt = new Map<number, number>()
  for (let i = 0; i < stream.length; i++) {
    const value = stream[i]
    if (value === undefined) continue
    const previous = lastSeenAt.get(value)
    if (previous !== undefined && i - previous <= k) return value
    lastSeenAt.set(value, i)
  }
  return undefined
}

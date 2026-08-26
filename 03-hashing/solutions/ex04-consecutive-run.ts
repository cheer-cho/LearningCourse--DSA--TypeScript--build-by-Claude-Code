export function longestConsecutive(nums: number[]): number {
  // Pattern: the set trick. A set gives O(1) membership tests, letting
  // us skip sorting entirely. Only start extending a run from a value
  // with no left-neighbor in the set (a run's true beginning), so the
  // total work across every extension is bounded by n, not n per
  // start. Time: O(n). Space: O(n).
  const values = new Set(nums)
  let longest = 0
  for (const x of values) {
    if (values.has(x - 1)) continue // not a run start — skip it
    let length = 1
    let current = x
    while (values.has(current + 1)) {
      current++
      length++
    }
    if (length > longest) longest = length
  }
  return longest
}

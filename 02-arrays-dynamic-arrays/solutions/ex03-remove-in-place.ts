// Pattern: reader/writer (slow/fast) pointer sweep. The read pointer
// visits every element once; the write pointer only advances when the
// read pointer finds a value worth keeping, so survivors get packed to
// the front in a single left-to-right pass.
// Complexity: O(n) time, O(1) space for both functions.

export function removeValue(nums: number[], value: number): number {
  let write = 0
  for (let read = 0; read < nums.length; read++) {
    const current = nums[read] as number
    if (current !== value) {
      nums[write] = current
      write += 1
    }
  }
  return write
}

export function dedupeSorted(nums: number[]): number {
  if (nums.length === 0) return 0
  let write = 1
  for (let read = 1; read < nums.length; read++) {
    const current = nums[read] as number
    if (current !== nums[write - 1]) {
      nums[write] = current
      write += 1
    }
  }
  return write
}

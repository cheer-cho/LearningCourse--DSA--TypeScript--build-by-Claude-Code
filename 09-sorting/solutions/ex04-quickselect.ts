// Reference solution — ex04

/**
 * Quickselect. Pattern: quick sort's partition step, but recurse into
 * only the side that must contain the target rank — throw the other
 * side away instead of sorting it. The kth largest is the element at
 * ascending index (n - k).
 * Time: O(n) average (the search range shrinks geometrically).
 * Space: O(n) for the working copy.
 */
export function kthLargest(nums: number[], k: number): number {
  if (nums.length === 0) throw new Error('nums must not be empty')
  if (k < 1 || k > nums.length) {
    throw new Error(`k must be between 1 and ${nums.length}, got ${k}`)
  }

  const arr = nums.slice()
  const targetIndex = arr.length - k // ascending index of the kth largest
  let lo = 0
  let hi = arr.length - 1

  while (true) {
    if (lo === hi) return arr[lo]!
    const p = partition(arr, lo, hi)
    if (p === targetIndex) return arr[p]!
    if (p < targetIndex) lo = p + 1
    else hi = p - 1
  }
}

function partition(nums: number[], lo: number, hi: number): number {
  const pivotIndex = lo + Math.floor(Math.random() * (hi - lo + 1))
  swap(nums, pivotIndex, hi)
  const pivot = nums[hi]!
  let i = lo
  for (let j = lo; j < hi; j++) {
    if (nums[j]! < pivot) {
      swap(nums, i, j)
      i++
    }
  }
  swap(nums, i, hi)
  return i
}

function swap(nums: number[], i: number, j: number): void {
  const tmp = nums[i]!
  nums[i] = nums[j]!
  nums[j] = tmp
}

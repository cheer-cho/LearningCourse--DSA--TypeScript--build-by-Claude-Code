// Pattern: opposite-ends two-pointer swap for reverse; that same swap
// reused three times (reverse all, reverse first k, reverse the rest)
// implements rotation without a second array — reversing the whole
// array flips both halves' internal order AND swaps which half comes
// first, then two more reversals fix each half's internal order back.
// Complexity: O(n) time, O(1) space for both functions.

export function reverse(nums: number[]): void {
  let lo = 0
  let hi = nums.length - 1
  while (lo < hi) {
    const tmp = nums[lo] as number
    nums[lo] = nums[hi] as number
    nums[hi] = tmp
    lo += 1
    hi -= 1
  }
}

function reverseRange(nums: number[], start: number, end: number): void {
  let lo = start
  let hi = end
  while (lo < hi) {
    const tmp = nums[lo] as number
    nums[lo] = nums[hi] as number
    nums[hi] = tmp
    lo += 1
    hi -= 1
  }
}

export function rotateRight(nums: number[], k: number): void {
  const n = nums.length
  if (n === 0) return
  const shift = ((k % n) + n) % n
  if (shift === 0) return
  reverse(nums)
  reverseRange(nums, 0, shift - 1)
  reverseRange(nums, shift, n - 1)
}

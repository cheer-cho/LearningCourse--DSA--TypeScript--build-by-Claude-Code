// Reference solution — ex03

// Pattern: same-direction two pointers (reader/writer) — copy every
// non-zero forward, then fill the tail with zeroes.
// Target: O(n) time, O(1) space, one pass over the writer region.
export function moveZeroes(nums: number[]): void {
  let writer = 0

  for (let reader = 0; reader < nums.length; reader++) {
    if (nums[reader] !== 0) {
      nums[writer] = nums[reader]!
      writer++
    }
  }

  for (let i = writer; i < nums.length; i++) {
    nums[i] = 0
  }
}

// Pattern: opposite-ends two pointers, swap-in-place when the left is
// odd and the right is even.
// Target: O(n) time, O(1) space.
export function partitionEvenOdd(nums: number[]): void {
  let l = 0
  let r = nums.length - 1

  while (l < r) {
    const isLeftEven = nums[l]! % 2 === 0
    const isRightEven = nums[r]! % 2 === 0

    if (isLeftEven) {
      l++
    } else if (!isRightEven) {
      r--
    } else {
      const tmp = nums[l]!
      nums[l] = nums[r]!
      nums[r] = tmp
      l++
      r--
    }
  }
}

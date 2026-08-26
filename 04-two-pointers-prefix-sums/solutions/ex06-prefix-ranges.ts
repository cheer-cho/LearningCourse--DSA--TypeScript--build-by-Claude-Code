// Reference solution — ex06

// Pattern: prefix sums. prefix[0] = 0 is the empty-range base case;
// each step folds in one more element.
// Target: O(n) time, O(n) space.
export function buildPrefix(nums: number[]): number[] {
  const prefix = new Array<number>(nums.length + 1)
  prefix[0] = 0
  for (let k = 1; k <= nums.length; k++) {
    prefix[k] = prefix[k - 1]! + nums[k - 1]!
  }
  return prefix
}

export class RangeSum {
  private readonly prefix: number[]

  // Pattern: prefix sums precomputed once so every query is a single
  // subtraction.
  // Target: build O(n) time/space; query O(1) time.
  constructor(nums: number[]) {
    this.prefix = buildPrefix(nums)
  }

  query(i: number, j: number): number {
    return this.prefix[j + 1]! - this.prefix[i]!
  }
}

// Pattern: prefix sums via a running total, no array needed. Track
// the left-side running sum; the right side is always
// total - leftSum - nums[k].
// Target: O(n) time, O(1) extra space.
export function pivotIndex(nums: number[]): number {
  const total = nums.reduce((sum, value) => sum + value, 0)
  let leftSum = 0

  for (let k = 0; k < nums.length; k++) {
    const rightSum = total - leftSum - nums[k]!
    if (leftSum === rightSum) return k
    leftSum += nums[k]!
  }

  return -1
}

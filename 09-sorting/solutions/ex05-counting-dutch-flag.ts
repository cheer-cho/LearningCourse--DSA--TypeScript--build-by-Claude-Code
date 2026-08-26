// Reference solution — ex05

/**
 * Counting sort. Pattern: count occurrences of each value, turn
 * counts into prefix-sum starting positions, then place each item (in
 * original order) into its value's next free slot. Stable because
 * equal-value items are placed in the order they were visited, and
 * each placement advances that value's slot by one.
 * Time: O(n + maxValue). Space: O(n + maxValue).
 */
export function countingSort<T>(items: T[], getValue: (item: T) => number, maxValue: number): T[] {
  const counts = new Array<number>(maxValue + 1).fill(0)
  for (const item of items) {
    counts[getValue(item)]!++
  }

  const starts = new Array<number>(maxValue + 1).fill(0)
  for (let v = 1; v <= maxValue; v++) {
    starts[v] = starts[v - 1]! + counts[v - 1]!
  }

  const result = new Array<T>(items.length)
  for (const item of items) {
    const v = getValue(item)
    result[starts[v]!] = item
    starts[v]!++
  }
  return result
}

/**
 * Dutch national flag three-way partition. Pattern: three pointers —
 * everything before `low` is 0, everything from `low` to `mid - 1` is
 * 1, everything after `high` is 2; `mid` scans the unknown middle.
 * Time: O(n), one pass. Space: O(1).
 */
export function sortColors(nums: number[]): void {
  let low = 0
  let mid = 0
  let high = nums.length - 1

  while (mid <= high) {
    const v = nums[mid]!
    if (v === 0) {
      swap(nums, low, mid)
      low++
      mid++
    } else if (v === 1) {
      mid++
    } else {
      swap(nums, mid, high)
      high--
    }
  }
}

function swap(nums: number[], i: number, j: number): void {
  const tmp = nums[i]!
  nums[i] = nums[j]!
  nums[j] = tmp
}

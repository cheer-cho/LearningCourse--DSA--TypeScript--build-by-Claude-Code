// Reference solution — ex01
//
// Pattern: opposite-ends two pointers. Because nums is sorted, moving
// the low pointer up only ever increases the sum and moving the high
// pointer down only ever decreases it — so each comparison eliminates
// one whole pointer position for good, never revisiting it.
// Time: O(n) — l and r together take at most n steps.
// Space: O(1).

export function pairSumSorted(nums: number[], target: number): [number, number] | null {
  let l = 0
  let r = nums.length - 1

  while (l < r) {
    const sum = nums[l]! + nums[r]!
    if (sum === target) return [l, r]
    if (sum > target) {
      r--
    } else {
      l++
    }
  }

  return null
}

// Reference solution — ex05
//
// Pattern: opposite-ends two pointers, always moving the shorter line.
// Capacity is capped by the shorter side and width only shrinks as the
// pointers close in, so keeping the shorter line can never beat the
// current best — moving it is the only move that can still improve.
// Time: O(n) — each step moves one pointer, at most n steps total.
// Space: O(1).

export function maxContainer(heights: number[]): number {
  let l = 0
  let r = heights.length - 1
  let best = 0

  while (l < r) {
    const width = r - l
    const shorter = Math.min(heights[l]!, heights[r]!)
    best = Math.max(best, shorter * width)

    if (heights[l]! < heights[r]!) {
      l++
    } else {
      r--
    }
  }

  return best
}

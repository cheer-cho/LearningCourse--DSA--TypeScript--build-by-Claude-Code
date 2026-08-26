import { describe, expect, it } from 'vitest'
import { lisLength, lisLengthFast } from './ex07-longest-rising'

// Shared test vectors used by both implementations.
const cases: Array<[number[], number]> = [
  [[], 0],
  [[5], 1],
  [[3, 1, 2], 2],
  [[7, 7, 7, 7], 1], // strictly increasing: no ties
  [[0, 1, 0, 3, 2, 3], 4],
  [[10, 9, 2, 5, 3, 7, 101, 18], 4],
  [[1, 3, 6, 7, 9, 4, 10, 5, 6], 6],
  [[-3, -2, -1, 0, 1], 5], // all-ascending with negatives
  [[5, 4, 3, 2, 1], 1], // strictly descending — every element is its own LIS
]

describe('ex18/ex07 — lisLength (O(n²) DP)', () => {
  for (const [nums, expected] of cases) {
    it(`lisLength(${JSON.stringify(nums)}) → ${expected}`, () => {
      expect(lisLength(nums)).toBe(expected)
    })
  }

  it('handles duplicates: strictly increasing only', () => {
    expect(lisLength([1, 2, 2, 3])).toBe(3) // 1, 2, 3 — not 1, 2, 2, 3
  })

  it('handles a larger mixed sequence', () => {
    expect(lisLength([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12])).toBe(6)
  })
})

describe('ex18/ex07 — lisLengthFast (O(n log n))', () => {
  for (const [nums, expected] of cases) {
    it(`lisLengthFast(${JSON.stringify(nums)}) → ${expected}`, () => {
      expect(lisLengthFast(nums)).toBe(expected)
    })
  }

  it('handles duplicates: strictly increasing only', () => {
    expect(lisLengthFast([1, 2, 2, 3])).toBe(3)
  })

  it('handles a larger mixed sequence', () => {
    expect(lisLengthFast([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12])).toBe(6)
  })

  it('efficiency: lisLength is too slow but lisLengthFast handles n = 100_000', () => {
    // A descending sequence forces the O(n²) DP to do O(n²) inner iterations.
    // The O(n log n) tails approach scales cleanly.
    const n = 100_000
    const descending = Array.from({ length: n }, (_, i) => n - i)
    // Both should still give correct answer for the degenerate case.
    expect(lisLengthFast(descending)).toBe(1)

    // A long ascending sequence — O(n²) would be sluggish at 100k.
    const ascending = Array.from({ length: n }, (_, i) => i)
    expect(lisLengthFast(ascending)).toBe(n)
  })
})

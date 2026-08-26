import { describe, expect, it } from 'vitest'
import { buildPrefix, pivotIndex, RangeSum } from './ex06-prefix-ranges'

describe('ex04/ex06 — buildPrefix', () => {
  it('builds a prefix array one longer than the input', () => {
    expect(buildPrefix([3, 1, 4, 1, 5])).toEqual([0, 3, 4, 8, 9, 14])
  })

  it('handles an empty array', () => {
    expect(buildPrefix([])).toEqual([0])
  })

  it('handles negative numbers', () => {
    expect(buildPrefix([3, -1, -4, 1])).toEqual([0, 3, 2, -2, -1])
  })
})

describe('ex04/ex06 — RangeSum', () => {
  it('answers inclusive range queries', () => {
    const rs = new RangeSum([3, 1, 4, 1, 5, 9, 2])
    expect(rs.query(2, 4)).toBe(10)
    expect(rs.query(0, 0)).toBe(3)
    expect(rs.query(0, 6)).toBe(25)
  })

  it('handles a single-element array', () => {
    const rs = new RangeSum([42])
    expect(rs.query(0, 0)).toBe(42)
  })

  it('handles negative numbers', () => {
    const rs = new RangeSum([-2, 4, -6, 8])
    expect(rs.query(0, 2)).toBe(-4)
    expect(rs.query(1, 3)).toBe(6)
  })

  it('efficiency: many queries against a large array return correct sums', () => {
    const n = 100_000
    const nums = new Array<number>(n).fill(1)
    const rs = new RangeSum(nums)

    // Every inclusive range (i, j) of all-1s sums to (j - i + 1). A
    // naive re-sum-the-slice approach would be O(n) per query -- far
    // too slow for 100_000 queries at this size; O(1) queries breeze
    // through, and every one is checked for exact correctness.
    for (let i = 0; i < n; i += 2) {
      const j = n - 1 - (i % 4)
      if (j <= i) continue
      expect(rs.query(i, j)).toBe(j - i + 1)
    }
  })
})

describe('ex04/ex06 — pivotIndex', () => {
  it('finds the classic example pivot', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3)
  })

  it('returns -1 when no pivot exists', () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1)
  })

  it('returns the leftmost pivot when the first element qualifies', () => {
    expect(pivotIndex([0, 1, -1])).toBe(0) // left sum 0, right sum 1 + -1 = 0
  })

  it('handles a single-element array (both sides sum to 0)', () => {
    expect(pivotIndex([5])).toBe(0)
  })

  it('handles an empty array', () => {
    expect(pivotIndex([])).toBe(-1)
  })
})

import { describe, expect, it } from 'vitest'
import { pairSumSorted } from './ex01-sorted-pair-target'

describe('ex04/ex01 — pairSumSorted', () => {
  it('finds a pair in the middle of the array', () => {
    expect(pairSumSorted([1, 2, 4, 7, 11], 9)).toEqual([1, 3])
  })

  it('finds a pair at the two ends', () => {
    expect(pairSumSorted([-3, 1, 2, 5, 8], 5)).toEqual([0, 4])
  })

  it('returns null when no pair sums to target', () => {
    expect(pairSumSorted([1, 2, 3], 100)).toBeNull()
  })

  it('handles an array too short to have a pair', () => {
    expect(pairSumSorted([], 0)).toBeNull()
    expect(pairSumSorted([5], 5)).toBeNull()
  })

  it('handles duplicate values that form the pair', () => {
    expect(pairSumSorted([1, 1, 2, 3], 2)).toEqual([0, 1])
  })

  it('handles negative numbers', () => {
    expect(pairSumSorted([-7, -3, 0, 4, 10], 3)).toEqual([0, 4])
  })

  it('efficiency: resolves a large array without quadratic blowup', () => {
    // An O(n^2) nested-loop scan would be ~4*10^10 comparisons here.
    // The two-pointer approach touches each index a constant number
    // of times, so this must still finish near-instantly. The target
    // is out of range, forcing the pointers to scan the full array.
    const n = 200_000
    const nums = Array.from({ length: n }, (_, i) => i)
    expect(pairSumSorted(nums, 5_000_000)).toBeNull()
  })
})

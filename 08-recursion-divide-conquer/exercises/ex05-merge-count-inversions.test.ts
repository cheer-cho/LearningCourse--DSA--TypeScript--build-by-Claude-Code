import { describe, expect, it } from 'vitest'
import { countInversions } from './ex05-merge-count-inversions'

describe('ex08/ex05 — countInversions', () => {
  it('handles empty and single-element arrays', () => {
    expect(countInversions([])).toBe(0)
    expect(countInversions([1])).toBe(0)
  })

  it('finds zero inversions in a sorted array', () => {
    expect(countInversions([1, 2, 3, 4, 5])).toBe(0)
  })

  it('counts every pair in a fully reversed array', () => {
    expect(countInversions([3, 2, 1])).toBe(3)
    expect(countInversions([5, 4, 3, 2, 1])).toBe(10)
  })

  it('handles duplicates (equal values are not inversions)', () => {
    expect(countInversions([1, 1, 1])).toBe(0)
    expect(countInversions([2, 2, 1, 1])).toBe(4)
  })

  it('handles negatives and mixed values', () => {
    expect(countInversions([2, 4, 1, 3, 5])).toBe(3)
    expect(countInversions([-1, -5, 3, -2])).toBe(3)
  })

  it('handles a larger hand-checkable case', () => {
    expect(countInversions([8, 4, 2, 1])).toBe(6)
  })

  it('stays fast on a large reverse-sorted array where O(n^2) would be infeasible', () => {
    const n = 100_000
    const nums = Array.from({ length: n }, (_, i) => n - i)
    expect(countInversions(nums)).toBe((n * (n - 1)) / 2)
  }, 5000)
})

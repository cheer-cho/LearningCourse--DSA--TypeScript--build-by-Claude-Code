import { describe, expect, it } from 'vitest'
import { minInRotated, searchRotated } from './ex03-rotated-search'

describe('ex10/ex03 — minInRotated', () => {
  it('finds the minimum past the rotation point', () => {
    expect(minInRotated([4, 5, 6, 7, 0, 1, 2])).toBe(0)
  })

  it('handles rotation by 0 (fully sorted)', () => {
    expect(minInRotated([1, 2, 3, 4, 5])).toBe(1)
  })

  it('handles a two-element array', () => {
    expect(minInRotated([2, 1])).toBe(1)
    expect(minInRotated([1, 2])).toBe(1)
  })

  it('handles a single-element array', () => {
    expect(minInRotated([9])).toBe(9)
  })

  it('handles rotation by n - 1 (minimum at the very end)', () => {
    expect(minInRotated([2, 3, 4, 5, 1])).toBe(1)
  })
})

describe('ex10/ex03 — searchRotated', () => {
  it('finds a target after the rotation point', () => {
    expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4)
  })

  it('finds a target before the rotation point', () => {
    expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 6)).toBe(2)
  })

  it('returns -1 when absent', () => {
    expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1)
  })

  it('handles rotation by 0 (fully sorted)', () => {
    expect(searchRotated([1, 2, 3, 4, 5], 3)).toBe(2)
    expect(searchRotated([1, 2, 3, 4, 5], 6)).toBe(-1)
  })

  it('handles a single-element array', () => {
    expect(searchRotated([9], 9)).toBe(0)
    expect(searchRotated([9], 1)).toBe(-1)
  })

  it('handles a two-element array both ways', () => {
    expect(searchRotated([2, 1], 1)).toBe(1)
    expect(searchRotated([2, 1], 2)).toBe(0)
  })

  it('finds the pivot value itself', () => {
    expect(searchRotated([6, 7, 1, 2, 3, 4, 5], 1)).toBe(2)
  })

  it('stays O(log n) on a huge rotated array', () => {
    const n = 500_000
    const pivot = 123_456
    // ascending 0..n-1, rotated left by `pivot`
    const nums = Array.from({ length: n }, (_, i) => (i + pivot) % n)
    expect(searchRotated(nums, 42)).toBe((42 - pivot + n) % n)
    expect(minInRotated(nums)).toBe(0)
  })
})

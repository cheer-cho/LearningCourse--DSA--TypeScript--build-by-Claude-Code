import { describe, expect, it } from 'vitest'
import { shortestSubarrayAtLeast } from './ex05-smallest-window-sum'

describe('05/ex05 — smallest window sum', () => {
  it('finds the classic shortest-reaching window', () => {
    expect(shortestSubarrayAtLeast([2, 3, 1, 2, 4, 3], 7)).toBe(2)
  })

  it('returns 0 when the target is unreachable', () => {
    expect(shortestSubarrayAtLeast([1, 1, 1], 10)).toBe(0)
  })

  it('handles a single element already meeting the target', () => {
    expect(shortestSubarrayAtLeast([10], 5)).toBe(1)
  })

  it('returns 0 for an empty array', () => {
    expect(shortestSubarrayAtLeast([], 1)).toBe(0)
  })

  it('handles a target of 0 (empty-ish window still needs length >= 1)', () => {
    expect(shortestSubarrayAtLeast([1, 2, 3], 0)).toBe(1)
  })

  it('handles zeros mixed with positives', () => {
    expect(shortestSubarrayAtLeast([0, 0, 4, 0, 5], 5)).toBe(1)
  })

  it('requires the whole array when only the full sum suffices', () => {
    expect(shortestSubarrayAtLeast([1, 1, 1, 1], 4)).toBe(4)
  })

  it('efficiency: n = 200_000 completes and is correct', () => {
    const n = 200_000
    const nums = Array.from({ length: n }, () => 1)
    // Sum of the whole array is n; ask for a target only reachable by a
    // window of exactly n / 2 elements.
    expect(shortestSubarrayAtLeast(nums, n / 2)).toBe(n / 2)
  })
})

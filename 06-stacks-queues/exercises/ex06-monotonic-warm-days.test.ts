import { describe, expect, it } from 'vitest'
import { daysUntilWarmer, nextGreater } from './ex06-monotonic-warm-days'

describe('ex06/ex06 — daysUntilWarmer', () => {
  it('returns [] for empty input', () => {
    expect(daysUntilWarmer([])).toEqual([])
  })

  it('matches the worked example from the lesson', () => {
    expect(daysUntilWarmer([73, 74, 75, 71, 69, 72])).toEqual([1, 1, 0, 2, 1, 0])
  })

  it('returns all 0s for a strictly decreasing sequence', () => {
    expect(daysUntilWarmer([5, 4, 3, 2, 1])).toEqual([0, 0, 0, 0, 0])
  })

  it('handles a single element', () => {
    expect(daysUntilWarmer([50])).toEqual([0])
  })

  it('handles all-equal temperatures (never strictly warmer)', () => {
    expect(daysUntilWarmer([60, 60, 60])).toEqual([0, 0, 0])
  })

  it('handles a strictly increasing sequence', () => {
    expect(daysUntilWarmer([1, 2, 3, 4])).toEqual([1, 1, 1, 0])
  })

  it('stays fast on a 200_000-element worst-case (monotonically decreasing) input', () => {
    // Efficiency test: worst case for a naive O(n^2) scan-right approach —
    // nothing is ever warmer, so every element would scan all the way to
    // the end. A monotonic stack still finishes in O(n).
    const n = 200_000
    const temps = Array.from({ length: n }, (_, i) => n - i) // strictly decreasing
    expect(daysUntilWarmer(temps)).toEqual(new Array(n).fill(0))
  })
})

describe('ex06/ex06 — nextGreater', () => {
  it('returns [] for empty input', () => {
    expect(nextGreater([])).toEqual([])
  })

  it('finds the next strictly greater element', () => {
    expect(nextGreater([2, 1, 2, 4, 3])).toEqual([4, 2, 4, -1, -1])
  })

  it('returns -1 for a strictly decreasing sequence', () => {
    expect(nextGreater([9, 7, 5, 3])).toEqual([-1, -1, -1, -1])
  })

  it('does not treat an equal value as "greater"', () => {
    expect(nextGreater([3, 3, 3])).toEqual([-1, -1, -1])
  })

  it('handles negative numbers', () => {
    expect(nextGreater([-1, -3, -2, -5])).toEqual([-1, -2, -1, -1])
  })

  it('handles a single element', () => {
    expect(nextGreater([7])).toEqual([-1])
  })

  it('stays fast on a 200_000-element worst-case (monotonically decreasing) input', () => {
    const n = 200_000
    const input = Array.from({ length: n }, (_, i) => n - i) // strictly decreasing
    const result = nextGreater(input)
    expect(result.length).toBe(n)
    expect(result.every((v) => v === -1)).toBe(true)
  })
})

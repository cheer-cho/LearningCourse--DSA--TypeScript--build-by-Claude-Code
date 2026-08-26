import { describe, expect, it } from 'vitest'
import { largestRectangle } from './ex07-histogram-max-rect'

describe('ex06/ex07 — largestRectangle', () => {
  it('returns 0 for an empty histogram', () => {
    expect(largestRectangle([])).toBe(0)
  })

  it('returns the height for a single bar', () => {
    expect(largestRectangle([7])).toBe(7)
  })

  it('matches the worked example from the docstring', () => {
    expect(largestRectangle([2, 1, 5, 6, 2, 3])).toBe(10)
  })

  it('handles all-equal heights (full-width rectangle wins)', () => {
    expect(largestRectangle([4, 4, 4, 4])).toBe(16)
  })

  it('handles a strictly increasing skyline', () => {
    expect(largestRectangle([1, 2, 3, 4, 5])).toBe(9) // heights 3,4,5 over width 3
  })

  it('handles a strictly decreasing skyline', () => {
    expect(largestRectangle([5, 4, 3, 2, 1])).toBe(9) // mirror of the above
  })

  it('handles a single very tall spike among short bars', () => {
    expect(largestRectangle([1, 1, 100, 1, 1])).toBe(100)
  })

  it('handles a bar of height 0 breaking a run', () => {
    expect(largestRectangle([2, 0, 2])).toBe(2)
  })

  it('stays fast on a 200_000-bar increasing histogram (worst case for the stack)', () => {
    const n = 200_000
    const heights = Array.from({ length: n }, (_, i) => i + 1) // strictly increasing

    // Independent oracle (not the algorithm under test): for this exact
    // input, any width-w rectangle is bounded by the shortest of its w
    // rightmost bars, height (n - w + 1), so its area is w * (n - w + 1).
    // Take the best width by brute-force scan over w — O(n), unrelated
    // logic to the monotonic-stack solution.
    let expected = 0
    for (let w = 1; w <= n; w++) {
      expected = Math.max(expected, w * (n - w + 1))
    }

    expect(largestRectangle(heights)).toBe(expected)
  })
})

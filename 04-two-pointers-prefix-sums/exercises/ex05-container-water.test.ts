import { describe, expect, it } from 'vitest'
import { maxContainer } from './ex05-container-water'

describe('ex04/ex05 — maxContainer', () => {
  it('finds the classic example answer', () => {
    expect(maxContainer([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
  })

  it('handles the minimum size input', () => {
    expect(maxContainer([1, 1])).toBe(1)
  })

  it('picks the two tallest ends over a taller-but-narrower middle pair', () => {
    expect(maxContainer([1, 2, 1])).toBe(2)
  })

  it('handles all-equal heights', () => {
    expect(maxContainer([5, 5, 5, 5, 5])).toBe(20) // width 4 * height 5
  })

  it('handles a strictly increasing profile', () => {
    expect(maxContainer([1, 2, 3, 4, 5])).toBe(6) // lines at index 1 and 4: min(2,5)*3
  })

  it('handles zero-height lines', () => {
    expect(maxContainer([0, 0, 0])).toBe(0)
  })

  it('efficiency: resolves a large profile without quadratic blowup', () => {
    // Constant height -> the best pair is always the two ends.
    // An O(n^2) all-pairs scan would be ~4*10^10 comparisons here.
    const n = 200_000
    const heights = new Array<number>(n).fill(5)
    expect(maxContainer(heights)).toBe(5 * (n - 1))
  })
})

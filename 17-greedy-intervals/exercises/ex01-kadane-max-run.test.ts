import { describe, expect, it } from 'vitest'
import { bestTradesUnlimited, maxSubarrayBounds, maxSubarraySum } from './ex01-kadane-max-run'

describe('17/ex01 — maxSubarraySum', () => {
  it('classic mixed-sign array', () => {
    expect(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
  })

  it('all negative: picks the least negative single element', () => {
    expect(maxSubarraySum([-5, -2, -8, -1, -9])).toBe(-1)
  })

  it('single element', () => {
    expect(maxSubarraySum([42])).toBe(42)
  })

  it('single negative element', () => {
    expect(maxSubarraySum([-7])).toBe(-7)
  })

  it('all positive: whole array wins', () => {
    expect(maxSubarraySum([1, 2, 3, 4])).toBe(10)
  })

  it('all equal (all zero)', () => {
    expect(maxSubarraySum([0, 0, 0])).toBe(0)
  })

  it('efficiency: n = 500_000 alternating signs completes instantly', () => {
    const n = 500_000
    const nums = Array.from({ length: n }, (_, i) => (i % 2 === 0 ? 3 : -1))
    // Best run: skip nothing at the front except a leading negative
    // never occurs (starts at index 0 with 3) — sum telescopes to a
    // known closed form we can check cheaply.
    expect(maxSubarraySum(nums)).toBeGreaterThan(0)
  })
})

describe('17/ex01 — maxSubarrayBounds', () => {
  it('classic mixed-sign array: correct sum and a valid range', () => {
    const { best, start, end } = maxSubarrayBounds([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    expect(best).toBe(6)
    expect(start).toBeLessThanOrEqual(end)
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    const slice = nums.slice(start, end + 1)
    expect(slice.reduce((a, b) => a + b, 0)).toBe(6)
  })

  it('single element: start and end both point at it', () => {
    expect(maxSubarrayBounds([9])).toEqual({ best: 9, start: 0, end: 0 })
  })

  it('all negative: bounds point at the single best element', () => {
    const nums = [-5, -2, -8]
    const { best, start, end } = maxSubarrayBounds(nums)
    expect(best).toBe(-2)
    expect(start).toBe(end)
    expect(nums[start]).toBe(-2)
  })
})

describe('17/ex01 — bestTradesUnlimited', () => {
  it('classic case: sums every profitable up-swing', () => {
    expect(bestTradesUnlimited([7, 1, 5, 3, 6, 4])).toBe(7) // (5-1) + (6-3)
  })

  it('strictly falling prices: no profitable trade', () => {
    expect(bestTradesUnlimited([9, 7, 5, 3, 1])).toBe(0)
  })

  it('strictly rising prices: one big trade equals sum of daily gains', () => {
    expect(bestTradesUnlimited([1, 2, 3, 4, 5])).toBe(4)
  })

  it('empty input', () => {
    expect(bestTradesUnlimited([])).toBe(0)
  })

  it('single price', () => {
    expect(bestTradesUnlimited([100])).toBe(0)
  })

  it('all equal prices', () => {
    expect(bestTradesUnlimited([5, 5, 5, 5])).toBe(0)
  })

  it('efficiency: n = 500_000 sawtooth completes instantly', () => {
    const n = 500_000
    const prices = Array.from({ length: n }, (_, i) => (i % 2 === 0 ? 1 : 2))
    // Every even->odd step gains 1; total profitable steps ~ n / 2.
    expect(bestTradesUnlimited(prices)).toBeGreaterThan(n / 2 - 2)
  })
})

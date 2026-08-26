import { describe, expect, it } from 'vitest'
import { minRate } from './ex04-rate-on-answer'

describe('ex10/ex04 — minRate', () => {
  it('matches the classic worked example', () => {
    expect(minRate([3, 6, 7, 11], 8)).toBe(4)
  })

  it('needs the fastest possible rate when hours are tight', () => {
    expect(minRate([30, 11, 23, 4, 20], 5)).toBe(30)
  })

  it('needs only rate 1 when hours are generous', () => {
    expect(minRate([1, 1, 1], 3)).toBe(1)
  })

  it('handles a single pile', () => {
    expect(minRate([10], 2)).toBe(5)
    expect(minRate([10], 10)).toBe(1)
    expect(minRate([10], 1)).toBe(10)
  })

  it('handles all-equal piles', () => {
    expect(minRate([5, 5, 5, 5], 4)).toBe(5)
    expect(minRate([5, 5, 5, 5], 8)).toBe(3)
  })

  it('stays fast when the rate search range is huge', () => {
    // naive "try r = 1, 2, 3, ..." would take ~10^9 iterations here
    const piles = Array.from({ length: 1000 }, () => 1_000_000_000)
    expect(minRate(piles, 2000)).toBe(500_000_000)
  })
})

import { describe, expect, it } from 'vitest'
import { maxProfit } from './ex02-best-trade'

describe('05/ex02 — best trade', () => {
  it('finds the classic buy-low-sell-high pair', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  })

  it('returns 0 for strictly falling prices', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })

  it('returns 0 for an empty series', () => {
    expect(maxProfit([])).toBe(0)
  })

  it('returns 0 for a single price', () => {
    expect(maxProfit([5])).toBe(0)
  })

  it('handles a rebound after the low (best buy must come before sell)', () => {
    expect(maxProfit([3, 8, 1, 9])).toBe(8) // buy 1, sell 9, not 8 -> 1 twice
  })

  it('handles all-equal prices', () => {
    expect(maxProfit([4, 4, 4, 4])).toBe(0)
  })

  it('handles strictly rising prices (buy day 1, sell last day)', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
  })

  it('efficiency: n = 300_000 completes and is correct', () => {
    const n = 300_000
    const mid = Math.floor(n / 2)
    // V-shape: falls to 0 at `mid`, then rises. Best trade: buy at the
    // trough (price 0, at `mid`), sell at the last (highest) day.
    const prices = Array.from({ length: n }, (_, i) => Math.abs(i - mid))
    expect(maxProfit(prices)).toBe(n - 1 - mid)
  })
})

import { describe, expect, it } from 'vitest'
import { minCoins } from './ex04-coin-min'

describe('ex18/ex04 — minCoins', () => {
  it('handles amount 0 (no coins needed)', () => {
    expect(minCoins([1, 2, 5], 0)).toBe(0)
  })

  it('finds the classic minimum for a standard coin set', () => {
    expect(minCoins([1, 2, 5], 11)).toBe(3) // 5 + 5 + 1
  })

  it('reports -1 when the amount is impossible to make', () => {
    expect(minCoins([2], 3)).toBe(-1)
  })

  it('reports -1 when there are no coins at all', () => {
    expect(minCoins([], 7)).toBe(-1)
  })

  it('beats the greedy biggest-coin-first strategy', () => {
    // Greedy: 4 + 1 + 1 = 3 coins. Optimal: 3 + 3 = 2 coins.
    expect(minCoins([1, 3, 4], 6)).toBe(2)
  })

  it('uses a single large coin when it fits exactly', () => {
    expect(minCoins([1, 5, 10, 25], 25)).toBe(1)
  })

  it('handles a coin equal to the amount', () => {
    expect(minCoins([7], 7)).toBe(1)
  })

  it('stays fast and correct for a large amount with an awkward coin set', () => {
    // O(n^2)-ish backtracking over every combination would never finish
    // at this scale; the DP table is amount * coins.length work.
    const result = minCoins([1, 7, 11, 19, 37], 10_000)
    expect(result).toBeGreaterThan(0)
    expect(result).toBeLessThan(10_000) // strictly better than all-ones
  })
})

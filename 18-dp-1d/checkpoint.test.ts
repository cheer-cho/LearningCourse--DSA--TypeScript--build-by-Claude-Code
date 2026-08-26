import { describe, expect, it } from 'vitest'
import { longestGrowthStreak, maxEarnings, minGearCost, waysToFill } from './checkpoint'

describe('checkpoint18 — maxEarnings', () => {
  it('handles no days', () => {
    expect(maxEarnings([])).toBe(0)
  })

  it('handles a single day', () => {
    expect(maxEarnings([7])).toBe(7)
  })

  it('picks the better of two adjacent days', () => {
    expect(maxEarnings([3, 10])).toBe(10)
  })

  it('finds the optimal non-adjacent selection', () => {
    expect(maxEarnings([3, 10, 3, 1, 2])).toBe(12) // day 1 + day 3 (0-indexed: 10 + 2 = 12? No: 3+3+2=8, 10+2=12, 10+1=11, pick 10+2=12)
  })

  it('handles all equal pay days', () => {
    expect(maxEarnings([5, 5, 5, 5])).toBe(10) // pick alternating
  })

  it('finds the best when the middle is the goldmine', () => {
    expect(maxEarnings([1, 100, 1])).toBe(100)
  })
})

describe('checkpoint18 — minGearCost', () => {
  it('handles no days (already done)', () => {
    expect(minGearCost([])).toBe(0)
  })

  it('handles a single day (skip it by starting on day 1 free)', () => {
    expect(minGearCost([5])).toBe(0)
  })

  it('picks the cheaper starting day', () => {
    expect(minGearCost([1, 2])).toBe(1)
  })

  it('finds the minimum cost on a short calendar', () => {
    expect(minGearCost([10, 15, 20])).toBe(15)
  })

  it('finds the minimum cost on a longer calendar', () => {
    expect(minGearCost([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
  })
})

describe('checkpoint18 — waysToFill', () => {
  it('filling 0 days has exactly 1 way (do nothing)', () => {
    expect(waysToFill(0, [1, 2])).toBe(1)
  })

  it('filling 1 day with block size 1 has 1 way', () => {
    expect(waysToFill(1, [1])).toBe(1)
  })

  it('block size 2 cannot tile 3 days', () => {
    expect(waysToFill(3, [2])).toBe(0)
  })

  it('counts ordered compositions (order matters)', () => {
    // blocks [1,2] on 4 days: 4×1, 1+1+2, 1+2+1, 2+1+1, 2+2 → 5
    expect(waysToFill(4, [1, 2])).toBe(5)
  })

  it('counts all single-block placements', () => {
    expect(waysToFill(3, [1, 2, 3])).toBe(4) // 1+1+1, 1+2, 2+1, 3
  })

  it('handles a large nDays efficiently', () => {
    // Simple coin-count DP — should finish instantly.
    const result = waysToFill(1_000, [1, 2, 3])
    expect(result).toBeGreaterThan(0)
  })
})

describe('checkpoint18 — longestGrowthStreak', () => {
  it('handles no revenue data', () => {
    expect(longestGrowthStreak([])).toBe(0)
  })

  it('handles a single revenue day', () => {
    expect(longestGrowthStreak([42])).toBe(1)
  })

  it('a flat revenue line has a streak of 1 (strictly increasing)', () => {
    expect(longestGrowthStreak([5, 5, 5])).toBe(1)
  })

  it('finds the longest growth streak in a mixed sequence', () => {
    expect(longestGrowthStreak([3, 1, 4, 1, 5, 9, 2, 6])).toBe(4) // 1,4,5,9 or 1,4,5,6 etc.
  })

  it('a fully ascending sequence is its own streak', () => {
    expect(longestGrowthStreak([1, 2, 3, 4, 5])).toBe(5)
  })

  it('a fully descending sequence has a streak of 1', () => {
    expect(longestGrowthStreak([5, 4, 3, 2, 1])).toBe(1)
  })

  it('handles a large sequence efficiently (n log n must beat n²)', () => {
    const n = 100_000
    const ascending = Array.from({ length: n }, (_, i) => i)
    expect(longestGrowthStreak(ascending)).toBe(n)
  })
})

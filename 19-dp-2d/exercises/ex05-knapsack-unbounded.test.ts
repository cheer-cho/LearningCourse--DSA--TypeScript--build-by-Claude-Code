import { describe, expect, it } from 'vitest'
import { countCoinWays, maxRibbonValue } from './ex05-knapsack-unbounded'

describe('ex19/ex05 — countCoinWays (combinations)', () => {
  it('[1,2,5] amount 5 -> 4 combinations', () => {
    expect(countCoinWays([1, 2, 5], 5)).toBe(4)
  })

  it('[2] amount 3 -> 0 (impossible)', () => {
    expect(countCoinWays([2], 3)).toBe(0)
  })

  it('amount 0 -> 1 (the empty combination)', () => {
    expect(countCoinWays([1, 2, 5], 0)).toBe(1)
  })

  it('empty coins, amount 0 -> 1', () => {
    expect(countCoinWays([], 0)).toBe(1)
  })

  it('empty coins, amount > 0 -> 0', () => {
    expect(countCoinWays([], 5)).toBe(0)
  })

  it('single coin divides evenly -> 1 way', () => {
    expect(countCoinWays([3], 9)).toBe(1)
  })

  it('[1,2,3] amount 4 -> 4 combinations', () => {
    // [1,1,1,1], [1,1,2], [2,2], [1,3]
    expect(countCoinWays([1, 2, 3], 4)).toBe(4)
  })

  it('combinations: [1,2] for 3 -> 2 (not 3 permutations)', () => {
    // [1,1,1] and [1,2] — NOT [2,1] separately
    expect(countCoinWays([1, 2], 3)).toBe(2)
  })

  it('efficiency: amount 1000 completes without timeout', () => {
    const result = countCoinWays([1, 5, 10, 25], 1000)
    expect(result).toBeGreaterThan(0)
  })
})

describe('ex19/ex05 — maxRibbonValue (rod cutting)', () => {
  it('[1,2,3] lengths, [1,5,8] prices, total 4 -> 10', () => {
    // 2+2 = 5+5 = 10; or 2+2 pieces
    expect(maxRibbonValue([1, 2, 3], [1, 5, 8], 4)).toBe(10)
  })

  it('total 0 -> 0', () => {
    expect(maxRibbonValue([1, 2], [5, 10], 0)).toBe(0)
  })

  it('no lengths -> 0 for any total', () => {
    expect(maxRibbonValue([], [], 5)).toBe(0)
  })

  it('single length that divides evenly', () => {
    expect(maxRibbonValue([1], [2], 5)).toBe(10)
  })

  it('no length divides total evenly -> use what fits', () => {
    // lengths [2], total 3: can cut one piece of 2 (price 5), leftover 1 unused
    // But wait — we can only use given lengths. If total=3, length=2: one piece, value 5
    expect(maxRibbonValue([2], [5], 3)).toBe(5)
  })

  it('single piece equals total -> that price', () => {
    expect(maxRibbonValue([3], [10], 3)).toBe(10)
  })

  it('longer piece wins over two shorter', () => {
    // length 3 price 10 vs two length 1 at price 2 each -> 10 > 4
    expect(maxRibbonValue([1, 3], [2, 10], 3)).toBe(10)
  })

  it('[1,2,3] prices [1,5,8] total 8 -> 21 (two 3s + one 2)', () => {
    // dp[8] = max: two 3s (price 8+8=16) + one 2 (price 5) = 21
    // four 2s = 4*5=20; better is 3+3+2 = 8+8+5 = 21
    expect(maxRibbonValue([1, 2, 3], [1, 5, 8], 8)).toBe(21)
  })
})

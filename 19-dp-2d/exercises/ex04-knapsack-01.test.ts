import { describe, expect, it } from 'vitest'
import { canPartitionEqual, maxValue } from './ex04-knapsack-01'

describe('ex19/ex04 — maxValue', () => {
  it('classic example: items [1,3,4,5] weights, [1,4,5,7] values, cap 7 -> 9', () => {
    expect(maxValue([1, 3, 4, 5], [1, 4, 5, 7], 7)).toBe(9)
  })

  it('two items, fits both: picks both', () => {
    expect(maxValue([2, 3], [3, 4], 5)).toBe(7)
  })

  it('capacity 0 -> 0', () => {
    expect(maxValue([1, 2], [10, 20], 0)).toBe(0)
  })

  it('no items -> 0', () => {
    expect(maxValue([], [], 10)).toBe(0)
  })

  it('single item fits -> that item value', () => {
    expect(maxValue([5], [42], 10)).toBe(42)
  })

  it('single item does not fit -> 0', () => {
    expect(maxValue([10], [42], 5)).toBe(0)
  })

  it('all items exceed capacity -> 0', () => {
    expect(maxValue([5, 6, 7], [10, 20, 30], 4)).toBe(0)
  })

  it('picks highest value per weight greedily is wrong — DP picks correctly', () => {
    // Greedy (highest ratio): item 0 (ratio 6), then item 1 (ratio 3.3) -> 6+0=6
    // Optimal: item 1 + item 2 = 3+3 value = 33... wait, let's use a clear counter
    // weights [1,4], values [1,7], cap 4: greedy takes item0 four times (no reuse)
    // 0/1 knapsack: either item0 (val 1) or item1 (val 7) -> picks item1 = 7
    expect(maxValue([1, 4], [1, 7], 4)).toBe(7)
  })

  it('efficiency: 50 items, capacity 10000 completes without timeout', () => {
    const n = 50
    const weights = Array.from({ length: n }, (_, i) => (i % 10) + 1)
    const values = Array.from({ length: n }, (_, i) => (i % 7) + 1)
    const result = maxValue(weights, values, 10000)
    expect(result).toBeGreaterThan(0)
  })
})

describe('ex19/ex04 — canPartitionEqual', () => {
  it('[1,5,11,5] -> true (subsets [1,5,5] and [11])', () => {
    expect(canPartitionEqual([1, 5, 11, 5])).toBe(true)
  })

  it('[1,2,3,5] -> false', () => {
    expect(canPartitionEqual([1, 2, 3, 5])).toBe(false)
  })

  it('[2,2] -> true', () => {
    expect(canPartitionEqual([2, 2])).toBe(true)
  })

  it('single element -> false (cannot split)', () => {
    expect(canPartitionEqual([4])).toBe(false)
  })

  it('odd total sum -> false', () => {
    expect(canPartitionEqual([1, 2])).toBe(false)
  })

  it('all zeros -> true', () => {
    expect(canPartitionEqual([0, 0, 0, 0])).toBe(true)
  })

  it('[3,3,3,4,5] -> true (subsets [3,5] and [3,3,4])', () => {
    expect(canPartitionEqual([3, 3, 3, 4, 5])).toBe(true)
  })

  it('large balanced partition', () => {
    // [1..8] -> sum 36, target 18: [1,2,6,9] wait, let us use a concrete one
    expect(canPartitionEqual([1, 2, 3, 4, 5, 6, 7])).toBe(true) // sum 28, target 14
  })

  it('empty array -> true (two empty subsets, both sum to 0 — vacuously fair)', () => {
    expect(canPartitionEqual([])).toBe(true)
  })
})

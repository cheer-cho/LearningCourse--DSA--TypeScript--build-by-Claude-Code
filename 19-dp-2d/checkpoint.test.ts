import { describe, expect, it } from 'vitest'
import { bestFeatureSet, bundleWays, isFairSplit, sloganSimilarity } from './checkpoint'

describe('checkpoint 19 — bestFeatureSet', () => {
  it('classic knapsack: costs [1,3,4,5], impacts [1,4,5,7], budget 7 -> [1,2]', () => {
    // items at index 1 (cost 3, impact 4) + index 2 (cost 4, impact 5):
    // total cost = 7 (fits exactly), total impact = 9 (optimal)
    const result = bestFeatureSet([1, 3, 4, 5], [1, 4, 5, 7], 7)
    expect(result.sort((a: number, b: number) => a - b)).toEqual([1, 2])
  })

  it('budget 0 -> no features selected', () => {
    expect(bestFeatureSet([1, 2], [10, 20], 0)).toEqual([])
  })

  it('no features -> empty', () => {
    expect(bestFeatureSet([], [], 10)).toEqual([])
  })

  it('single feature fits -> [0]', () => {
    expect(bestFeatureSet([3], [10], 5)).toEqual([0])
  })

  it('single feature does not fit -> []', () => {
    expect(bestFeatureSet([10], [42], 5)).toEqual([])
  })

  it('all features fit within budget -> all indices', () => {
    const result = bestFeatureSet([1, 1, 1], [5, 5, 5], 10)
    expect(result.sort((a: number, b: number) => a - b)).toEqual([0, 1, 2])
  })

  it('reconstruction matches the optimal value', () => {
    const costs = [2, 3, 4, 5]
    const impacts = [3, 4, 5, 6]
    const budget = 5
    const chosen = bestFeatureSet(costs, impacts, budget)
    const totalValue = chosen.reduce((s: number, i: number) => s + impacts[i]!, 0)
    // Optimal: either index 0+1 (cost 5, impact 7) or index 2 (cost 4, impact 5)
    expect(totalValue).toBe(7)
  })

  it('efficiency: 50 features, budget 10000 completes without timeout', () => {
    const n = 50
    const costs = Array.from({ length: n }, (_, i) => (i % 10) + 1)
    const impacts = Array.from({ length: n }, (_, i) => (i % 7) + 1)
    const result = bestFeatureSet(costs, impacts, 10000)
    expect(Array.isArray(result)).toBe(true)
  })
})

describe('checkpoint 19 — sloganSimilarity', () => {
  it('kitten -> sitting costs 3', () => {
    expect(sloganSimilarity('kitten', 'sitting')).toBe(3)
  })

  it('identical -> 0', () => {
    expect(sloganSimilarity('launch', 'launch')).toBe(0)
  })

  it('empty a -> b.length', () => {
    expect(sloganSimilarity('', 'abc')).toBe(3)
  })

  it('empty b -> a.length', () => {
    expect(sloganSimilarity('xyz', '')).toBe(3)
  })

  it('horse -> ros costs 3', () => {
    expect(sloganSimilarity('horse', 'ros')).toBe(3)
  })
})

describe('checkpoint 19 — bundleWays', () => {
  it('[1,2,5] order 5 -> 4 combinations', () => {
    expect(bundleWays([1, 2, 5], 5)).toBe(4)
  })

  it('[2] order 3 -> 0', () => {
    expect(bundleWays([2], 3)).toBe(0)
  })

  it('order 0 -> 1 (empty bundle)', () => {
    expect(bundleWays([1, 2], 0)).toBe(1)
  })

  it('empty pack sizes, order 0 -> 1', () => {
    expect(bundleWays([], 0)).toBe(1)
  })

  it('empty pack sizes, order > 0 -> 0', () => {
    expect(bundleWays([], 3)).toBe(0)
  })
})

describe('checkpoint 19 — isFairSplit', () => {
  it('[1,5,11,5] -> true', () => {
    expect(isFairSplit([1, 5, 11, 5])).toBe(true)
  })

  it('[1,2,3,5] -> false', () => {
    expect(isFairSplit([1, 2, 3, 5])).toBe(false)
  })

  it('[2,2] -> true', () => {
    expect(isFairSplit([2, 2])).toBe(true)
  })

  it('odd total -> false', () => {
    expect(isFairSplit([1, 2])).toBe(false)
  })

  it('single element -> false', () => {
    expect(isFairSplit([4])).toBe(false)
  })

  it('empty array -> true (vacuously, two empty subsets each sum to 0)', () => {
    expect(isFairSplit([])).toBe(true)
  })
})

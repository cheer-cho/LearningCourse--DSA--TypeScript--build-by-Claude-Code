import { describe, expect, it } from 'vitest'
import { topKFrequent } from './ex03-top-k-frequent'

describe('12/ex03 — top-K frequent elements', () => {
  it('finds the two most frequent values (order-agnostic)', () => {
    expect(new Set(topKFrequent([1, 1, 1, 2, 2, 3], 2))).toEqual(new Set([1, 2]))
  })

  it('handles k equal to the number of distinct values', () => {
    expect(new Set(topKFrequent([4, 5, 6], 3))).toEqual(new Set([4, 5, 6]))
  })

  it('handles a single repeated value', () => {
    expect(topKFrequent([7, 7, 7, 7], 1)).toEqual([7])
  })

  it('handles negatives and zero', () => {
    expect(new Set(topKFrequent([-1, -1, 0, 0, 0, 2], 2))).toEqual(new Set([0, -1]))
  })

  it('handles k = 1 with a clear winner', () => {
    expect(topKFrequent([1, 2, 2, 3, 3, 3], 1)).toEqual([3])
  })

  it('finds the top-10 most frequent among ~200_000 values with unique frequencies', () => {
    const distinct = 632 // sum(1..632) ~= 200_028 total elements
    const nums: number[] = []
    for (let v = 0; v < distinct; v++) {
      for (let c = 0; c <= v; c++) nums.push(v)
    }
    const expected = new Set(
      Array.from({ length: 10 }, (_, i) => distinct - 1 - i),
    )
    expect(new Set(topKFrequent(nums, 10))).toEqual(expected)
  })
})

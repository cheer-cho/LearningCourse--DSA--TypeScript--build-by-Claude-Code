import { describe, it, expect } from 'vitest'
import { pairSum } from './ex02-pair-sum'

function normalize(pair: [number, number] | undefined): number[] | undefined {
  return pair ? [...pair].sort((a, b) => a - b) : undefined
}

describe('pairSum', () => {
  it('finds a typical pair', () => {
    expect(normalize(pairSum([2, 7, 11, 15], 9))).toEqual([0, 1])
  })

  it('handles duplicate values that sum to the target', () => {
    expect(normalize(pairSum([3, 3], 6))).toEqual([0, 1])
  })

  it('returns undefined when no pair sums to the target', () => {
    expect(pairSum([1, 2, 3], 100)).toBeUndefined()
  })

  it('handles negative numbers', () => {
    expect(normalize(pairSum([-3, 4, 1, 90], -2))).toEqual([0, 2])
  })

  it('returns undefined for an empty array', () => {
    expect(pairSum([], 5)).toBeUndefined()
  })

  it('does not pair an element with itself', () => {
    // Only one 5 in the array — target 10 has no valid second index.
    expect(pairSum([5, 1, 2], 10)).toBeUndefined()
  })

  it('stays fast on a large input (n = 200,000)', () => {
    const n = 200_000
    const nums = Array.from({ length: n }, (_, i) => i)
    const target = (n - 2) + (n - 1) // only satisfiable by the last two indices
    expect(normalize(pairSum(nums, target))).toEqual([n - 2, n - 1])
  })
})

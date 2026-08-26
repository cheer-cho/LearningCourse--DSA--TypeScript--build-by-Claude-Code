import { describe, expect, it } from 'vitest'
import { minCapacity, splitMinLargest } from './ex05-capacity-on-answer'

describe('ex10/ex05 — minCapacity', () => {
  it('matches the classic worked example', () => {
    expect(minCapacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(15)
  })

  it('handles an uneven weight distribution', () => {
    expect(minCapacity([3, 2, 2, 4, 1, 4], 3)).toBe(6)
    expect(minCapacity([1, 2, 3, 1, 1], 4)).toBe(3)
  })

  it('needs at least the heaviest single package', () => {
    expect(minCapacity([1, 1, 1, 100, 1], 5)).toBe(100)
  })

  it('allows shipping everything in one day', () => {
    expect(minCapacity([1, 2, 3], 1)).toBe(6)
  })

  it('handles a single package', () => {
    expect(minCapacity([7], 1)).toBe(7)
  })

  it('stays fast on a large weight list', () => {
    const weights = Array.from({ length: 100_000 }, () => 3)
    // constant weights -> exact answer: ceil(n / d) items per day * weight
    expect(minCapacity(weights, 100)).toBe(3000)
  })
})

describe('ex10/ex05 — splitMinLargest', () => {
  it('matches the classic worked example', () => {
    expect(splitMinLargest([7, 2, 5, 10, 8], 2)).toBe(18)
  })

  it('splits evenly when possible', () => {
    expect(splitMinLargest([1, 2, 3, 4, 5], 2)).toBe(9)
  })

  it('gives every element its own part when k equals length', () => {
    expect(splitMinLargest([1, 4, 4], 3)).toBe(4)
  })

  it('returns the full sum when k is 1', () => {
    expect(splitMinLargest([2, 3, 5], 1)).toBe(10)
  })

  it('handles a single element', () => {
    expect(splitMinLargest([9], 1)).toBe(9)
  })

  it('needs at least the largest single element', () => {
    expect(splitMinLargest([1, 1, 100, 1, 1], 5)).toBe(100)
  })

  it('stays fast on a large input', () => {
    const nums = Array.from({ length: 100_000 }, () => 3)
    // constant values -> exact answer: ceil(n / k) items per part * value
    expect(splitMinLargest(nums, 4)).toBe(75_000)
  })
})

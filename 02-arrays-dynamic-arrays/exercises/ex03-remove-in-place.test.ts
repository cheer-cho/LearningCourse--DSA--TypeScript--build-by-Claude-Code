import { describe, expect, it } from 'vitest'
import { dedupeSorted, removeValue } from './ex03-remove-in-place'

describe('removeValue', () => {
  it('removes scattered occurrences, preserving order', () => {
    const nums = [3, 2, 3, 3, 4]
    const len = removeValue(nums, 3)
    expect(len).toBe(2)
    expect(nums.slice(0, len)).toEqual([2, 4])
  })

  it('is a no-op count when the value is absent', () => {
    const nums = [1, 2, 3]
    const len = removeValue(nums, 9)
    expect(len).toBe(3)
    expect(nums.slice(0, len)).toEqual([1, 2, 3])
  })

  it('returns 0 when every element matches', () => {
    const nums = [5, 5, 5]
    const len = removeValue(nums, 5)
    expect(len).toBe(0)
  })

  it('handles an empty array', () => {
    const nums: number[] = []
    expect(removeValue(nums, 1)).toBe(0)
  })
})

describe('dedupeSorted', () => {
  it('keeps one copy of each run', () => {
    const nums = [1, 1, 2, 2, 2, 3]
    const len = dedupeSorted(nums)
    expect(len).toBe(3)
    expect(nums.slice(0, len)).toEqual([1, 2, 3])
  })

  it('handles an empty array', () => {
    const nums: number[] = []
    expect(dedupeSorted(nums)).toBe(0)
  })

  it('handles a single element', () => {
    const nums = [42]
    const len = dedupeSorted(nums)
    expect(len).toBe(1)
    expect(nums.slice(0, len)).toEqual([42])
  })

  it('leaves an array with no duplicates unchanged in length', () => {
    const nums = [1, 2, 3, 4]
    const len = dedupeSorted(nums)
    expect(len).toBe(4)
    expect(nums.slice(0, len)).toEqual([1, 2, 3, 4])
  })

  it('collapses an array that is all one value', () => {
    const nums = [7, 7, 7, 7, 7]
    const len = dedupeSorted(nums)
    expect(len).toBe(1)
    expect(nums.slice(0, len)).toEqual([7])
  })
})

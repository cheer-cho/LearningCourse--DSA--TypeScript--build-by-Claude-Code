import { describe, expect, it } from 'vitest'
import { moveZeroes, partitionEvenOdd } from './ex03-move-zeroes'

describe('ex04/ex03 — moveZeroes', () => {
  it('moves zeroes to the end, preserving non-zero order', () => {
    const nums = [0, 1, 0, 3, 12]
    moveZeroes(nums)
    expect(nums).toEqual([1, 3, 12, 0, 0])
  })

  it('handles an array with no zeroes', () => {
    const nums = [1, 2, 3]
    moveZeroes(nums)
    expect(nums).toEqual([1, 2, 3])
  })

  it('handles an array of all zeroes', () => {
    const nums = [0, 0, 0]
    moveZeroes(nums)
    expect(nums).toEqual([0, 0, 0])
  })

  it('handles an empty array and a single element', () => {
    const empty: number[] = []
    moveZeroes(empty)
    expect(empty).toEqual([])

    const single = [0]
    moveZeroes(single)
    expect(single).toEqual([0])
  })
})

describe('ex04/ex03 — partitionEvenOdd', () => {
  function isPartitioned(nums: number[]): boolean {
    let seenOdd = false
    for (const n of nums) {
      const isOdd = Math.abs(n % 2) === 1
      if (isOdd) seenOdd = true
      else if (seenOdd) return false // an even showed up after an odd
    }
    return true
  }

  it('puts every even value before every odd value', () => {
    const nums = [3, 1, 2, 4]
    partitionEvenOdd(nums)
    expect(isPartitioned(nums)).toBe(true)
    expect(nums.filter((n) => n % 2 === 0).sort()).toEqual([2, 4])
    expect(nums.filter((n) => n % 2 !== 0).sort()).toEqual([1, 3])
  })

  it('handles an already-partitioned array', () => {
    const nums = [2, 4, 6, 1, 3]
    partitionEvenOdd(nums)
    expect(isPartitioned(nums)).toBe(true)
  })

  it('handles an all-even and an all-odd array', () => {
    const evens = [2, 4, 6]
    partitionEvenOdd(evens)
    expect(evens.sort()).toEqual([2, 4, 6])

    const odds = [1, 3, 5]
    partitionEvenOdd(odds)
    expect(odds.sort()).toEqual([1, 3, 5])
  })

  it('handles negative numbers', () => {
    const nums = [-2, -3, 4, -5]
    partitionEvenOdd(nums)
    expect(isPartitioned(nums)).toBe(true)
  })

  it('handles empty and single-element arrays', () => {
    const empty: number[] = []
    partitionEvenOdd(empty)
    expect(empty).toEqual([])

    const single = [7]
    partitionEvenOdd(single)
    expect(single).toEqual([7])
  })
})

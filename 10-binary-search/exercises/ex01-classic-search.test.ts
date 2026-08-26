import { describe, expect, it } from 'vitest'
import { binarySearch, countOccurrences } from './ex01-classic-search'

describe('ex10/ex01 — binarySearch', () => {
  it('finds a value in the middle', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2)
  })

  it('finds the first and last element', () => {
    expect(binarySearch([2, 4, 6, 8], 2)).toBe(0)
    expect(binarySearch([2, 4, 6, 8], 8)).toBe(3)
  })

  it('returns -1 when absent', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1)
  })

  it('handles an empty array', () => {
    expect(binarySearch([], 4)).toBe(-1)
  })

  it('handles a single-element array, hit and miss', () => {
    expect(binarySearch([42], 42)).toBe(0)
    expect(binarySearch([42], 1)).toBe(-1)
  })

  it('returns -1 for a target beyond either end', () => {
    expect(binarySearch([1, 2, 3], -10)).toBe(-1)
    expect(binarySearch([1, 2, 3], 10)).toBe(-1)
  })

  it('finds some valid index when duplicates are present', () => {
    const idx = binarySearch([1, 2, 2, 2, 3], 2)
    expect([1, 2, 3]).toContain(idx)
  })

  it('stays O(log n): finds a target instantly in a huge sorted array', () => {
    const n = 500_000
    const nums = Array.from({ length: n }, (_, i) => i * 2) // even numbers
    expect(binarySearch(nums, 314_158)).toBe(157_079)
    expect(binarySearch(nums, 314_159)).toBe(-1) // odd -> absent
  })
})

describe('ex10/ex01 — countOccurrences', () => {
  it('counts a run of duplicates', () => {
    expect(countOccurrences([1, 2, 2, 2, 3], 2)).toBe(3)
  })

  it('returns 0 when the target is absent', () => {
    expect(countOccurrences([1, 2, 3], 5)).toBe(0)
  })

  it('returns 0 on an empty array', () => {
    expect(countOccurrences([], 1)).toBe(0)
  })

  it('counts a single occurrence', () => {
    expect(countOccurrences([1, 2, 3], 2)).toBe(1)
  })

  it('counts every element when the array is all-equal', () => {
    expect(countOccurrences([7, 7, 7, 7, 7], 7)).toBe(5)
  })

  it('handles targets beyond both ends', () => {
    expect(countOccurrences([2, 4, 6], 0)).toBe(0)
    expect(countOccurrences([2, 4, 6], 100)).toBe(0)
  })

  it('stays fast on a huge array of duplicates', () => {
    const n = 500_000
    const nums = Array.from({ length: n }, () => 5)
    expect(countOccurrences(nums, 5)).toBe(n)
    expect(countOccurrences(nums, 6)).toBe(0)
  })
})

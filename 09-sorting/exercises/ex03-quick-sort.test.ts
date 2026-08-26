import { describe, expect, it } from 'vitest'
import { quickSort } from './ex03-quick-sort'

function isSorted(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]! < arr[i - 1]!) return false
  }
  return true
}

describe('ex03 — quick sort', () => {
  it('sorts a shuffled array in place', () => {
    const a = [5, 2, 4, 6, 1, 3]
    quickSort(a)
    expect(a).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('mutates the input and returns undefined', () => {
    const a = [3, 1, 2]
    const result = quickSort(a)
    expect(result).toBeUndefined()
    expect(a).toEqual([1, 2, 3])
  })

  it('handles an empty array', () => {
    const a: number[] = []
    quickSort(a)
    expect(a).toEqual([])
  })

  it('handles a single element', () => {
    const a = [42]
    quickSort(a)
    expect(a).toEqual([42])
  })

  it('handles an all-equal array', () => {
    const a = [7, 7, 7, 7, 7]
    quickSort(a)
    expect(a).toEqual([7, 7, 7, 7, 7])
  })

  it('handles duplicates', () => {
    const a = [3, 1, 3, 2, 1]
    quickSort(a)
    expect(a).toEqual([1, 1, 2, 3, 3])
  })

  it('handles negative numbers', () => {
    const a = [-3, 5, -1, 0, -8]
    quickSort(a)
    expect(a).toEqual([-8, -3, -1, 0, 5])
  })

  it('sorts a large random array (efficiency: O(n log n) target)', () => {
    const n = 200_000
    const a = Array.from({ length: n }, () => Math.floor(Math.random() * n))
    quickSort(a)
    expect(a.length).toBe(n)
    expect(isSorted(a)).toBe(true)
  })

  it('sorts a large already-sorted array without degrading to O(n^2) (punishes a fixed pivot)', () => {
    const n = 200_000
    const a = Array.from({ length: n }, (_, i) => i)
    quickSort(a)
    expect(isSorted(a)).toBe(true)
    expect(a[0]).toBe(0)
    expect(a[n - 1]).toBe(n - 1)
  })
})

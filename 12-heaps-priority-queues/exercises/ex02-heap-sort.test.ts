import { describe, expect, it } from 'vitest'
import { heapSort } from './ex02-heap-sort'

describe('12/ex02 — heap sort', () => {
  it('sorts a small unsorted array', () => {
    expect(heapSort([5, 3, 8, 1])).toEqual([1, 3, 5, 8])
  })

  it('handles an empty array', () => {
    expect(heapSort([])).toEqual([])
  })

  it('handles a single element', () => {
    expect(heapSort([42])).toEqual([42])
  })

  it('handles an already-sorted array', () => {
    expect(heapSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  it('handles a reverse-sorted array', () => {
    expect(heapSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  it('handles duplicates and negatives', () => {
    expect(heapSort([0, -3, 2, -3, 0, 5])).toEqual([-3, -3, 0, 0, 2, 5])
  })

  it('handles an all-equal array', () => {
    expect(heapSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7])
  })

  it('does not mutate the input array', () => {
    const nums = [3, 1, 2]
    const copy = [...nums]
    heapSort(nums)
    expect(nums).toEqual(copy)
  })

  it('sorts 100_000 numbers well within an O(n log n) budget', () => {
    const n = 100_000
    const nums = Array.from({ length: n }, () => Math.floor(Math.random() * 1_000_000))
    const expected = [...nums].sort((a, b) => a - b)
    expect(heapSort(nums)).toEqual(expected)
  })
})

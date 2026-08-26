import { describe, expect, it } from 'vitest'
import { mergeSort } from './ex02-merge-sort'

describe('ex02 — merge sort', () => {
  it('sorts a shuffled array', () => {
    expect(mergeSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('handles an empty array', () => {
    expect(mergeSort([])).toEqual([])
  })

  it('handles a single element', () => {
    expect(mergeSort([42])).toEqual([42])
  })

  it('handles an already-sorted array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  it('handles a reverse-sorted array', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  it('handles duplicates', () => {
    expect(mergeSort([3, 1, 3, 2, 1])).toEqual([1, 1, 2, 3, 3])
  })

  it('handles negative numbers', () => {
    expect(mergeSort([-3, 5, -1, 0, -8])).toEqual([-8, -3, -1, 0, 5])
  })

  it('does not mutate the input', () => {
    const original = [5, 2, 4, 6, 1, 3]
    const copy = [...original]
    mergeSort(original)
    expect(original).toEqual(copy)
  })

  it('accepts a custom comparator for non-number elements', () => {
    const items = [{ k: 3 }, { k: 1 }, { k: 2 }]
    expect(mergeSort(items, (a, b) => a.k - b.k)).toEqual([{ k: 1 }, { k: 2 }, { k: 3 }])
  })

  it('is stable: equal keys keep their original relative order', () => {
    const tagged = [
      { key: 1, tag: 'a' },
      { key: 2, tag: 'b' },
      { key: 1, tag: 'c' },
      { key: 2, tag: 'd' },
      { key: 1, tag: 'e' },
    ]
    const sorted = mergeSort(tagged, (a, b) => a.key - b.key)
    const tagsForKey1 = sorted.filter((x) => x.key === 1).map((x) => x.tag)
    const tagsForKey2 = sorted.filter((x) => x.key === 2).map((x) => x.tag)
    expect(tagsForKey1).toEqual(['a', 'c', 'e'])
    expect(tagsForKey2).toEqual(['b', 'd'])
  })

  it('sorts a large random array (efficiency: O(n log n) target)', () => {
    const n = 200_000
    const nums = Array.from({ length: n }, () => Math.floor(Math.random() * n))
    const sorted = mergeSort(nums)
    expect(sorted.length).toBe(n)
    for (let i = 1; i < sorted.length; i++) {
      expect(sorted[i]!).toBeGreaterThanOrEqual(sorted[i - 1]!)
    }
  })
})

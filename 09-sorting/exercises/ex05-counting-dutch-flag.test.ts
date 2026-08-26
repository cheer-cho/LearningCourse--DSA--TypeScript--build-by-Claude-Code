import { describe, expect, it } from 'vitest'
import { countingSort, sortColors } from './ex05-counting-dutch-flag'

describe('ex05 — counting sort', () => {
  it('sorts numbers by identity', () => {
    expect(countingSort([5, 1, 1, 3], (v) => v, 5)).toEqual([1, 1, 3, 5])
  })

  it('handles an empty array', () => {
    expect(countingSort<number>([], (v) => v, 10)).toEqual([])
  })

  it('handles a single element', () => {
    expect(countingSort([7], (v) => v, 10)).toEqual([7])
  })

  it('handles all-equal values', () => {
    expect(countingSort([4, 4, 4], (v) => v, 10)).toEqual([4, 4, 4])
  })

  it('handles values at both range extremes', () => {
    expect(countingSort([5, 0, 5, 0], (v) => v, 5)).toEqual([0, 0, 5, 5])
  })

  it('is stable: equal values keep their original relative order', () => {
    const tagged = [
      { value: 1, tag: 'a' },
      { value: 0, tag: 'b' },
      { value: 1, tag: 'c' },
      { value: 0, tag: 'd' },
      { value: 1, tag: 'e' },
    ]
    const sorted = countingSort(tagged, (x) => x.value, 1)
    expect(sorted.map((x) => x.tag)).toEqual(['b', 'd', 'a', 'c', 'e'])
  })

  it('sorts a large array over a small bounded range quickly (efficiency: O(n + maxValue) target)', () => {
    const n = 300_000
    const maxValue = 100
    const scores = Array.from({ length: n }, () => Math.floor(Math.random() * (maxValue + 1)))
    const sorted = countingSort(scores, (v) => v, maxValue)
    expect(sorted.length).toBe(n)
    for (let i = 1; i < sorted.length; i++) {
      expect(sorted[i]!).toBeGreaterThanOrEqual(sorted[i - 1]!)
    }
  })
})

describe('ex05 — sortColors (Dutch national flag)', () => {
  it('sorts a mix of 0/1/2 in place', () => {
    const a = [2, 0, 1, 1, 0, 2]
    sortColors(a)
    expect(a).toEqual([0, 0, 1, 1, 2, 2])
  })

  it('mutates the input and returns undefined', () => {
    const a = [1, 0, 2]
    const result = sortColors(a)
    expect(result).toBeUndefined()
    expect(a).toEqual([0, 1, 2])
  })

  it('handles an empty array', () => {
    const a: number[] = []
    sortColors(a)
    expect(a).toEqual([])
  })

  it('handles all one value', () => {
    const a = [1, 1, 1, 1]
    sortColors(a)
    expect(a).toEqual([1, 1, 1, 1])
  })

  it('handles an already-sorted array', () => {
    const a = [0, 0, 1, 1, 2, 2]
    sortColors(a)
    expect(a).toEqual([0, 0, 1, 1, 2, 2])
  })

  it('handles a reverse-sorted array', () => {
    const a = [2, 2, 1, 1, 0, 0]
    sortColors(a)
    expect(a).toEqual([0, 0, 1, 1, 2, 2])
  })

  it('handles a large array (efficiency: O(n) target)', () => {
    const n = 300_000
    const a = Array.from({ length: n }, () => Math.floor(Math.random() * 3))
    sortColors(a)
    for (let i = 1; i < a.length; i++) {
      expect(a[i]!).toBeGreaterThanOrEqual(a[i - 1]!)
    }
  })
})

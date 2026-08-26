import { describe, expect, it } from 'vitest'
import { compact, restockMerge, rotateDisplay, Shelf } from './checkpoint'

describe('Shelf', () => {
  it('starts empty with capacity 1', () => {
    const shelf = new Shelf<string>()
    expect(shelf.size()).toBe(0)
    expect(shelf.capacity()).toBe(1)
  })

  it('pushes, reads, and pops in LIFO order', () => {
    const shelf = new Shelf<string>()
    shelf.push('soap')
    shelf.push('rice')
    expect(shelf.get(0)).toBe('soap')
    expect(shelf.get(1)).toBe('rice')
    expect(shelf.pop()).toBe('rice')
    expect(shelf.size()).toBe(1)
  })

  it('doubles capacity 1 -> 2 -> 4 -> 8 as it fills', () => {
    const shelf = new Shelf<number>()
    const caps: number[] = []
    for (let i = 0; i < 8; i++) {
      shelf.push(i)
      caps.push(shelf.capacity())
    }
    expect(caps).toEqual([1, 2, 4, 4, 8, 8, 8, 8])
  })

  it('throws RangeError on bad access', () => {
    const shelf = new Shelf<number>()
    expect(() => shelf.get(0)).toThrow(RangeError)
    expect(() => shelf.pop()).toThrow(RangeError)
  })

  it('handles a large amortized run (n = 50_000)', () => {
    const shelf = new Shelf<number>()
    const n = 50_000
    for (let i = 0; i < n; i++) shelf.push(i)
    expect(shelf.size()).toBe(n)
    expect(shelf.get(0)).toBe(0)
    expect(shelf.get(n - 1)).toBe(n - 1)

    let expectedCap = 1
    while (expectedCap < n) expectedCap *= 2
    expect(shelf.capacity()).toBe(expectedCap)
  })
})

describe('restockMerge', () => {
  it('merges two sorted lists', () => {
    expect(restockMerge([1, 4, 7], [2, 3, 8])).toEqual([1, 2, 3, 4, 7, 8])
  })

  it('handles an empty list on either side', () => {
    expect(restockMerge([], [1, 2])).toEqual([1, 2])
    expect(restockMerge([1, 2], [])).toEqual([1, 2])
  })

  it('handles duplicates across both lists', () => {
    expect(restockMerge([1, 2, 2], [2, 3])).toEqual([1, 2, 2, 2, 3])
  })
})

describe('compact', () => {
  it('packs non-null items to the front, preserving order', () => {
    const slots: (string | null)[] = ['a', null, 'b', null, 'c']
    const count = compact(slots)
    expect(count).toBe(3)
    expect(slots.slice(0, count)).toEqual(['a', 'b', 'c'])
  })

  it('returns 0 for an all-empty shelf', () => {
    const slots: (string | null)[] = [null, null, null]
    expect(compact(slots)).toBe(0)
  })

  it('returns the full length when nothing is empty', () => {
    const slots: (string | null)[] = ['a', 'b', 'c']
    expect(compact(slots)).toBe(3)
    expect(slots).toEqual(['a', 'b', 'c'])
  })

  it('handles an empty slots array', () => {
    expect(compact([])).toBe(0)
  })
})

describe('rotateDisplay', () => {
  it('rotates right by k', () => {
    const items = ['a', 'b', 'c', 'd']
    rotateDisplay(items, 1)
    expect(items).toEqual(['d', 'a', 'b', 'c'])
  })

  it('handles k = 0 and k = length as no-ops', () => {
    const a = ['a', 'b', 'c']
    rotateDisplay(a, 0)
    expect(a).toEqual(['a', 'b', 'c'])

    const b = ['a', 'b', 'c']
    rotateDisplay(b, 3)
    expect(b).toEqual(['a', 'b', 'c'])
  })

  it('handles k greater than length by wrapping', () => {
    const items = ['a', 'b', 'c']
    rotateDisplay(items, 5) // 5 % 3 === 2
    expect(items).toEqual(['b', 'c', 'a'])
  })

  it('handles an empty items array', () => {
    const items: string[] = []
    rotateDisplay(items, 3)
    expect(items).toEqual([])
  })
})

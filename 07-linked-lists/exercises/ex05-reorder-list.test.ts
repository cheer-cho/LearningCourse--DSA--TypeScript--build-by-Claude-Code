import { describe, expect, it } from 'vitest'
import { fromArray, toArray } from './ex01-build-singly-list'
import { reorder } from './ex05-reorder-list'

describe('ex05 - reorder', () => {
  it('reorders an even-length list', () => {
    const head = fromArray([1, 2, 3, 4])
    reorder(head)
    expect(toArray(head)).toEqual([1, 4, 2, 3])
  })

  it('reorders an odd-length list', () => {
    const head = fromArray([1, 2, 3, 4, 5])
    reorder(head)
    expect(toArray(head)).toEqual([1, 5, 2, 4, 3])
  })

  it('handles an empty list without throwing', () => {
    const head = fromArray<number>([])
    expect(() => reorder(head)).not.toThrow()
  })

  it('handles a single element', () => {
    const head = fromArray([1])
    reorder(head)
    expect(toArray(head)).toEqual([1])
  })

  it('handles two elements', () => {
    const head = fromArray([1, 2])
    reorder(head)
    expect(toArray(head)).toEqual([1, 2])
  })

  it('handles three elements', () => {
    const head = fromArray([1, 2, 3])
    reorder(head)
    expect(toArray(head)).toEqual([1, 3, 2])
  })

  it('mutates in place: the head reference stays the head', () => {
    const head = fromArray([1, 2, 3, 4, 5, 6])
    reorder(head)
    expect(head?.value).toBe(1)
    expect(toArray(head)).toEqual([1, 6, 2, 5, 3, 4])
  })
})

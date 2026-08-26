import { describe, expect, it } from 'vitest'
import { fromArray, toArray } from './ex01-build-singly-list'
import { mergeSorted, removeNthFromEnd } from './ex04-merge-two-lists'

describe('ex04 - mergeSorted', () => {
  it('interleaves two lists of equal length', () => {
    const a = fromArray([1, 3, 5])
    const b = fromArray([2, 4, 6])
    expect(toArray(mergeSorted(a, b))).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('handles one empty list', () => {
    const a = fromArray<number>([])
    const b = fromArray([1, 2])
    expect(toArray(mergeSorted(a, b))).toEqual([1, 2])
    expect(toArray(mergeSorted(fromArray([1, 2]), fromArray([])))).toEqual([1, 2])
  })

  it('handles two empty lists', () => {
    expect(mergeSorted(fromArray([]), fromArray([]))).toBeNull()
  })

  it('handles lists of very different lengths', () => {
    const a = fromArray([5])
    const b = fromArray([1, 2, 3, 4, 6, 7])
    expect(toArray(mergeSorted(a, b))).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it('handles duplicate values across lists', () => {
    const a = fromArray([1, 2, 2])
    const b = fromArray([2, 3])
    expect(toArray(mergeSorted(a, b))).toEqual([1, 2, 2, 2, 3])
  })

  it('splices existing nodes rather than allocating new ones', () => {
    const a = fromArray([1, 4])
    const b = fromArray([2, 3])
    const firstOfA = a
    const secondOfB = b?.next ?? null
    const merged = mergeSorted(a, b)
    // node holding 1 from `a` should still be the head of the merged list
    expect(merged).toBe(firstOfA)
    // node holding 3 from `b` should still be present by reference
    let cur = merged
    let found = false
    while (cur) {
      if (cur === secondOfB) found = true
      cur = cur.next
    }
    expect(found).toBe(true)
  })
})

describe('ex04 - removeNthFromEnd', () => {
  it('removes a middle node', () => {
    const head = fromArray([1, 2, 3, 4, 5])
    expect(toArray(removeNthFromEnd(head, 2))).toEqual([1, 2, 3, 5])
  })

  it('removes the last node (n = 1)', () => {
    const head = fromArray([1, 2, 3])
    expect(toArray(removeNthFromEnd(head, 1))).toEqual([1, 2])
  })

  it('removes the head when n equals the list length', () => {
    const head = fromArray([1, 2, 3])
    expect(toArray(removeNthFromEnd(head, 3))).toEqual([2, 3])
  })

  it('removes the only node, leaving an empty list', () => {
    const head = fromArray([1])
    expect(removeNthFromEnd(head, 1)).toBeNull()
  })

  it('handles a two-element list removing the first', () => {
    const head = fromArray([1, 2])
    expect(toArray(removeNthFromEnd(head, 2))).toEqual([2])
  })
})

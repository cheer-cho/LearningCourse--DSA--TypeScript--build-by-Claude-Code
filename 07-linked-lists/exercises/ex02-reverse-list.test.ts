import { describe, expect, it } from 'vitest'
import { fromArray, toArray } from './ex01-build-singly-list'
import { reverseList, reverseListRecursive } from './ex02-reverse-list'

describe.each([
  ['reverseList (iterative)', reverseList] as const,
  ['reverseListRecursive', reverseListRecursive] as const,
])('ex02 - %s', (_name, reverse) => {
  it('reverses a typical list', () => {
    const head = fromArray([1, 2, 3, 4, 5])
    expect(toArray(reverse(head))).toEqual([5, 4, 3, 2, 1])
  })

  it('handles an empty list', () => {
    expect(reverse(fromArray<number>([]))).toBeNull()
  })

  it('handles a single-element list', () => {
    const head = fromArray([42])
    const reversed = reverse(head)
    expect(toArray(reversed)).toEqual([42])
    expect(reversed?.next).toBeNull()
  })

  it('handles two elements', () => {
    const head = fromArray(['a', 'b'])
    expect(toArray(reverse(head))).toEqual(['b', 'a'])
  })

  it('the new tail has next === null (no dangling pointer)', () => {
    const head = fromArray([1, 2, 3])
    const reversed = reverse(head)
    let cur = reversed
    while (cur?.next) cur = cur.next
    expect(cur?.value).toBe(1)
    expect(cur?.next).toBeNull()
  })
})

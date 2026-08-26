import { describe, expect, it } from 'vitest'
import { largestConcatNumber, relativeOrder, sortByFrequency } from './ex06-comparator-problems'

describe('ex06 — largestConcatNumber', () => {
  it('orders the classic puzzle', () => {
    expect(largestConcatNumber([9, 34, 3])).toBe('9343')
  })

  it('handles a case where numeric and lexicographic order disagree', () => {
    expect(largestConcatNumber([3, 30, 34, 5, 9])).toBe('9534330')
  })

  it('handles a single number', () => {
    expect(largestConcatNumber([42])).toBe('42')
  })

  it('handles the all-zeros edge case', () => {
    expect(largestConcatNumber([0, 0])).toBe('0')
    expect(largestConcatNumber([0, 0, 0])).toBe('0')
  })

  it('handles an empty array', () => {
    expect(largestConcatNumber([])).toBe('')
  })
})

describe('ex06 — sortByFrequency', () => {
  it('orders rarest first, ties by value descending', () => {
    expect(sortByFrequency([1, 1, 2, 2, 2, 3])).toEqual([3, 1, 1, 2, 2, 2])
  })

  it('handles all-unique values (all tied at frequency 1, so value descending)', () => {
    expect(sortByFrequency([3, 1, 2])).toEqual([3, 2, 1])
  })

  it('handles an empty array', () => {
    expect(sortByFrequency([])).toEqual([])
  })

  it('handles all-equal values', () => {
    expect(sortByFrequency([5, 5, 5])).toEqual([5, 5, 5])
  })

  it('handles negative numbers', () => {
    expect(sortByFrequency([-1, -1, -2])).toEqual([-2, -1, -1])
  })
})

describe('ex06 — relativeOrder', () => {
  it('sorts by rank, unknowns last ascending', () => {
    expect(relativeOrder([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])).toEqual([
      2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19,
    ])
  })

  it('handles an empty order list (everything is unknown, ascending)', () => {
    expect(relativeOrder([5, 3, 1], [])).toEqual([1, 3, 5])
  })

  it('handles an empty nums array', () => {
    expect(relativeOrder([], [1, 2, 3])).toEqual([])
  })

  it('handles duplicates within nums', () => {
    expect(relativeOrder([1, 1, 2, 2], [2, 1])).toEqual([2, 2, 1, 1])
  })

  it('handles all values present in order', () => {
    expect(relativeOrder([3, 1, 2], [1, 2, 3])).toEqual([1, 2, 3])
  })
})

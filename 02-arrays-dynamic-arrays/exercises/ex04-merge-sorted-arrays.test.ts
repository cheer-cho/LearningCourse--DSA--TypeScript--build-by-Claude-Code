import { describe, expect, it } from 'vitest'
import { merge, mergeInto } from './ex04-merge-sorted-arrays'

describe('merge', () => {
  it('interleaves two sorted arrays', () => {
    expect(merge([1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4, 5])
  })

  it('handles one empty array', () => {
    expect(merge([], [1, 2, 3])).toEqual([1, 2, 3])
    expect(merge([1, 2, 3], [])).toEqual([1, 2, 3])
  })

  it('handles both empty', () => {
    expect(merge([], [])).toEqual([])
  })

  it('handles duplicates across both arrays', () => {
    expect(merge([1, 2, 2], [2, 3])).toEqual([1, 2, 2, 2, 3])
  })

  it('handles one array entirely ahead of the other', () => {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  })
})

describe('mergeInto', () => {
  it('merges b into the spare capacity of a', () => {
    const a = [1, 3, 0, 0]
    mergeInto(a, 2, [2, 4])
    expect(a).toEqual([1, 2, 3, 4])
  })

  it('handles m = 0 (a is entirely spare capacity)', () => {
    const a = [0, 0, 0]
    mergeInto(a, 0, [1, 2, 3])
    expect(a).toEqual([1, 2, 3])
  })

  it('handles an empty b (a keeps its own values)', () => {
    const a = [1, 2, 3]
    mergeInto(a, 3, [])
    expect(a).toEqual([1, 2, 3])
  })

  it('handles duplicates across a and b', () => {
    const a = [2, 2, 0, 0]
    mergeInto(a, 2, [2, 2])
    expect(a).toEqual([2, 2, 2, 2])
  })

  it('handles all of b landing before all of a', () => {
    const a = [4, 5, 0, 0]
    mergeInto(a, 2, [1, 2])
    expect(a).toEqual([1, 2, 4, 5])
  })
})

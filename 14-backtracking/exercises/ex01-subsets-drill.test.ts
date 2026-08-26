import { describe, expect, it } from 'vitest'
import { subsets, subsetsWithDup } from './ex01-subsets-drill'

// Order-insensitive comparison: normalize a list of subsets into a
// sorted list of stringified subsets, so [[1],[2]] and [[2],[1]] match.
function normalize(result: number[][]): string[] {
  return result.map((sub) => JSON.stringify(sub)).sort()
}

describe('ex14/ex01 — subsets', () => {
  it('empty input has exactly one subset: the empty one', () => {
    expect(subsets([])).toEqual([[]])
  })

  it('single element', () => {
    expect(normalize(subsets([5]))).toEqual(normalize([[], [5]]))
  })

  it('three distinct elements: all 8 subsets', () => {
    expect(normalize(subsets([1, 2, 3]))).toEqual(
      normalize([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]),
    )
  })

  it('handles negatives', () => {
    expect(normalize(subsets([-1, 2]))).toEqual(normalize([[], [-1], [2], [-1, 2]]))
  })
})

describe('ex14/ex01 — subsetsWithDup', () => {
  it('empty input has exactly one subset: the empty one', () => {
    expect(subsetsWithDup([])).toEqual([[]])
  })

  it('no duplicates behaves like subsets', () => {
    expect(normalize(subsetsWithDup([1, 2]))).toEqual(normalize([[], [1], [2], [1, 2]]))
  })

  it('one repeated value collapses duplicate subsets', () => {
    expect(normalize(subsetsWithDup([1, 2, 2]))).toEqual(
      normalize([[], [1], [2], [1, 2], [2, 2], [1, 2, 2]]),
    )
  })

  it('all values equal: only size 0..n subsets', () => {
    expect(normalize(subsetsWithDup([2, 2, 2]))).toEqual(normalize([[], [2], [2, 2], [2, 2, 2]]))
  })
})

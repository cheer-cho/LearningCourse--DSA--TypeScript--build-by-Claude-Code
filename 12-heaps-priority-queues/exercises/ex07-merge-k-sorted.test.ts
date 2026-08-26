import { describe, expect, it } from 'vitest'
import { mergeKSorted } from './ex07-merge-k-sorted'

describe('12/ex07 — merge k sorted lists', () => {
  it('merges three sorted lists', () => {
    expect(
      mergeKSorted([
        [1, 4, 7],
        [2, 3],
        [0, 9],
      ]),
    ).toEqual([0, 1, 2, 3, 4, 7, 9])
  })

  it('handles an empty list of lists', () => {
    expect(mergeKSorted([])).toEqual([])
  })

  it('handles some empty inner lists', () => {
    expect(mergeKSorted([[], [1, 2], [], [0]])).toEqual([0, 1, 2])
  })

  it('handles a single list', () => {
    expect(mergeKSorted([[1, 2, 3]])).toEqual([1, 2, 3])
  })

  it('handles duplicate values across lists', () => {
    expect(
      mergeKSorted([
        [1, 1, 3],
        [1, 2],
      ]),
    ).toEqual([1, 1, 1, 2, 3])
  })

  it('merges 1_000 lists of 100 elements each', () => {
    const lists: number[][] = Array.from({ length: 1_000 }, () => {
      const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 10_000))
      return arr.sort((a, b) => a - b)
    })
    const expected = lists.flat().sort((a, b) => a - b)
    expect(mergeKSorted(lists)).toEqual(expected)
  })
})

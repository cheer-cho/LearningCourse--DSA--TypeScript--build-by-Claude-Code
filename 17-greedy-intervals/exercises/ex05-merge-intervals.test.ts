import { describe, expect, it } from 'vitest'
import { insertInterval, mergeIntervals } from './ex05-merge-intervals'

describe('17/ex05 — mergeIntervals', () => {
  it('classic case: overlapping chains collapse, gaps stay separate', () => {
    expect(
      mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ])
  })

  it('touching intervals stay separate (pin the convention)', () => {
    expect(
      mergeIntervals([
        [1, 2],
        [2, 3],
      ]),
    ).toEqual([
      [1, 2],
      [2, 3],
    ])
  })

  it('unsorted input still merges correctly', () => {
    // sorted by start: [1,4],[3,5],[5,6]
    // [1,4] and [3,5]: 3 < 4 (overlap) -> merge to [1,5]
    // [1,5] and [5,6]: 5 is NOT < 5 (touching, not overlapping per convention) -> stay separate
    expect(
      mergeIntervals([
        [5, 6],
        [1, 4],
        [3, 5],
      ]),
    ).toEqual([[1, 5], [5, 6]])
  })

  it('empty input', () => {
    expect(mergeIntervals([])).toEqual([])
  })

  it('single interval', () => {
    expect(mergeIntervals([[1, 4]])).toEqual([[1, 4]])
  })

  it('one interval fully contains another', () => {
    expect(
      mergeIntervals([
        [1, 10],
        [2, 5],
      ]),
    ).toEqual([[1, 10]])
  })

  it('all disjoint intervals stay unchanged (aside from sort order)', () => {
    expect(
      mergeIntervals([
        [10, 12],
        [1, 2],
        [5, 6],
      ]),
    ).toEqual([
      [1, 2],
      [5, 6],
      [10, 12],
    ])
  })

  it('efficiency: n = 100_000 fully overlapping intervals merge into one', () => {
    const n = 100_000
    const intervals = Array.from({ length: n }, (_, i) => [i, i + n])
    const result = mergeIntervals(intervals)
    expect(result).toEqual([[0, 2 * n - 1]])
  })
})

describe('17/ex05 — insertInterval', () => {
  it('classic case: merges with the overlapping middle interval', () => {
    expect(
      insertInterval(
        [
          [1, 3],
          [6, 9],
        ],
        [2, 5],
      ),
    ).toEqual([
      [1, 5],
      [6, 9],
    ])
  })

  it('touching insert stays separate (pin the convention)', () => {
    expect(insertInterval([[1, 5]], [5, 8])).toEqual([
      [1, 5],
      [5, 8],
    ])
  })

  it('merges across several intervals at once', () => {
    expect(
      insertInterval(
        [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        [4, 8],
      ),
    ).toEqual([
      [1, 2],
      [3, 8],
      [8, 10],
      [12, 16],
    ])
  })

  it('inserts at the very front', () => {
    expect(
      insertInterval(
        [
          [5, 7],
          [9, 10],
        ],
        [0, 1],
      ),
    ).toEqual([
      [0, 1],
      [5, 7],
      [9, 10],
    ])
  })

  it('inserts at the very end', () => {
    expect(insertInterval([[1, 3]], [5, 7])).toEqual([
      [1, 3],
      [5, 7],
    ])
  })

  it('empty sorted list: result is just the new interval', () => {
    expect(insertInterval([], [3, 5])).toEqual([[3, 5]])
  })

  it('efficiency: n = 100_000 disjoint intervals, one merge at the front', () => {
    const n = 100_000
    const intervals = Array.from({ length: n }, (_, i) => [i * 10, i * 10 + 3])
    const result = insertInterval(intervals, [2, 6]) // overlaps intervals[0] = [0,3] only
    expect(result.length).toBe(n)
    expect(result[0]).toEqual([0, 6])
  })
})

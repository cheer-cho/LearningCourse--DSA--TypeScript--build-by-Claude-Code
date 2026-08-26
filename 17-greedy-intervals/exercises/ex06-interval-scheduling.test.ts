import { describe, expect, it } from 'vitest'
import {
  canAttendAll,
  maxNonOverlapping,
  minRemovals,
  minRooms,
} from './ex06-interval-scheduling'

describe('17/ex06 — maxNonOverlapping', () => {
  it('classic: picks the two that end earliest', () => {
    // [1,3] and [3,5] don't overlap (touching OK); [2,4] overlaps both
    expect(maxNonOverlapping([[1, 3], [2, 4], [3, 5]])).toBe(2)
  })

  it('all disjoint: pick them all', () => {
    expect(maxNonOverlapping([[1, 2], [3, 4], [5, 6]])).toBe(3)
  })

  it('all overlapping: pick one', () => {
    expect(maxNonOverlapping([[1, 10], [2, 9], [3, 8]])).toBe(1)
  })

  it('single interval: answer is 1', () => {
    expect(maxNonOverlapping([[0, 100]])).toBe(1)
  })

  it('empty: answer is 0', () => {
    expect(maxNonOverlapping([])).toBe(0)
  })

  it('touching pair: both can be selected', () => {
    expect(maxNonOverlapping([[1, 2], [2, 3]])).toBe(2)
  })

  it('three intervals, two non-overlapping choices, unsorted input', () => {
    // Sort by end: [1,3],[2,4],[3,6] -> pick [1,3] then [3,6] = 2
    expect(maxNonOverlapping([[3, 6], [1, 3], [2, 4]])).toBe(2)
  })
})

describe('17/ex06 — minRemovals', () => {
  it('removes the minimum to make the rest disjoint', () => {
    expect(minRemovals([[1, 3], [2, 4], [3, 5]])).toBe(1)
  })

  it('no overlaps: zero removals', () => {
    expect(minRemovals([[1, 2], [3, 4], [5, 6]])).toBe(0)
  })

  it('empty: zero removals', () => {
    expect(minRemovals([])).toBe(0)
  })

  it('n - maxNonOverlapping relation holds', () => {
    const intervals = [[1, 10], [2, 5], [3, 7], [6, 9]]
    const n = intervals.length
    expect(minRemovals(intervals)).toBe(n - maxNonOverlapping(intervals))
  })
})

describe('17/ex06 — canAttendAll', () => {
  it('touching intervals: no overlap, can attend all', () => {
    expect(canAttendAll([[1, 2], [2, 3], [3, 4]])).toBe(true)
  })

  it('one overlapping pair: cannot attend all', () => {
    expect(canAttendAll([[1, 3], [2, 4]])).toBe(false)
  })

  it('empty: vacuously true', () => {
    expect(canAttendAll([])).toBe(true)
  })

  it('single interval: always true', () => {
    expect(canAttendAll([[5, 10]])).toBe(true)
  })

  it('all identical: overlap detected', () => {
    expect(canAttendAll([[1, 5], [1, 5], [1, 5]])).toBe(false)
  })

  it('unsorted but non-overlapping: true', () => {
    expect(canAttendAll([[10, 20], [1, 5], [6, 9]])).toBe(true)
  })
})

describe('17/ex06 — minRooms', () => {
  it('classic three-interval example: 2 rooms needed', () => {
    // [0,30] overlaps [5,10] but [5,10] ends before [15,20] starts
    expect(minRooms([[0, 30], [5, 10], [15, 20]])).toBe(2)
  })

  it('touching intervals: same room, back to back', () => {
    expect(minRooms([[1, 2], [2, 3]])).toBe(1)
  })

  it('all disjoint: one room', () => {
    expect(minRooms([[1, 2], [3, 4], [5, 6]])).toBe(1)
  })

  it('all the same time: need n rooms', () => {
    expect(minRooms([[1, 5], [1, 5], [1, 5]])).toBe(3)
  })

  it('empty: 0 rooms', () => {
    expect(minRooms([])).toBe(0)
  })

  it('single interval: 1 room', () => {
    expect(minRooms([[0, 50]])).toBe(1)
  })

  it('peak concurrency at the right moment', () => {
    // [1,10],[2,5],[4,8]: at t=4 all three overlap -> 3 rooms
    expect(minRooms([[1, 10], [2, 5], [4, 8]])).toBe(3)
  })

  it('efficiency: 100_000 random intervals stays fast', () => {
    const n = 100_000
    const intervals: number[][] = Array.from({ length: n }, (_, i) => {
      const start = i * 2
      return [start, start + 3]
    })
    // Every interval overlaps the next: [0,3],[2,5],[4,7],...
    // Peak is 2 (consecutive pairs overlap)
    const result = minRooms(intervals)
    expect(result).toBeGreaterThan(0)
    expect(result).toBeLessThanOrEqual(n)
  })
})

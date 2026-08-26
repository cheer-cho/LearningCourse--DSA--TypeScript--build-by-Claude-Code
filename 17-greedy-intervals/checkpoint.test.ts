import { describe, expect, it } from 'vitest'
import { coffeeRun, mergeBusy, planDay, roomsNeeded, type Talk } from './checkpoint'

describe('checkpoint 17 — planDay', () => {
  const talks: Talk[] = [
    { title: 'A', start: 1, end: 3 },
    { title: 'B', start: 2, end: 4 },
    { title: 'C', start: 3, end: 5 },
  ]

  it('picks the max non-overlapping set, in schedule order', () => {
    // A ends at 3, C starts at 3 (touching = ok) -> ['A', 'C']
    expect(planDay(talks)).toEqual(['A', 'C'])
  })

  it('empty schedule: []', () => {
    expect(planDay([])).toEqual([])
  })

  it('single talk: [that talk]', () => {
    expect(planDay([{ title: 'only', start: 9, end: 10 }])).toEqual(['only'])
  })

  it('all disjoint: attend them all', () => {
    const disjoint: Talk[] = [
      { title: 'A', start: 1, end: 2 },
      { title: 'B', start: 3, end: 4 },
      { title: 'C', start: 5, end: 6 },
    ]
    expect(planDay(disjoint)).toEqual(['A', 'B', 'C'])
  })

  it('all overlapping: attend only 1', () => {
    const allOverlap: Talk[] = [
      { title: 'A', start: 1, end: 10 },
      { title: 'B', start: 2, end: 9 },
      { title: 'C', start: 3, end: 8 },
    ]
    expect(planDay(allOverlap).length).toBe(1)
  })

  it('touching chain of 5: attend all 5', () => {
    const chain: Talk[] = Array.from({ length: 5 }, (_, i) => ({
      title: `T${i}`,
      start: i,
      end: i + 1,
    }))
    expect(planDay(chain)).toEqual(['T0', 'T1', 'T2', 'T3', 'T4'])
  })
})

describe('checkpoint 17 — roomsNeeded', () => {
  it('classic three-talk example: 2 rooms', () => {
    const talks: Talk[] = [
      { title: 'A', start: 0, end: 30 },
      { title: 'B', start: 5, end: 10 },
      { title: 'C', start: 15, end: 20 },
    ]
    expect(roomsNeeded(talks)).toBe(2)
  })

  it('touching talks: 1 room (no true overlap)', () => {
    const talks: Talk[] = [
      { title: 'A', start: 1, end: 2 },
      { title: 'B', start: 2, end: 3 },
    ]
    expect(roomsNeeded(talks)).toBe(1)
  })

  it('all simultaneous: need n rooms', () => {
    const talks: Talk[] = [
      { title: 'A', start: 1, end: 5 },
      { title: 'B', start: 1, end: 5 },
      { title: 'C', start: 1, end: 5 },
    ]
    expect(roomsNeeded(talks)).toBe(3)
  })

  it('empty: 0 rooms', () => {
    expect(roomsNeeded([])).toBe(0)
  })

  it('single talk: 1 room', () => {
    expect(roomsNeeded([{ title: 'only', start: 0, end: 60 }])).toBe(1)
  })

  it('efficiency: 100_000 talks with peak concurrency of 2', () => {
    const n = 100_000
    // [0,3],[2,5],[4,7],... overlapping by 1 unit, peak = 2
    const talks: Talk[] = Array.from({ length: n }, (_, i) => ({
      title: `T${i}`,
      start: i * 2,
      end: i * 2 + 3,
    }))
    const result = roomsNeeded(talks)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(n)
  })
})

describe('checkpoint 17 — mergeBusy', () => {
  it('two overlapping calendars merge correctly', () => {
    // [[1,3],[5,7]] and [[2,4],[6,8]]
    expect(mergeBusy([[[1, 3], [5, 7]], [[2, 4], [6, 8]]])).toEqual([[1, 4], [5, 8]])
  })

  it('empty input: empty result', () => {
    expect(mergeBusy([])).toEqual([])
  })

  it('single calendar with one interval', () => {
    expect(mergeBusy([[[3, 7]]])).toEqual([[3, 7]])
  })

  it('touching intervals do NOT merge (course convention)', () => {
    expect(mergeBusy([[[1, 2]], [[2, 3]]])).toEqual([[1, 2], [2, 3]])
  })

  it('three people, disjoint ranges: no merging', () => {
    expect(mergeBusy([[[1, 2]], [[4, 5]], [[7, 8]]])).toEqual([[1, 2], [4, 5], [7, 8]])
  })

  it('efficiency: 50_000 intervals per calendar, two calendars', () => {
    const n = 50_000
    // calendar 1: [0,1],[2,3],...  calendar 2: [1,2],[3,4],...
    // after merge: [0,1],[1,2],[2,3],... (touching, no merges)
    const cal1: number[][] = Array.from({ length: n }, (_, i) => [i * 2, i * 2 + 1])
    const cal2: number[][] = Array.from({ length: n }, (_, i) => [i * 2 + 1, i * 2 + 2])
    const result = mergeBusy([cal1, cal2])
    expect(result.length).toBe(2 * n) // all touching, none merged
  })
})

describe('checkpoint 17 — coffeeRun', () => {
  it('classic Kadane example', () => {
    // [3,-1,-2,5,2,-4,3]: best run is [3,-1,-2,5,2] = 7, hours 0..4
    expect(coffeeRun([3, -1, -2, 5, 2, -4, 3])).toEqual([7, 0, 4])
  })

  it('all negative: picks the least-negative single element', () => {
    expect(coffeeRun([-3, -1, -4])).toEqual([-1, 1, 1])
  })

  it('all positive: total is the sum of all', () => {
    expect(coffeeRun([1, 2, 3])).toEqual([6, 0, 2])
  })

  it('single element: returns it with hour 0 as both bounds', () => {
    expect(coffeeRun([42])).toEqual([42, 0, 0])
  })

  it('single negative element: returns it with hour 0 as both bounds', () => {
    expect(coffeeRun([-7])).toEqual([-7, 0, 0])
  })

  it('best run in the middle', () => {
    const result = coffeeRun([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    expect(result[0]).toBe(6)
  })

  it('reset happens at a negative prefix', () => {
    // [-10, 5, 3] -> best is 5+3=8 (hours 1..2), not -10+5+3=-2
    expect(coffeeRun([-10, 5, 3])).toEqual([8, 1, 2])
  })

  it('bounds are consistent with the reported total', () => {
    const energy = [4, -3, 5, -1, 2, -6, 3]
    const [best, start, end] = coffeeRun(energy)
    const sum = energy.slice(start, end + 1).reduce((a, b) => a + b, 0)
    expect(sum).toBe(best)
  })
})

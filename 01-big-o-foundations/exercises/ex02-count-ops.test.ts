import { describe, expect, it } from 'vitest'
import { allPairs, halveDown, sumAll } from './ex02-count-ops'

function counter(): { tick: () => void; readonly count: number } {
  let count = 0
  return {
    tick: () => {
      count++
    },
    get count() {
      return count
    },
  }
}

describe('ex02 — count-ops', () => {
  describe('sumAll', () => {
    it('sums an empty array with zero ticks', () => {
      const c = counter()
      expect(sumAll([], c.tick)).toBe(0)
      expect(c.count).toBe(0)
    })

    it('ticks exactly once per element', () => {
      const c = counter()
      expect(sumAll([1, 2, 3, 4], c.tick)).toBe(10)
      expect(c.count).toBe(4)
    })

    it('tick count scales linearly with input size', () => {
      for (const n of [10, 100, 1000]) {
        const c = counter()
        sumAll(
          Array.from({ length: n }, (_, i) => i),
          c.tick,
        )
        expect(c.count).toBe(n)
      }
    })
  })

  describe('allPairs', () => {
    it('produces zero pairs and zero ticks for an empty array', () => {
      const c = counter()
      expect(allPairs([], c.tick)).toEqual([])
      expect(c.count).toBe(0)
    })

    it('produces n^2 pairs, row-major, i outer j inner', () => {
      const c = counter()
      expect(allPairs(['a', 'b'], c.tick)).toEqual([
        ['a', 'a'],
        ['a', 'b'],
        ['b', 'a'],
        ['b', 'b'],
      ])
      expect(c.count).toBe(4)
    })

    it('tick count scales quadratically with input size', () => {
      for (const n of [5, 10, 20]) {
        const c = counter()
        allPairs(
          Array.from({ length: n }, (_, i) => i),
          c.tick,
        )
        expect(c.count).toBe(n * n)
      }
    })
  })

  describe('halveDown', () => {
    it('takes zero ticks for n = 0', () => {
      const c = counter()
      expect(halveDown(0, c.tick)).toBe(0)
      expect(c.count).toBe(0)
    })

    it('takes exactly 1 tick for n = 1', () => {
      const c = counter()
      expect(halveDown(1, c.tick)).toBe(1)
      expect(c.count).toBe(1)
    })

    it('matches floor(log2(n)) + 1 for several sizes', () => {
      const cases: [number, number][] = [
        [2, 2],
        [7, 3],
        [8, 4],
        [16, 5],
        [1000, 10],
      ]
      for (const [n, expected] of cases) {
        const c = counter()
        expect(halveDown(n, c.tick)).toBe(expected)
        expect(c.count).toBe(expected)
      }
    })

    it('tick count grows logarithmically, not linearly', () => {
      const small = counter()
      halveDown(1_000, small.tick)
      const large = counter()
      halveDown(1_000_000, large.tick)
      // 1000x the input, but nowhere near 1000x the ticks
      expect(large.count).toBeLessThan(small.count * 3)
    })
  })
})

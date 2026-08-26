import { describe, expect, it } from 'vitest'
import { RangeMinTree } from './ex02-range-min-tree'

describe('21/ex02 — RangeMinTree', () => {
  it('finds the minimum over the full array', () => {
    const rm = new RangeMinTree([3, 1, 4, 1, 5, 9])
    expect(rm.rangeMin(0, 5)).toBe(1)
  })

  it('finds the minimum in a sub-range', () => {
    const rm = new RangeMinTree([3, 1, 4, 1, 5, 9])
    expect(rm.rangeMin(2, 5)).toBe(1)
    expect(rm.rangeMin(2, 2)).toBe(4)
    expect(rm.rangeMin(4, 5)).toBe(5)
  })

  it('single element range returns that element', () => {
    const rm = new RangeMinTree([7, 2, 9])
    expect(rm.rangeMin(0, 0)).toBe(7)
    expect(rm.rangeMin(1, 1)).toBe(2)
    expect(rm.rangeMin(2, 2)).toBe(9)
  })

  it('reflects a point update in subsequent queries', () => {
    const rm = new RangeMinTree([3, 1, 4, 1, 5, 9])
    rm.update(1, 10)
    expect(rm.rangeMin(0, 5)).toBe(1)  // index 3 still holds 1
    rm.update(3, 10)
    expect(rm.rangeMin(0, 5)).toBe(3)  // now the min is index 0
  })

  it('handles negative values', () => {
    const rm = new RangeMinTree([-5, 3, -2, 8, -1])
    expect(rm.rangeMin(0, 4)).toBe(-5)
    expect(rm.rangeMin(1, 4)).toBe(-2)
    rm.update(0, -100)
    expect(rm.rangeMin(0, 4)).toBe(-100)
  })

  it('handles an array of length 1', () => {
    const rm = new RangeMinTree([42])
    expect(rm.rangeMin(0, 0)).toBe(42)
    rm.update(0, -1)
    expect(rm.rangeMin(0, 0)).toBe(-1)
  })

  it('handles equal elements', () => {
    const rm = new RangeMinTree([5, 5, 5, 5, 5])
    expect(rm.rangeMin(0, 4)).toBe(5)
    rm.update(2, 3)
    expect(rm.rangeMin(0, 4)).toBe(3)
    expect(rm.rangeMin(0, 1)).toBe(5)
  })

  it('efficiency: n=100_000 with 50_000 mixed ops completes quickly', () => {
    const n = 100_000
    const nums = Array.from({ length: n }, (_, i) => n - i)
    const rm = new RangeMinTree(nums)

    const start = performance.now()
    let checksum = 0
    for (let op = 0; op < 50_000; op++) {
      if (op % 2 === 0) {
        const idx = (op * 11) % n
        rm.update(idx, (op % 50) - 25)
      } else {
        const lo = (op * 3) % n
        const hi = Math.min(lo + 500, n - 1)
        checksum += rm.rangeMin(lo, hi)
      }
    }
    const elapsed = performance.now() - start
    expect(elapsed).toBeLessThan(2000)
    expect(checksum).toBeLessThan(Infinity)
  })
})

import { describe, expect, it } from 'vitest'
import { MedianFinder } from './ex06-running-median'

describe('12/ex06 — running median with two heaps', () => {
  it('tracks the median through an odd-then-even stream', () => {
    const mf = new MedianFinder()
    mf.add(5)
    expect(mf.median()).toBe(5)
    mf.add(15)
    expect(mf.median()).toBe(10)
    mf.add(1)
    expect(mf.median()).toBe(5)
    mf.add(3)
    expect(mf.median()).toBeCloseTo(4)
  })

  it('throws before any numbers are added', () => {
    expect(() => new MedianFinder().median()).toThrow()
  })

  it('handles a single value', () => {
    const mf = new MedianFinder()
    mf.add(42)
    expect(mf.median()).toBe(42)
  })

  it('handles values arriving in descending order', () => {
    const mf = new MedianFinder()
    for (const v of [9, 7, 5, 3, 1]) mf.add(v)
    expect(mf.median()).toBe(5)
  })

  it('handles duplicate values', () => {
    const mf = new MedianFinder()
    for (const v of [2, 2, 2, 2]) mf.add(v)
    expect(mf.median()).toBe(2)
  })

  it('matches a sort-based oracle across 100_000 interleaved adds and median calls', () => {
    const mf = new MedianFinder()
    const seen: number[] = []
    for (let i = 0; i < 100_000; i++) {
      const val = Math.floor(Math.random() * 1_000_000)
      mf.add(val)
      seen.push(val)
      if (i % 5_000 === 0) {
        const sorted = [...seen].sort((a, b) => a - b)
        const mid = Math.floor(sorted.length / 2)
        const expected = sorted.length % 2 === 1 ? sorted[mid]! : (sorted[mid - 1]! + sorted[mid]!) / 2
        expect(mf.median()).toBeCloseTo(expected)
      }
    }
  })
})

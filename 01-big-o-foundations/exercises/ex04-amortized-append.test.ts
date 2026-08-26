import { describe, expect, it } from 'vitest'
import { appendCosts, totalCost } from './ex04-amortized-append'

describe('ex04 — amortized-append', () => {
  it('returns an empty list for zero appends', () => {
    expect(appendCosts(0)).toEqual([])
    expect(totalCost(0)).toBe(0)
  })

  it('matches the traced-by-hand cost sequence for the first 9 appends', () => {
    expect(appendCosts(9)).toEqual([1, 2, 3, 1, 5, 1, 1, 1, 9])
  })

  it('totalCost is the sum of appendCosts', () => {
    for (const n of [0, 1, 5, 9, 20]) {
      expect(totalCost(n)).toBe(appendCosts(n).reduce((a, b) => a + b, 0))
    }
  })

  it('stays within the amortized bound: total cost <= 3n', () => {
    for (const n of [1, 10, 100, 1_000, 100_000]) {
      expect(totalCost(n)).toBeLessThanOrEqual(3 * n)
    }
  })

  it('a single append never costs more than the current size + 1, and resizes double capacity', () => {
    const costs = appendCosts(50)
    let capacity = 1
    let size = 0
    for (const cost of costs) {
      if (size === capacity) {
        expect(cost).toBe(size + 1)
        capacity *= 2
      } else {
        expect(cost).toBe(1)
      }
      size++
    }
  })
})

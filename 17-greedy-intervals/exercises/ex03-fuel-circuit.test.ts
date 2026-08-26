import { describe, expect, it } from 'vitest'
import { startStation } from './ex03-fuel-circuit'

describe('17/ex03 — startStation', () => {
  it('classic case: valid start partway through', () => {
    expect(startStation([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3)
  })

  it('total cost exceeds total gas: no valid start', () => {
    expect(startStation([2, 3, 4], [3, 4, 3])).toBe(-1)
  })

  it('starting at index 0 already works', () => {
    expect(startStation([5, 1, 1], [1, 1, 1])).toBe(0)
  })

  it('single station: gas covers its own cost', () => {
    expect(startStation([5], [3])).toBe(0)
  })

  it('single station: gas cannot cover its own cost', () => {
    expect(startStation([2], [3])).toBe(-1)
  })

  it('empty route: no valid start', () => {
    expect(startStation([], [])).toBe(-1)
  })

  it('exactly balanced totals: still finds the unique valid start', () => {
    expect(startStation([3, 1, 1], [1, 2, 2])).toBe(0)
  })

  it('efficiency: n = 200_000 all-balanced stations completes instantly', () => {
    const n = 200_000
    const gas = new Array(n).fill(1)
    const cost = new Array(n).fill(1)
    expect(startStation(gas, cost)).toBe(0)
  })
})

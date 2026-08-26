import { describe, expect, it } from 'vitest'
import { maxLoot, maxLootCircle } from './ex03-robber-houses'

describe('ex18/ex03 — maxLoot', () => {
  it('handles no warehouses', () => {
    expect(maxLoot([])).toBe(0)
  })

  it('handles a single warehouse', () => {
    expect(maxLoot([5])).toBe(5)
  })

  it('handles two warehouses (can only hit one)', () => {
    expect(maxLoot([2, 9])).toBe(9)
  })

  it('picks the best non-adjacent combination', () => {
    expect(maxLoot([2, 7, 9, 3, 1])).toBe(12) // 2 + 9 + 1
  })

  it('handles all-equal warehouses (alternate picks)', () => {
    expect(maxLoot([4, 4, 4, 4])).toBe(8)
  })

  it('handles a run where hitting every other one is optimal', () => {
    expect(maxLoot([1, 2, 3, 1])).toBe(4) // 1 + 3
  })

  it('handles negative-value warehouses (skip them entirely)', () => {
    expect(maxLoot([-1, -2, -3])).toBe(0) // taking nothing beats any pick
  })
})

describe('ex18/ex03 — maxLootCircle', () => {
  it('handles a single warehouse (no self-adjacency issue)', () => {
    expect(maxLootCircle([5])).toBe(5)
  })

  it('handles two warehouses (they are adjacent both ways, pick the bigger)', () => {
    expect(maxLootCircle([3, 9])).toBe(9)
  })

  it('cannot take both ends of the circle', () => {
    expect(maxLootCircle([2, 3, 2])).toBe(3)
  })

  it('finds the best circular combination', () => {
    expect(maxLootCircle([1, 2, 3, 1])).toBe(4)
  })

  it('is never larger than the linear version on the same values', () => {
    const values = [6, 7, 1, 3, 8, 2, 4]
    expect(maxLootCircle(values)).toBeLessThanOrEqual(maxLoot(values))
  })
})

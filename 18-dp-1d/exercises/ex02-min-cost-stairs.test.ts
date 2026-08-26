import { describe, expect, it } from 'vitest'
import { minCostClimb } from './ex02-min-cost-stairs'

describe('ex18/ex02 — minCostClimb', () => {
  it('handles the empty staircase (already at the top)', () => {
    expect(minCostClimb([])).toBe(0)
  })

  it('handles a single step (top is one past it, free start)', () => {
    expect(minCostClimb([5])).toBe(0)
  })

  it('picks the cheaper of the two free starting steps', () => {
    expect(minCostClimb([1, 2])).toBe(1)
  })

  it('finds the cheapest path across a short staircase', () => {
    expect(minCostClimb([10, 15, 20])).toBe(15)
  })

  it('finds the cheapest path across a longer, uneven staircase', () => {
    expect(minCostClimb([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
  })

  it('handles every step costing the same', () => {
    expect(minCostClimb([5, 5, 5, 5, 5])).toBe(10)
  })

  it('handles a staircase with a zero-cost step to hop through', () => {
    expect(minCostClimb([0, 0, 0, 1])).toBe(0)
  })
})

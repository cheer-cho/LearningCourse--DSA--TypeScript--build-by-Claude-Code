import { describe, expect, it } from 'vitest'
import { growthRates } from './ex01-growth-rates'

describe('ex01 — growth-rates', () => {
  const answers = growthRates()

  it('snippet A: a single indexed read is O(1)', () => {
    expect(answers.A).toBe('O(1)')
  })

  it('snippet B: one pass over the array is O(n)', () => {
    expect(answers.B).toBe('O(n)')
  })

  it('snippet C: nested loops over the same array multiply to O(n^2)', () => {
    expect(answers.C).toBe('O(n^2)')
  })

  it('snippet D: halving n each step is O(log n)', () => {
    expect(answers.D).toBe('O(log n)')
  })

  it('snippet E: two SEQUENTIAL passes add, they do not multiply, so O(n)', () => {
    expect(answers.E).toBe('O(n)')
  })

  it('snippet F: a comparison sort is O(n log n)', () => {
    expect(answers.F).toBe('O(n log n)')
  })

  it('snippet G: branching into two recursive calls each step is O(2^n)', () => {
    expect(answers.G).toBe('O(2^n)')
  })

  it('snippet H: visiting every cell of an n x n matrix is O(n^2)', () => {
    expect(answers.H).toBe('O(n^2)')
  })

  it('growthRates answers every snippet exactly once', () => {
    expect(Object.keys(answers).sort()).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'])
  })
})

import { describe, expect, it } from 'vitest'
import { insertPosition, lowerBound, upperBound } from './ex02-boundaries'

describe('ex10/ex02 — lowerBound', () => {
  it('finds the first of a run of duplicates', () => {
    expect(lowerBound([1, 3, 3, 3, 5], 3)).toBe(1)
  })

  it('finds an insertion point between elements', () => {
    expect(lowerBound([1, 3, 5, 7], 4)).toBe(2)
  })

  it('returns 0 when x is smaller than everything', () => {
    expect(lowerBound([5, 6, 7], 1)).toBe(0)
  })

  it('returns length when x is bigger than everything', () => {
    expect(lowerBound([1, 2, 3], 10)).toBe(3)
  })

  it('handles an empty array', () => {
    expect(lowerBound([], 5)).toBe(0)
  })

  it('handles an all-equal array', () => {
    expect(lowerBound([4, 4, 4, 4], 4)).toBe(0)
    expect(lowerBound([4, 4, 4, 4], 5)).toBe(4)
    expect(lowerBound([4, 4, 4, 4], 3)).toBe(0)
  })
})

describe('ex10/ex02 — upperBound', () => {
  it('finds the index just past a run of duplicates', () => {
    expect(upperBound([1, 3, 3, 3, 5], 3)).toBe(4)
  })

  it('matches lowerBound when x is absent', () => {
    expect(upperBound([1, 3, 5, 7], 4)).toBe(2)
    expect(upperBound([1, 3, 5, 7], 4)).toBe(lowerBound([1, 3, 5, 7], 4))
  })

  it('returns 0 when x is smaller than everything', () => {
    expect(upperBound([5, 6, 7], 1)).toBe(0)
  })

  it('returns length when x is bigger than everything', () => {
    expect(upperBound([1, 2, 3], 10)).toBe(3)
  })

  it('handles an empty array', () => {
    expect(upperBound([], 5)).toBe(0)
  })

  it('handles an all-equal array', () => {
    expect(upperBound([4, 4, 4, 4], 4)).toBe(4)
  })
})

describe('ex10/ex02 — insertPosition', () => {
  it('slots between two elements', () => {
    expect(insertPosition([1, 3, 5, 7], 4)).toBe(2)
  })

  it('goes to the front when smaller than everything', () => {
    expect(insertPosition([1, 3, 5, 7], 0)).toBe(0)
  })

  it('goes to the end when bigger than everything', () => {
    expect(insertPosition([1, 3, 5, 7], 9)).toBe(4)
  })

  it('prefers the leftmost slot when the value is already present', () => {
    expect(insertPosition([1, 3, 3, 3, 5], 3)).toBe(1)
  })

  it('handles an empty array', () => {
    expect(insertPosition([], 42)).toBe(0)
  })

  it('is exact for a single-element array', () => {
    expect(insertPosition([5], 5)).toBe(0)
    expect(insertPosition([5], 1)).toBe(0)
    expect(insertPosition([5], 9)).toBe(1)
  })
})

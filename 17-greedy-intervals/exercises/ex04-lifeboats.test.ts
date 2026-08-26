import { describe, expect, it } from 'vitest'
import { assignKits, minBoats } from './ex04-lifeboats'

describe('17/ex04 — minBoats', () => {
  it('two people, one boat', () => {
    expect(minBoats([1, 2], 3)).toBe(1)
  })

  it('classic case: some pair, some go alone', () => {
    expect(minBoats([3, 2, 2, 1], 3)).toBe(3)
  })

  it('empty input: zero boats', () => {
    expect(minBoats([], 10)).toBe(0)
  })

  it('single person: one boat', () => {
    expect(minBoats([5], 10)).toBe(1)
  })

  it('everyone at the exact limit: no pairing possible', () => {
    expect(minBoats([5, 5, 5, 5], 5)).toBe(4)
  })

  it('everyone very light: pairs up completely', () => {
    expect(minBoats([1, 1, 1, 1], 10)).toBe(2)
  })

  it('efficiency: n = 200_000 uniform light weights completes instantly', () => {
    const n = 200_000
    const weights = new Array(n).fill(1)
    expect(minBoats(weights, 10)).toBe(Math.ceil(n / 2))
  })
})

describe('17/ex04 — assignKits', () => {
  it('classic case: every kit finds a fit', () => {
    expect(assignKits([1, 2, 3], [1, 2])).toBe(2)
  })

  it('more needs than kits', () => {
    expect(assignKits([1, 2], [1, 2, 3])).toBe(2)
  })

  it('no kit is big enough for any need', () => {
    expect(assignKits([1, 1], [5, 5])).toBe(0)
  })

  it('empty kits: nothing satisfied', () => {
    expect(assignKits([], [1, 2, 3])).toBe(0)
  })

  it('empty needs: nothing to satisfy', () => {
    expect(assignKits([1, 2, 3], [])).toBe(0)
  })

  it('unsorted input still works (sorts internally)', () => {
    expect(assignKits([3, 1, 2], [2, 1])).toBe(2)
  })

  it('efficiency: n = 100_000 kits and needs completes instantly', () => {
    const n = 100_000
    // Identical size ladders: kit i exactly matches need i everywhere,
    // so every single need gets satisfied.
    const kits = Array.from({ length: n }, (_, i) => i)
    const needs = Array.from({ length: n }, (_, i) => i)
    expect(assignKits(kits, needs)).toBe(n)
  })
})

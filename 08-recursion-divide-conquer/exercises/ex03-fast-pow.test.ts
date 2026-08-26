import { describe, expect, it } from 'vitest'
import { power, powerMod } from './ex03-fast-pow'

describe('ex08/ex03 — power', () => {
  it('handles the base cases', () => {
    expect(power(2, 0)).toBe(1)
    expect(power(0, 0)).toBe(1)
    expect(power(7, 1)).toBe(7)
  })

  it('computes positive powers', () => {
    expect(power(2, 10)).toBe(1024)
    expect(power(3, 5)).toBe(243)
  })

  it('handles negative exponents', () => {
    expect(power(2, -2)).toBeCloseTo(0.25)
    expect(power(3, -1)).toBeCloseTo(1 / 3)
  })

  it('makes roughly log2(n) recursive calls, not ~n', () => {
    let calls = 0
    power(2, 1000, () => {
      calls += 1
    })
    // A generous bound: well beyond exact, but nowhere near linear.
    expect(calls).toBeLessThanOrEqual(Math.ceil(Math.log2(1000)) + 3)
    expect(calls).toBeGreaterThan(0)
  })

  it('stays cheap for a large exponent where linear would not', () => {
    let calls = 0
    const result = power(1.0001, 100_000, () => {
      calls += 1
    })
    expect(Number.isFinite(result)).toBe(true)
    expect(result).toBeGreaterThan(0)
    expect(calls).toBeLessThan(100) // naive O(n) would take 100,000 calls
  })
})

describe('ex08/ex03 — powerMod', () => {
  it('handles the base cases', () => {
    expect(powerMod(5, 0, 7)).toBe(1)
    expect(powerMod(7, 128, 1)).toBe(0)
  })

  it('computes modular powers', () => {
    expect(powerMod(2, 10, 1000)).toBe(24)
    expect(powerMod(4, 13, 497)).toBe(445)
    expect(powerMod(3, 17, 101)).toBe(48)
  })

  it('stays fast and correct for a large exponent (needed for Rabin-Karp later)', () => {
    expect(powerMod(3, 1_000_000, 1_000_003)).toBe(222223)
  })

  it('makes roughly log2(exp) recursive calls, not ~exp', () => {
    let calls = 0
    const result = powerMod(3, 1_000_000, 1_000_003, () => {
      calls += 1
    })
    // log2(1_000_000) ~= 20; naive O(exp) would take a million calls.
    expect(result).toBe(222223)
    expect(calls).toBeLessThan(40)
  })
})

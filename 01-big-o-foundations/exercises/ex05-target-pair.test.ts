import { describe, expect, it } from 'vitest'
import { hasPairBrute, hasPairFast } from './ex05-target-pair'

describe.each([
  ['hasPairBrute', hasPairBrute],
  ['hasPairFast', hasPairFast],
] as const)('ex05 — target-pair: %s', (_name, fn) => {
  it('finds a pair that sums to the target', () => {
    expect(fn([2, 7, 11, 15], 9)).toBe(true)
  })

  it('returns false when no pair sums to the target', () => {
    expect(fn([1, 2, 3], 100)).toBe(false)
  })

  it('does not pair an element with itself', () => {
    // only a single 4 in the array; 4 + 4 = 8 must NOT count
    expect(fn([4, 1, 2], 8)).toBe(false)
  })

  it('does pair two equal values at different positions', () => {
    expect(fn([4, 4, 1], 8)).toBe(true)
  })

  it('handles negatives', () => {
    expect(fn([-3, 4, 1, -1], -4)).toBe(true)
  })

  it('handles empty and single-element arrays', () => {
    expect(fn([], 5)).toBe(false)
    expect(fn([5], 10)).toBe(false)
  })
})

describe('ex05 — target-pair: hasPairFast efficiency', () => {
  it('stays fast at n = 200,000 with no matching pair', () => {
    const nums = Array.from({ length: 200_000 }, (_, i) => i)
    expect(hasPairFast(nums, -1)).toBe(false)
  })

  it('stays fast at n = 200,000 and still finds a late pair', () => {
    const nums = Array.from({ length: 200_000 }, (_, i) => i)
    expect(hasPairFast(nums, 199_998 + 199_999)).toBe(true)
  })
})

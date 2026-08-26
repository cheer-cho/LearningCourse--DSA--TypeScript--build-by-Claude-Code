import { describe, expect, it } from 'vitest'
import { minWindowCover } from './ex07-min-cover-window'

describe('05/ex07 — min cover window', () => {
  it('finds the classic shortest covering window', () => {
    expect(minWindowCover('ADOBECODEBANC', 'ABC')).toBe('BANC')
  })

  it('returns empty when t needs more of a char than s has', () => {
    expect(minWindowCover('a', 'aa')).toBe('')
  })

  it('returns empty when t is empty', () => {
    expect(minWindowCover('abc', '')).toBe('')
  })

  it('returns empty when s is shorter than t', () => {
    expect(minWindowCover('ab', 'abc')).toBe('')
  })

  it('handles s equal to t (any order)', () => {
    expect(minWindowCover('cba', 'abc')).toBe('cba')
  })

  it('respects multiplicity (two required a"s)', () => {
    expect(minWindowCover('aaflaabc', 'aab')).toBe('aab')
  })

  it('handles no overlap at all', () => {
    expect(minWindowCover('xyz', 'abc')).toBe('')
  })

  it('efficiency: a 100_000-char haystack completes and is correct', () => {
    const noise = 'x'.repeat(50_000)
    const s = noise + 'cba' + noise
    expect(minWindowCover(s, 'abc')).toBe('cba')
  })
})

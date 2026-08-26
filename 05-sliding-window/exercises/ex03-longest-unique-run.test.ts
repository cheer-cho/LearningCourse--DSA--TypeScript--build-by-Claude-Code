import { describe, expect, it } from 'vitest'
import { longestUnique } from './ex03-longest-unique-run'

describe('05/ex03 — longest unique run', () => {
  it('handles the classic repeat-then-recover case', () => {
    expect(longestUnique('abcabcbb')).toBe(3)
  })

  it('handles a single repeated character', () => {
    expect(longestUnique('bbbbb')).toBe(1)
  })

  it('handles a mix with a longer unique tail', () => {
    expect(longestUnique('pwwkew')).toBe(3) // "wke"
  })

  it('returns 0 for an empty string', () => {
    expect(longestUnique('')).toBe(0)
  })

  it('handles a single character', () => {
    expect(longestUnique('x')).toBe(1)
  })

  it('handles an already-all-unique string', () => {
    expect(longestUnique('abcdef')).toBe(6)
  })

  it('handles a repeat right at the start of the window', () => {
    expect(longestUnique('aab')).toBe(2)
  })

  it('efficiency: a 260_000-char repeating pattern completes and is correct', () => {
    const cycle = 'abcdefghijklmnopqrstuvwxyz'
    const s = cycle.repeat(10_000)
    expect(longestUnique(s)).toBe(26)
  })
})

import { describe, expect, it } from 'vitest'
import { longestUniformWithKEdits } from './ex04-longest-with-swaps'

describe('05/ex04 — longest with swaps', () => {
  it('finds a window needing exactly k replacements', () => {
    expect(longestUniformWithKEdits('aabccbb', 2)).toBe(5)
  })

  it('handles k = 0 (must already be uniform)', () => {
    expect(longestUniformWithKEdits('abcde', 0)).toBe(1)
  })

  it('handles k = 0 with an existing run', () => {
    expect(longestUniformWithKEdits('aaabbb', 0)).toBe(3)
  })

  it('handles a string already uniform', () => {
    expect(longestUniformWithKEdits('aaaa', 1)).toBe(4)
  })

  it('handles k covering the whole string', () => {
    expect(longestUniformWithKEdits('abcd', 4)).toBe(4)
  })

  it('returns 0 for an empty string', () => {
    expect(longestUniformWithKEdits('', 2)).toBe(0)
  })

  it('handles a single character', () => {
    expect(longestUniformWithKEdits('z', 0)).toBe(1)
  })

  it('throws for a negative k', () => {
    expect(() => longestUniformWithKEdits('abc', -1)).toThrow(RangeError)
  })

  it('efficiency: a 200_000-char string completes and is correct', () => {
    // Repeating "aaab" blocks: within any window, at most 1 in 4 chars is
    // 'b'; with a generous k the whole string should become reachable.
    const s = 'aaab'.repeat(50_000)
    expect(longestUniformWithKEdits(s, 50_000)).toBe(s.length)
  })
})

import { describe, expect, it } from 'vitest'
import { containsPermutation } from './ex06-window-anagram'

describe('05/ex06 — window anagram', () => {
  it('finds a permutation window in the middle of the haystack', () => {
    expect(containsPermutation('abc', 'eidbacoo')).toBe(true) // "bac"
  })

  it('returns false when no window matches', () => {
    expect(containsPermutation('ab', 'eidboaoo')).toBe(false)
  })

  it('returns true for an empty needle', () => {
    expect(containsPermutation('', 'anything')).toBe(true)
  })

  it('returns false when needle is longer than haystack', () => {
    expect(containsPermutation('abcd', 'abc')).toBe(false)
  })

  it('matches when haystack equals needle exactly', () => {
    expect(containsPermutation('abc', 'cba')).toBe(true)
  })

  it('handles repeated letters in needle (multiset, not set)', () => {
    expect(containsPermutation('aab', 'aabbaa')).toBe(true)
    expect(containsPermutation('aab', 'abcabc')).toBe(false) // never two a's in one window
  })

  it('handles a single-character needle', () => {
    expect(containsPermutation('z', 'abcz')).toBe(true)
    expect(containsPermutation('z', 'abcd')).toBe(false)
  })

  it('efficiency: a 200_000-char haystack completes and is correct', () => {
    const noise = 'x'.repeat(100_000)
    const haystack = noise + 'bca' + noise
    expect(containsPermutation('abc', haystack)).toBe(true)
    expect(containsPermutation('abc', noise)).toBe(false)
  })
})

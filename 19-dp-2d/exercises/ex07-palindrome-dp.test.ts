import { describe, expect, it } from 'vitest'
import { countPalindromicSubstrings, longestPalindromicSubstring } from './ex07-palindrome-dp'

describe('ex19/ex07 — countPalindromicSubstrings', () => {
  it('"abc" has 3 palindromic substrings (a, b, c)', () => {
    expect(countPalindromicSubstrings('abc')).toBe(3)
  })

  it('"aaa" has 6 palindromic substrings', () => {
    // "a"(0), "a"(1), "a"(2), "aa"(0-1), "aa"(1-2), "aaa"
    expect(countPalindromicSubstrings('aaa')).toBe(6)
  })

  it('"aba" has 4 palindromic substrings', () => {
    // "a"(0), "b"(1), "a"(2), "aba"
    expect(countPalindromicSubstrings('aba')).toBe(4)
  })

  it('single character -> 1', () => {
    expect(countPalindromicSubstrings('a')).toBe(1)
  })

  it('empty string -> 0', () => {
    expect(countPalindromicSubstrings('')).toBe(0)
  })

  it('"abba" has 6 palindromic substrings', () => {
    // "a"(0), "b"(1), "b"(2), "a"(3), "bb", "abba"
    expect(countPalindromicSubstrings('abba')).toBe(6)
  })

  it('"racecar" has 10 palindromic substrings', () => {
    expect(countPalindromicSubstrings('racecar')).toBe(10)
  })

  it('efficiency: 2000-char string completes without timeout', () => {
    const s = 'ab'.repeat(1000)
    const result = countPalindromicSubstrings(s)
    expect(result).toBeGreaterThan(0)
  })
})

describe('ex19/ex07 — longestPalindromicSubstring', () => {
  it('"babad" -> "bab" or "aba" (either is valid)', () => {
    const result = longestPalindromicSubstring('babad')
    expect(['bab', 'aba']).toContain(result)
  })

  it('"cbbd" -> "bb"', () => {
    expect(longestPalindromicSubstring('cbbd')).toBe('bb')
  })

  it('single character -> itself', () => {
    expect(longestPalindromicSubstring('a')).toBe('a')
  })

  it('"racecar" -> "racecar"', () => {
    expect(longestPalindromicSubstring('racecar')).toBe('racecar')
  })

  it('"abacaba" -> "abacaba"', () => {
    expect(longestPalindromicSubstring('abacaba')).toBe('abacaba')
  })

  it('"ac" -> "a" (first of equal length)', () => {
    expect(longestPalindromicSubstring('ac')).toBe('a')
  })

  it('"aab" -> "aa"', () => {
    expect(longestPalindromicSubstring('aab')).toBe('aa')
  })

  it('"aaaa" -> "aaaa"', () => {
    expect(longestPalindromicSubstring('aaaa')).toBe('aaaa')
  })

  it('efficiency: 2000-char string completes without timeout', () => {
    const s = 'a'.repeat(1000) + 'b'.repeat(1000)
    const result = longestPalindromicSubstring(s)
    expect(result.length).toBeGreaterThanOrEqual(1000)
  })
})

import { describe, expect, it } from 'vitest'
import { isCleanPalindrome, validAfterOneDelete } from './ex02-valid-palindrome'

describe('ex04/ex02 — isCleanPalindrome', () => {
  it('ignores punctuation, spaces, and case', () => {
    expect(isCleanPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  })

  it('rejects a non-palindrome after cleaning', () => {
    expect(isCleanPalindrome('race a car')).toBe(false)
  })

  it('treats empty and single-character strings as palindromes', () => {
    expect(isCleanPalindrome('')).toBe(true)
    expect(isCleanPalindrome('a')).toBe(true)
  })

  it('handles a string with no alphanumeric characters at all', () => {
    expect(isCleanPalindrome('...,,,!!!')).toBe(true)
  })

  it('handles digits mixed with letters', () => {
    expect(isCleanPalindrome('0P')).toBe(false)
    expect(isCleanPalindrome('a1b2b1a')).toBe(true)
  })
})

describe('ex04/ex02 — validAfterOneDelete', () => {
  it('accepts a string that is already a palindrome', () => {
    expect(validAfterOneDelete('aba')).toBe(true)
  })

  it('accepts a string fixable by deleting one character', () => {
    expect(validAfterOneDelete('abca')).toBe(true)
    expect(validAfterOneDelete('deeee')).toBe(true)
  })

  it('rejects a string needing more than one deletion', () => {
    expect(validAfterOneDelete('abc')).toBe(false)
  })

  it('handles empty and single-character strings', () => {
    expect(validAfterOneDelete('')).toBe(true)
    expect(validAfterOneDelete('a')).toBe(true)
  })
})

import { describe, expect, it } from 'vitest'
import { lcsLength, lcsString } from './ex02-common-subsequence'

describe('ex19/ex02 — lcsLength', () => {
  it('classic example: ace in abcde -> 3', () => {
    expect(lcsLength('ace', 'abcde')).toBe(3)
  })

  it('identical strings -> full length', () => {
    expect(lcsLength('abc', 'abc')).toBe(3)
  })

  it('no common characters -> 0', () => {
    expect(lcsLength('abc', 'def')).toBe(0)
  })

  it('empty string a -> 0', () => {
    expect(lcsLength('', 'abc')).toBe(0)
  })

  it('empty string b -> 0', () => {
    expect(lcsLength('abc', '')).toBe(0)
  })

  it('both empty -> 0', () => {
    expect(lcsLength('', '')).toBe(0)
  })

  it('single matching character -> 1', () => {
    expect(lcsLength('a', 'a')).toBe(1)
  })

  it('single non-matching character -> 0', () => {
    expect(lcsLength('a', 'b')).toBe(0)
  })

  it('interleaved: abcba vs abcbcba -> 5', () => {
    expect(lcsLength('abcba', 'abcbcba')).toBe(5)
  })

  it('efficiency: two 1000-char strings complete without timeout', () => {
    const a = 'abcdefghij'.repeat(100)
    const b = 'bcdefghija'.repeat(100)
    const result = lcsLength(a, b)
    expect(result).toBeGreaterThan(0)
    expect(typeof result).toBe('number')
  })
})

describe('ex19/ex02 — lcsString', () => {
  it('classic example: ace in abcde -> "ace"', () => {
    expect(lcsString('ace', 'abcde')).toBe('ace')
  })

  it('identical strings returns the string itself', () => {
    expect(lcsString('abc', 'abc')).toBe('abc')
  })

  it('no common characters -> empty string', () => {
    expect(lcsString('abc', 'def')).toBe('')
  })

  it('empty first string -> empty', () => {
    expect(lcsString('', 'abc')).toBe('')
  })

  it('empty second string -> empty', () => {
    expect(lcsString('abc', '')).toBe('')
  })

  it('length matches lcsLength result', () => {
    const pairs: [string, string][] = [
      ['abcde', 'ace'],
      ['abc', 'abc'],
      ['abcba', 'abcbcba'],
      ['abcdef', 'fbdamn'],
    ]
    for (const [a, b] of pairs) {
      expect(lcsString(a, b).length).toBe(lcsLength(a, b))
    }
  })

  it('returned string is actually a subsequence of both inputs', () => {
    const a = 'abcde'
    const b = 'ace'
    const lcs = lcsString(a, b)
    // Verify it is a subsequence of a
    let ia = 0
    for (const ch of lcs) { while (ia < a.length && a[ia] !== ch) ia++; ia++ }
    expect(ia).toBeLessThanOrEqual(a.length)
    // Verify it is a subsequence of b
    let ib = 0
    for (const ch of lcs) { while (ib < b.length && b[ib] !== ch) ib++; ib++ }
    expect(ib).toBeLessThanOrEqual(b.length)
  })

  it('efficiency: 1000-char strings complete without timeout', () => {
    const a = 'abcdefghij'.repeat(100)
    const b = 'bcdefghija'.repeat(100)
    const lcs = lcsString(a, b)
    expect(lcs.length).toBe(lcsLength(a, b))
  })
})

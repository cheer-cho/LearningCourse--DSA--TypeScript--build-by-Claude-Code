import { describe, expect, it } from 'vitest'
import { buildFailureTable, kmpFindAll } from './ex06-kmp-search'

describe('21/ex06 — buildFailureTable', () => {
  it('computes the failure table for the LESSON.md example "ababaca"', () => {
    expect(buildFailureTable('ababaca')).toEqual([0, 0, 1, 2, 3, 0, 1])
  })

  it('no borders (all distinct chars)', () => {
    expect(buildFailureTable('abcde')).toEqual([0, 0, 0, 0, 0])
  })

  it('all same char: borders grow by 1 each step', () => {
    expect(buildFailureTable('aaaa')).toEqual([0, 1, 2, 3])
  })

  it('single character', () => {
    expect(buildFailureTable('a')).toEqual([0])
  })

  it('"aab": only "a" is a border at index 2', () => {
    expect(buildFailureTable('aab')).toEqual([0, 1, 0])
  })

  it('"abab": borders of length 2 at indices 2 and 3', () => {
    expect(buildFailureTable('abab')).toEqual([0, 0, 1, 2])
  })

  it('"aabaab": mixed borders', () => {
    expect(buildFailureTable('aabaab')).toEqual([0, 1, 0, 1, 2, 3])
  })

  it('"abcabc": periodic pattern', () => {
    expect(buildFailureTable('abcabc')).toEqual([0, 0, 0, 1, 2, 3])
  })
})

describe('21/ex06 — kmpFindAll', () => {
  it('finds non-overlapping occurrences', () => {
    expect(kmpFindAll('abcabcabc', 'abc')).toEqual([0, 3, 6])
  })

  it('finds overlapping occurrences', () => {
    expect(kmpFindAll('aaaaaa', 'aaa')).toEqual([0, 1, 2, 3])
  })

  it('returns empty when pattern is not found', () => {
    expect(kmpFindAll('hello', 'world')).toEqual([])
  })

  it('returns empty for empty pattern', () => {
    expect(kmpFindAll('hello', '')).toEqual([])
  })

  it('returns empty when pattern is longer than text', () => {
    expect(kmpFindAll('abc', 'abcde')).toEqual([])
  })

  it('match at the very start', () => {
    expect(kmpFindAll('abcdef', 'abc')).toEqual([0])
  })

  it('match at the very end', () => {
    expect(kmpFindAll('xyzabc', 'abc')).toEqual([3])
  })

  it('pattern equals text', () => {
    expect(kmpFindAll('abc', 'abc')).toEqual([0])
  })

  it('single character pattern', () => {
    expect(kmpFindAll('banana', 'a')).toEqual([1, 3, 5])
  })

  it('no false positives on near-misses', () => {
    expect(kmpFindAll('abcabdabc', 'abc')).toEqual([0, 6])
  })

  it('handles the "aaab" worst case for naive search efficiently', () => {
    // text: n 'a's followed by 'b'; pattern 'aaab'
    // naive: O(n*4) rescanning; KMP: O(n+4)
    const n = 200_000
    const text = 'a'.repeat(n) + 'b'
    const pattern = 'a'.repeat(n - 1) + 'b'
    const start = performance.now()
    const result = kmpFindAll(text, pattern)
    const elapsed = performance.now() - start
    expect(elapsed).toBeLessThan(2000)
    expect(result).toEqual([1]) // only one match: the last (n-1) 'a's + 'b'
  })

  it('efficiency: 200_000-char all-a text, pattern "aaab" (many mismatches)', () => {
    const n = 200_000
    const text = 'a'.repeat(n)
    const pattern = 'aaab'
    const start = performance.now()
    const result = kmpFindAll(text, pattern)
    const elapsed = performance.now() - start
    expect(elapsed).toBeLessThan(2000)
    expect(result).toEqual([]) // 'b' never appears
  })
})

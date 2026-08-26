import { describe, expect, it } from 'vitest'
import { countRepeatedWindows, findAll } from './ex05-rabin-karp'

describe('21/ex05 — findAll (Rabin-Karp)', () => {
  it('finds non-overlapping occurrences', () => {
    expect(findAll('abcabcabc', 'abc')).toEqual([0, 3, 6])
  })

  it('finds overlapping occurrences', () => {
    expect(findAll('aaaaaa', 'aaa')).toEqual([0, 1, 2, 3])
  })

  it('returns empty when pattern is not found', () => {
    expect(findAll('hello', 'world')).toEqual([])
  })

  it('returns empty when pattern is empty', () => {
    expect(findAll('hello', '')).toEqual([])
  })

  it('returns empty when pattern is longer than text', () => {
    expect(findAll('abc', 'abcde')).toEqual([])
  })

  it('finds a match at the very start', () => {
    expect(findAll('abcdef', 'abc')).toEqual([0])
  })

  it('finds a match at the very end', () => {
    expect(findAll('xyzabc', 'abc')).toEqual([3])
  })

  it('pattern equals text exactly', () => {
    expect(findAll('abc', 'abc')).toEqual([0])
  })

  it('single character pattern', () => {
    expect(findAll('banana', 'a')).toEqual([1, 3, 5])
  })

  it('handles repeated single character', () => {
    expect(findAll('aaaa', 'aa')).toEqual([0, 1, 2])
  })

  it('finds no false positives on near-misses', () => {
    expect(findAll('abcabdabc', 'abc')).toEqual([0, 6])
  })

  it('efficiency: 200_000-char text with pattern length 10 completes quickly', () => {
    const n = 200_000
    const text = 'ab'.repeat(n / 2)
    const pattern = 'ababababab' // length 10, occurs many times
    const start = performance.now()
    const result = findAll(text, pattern)
    const elapsed = performance.now() - start
    expect(elapsed).toBeLessThan(3000)
    // pattern of length 10 in 'ababab...' text: every even index
    expect(result.length).toBeGreaterThan(0)
    expect(result[0]).toBe(0)
  })
})

describe('21/ex05 — countRepeatedWindows', () => {
  it('counts distinct repeated k-length substrings', () => {
    // windows of length 3 in "ACGAACG": ACG CGA GAA AAC ACG
    // "ACG" appears at index 0 and 4 — that's 1 repeated substring
    expect(countRepeatedWindows('ACGAACG', 3)).toBe(1)
  })

  it('classic DNA example from LeetCode canon', () => {
    // "AAAAACCCCC" and "CCCCCAAAAA" each appear twice
    expect(countRepeatedWindows('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', 10)).toBe(2)
  })

  it('all windows distinct: count is 0', () => {
    expect(countRepeatedWindows('ABCDE', 2)).toBe(0)
  })

  it('all windows identical: count is 1 (one distinct repeated substring)', () => {
    expect(countRepeatedWindows('AAAA', 2)).toBe(1)
  })

  it('k equals string length: only one window, never repeated', () => {
    expect(countRepeatedWindows('ABCDE', 5)).toBe(0)
  })

  it('k=1 with repeated single chars', () => {
    // windows of length 1: 'a' appears 3 times -> 1 repeated substring
    expect(countRepeatedWindows('aba', 1)).toBe(1)
  })

  it('no repeated windows in a non-repeating string', () => {
    expect(countRepeatedWindows('ATCG', 2)).toBe(0)
  })

  it('efficiency: 200_000-char text with k=10 completes quickly', () => {
    const n = 200_000
    // Alphabet of size 2 guarantees many repeats
    const dna = Array.from({ length: n }, (_, i) => (i % 2 === 0 ? 'A' : 'C')).join('')
    const start = performance.now()
    const result = countRepeatedWindows(dna, 10)
    const elapsed = performance.now() - start
    expect(elapsed).toBeLessThan(3000)
    expect(result).toBeGreaterThan(0)
  })
})

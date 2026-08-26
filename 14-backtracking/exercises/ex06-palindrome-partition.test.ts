import { describe, expect, it } from 'vitest'
import { palindromePartitions } from './ex06-palindrome-partition'

function normalize(result: string[][]): string[] {
  return result.map((parts) => JSON.stringify(parts)).sort()
}

describe('ex14/ex06 — palindromePartitions', () => {
  it('empty string -> one partition: zero pieces', () => {
    expect(palindromePartitions('')).toEqual([[]])
  })

  it('single character is always its own palindrome', () => {
    expect(palindromePartitions('a')).toEqual([['a']])
  })

  it('no multi-char palindromic substrings: only the all-singles partition', () => {
    expect(palindromePartitions('abc')).toEqual([['a', 'b', 'c']])
  })

  it('classic aab example', () => {
    expect(normalize(palindromePartitions('aab'))).toEqual(
      normalize([
        ['a', 'a', 'b'],
        ['aa', 'b'],
      ]),
    )
  })

  it('whole string is itself a palindrome', () => {
    expect(normalize(palindromePartitions('aba'))).toEqual(
      normalize([
        ['a', 'b', 'a'],
        ['aba'],
      ]),
    )
  })

  it('every piece in every partition really is a palindrome', () => {
    const isPalindrome = (str: string) => str === [...str].reverse().join('')
    for (const partition of palindromePartitions('racecarxyz')) {
      expect(partition.join('')).toBe('racecarxyz')
      for (const piece of partition) expect(isPalindrome(piece)).toBe(true)
    }
  })
})

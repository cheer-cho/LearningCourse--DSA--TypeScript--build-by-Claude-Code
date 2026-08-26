import { describe, it, expect } from 'vitest'
import { groupAnagrams, isAnagram } from './ex03-group-anagrams'

function normalizeGroups(groups: string[][]): string[][] {
  return groups.map((group) => [...group].sort()).sort((a, b) => (a[0] ?? '').localeCompare(b[0] ?? ''))
}

describe('isAnagram', () => {
  it('recognizes a typical anagram pair', () => {
    expect(isAnagram('listen', 'silent')).toBe(true)
  })

  it('rejects words that are not anagrams', () => {
    expect(isAnagram('rat', 'car')).toBe(false)
  })

  it('rejects words of different lengths', () => {
    expect(isAnagram('a', 'ab')).toBe(false)
  })

  it('treats two empty strings as anagrams', () => {
    expect(isAnagram('', '')).toBe(true)
  })

  it('accounts for repeated letters, not just which letters appear', () => {
    expect(isAnagram('aabb', 'abab')).toBe(true)
    expect(isAnagram('aabb', 'aabbb')).toBe(false)
  })
})

describe('groupAnagrams', () => {
  it('groups a typical mixed list', () => {
    const result = normalizeGroups(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
    const expected = normalizeGroups([
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
    ])
    expect(result).toEqual(expected)
  })

  it('returns an empty array for empty input', () => {
    expect(groupAnagrams([])).toEqual([])
  })

  it('puts every word in its own group when none share letters', () => {
    const result = normalizeGroups(groupAnagrams(['dog', 'cat', 'fish']))
    expect(result).toEqual(normalizeGroups([['dog'], ['cat'], ['fish']]))
  })

  it('groups identical words together', () => {
    const result = normalizeGroups(groupAnagrams(['aa', 'aa', 'aa']))
    expect(result).toEqual([['aa', 'aa', 'aa']])
  })

  it('handles a single word', () => {
    expect(groupAnagrams(['solo'])).toEqual([['solo']])
  })
})

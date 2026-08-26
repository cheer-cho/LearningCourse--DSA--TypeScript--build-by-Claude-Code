import { describe, expect, it } from 'vitest'
import { longestCommonPrefixAll, shortestUniquePrefix } from './ex05-unique-prefixes'

describe('13/ex05 — shortestUniquePrefix', () => {
  it('finds the shortest prefix that diverges between two similar words', () => {
    expect(shortestUniquePrefix(['dog', 'dodge'])).toEqual(['dog', 'dod'])
  })

  it('a single distinguishing first character is enough', () => {
    expect(shortestUniquePrefix(['cat', 'dog', 'bird'])).toEqual(['c', 'd', 'b'])
  })

  it('falls back to the whole word for duplicates', () => {
    expect(shortestUniquePrefix(['cat', 'cat', 'dog'])).toEqual(['cat', 'cat', 'd'])
  })

  it('a single word list: the shortest unique prefix is its first character', () => {
    expect(shortestUniquePrefix(['zebra'])).toEqual(['z'])
  })

  it('handles a word that is a prefix of another', () => {
    expect(shortestUniquePrefix(['car', 'card'])).toEqual(['car', 'card'])
  })

  it('returns [] for an empty word list', () => {
    expect(shortestUniquePrefix([])).toEqual([])
  })

  it('handles three-way branching at different depths', () => {
    expect(shortestUniquePrefix(['ant', 'anthem', 'antler'])).toEqual(['ant', 'anth', 'antl'])
  })
})

describe('13/ex05 — longestCommonPrefixAll', () => {
  it('finds a shared prefix across several words', () => {
    expect(longestCommonPrefixAll(['flower', 'flow', 'flight'])).toBe('fl')
  })

  it('returns "" when there is no common prefix at all', () => {
    expect(longestCommonPrefixAll(['dog', 'cat'])).toBe('')
  })

  it('returns "" for an empty word list', () => {
    expect(longestCommonPrefixAll([])).toBe('')
  })

  it('a single word list: the LCP is the word itself', () => {
    expect(longestCommonPrefixAll(['solo'])).toBe('solo')
  })

  it('returns "" whenever the empty string is one of the words', () => {
    expect(longestCommonPrefixAll(['', 'anything'])).toBe('')
  })

  it('a shorter word caps the prefix at its own length', () => {
    expect(longestCommonPrefixAll(['flow', 'flower', 'flowering'])).toBe('flow')
  })

  it('all-identical words: the LCP is the word itself', () => {
    expect(longestCommonPrefixAll(['abc', 'abc', 'abc'])).toBe('abc')
  })
})

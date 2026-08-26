import { describe, expect, it } from 'vitest'
import { WordDictionary } from './ex02-wildcard-dictionary'

describe('13/ex02 — WordDictionary', () => {
  it('finds an exact match with no wildcards', () => {
    const dict = new WordDictionary()
    dict.addWord('bad')
    expect(dict.search('bad')).toBe(true)
  })

  it('rejects a word that was never added', () => {
    const dict = new WordDictionary()
    dict.addWord('bad')
    expect(dict.search('bat')).toBe(false)
  })

  it('a single dot matches any one character in that position', () => {
    const dict = new WordDictionary()
    dict.addWord('bad')
    dict.addWord('dad')
    dict.addWord('mad')
    expect(dict.search('.ad')).toBe(true)
    expect(dict.search('b.d')).toBe(true)
    expect(dict.search('ba.')).toBe(true)
  })

  it('an all-dots pattern matches any added word of the same length', () => {
    const dict = new WordDictionary()
    dict.addWord('bad')
    dict.addWord('dad')
    expect(dict.search('...')).toBe(true)
    expect(dict.search('....')).toBe(false)
  })

  it('rejects when no added word has the pattern length, dots or not', () => {
    const dict = new WordDictionary()
    dict.addWord('bad')
    expect(dict.search('b.')).toBe(false)
    expect(dict.search('b...')).toBe(false)
  })

  it('a dot only matches one character, never zero or many', () => {
    const dict = new WordDictionary()
    dict.addWord('a')
    expect(dict.search('.')).toBe(true)
    expect(dict.search('..')).toBe(false)
  })

  it('mixing literal characters and dots narrows correctly', () => {
    const dict = new WordDictionary()
    dict.addWord('pad')
    dict.addWord('pig')
    dict.addWord('pot')
    expect(dict.search('p.d')).toBe(true)
    expect(dict.search('p.g')).toBe(true)
    expect(dict.search('p.t')).toBe(true)
    expect(dict.search('p.x')).toBe(false)
  })

  it('handles the empty pattern against an empty added word', () => {
    const dict = new WordDictionary()
    dict.addWord('')
    expect(dict.search('')).toBe(true)
    expect(dict.search('.')).toBe(false)
  })

  it('empty pattern fails when only non-empty words were added', () => {
    const dict = new WordDictionary()
    dict.addWord('a')
    expect(dict.search('')).toBe(false)
  })
})

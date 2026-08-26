import { describe, expect, it } from 'vitest'
import { Trie } from './ex01-build-trie'

describe('13/ex01 — Trie', () => {
  it('finds an inserted word', () => {
    const trie = new Trie()
    trie.insert('car')
    expect(trie.search('car')).toBe(true)
  })

  it('does not find a word that was never inserted', () => {
    const trie = new Trie()
    trie.insert('car')
    expect(trie.search('cart')).toBe(false)
  })

  it('"car" and "card" are independent: inserting one does not insert the other', () => {
    const trie = new Trie()
    trie.insert('card')
    expect(trie.search('card')).toBe(true)
    expect(trie.search('car')).toBe(false)
    trie.insert('car')
    expect(trie.search('car')).toBe(true)
    expect(trie.search('card')).toBe(true)
  })

  it('a stored prefix of another word is not itself "found" until inserted', () => {
    const trie = new Trie()
    trie.insert('care')
    expect(trie.search('car')).toBe(false)
    expect(trie.startsWith('car')).toBe(true)
  })

  it('startsWith is true for any prefix of an inserted word, including the whole word', () => {
    const trie = new Trie()
    trie.insert('caring')
    expect(trie.startsWith('c')).toBe(true)
    expect(trie.startsWith('car')).toBe(true)
    expect(trie.startsWith('caring')).toBe(true)
    expect(trie.startsWith('carings')).toBe(false)
  })

  it('startsWith("") is true even on an empty trie', () => {
    const trie = new Trie()
    expect(trie.startsWith('')).toBe(true)
  })

  it('search("") is false on an empty trie, true after inserting ""', () => {
    const trie = new Trie()
    expect(trie.search('')).toBe(false)
    trie.insert('')
    expect(trie.search('')).toBe(true)
  })

  it('a completely unrelated first character fails fast', () => {
    const trie = new Trie()
    trie.insert('dog')
    expect(trie.search('cat')).toBe(false)
    expect(trie.startsWith('cat')).toBe(false)
  })

  it('inserting the same word twice does not break search', () => {
    const trie = new Trie()
    trie.insert('bee')
    trie.insert('bee')
    expect(trie.search('bee')).toBe(true)
  })

  it('handles many words sharing deep prefixes', () => {
    const trie = new Trie()
    const words = ['a', 'ab', 'abc', 'abcd', 'abcde']
    for (const w of words) trie.insert(w)
    for (const w of words) expect(trie.search(w)).toBe(true)
    expect(trie.search('abcdef')).toBe(false)
    expect(trie.startsWith('abcdef')).toBe(false)
    expect(trie.startsWith('abcde')).toBe(true)
  })
})

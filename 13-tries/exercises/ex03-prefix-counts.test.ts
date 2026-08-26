import { describe, expect, it } from 'vitest'
import { PrefixCounter } from './ex03-prefix-counts'

describe('13/ex03 — PrefixCounter', () => {
  it('counts words sharing a prefix', () => {
    const pc = new PrefixCounter()
    for (const w of ['car', 'card', 'care', 'cart']) pc.insert(w)
    expect(pc.countStartingWith('car')).toBe(4)
    expect(pc.countStartingWith('card')).toBe(1)
  })

  it('returns 0 for a prefix no word has', () => {
    const pc = new PrefixCounter()
    pc.insert('car')
    expect(pc.countStartingWith('dog')).toBe(0)
    expect(pc.countStartingWith('cars')).toBe(0)
  })

  it('empty prefix counts every inserted word', () => {
    const pc = new PrefixCounter()
    for (const w of ['a', 'b', 'c']) pc.insert(w)
    expect(pc.countStartingWith('')).toBe(3)
  })

  it('inserting the same word twice counts it twice', () => {
    const pc = new PrefixCounter()
    pc.insert('bee')
    pc.insert('bee')
    expect(pc.countStartingWith('bee')).toBe(2)
  })

  it('autocomplete returns matches in alphabetical order', () => {
    const pc = new PrefixCounter()
    for (const w of ['care', 'card', 'car', 'cart']) pc.insert(w)
    expect(pc.autocomplete('car', 10)).toEqual(['car', 'card', 'care', 'cart'])
  })

  it('autocomplete respects k, taking the alphabetically-first matches', () => {
    const pc = new PrefixCounter()
    for (const w of ['care', 'card', 'car', 'cart']) pc.insert(w)
    expect(pc.autocomplete('car', 2)).toEqual(['car', 'card'])
  })

  it('autocomplete returns [] for k = 0 or an unmatched prefix', () => {
    const pc = new PrefixCounter()
    pc.insert('car')
    expect(pc.autocomplete('car', 0)).toEqual([])
    expect(pc.autocomplete('dog', 5)).toEqual([])
  })

  it('autocomplete includes the prefix itself when it is a whole word, sorted first', () => {
    const pc = new PrefixCounter()
    pc.insert('car')
    pc.insert('carbon')
    expect(pc.autocomplete('car', 5)).toEqual(['car', 'carbon'])
  })

  it('efficiency: 10,000 words, many prefix queries stay fast', () => {
    const pc = new PrefixCounter()
    const roots = ['inter', 'trans', 'proto', 'micro', 'macro']
    for (let i = 0; i < 10_000; i++) {
      const root = roots[i % roots.length]
      pc.insert(`${root}${i.toString(36)}`)
    }

    const start = performance.now()
    for (const root of roots) {
      expect(pc.countStartingWith(root)).toBe(2000)
    }
    for (let i = 0; i < 500; i++) {
      const prefix = roots[i % roots.length]!
      const results = pc.autocomplete(prefix, 5)
      expect(results.length).toBe(5)
      expect(results).toEqual([...results].sort())
      for (const r of results) expect(r.startsWith(prefix)).toBe(true)
    }
    const elapsed = performance.now() - start

    // Generous sanity bound: an O(prefix length) count + bounded-DFS
    // autocomplete finishes this in well under a second. A naive
    // "scan all 10,000 words per query" approach would be far slower.
    expect(elapsed).toBeLessThan(1000)
  })
})

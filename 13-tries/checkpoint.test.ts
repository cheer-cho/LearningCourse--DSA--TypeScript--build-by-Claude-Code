import { describe, expect, it } from 'vitest'
import { SearchBox } from './checkpoint'

describe('13 checkpoint — SearchBox', () => {
  it('suggests indexed words alphabetically', () => {
    const box = new SearchBox()
    for (const w of ['cat', 'car', 'card']) box.index(w)
    expect(box.suggest('ca', 3)).toEqual(['car', 'card', 'cat'])
  })

  it('suggest respects k', () => {
    const box = new SearchBox()
    for (const w of ['cat', 'car', 'card']) box.index(w)
    expect(box.suggest('ca', 1)).toEqual(['car'])
  })

  it('suggest returns [] for an unindexed prefix or k = 0', () => {
    const box = new SearchBox()
    box.index('cat')
    expect(box.suggest('dog', 5)).toEqual([])
    expect(box.suggest('cat', 0)).toEqual([])
  })

  it('match supports exact and single-char wildcard patterns', () => {
    const box = new SearchBox()
    for (const w of ['cat', 'bat', 'rat']) box.index(w)
    expect(box.match('cat')).toBe(true)
    expect(box.match('.at')).toBe(true)
    expect(box.match('ca.')).toBe(true)
    expect(box.match('c..')).toBe(true)
    expect(box.match('c.')).toBe(false)
    expect(box.match('...')).toBe(true)
    expect(box.match('....')).toBe(false)
  })

  it('match fails for a word that was never indexed', () => {
    const box = new SearchBox()
    box.index('cat')
    expect(box.match('dog')).toBe(false)
    expect(box.match('d.g')).toBe(false)
  })

  it('popularity counts indexed words under a prefix, including repeats', () => {
    const box = new SearchBox()
    box.index('cat')
    box.index('cat')
    box.index('car')
    expect(box.popularity('ca')).toBe(3)
    expect(box.popularity('cat')).toBe(2)
    expect(box.popularity('dog')).toBe(0)
  })

  it('index, suggest, match, and popularity all share one index', () => {
    const box = new SearchBox()
    box.index('trie')
    box.index('trip')
    box.index('tree')
    expect(box.suggest('tr', 5)).toEqual(['tree', 'trie', 'trip'])
    expect(box.match('tr..')).toBe(true)
    expect(box.popularity('tri')).toBe(2)
  })

  it('efficiency: 20,000 indexed words, 1,000 mixed queries stay fast', () => {
    const box = new SearchBox()
    const roots = ['pre', 'sub', 'super', 'trans', 'inter', 'auto', 'semi', 'multi']
    // Track one known word per root (the first one indexed for it) so
    // the match() queries below have a guaranteed hit to check against.
    const sampleWord = new Map<string, string>()
    for (let i = 0; i < 20_000; i++) {
      const root = roots[i % roots.length]!
      const word = `${root}${i.toString(36)}`
      box.index(word)
      if (!sampleWord.has(root)) sampleWord.set(root, word)
    }

    const start = performance.now()
    for (let i = 0; i < 1000; i++) {
      const root = roots[i % roots.length]!
      switch (i % 3) {
        case 0: {
          const suggestions = box.suggest(root, 5)
          expect(suggestions.length).toBe(5)
          expect(suggestions).toEqual([...suggestions].sort())
          break
        }
        case 1: {
          expect(box.popularity(root)).toBe(2500)
          break
        }
        default: {
          const word = sampleWord.get(root)!
          const wildcardPattern = word.slice(0, -1) + '.'
          expect(box.match(word)).toBe(true)
          expect(box.match(wildcardPattern)).toBe(true)
          break
        }
      }
    }
    const elapsed = performance.now() - start

    // Generous sanity bound — a proper trie-backed implementation
    // finishes this comfortably within a couple seconds; a naive
    // "rescan all 20,000 words per query" approach would not.
    expect(elapsed).toBeLessThan(2000)
  })
})

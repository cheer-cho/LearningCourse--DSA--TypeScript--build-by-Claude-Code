import { describe, expect, it } from 'vitest'
import { replaceWithRoots } from './ex04-replace-roots'

describe('13/ex04 — replaceWithRoots', () => {
  it('replaces words with their matching root', () => {
    const roots = ['cat', 'bat', 'rat']
    const sentence = 'the cattle was rattled by the battery'
    expect(replaceWithRoots(roots, sentence)).toBe('the cat was rat by the bat')
  })

  it('leaves words with no matching root unchanged', () => {
    const roots = ['cat']
    expect(replaceWithRoots(roots, 'the dog ran')).toBe('the dog ran')
  })

  it('picks the SHORTEST matching root when several match', () => {
    const roots = ['a', 'aa', 'aaa']
    expect(replaceWithRoots(roots, 'aaaa')).toBe('a')
  })

  it('a word equal to a root replaces with itself', () => {
    const roots = ['cat']
    expect(replaceWithRoots(roots, 'cat')).toBe('cat')
  })

  it('handles an empty roots list: nothing changes', () => {
    expect(replaceWithRoots([], 'the cat sat')).toBe('the cat sat')
  })

  it('handles a single-word sentence', () => {
    expect(replaceWithRoots(['ca'], 'cat')).toBe('ca')
  })

  it('handles multiple different roots matching different words', () => {
    const roots = ['fun', 'run']
    expect(replaceWithRoots(roots, 'funny runner jumper')).toBe('fun run jumper')
  })

  it('is idempotent when applied to already-root words', () => {
    const roots = ['a']
    expect(replaceWithRoots(roots, 'a a a')).toBe('a a a')
  })
})

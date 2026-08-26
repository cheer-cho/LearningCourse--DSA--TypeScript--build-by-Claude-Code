import { describe, expect, it } from 'vitest'
import { canSegment } from './ex05-word-split'

describe('ex18/ex05 — canSegment', () => {
  it('treats the empty tape as trivially splittable', () => {
    expect(canSegment('', ['a', 'b'])).toBe(true)
  })

  it('splits a tape into two known words', () => {
    expect(canSegment('gogopher', ['go', 'gopher'])).toBe(true)
  })

  it('fails when the dictionary cannot cover the whole tape', () => {
    expect(canSegment('gogopher', ['go'])).toBe(false)
  })

  it('reuses the same word multiple times', () => {
    expect(canSegment('gogogo', ['go'])).toBe(true)
  })

  it('needs the LAST cut, not just any prefix match, to work out', () => {
    // "catsanddog" splits as cats+and+dog OR cat+sand+dog — either works.
    expect(canSegment('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog'])).toBe(true)
  })

  it('fails a near-miss that almost splits', () => {
    expect(canSegment('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(false)
  })

  it('returns false for a tape with no matching words at all', () => {
    expect(canSegment('xyz', ['a', 'b', 'c'])).toBe(false)
  })

  it('stays fast on an adversarial input where naive backtracking blows up', () => {
    // The classic "aaaa...b" trap: every prefix of a's matches, so a
    // naive choose-explore-unchoose search retries exponentially many
    // dead ends before finally failing on the trailing 'b'.
    const tape = 'a'.repeat(500) + 'b'
    expect(canSegment(tape, ['a', 'aa', 'aaa'])).toBe(false)
  })
})

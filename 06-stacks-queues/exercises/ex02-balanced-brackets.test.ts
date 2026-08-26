import { describe, expect, it } from 'vitest'
import { isBalanced, minRemovalsToBalance } from './ex02-balanced-brackets'

describe('ex06/ex02 — isBalanced', () => {
  it('accepts the empty string', () => {
    expect(isBalanced('')).toBe(true)
  })

  it('accepts simple and nested pairs', () => {
    expect(isBalanced('()')).toBe(true)
    expect(isBalanced('{[()]}')).toBe(true)
    expect(isBalanced('(){}[]')).toBe(true)
  })

  it('rejects a lone opener or closer', () => {
    expect(isBalanced('(')).toBe(false)
    expect(isBalanced(']')).toBe(false)
  })

  it('rejects interleaved (crossed) brackets', () => {
    expect(isBalanced('([)]')).toBe(false)
  })

  it('rejects mismatched types even when counts match', () => {
    expect(isBalanced('(]')).toBe(false)
    expect(isBalanced('{(})')).toBe(false)
  })

  it('ignores non-bracket characters', () => {
    expect(isBalanced('(a + b) * [c - d]')).toBe(true)
    expect(isBalanced('(a + b])')).toBe(false)
  })
})

describe('ex06/ex02 — minRemovalsToBalance', () => {
  it('returns 0 for an already-balanced string', () => {
    expect(minRemovalsToBalance('()()')).toBe(0)
    expect(minRemovalsToBalance('')).toBe(0)
  })

  it('counts unmatched closers', () => {
    expect(minRemovalsToBalance('()())')).toBe(1)
    expect(minRemovalsToBalance(')()(')).toBe(2)
  })

  it('counts unmatched openers', () => {
    expect(minRemovalsToBalance('(((')).toBe(3)
    expect(minRemovalsToBalance('(()')).toBe(1)
  })

  it('counts both unmatched openers and closers together', () => {
    expect(minRemovalsToBalance(')(')).toBe(2)
    expect(minRemovalsToBalance('())((')).toBe(3)
  })

  it('ignores non-paren characters', () => {
    expect(minRemovalsToBalance('a(b(c)d')).toBe(1)
  })
})

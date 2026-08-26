import { describe, expect, it } from 'vitest'
import { reverseWords, runLengthDecode, runLengthEncode } from './ex05-string-drills'

describe('reverseWords', () => {
  it('reverses a simple sentence', () => {
    expect(reverseWords('the sky is blue')).toBe('blue is sky the')
  })

  it('collapses extra internal spaces', () => {
    expect(reverseWords('the   sky is    blue')).toBe('blue is sky the')
  })

  it('trims leading and trailing spaces', () => {
    expect(reverseWords('  the sky   is blue ')).toBe('blue is sky the')
  })

  it('handles a single word', () => {
    expect(reverseWords('hello')).toBe('hello')
  })

  it('handles an empty string', () => {
    expect(reverseWords('')).toBe('')
  })

  it('handles a string of only spaces', () => {
    expect(reverseWords('   ')).toBe('')
  })
})

describe('runLengthEncode', () => {
  it('encodes runs of different characters', () => {
    expect(runLengthEncode('aaabbc')).toBe('a3b2c1')
  })

  it('encodes a string with no repeats as all 1s', () => {
    expect(runLengthEncode('abc')).toBe('a1b1c1')
  })

  it('encodes a string that is all one character', () => {
    expect(runLengthEncode('aaaa')).toBe('a4')
  })

  it('handles an empty string', () => {
    expect(runLengthEncode('')).toBe('')
  })

  it('handles run lengths of two or more digits', () => {
    expect(runLengthEncode('a'.repeat(12))).toBe('a12')
  })
})

describe('runLengthDecode', () => {
  it('decodes a multi-character encoding', () => {
    expect(runLengthDecode('a3b2c1')).toBe('aaabbc')
  })

  it('handles an empty string', () => {
    expect(runLengthDecode('')).toBe('')
  })

  it('handles multi-digit run lengths', () => {
    expect(runLengthDecode('a12')).toBe('a'.repeat(12))
  })

  it('round-trips through runLengthEncode', () => {
    const original = 'aaabbbbccccccd'
    expect(runLengthDecode(runLengthEncode(original))).toBe(original)
  })
})

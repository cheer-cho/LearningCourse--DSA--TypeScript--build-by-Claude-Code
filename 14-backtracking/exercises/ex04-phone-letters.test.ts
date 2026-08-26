import { describe, expect, it } from 'vitest'
import { letterCombos } from './ex04-phone-letters'

function normalize(result: string[]): string[] {
  return [...result].sort()
}

describe('ex14/ex04 — letterCombos', () => {
  it('empty digits -> empty list (not a list with one empty string)', () => {
    expect(letterCombos('')).toEqual([])
  })

  it('single digit', () => {
    expect(normalize(letterCombos('2'))).toEqual(['a', 'b', 'c'])
  })

  it('single digit with 4 letters', () => {
    expect(normalize(letterCombos('7'))).toEqual(['p', 'q', 'r', 's'])
  })

  it('two digits: classic 3x3 example', () => {
    expect(normalize(letterCombos('23'))).toEqual(
      normalize(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']),
    )
  })

  it('three digits: length and uniqueness', () => {
    const result = letterCombos('234')
    expect(result.length).toBe(3 * 3 * 3)
    expect(new Set(result).size).toBe(result.length)
  })
})

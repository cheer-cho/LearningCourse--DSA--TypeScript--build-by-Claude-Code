import { describe, expect, it } from 'vitest'
import { editDistance } from './ex03-edit-distance'

describe('ex19/ex03 — editDistance', () => {
  it('horse -> ros costs 3', () => {
    expect(editDistance('horse', 'ros')).toBe(3)
  })

  it('intention -> execution costs 5', () => {
    expect(editDistance('intention', 'execution')).toBe(5)
  })

  it('identical strings cost 0', () => {
    expect(editDistance('abc', 'abc')).toBe(0)
  })

  it('empty a to b costs b.length (all inserts)', () => {
    expect(editDistance('', 'abc')).toBe(3)
  })

  it('a to empty b costs a.length (all deletes)', () => {
    expect(editDistance('abc', '')).toBe(3)
  })

  it('both empty -> 0', () => {
    expect(editDistance('', '')).toBe(0)
  })

  it('single char match -> 0', () => {
    expect(editDistance('a', 'a')).toBe(0)
  })

  it('single char replace -> 1', () => {
    expect(editDistance('a', 'b')).toBe(1)
  })

  it('kitten -> sitting costs 3', () => {
    expect(editDistance('kitten', 'sitting')).toBe(3)
  })

  it('distance is symmetric', () => {
    expect(editDistance('abc', 'xyz')).toBe(editDistance('xyz', 'abc'))
    expect(editDistance('horse', 'ros')).toBe(editDistance('ros', 'horse'))
  })

  it('result is always non-negative', () => {
    expect(editDistance('hello', 'world')).toBeGreaterThanOrEqual(0)
  })

  it('efficiency: two 500-char strings complete without timeout', () => {
    const a = 'abcdefghij'.repeat(50)
    const b = 'jihgfedcba'.repeat(50)
    const result = editDistance(a, b)
    expect(typeof result).toBe('number')
    expect(result).toBeGreaterThan(0)
  })
})

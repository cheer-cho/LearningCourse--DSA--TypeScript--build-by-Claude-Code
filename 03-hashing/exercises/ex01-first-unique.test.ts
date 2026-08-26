import { describe, it, expect } from 'vitest'
import { firstUniqueIndex, majorityItem } from './ex01-first-unique'

describe('firstUniqueIndex', () => {
  it('finds the unique character in a typical case', () => {
    // "swiss": 's' repeats (0, 3, 4); 'w' at index 1 never repeats.
    expect(firstUniqueIndex('swiss')).toBe(1)
  })

  it('returns a later index when earlier characters repeat', () => {
    expect(firstUniqueIndex('aabbc')).toBe(4)
  })

  it('returns -1 when every character repeats', () => {
    expect(firstUniqueIndex('aabb')).toBe(-1)
  })

  it('returns -1 for an empty string', () => {
    expect(firstUniqueIndex('')).toBe(-1)
  })

  it('handles a single character', () => {
    expect(firstUniqueIndex('z')).toBe(0)
  })

  it('picks the first character when all are unique', () => {
    expect(firstUniqueIndex('abcdef')).toBe(0)
  })
})

describe('majorityItem', () => {
  it('finds the majority element in a typical case', () => {
    expect(majorityItem([2, 2, 1, 2, 3])).toBe(2)
  })

  it('handles a single element', () => {
    expect(majorityItem([7])).toBe(7)
  })

  it('handles all-equal input', () => {
    expect(majorityItem([4, 4, 4, 4])).toBe(4)
  })

  it('handles negative numbers', () => {
    expect(majorityItem([-1, -1, -1, 2, 3])).toBe(-1)
  })

  it('finds the majority element when it clusters at the end', () => {
    expect(majorityItem([1, 2, 3, 3, 3, 3, 3])).toBe(3)
  })
})

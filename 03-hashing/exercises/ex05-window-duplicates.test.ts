import { describe, it, expect } from 'vitest'
import { firstRepeatedWithin, hasNearbyDuplicate } from './ex05-window-duplicates'

describe('hasNearbyDuplicate', () => {
  it('finds a duplicate exactly at the allowed distance', () => {
    expect(hasNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true)
  })

  it('rejects a duplicate just outside the allowed distance', () => {
    expect(hasNearbyDuplicate([1, 2, 3, 1], 2)).toBe(false)
  })

  it('returns false when there are no duplicates at all', () => {
    expect(hasNearbyDuplicate([1, 2, 3, 4], 2)).toBe(false)
  })

  it('handles k = 0 (only literally adjacent-index equal values, impossible for distinct indices)', () => {
    expect(hasNearbyDuplicate([1, 1, 2], 0)).toBe(false)
    expect(hasNearbyDuplicate([1, 1, 2], 1)).toBe(true)
  })

  it('returns false for an empty array', () => {
    expect(hasNearbyDuplicate([], 3)).toBe(false)
  })

  it('finds the closest occurrence, not just any occurrence', () => {
    // The two 9s at indices 0 and 5 are far apart, but 9 also repeats
    // at index 4 and 5 which are within k = 1.
    expect(hasNearbyDuplicate([9, 1, 2, 3, 9, 9], 1)).toBe(true)
  })
})

describe('firstRepeatedWithin', () => {
  it('returns the first value found to repeat within k', () => {
    expect(firstRepeatedWithin([5, 1, 5, 2], 2)).toBe(5)
  })

  it('returns undefined when the repeat is outside k', () => {
    expect(firstRepeatedWithin([5, 1, 2, 5], 2)).toBeUndefined()
  })

  it('returns undefined for a stream with no repeats', () => {
    expect(firstRepeatedWithin([1, 2, 3], 5)).toBeUndefined()
  })

  it('returns undefined for an empty stream', () => {
    expect(firstRepeatedWithin([], 3)).toBeUndefined()
  })

  it('picks whichever value repeats first in scan order', () => {
    // The 2s repeat at distance 1 (indices 1, 2); the 1s repeat later
    // at distance 3, which is outside k anyway.
    expect(firstRepeatedWithin([1, 2, 2, 1], 1)).toBe(2)
  })
})

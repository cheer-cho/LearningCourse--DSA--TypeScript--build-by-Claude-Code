import { describe, expect, it } from 'vitest'
import { hasPatternBurst, longestWithinBudget, shortestBreach, worstMinute } from './checkpoint'

describe('05 checkpoint — traffic monitor', () => {
  describe('worstMinute', () => {
    it('finds the worst 60-second window when a spike sits mid-log', () => {
      const counts = new Array(120).fill(0)
      for (let i = 50; i < 55; i++) counts[i] = 100
      expect(worstMinute(counts)).toBe(500)
    })

    it('handles exactly 60 entries (only one window)', () => {
      const counts = new Array(59).fill(0).concat([100])
      expect(worstMinute(counts)).toBe(100)
    })

    it('throws when there are fewer than 60 seconds of data', () => {
      expect(() => worstMinute(new Array(59).fill(1))).toThrow(RangeError)
    })

    it('efficiency: n = 200_000 completes and is correct', () => {
      const n = 200_000
      const counts = Array.from({ length: n }, (_, i) => i)
      // Ascending: the worst 60-window is always the last one.
      const expected = (60 * (2 * n - 60 - 1)) / 2
      expect(worstMinute(counts)).toBe(expected)
    })
  })

  describe('longestWithinBudget', () => {
    it('finds the longest run within budget', () => {
      expect(longestWithinBudget([1, 2, 1, 0, 3, 1], 4)).toBe(4)
    })

    it('returns 0 when every single second already exceeds the budget', () => {
      expect(longestWithinBudget([5, 5, 5], 3)).toBe(0)
    })

    it('handles an all-zero log with a zero budget (whole log qualifies)', () => {
      expect(longestWithinBudget([0, 0, 0], 0)).toBe(3)
    })

    it('returns 0 for an empty log', () => {
      expect(longestWithinBudget([], 10)).toBe(0)
    })

    it('efficiency: n = 200_000 completes and is correct', () => {
      const n = 200_000
      const counts = Array.from({ length: n }, () => 1)
      expect(longestWithinBudget(counts, n / 2)).toBe(n / 2)
    })
  })

  describe('shortestBreach', () => {
    it('finds the shortest run reaching the threshold', () => {
      expect(shortestBreach([2, 3, 1, 2, 4, 3], 7)).toBe(2)
    })

    it('returns 0 when the threshold is unreachable', () => {
      expect(shortestBreach([1, 1, 1], 10)).toBe(0)
    })

    it('handles a single second already meeting the threshold', () => {
      expect(shortestBreach([50], 10)).toBe(1)
    })

    it('efficiency: n = 200_000 completes and is correct', () => {
      const n = 200_000
      const counts = Array.from({ length: n }, () => 1)
      expect(shortestBreach(counts, n / 2)).toBe(n / 2)
    })
  })

  describe('hasPatternBurst', () => {
    it('finds a burst matching the pattern out of order', () => {
      expect(hasPatternBurst([5, 1, 2, 3, 4], [3, 1, 2])).toBe(true)
    })

    it('returns false when no contiguous run matches', () => {
      expect(hasPatternBurst([5, 1, 2, 4], [3, 1, 2])).toBe(false)
    })

    it('respects multiplicity (repeated counts)', () => {
      expect(hasPatternBurst([9, 2, 2, 3, 9], [2, 3, 2])).toBe(true)
      expect(hasPatternBurst([9, 2, 3, 3, 9], [2, 2, 3])).toBe(false)
    })

    it('returns true for an empty pattern', () => {
      expect(hasPatternBurst([1, 2, 3], [])).toBe(true)
    })

    it('returns false when the pattern is longer than the log', () => {
      expect(hasPatternBurst([1, 2], [1, 2, 3])).toBe(false)
    })

    it('efficiency: a 200_000-entry log completes and is correct', () => {
      const noise = new Array(100_000).fill(9)
      const counts = [...noise, 3, 2, 1, ...noise]
      expect(hasPatternBurst(counts, [1, 2, 3])).toBe(true)
      expect(hasPatternBurst(noise, [1, 2, 3])).toBe(false)
    })
  })
})

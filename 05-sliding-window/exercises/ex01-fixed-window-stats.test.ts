import { describe, expect, it } from 'vitest'
import { maxWindowSum, movingAverages } from './ex01-fixed-window-stats'

describe('05/ex01 — fixed window stats', () => {
  describe('maxWindowSum', () => {
    it('finds the best window in a small series', () => {
      expect(maxWindowSum([2, 1, 5, 1, 3, 2], 3)).toBe(9)
    })

    it('handles negatives (least-bad window wins)', () => {
      expect(maxWindowSum([-2, -1, -5], 1)).toBe(-1)
    })

    it('handles k === 1 (every single element is a window)', () => {
      expect(maxWindowSum([4, 9, 2, 7], 1)).toBe(9)
    })

    it('handles k === nums.length (only one window: the whole array)', () => {
      expect(maxWindowSum([4, 9, 2, 7], 4)).toBe(22)
    })

    it('throws when k is not positive', () => {
      expect(() => maxWindowSum([1, 2, 3], 0)).toThrow(RangeError)
      expect(() => maxWindowSum([1, 2, 3], -1)).toThrow(RangeError)
    })

    it('throws when k exceeds the array length', () => {
      expect(() => maxWindowSum([1, 2, 3], 4)).toThrow(RangeError)
    })

    it('handles a single-element array with k = 1', () => {
      expect(maxWindowSum([42], 1)).toBe(42)
    })

    it('efficiency: n = 200_000, k = 1_000 completes and is correct', () => {
      const n = 200_000
      const k = 1_000
      const nums = Array.from({ length: n }, (_, i) => i)
      // Ascending series: the best k-window is always the last one.
      const expected = (k * (2 * n - k - 1)) / 2
      expect(maxWindowSum(nums, k)).toBe(expected)
    })
  })

  describe('movingAverages', () => {
    it('computes the moving average series', () => {
      expect(movingAverages([1, 2, 3, 4], 2)).toEqual([1.5, 2.5, 3.5])
    })

    it('handles k === 1 (average of one element is itself)', () => {
      expect(movingAverages([5, 7, 9], 1)).toEqual([5, 7, 9])
    })

    it('handles k === nums.length (one average: the whole array)', () => {
      expect(movingAverages([2, 4, 6], 3)).toEqual([4])
    })

    it('throws when k is not positive', () => {
      expect(() => movingAverages([1, 2, 3], 0)).toThrow(RangeError)
    })

    it('throws when k exceeds the array length', () => {
      expect(() => movingAverages([1, 2], 3)).toThrow(RangeError)
    })

    it('efficiency: n = 200_000, k = 1_000 completes and is correct', () => {
      const n = 200_000
      const k = 1_000
      const nums = Array.from({ length: n }, (_, i) => i)
      const averages = movingAverages(nums, k)
      expect(averages).toHaveLength(n - k + 1)
      expect(averages[0]).toBeCloseTo(499.5)
      expect(averages[averages.length - 1]).toBeCloseTo(199499.5)
    })
  })
})

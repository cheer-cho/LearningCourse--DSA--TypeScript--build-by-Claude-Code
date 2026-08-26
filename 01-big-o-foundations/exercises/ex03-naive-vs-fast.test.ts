import { describe, expect, it } from 'vitest'
import { hasDuplicateFast, hasDuplicateNaive } from './ex03-naive-vs-fast'

describe('ex03 — naive-vs-fast', () => {
  describe('hasDuplicateNaive', () => {
    it('returns false and checks every pair when all values are unique', () => {
      let count = 0
      const nums = [1, 2, 3, 4, 5]
      expect(
        hasDuplicateNaive(nums, () => {
          count++
        }),
      ).toBe(false)
      // classic i < j nested loop over 5 elements: 5*4/2 = 10 comparisons
      expect(count).toBe(10)
    })

    it('scales the comparison count as n(n-1)/2 with no duplicates', () => {
      for (const n of [4, 8, 12]) {
        let count = 0
        const nums = Array.from({ length: n }, (_, i) => i)
        expect(
          hasDuplicateNaive(nums, () => {
            count++
          }),
        ).toBe(false)
        expect(count).toBe((n * (n - 1)) / 2)
      }
    })

    it('returns true when a duplicate exists', () => {
      let count = 0
      expect(
        hasDuplicateNaive([5, 3, 5], () => {
          count++
        }),
      ).toBe(true)
      expect(count).toBeGreaterThan(0)
    })

    it('handles empty and single-element arrays', () => {
      expect(hasDuplicateNaive([], () => {})).toBe(false)
      expect(hasDuplicateNaive([1], () => {})).toBe(false)
    })
  })

  describe('hasDuplicateFast', () => {
    it('returns false when all values are unique', () => {
      expect(hasDuplicateFast([1, 2, 3, 4, 5])).toBe(false)
    })

    it('returns true when a duplicate exists', () => {
      expect(hasDuplicateFast([5, 3, 5])).toBe(true)
    })

    it('handles empty and single-element arrays', () => {
      expect(hasDuplicateFast([])).toBe(false)
      expect(hasDuplicateFast([1])).toBe(false)
    })

    it('handles negatives and zero', () => {
      expect(hasDuplicateFast([0, -1, -2, -1])).toBe(true)
      expect(hasDuplicateFast([0, -1, -2])).toBe(false)
    })

    it('stays fast at n = 200,000 with no duplicate (an O(n^2) approach would never finish)', () => {
      const nums = Array.from({ length: 200_000 }, (_, i) => i)
      expect(hasDuplicateFast(nums)).toBe(false)
    })

    it('stays fast at n = 200,000 and still finds a duplicate', () => {
      const nums = Array.from({ length: 200_000 }, (_, i) => i)
      nums[199_999] = 0
      expect(hasDuplicateFast(nums)).toBe(true)
    })
  })
})

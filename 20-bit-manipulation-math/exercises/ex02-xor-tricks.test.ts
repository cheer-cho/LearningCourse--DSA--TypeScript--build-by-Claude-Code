import { describe, expect, it } from 'vitest'
import { findMissing, findSingle, swapCountBits } from './ex02-xor-tricks'

describe('20/ex02 — XOR tricks', () => {
  describe('findSingle', () => {
    it('finds the unpaired value in the middle', () => {
      expect(findSingle([4, 1, 2, 1, 2])).toBe(4)
    })

    it('handles a single-element array', () => {
      expect(findSingle([7])).toBe(7)
    })

    it('handles the unpaired value being 0', () => {
      expect(findSingle([1, 0, 1])).toBe(0)
    })

    it('handles negative values', () => {
      expect(findSingle([-3, 5, -3, 5, -8])).toBe(-8)
    })

    it('finds the single value among ~100_000 paired values', () => {
      const nums: number[] = []
      for (let i = 0; i < 100_000; i++) nums.push(i, i)
      nums.push(999_999)
      // shuffle-ish interleave so pairs aren't trivially adjacent
      for (let i = nums.length - 1; i > 0; i--) {
        const j = (i * 2654435761) % (i + 1)
        const a = nums[i]!
        const b = nums[j]!
        nums[i] = b
        nums[j] = a
      }
      expect(findSingle(nums)).toBe(999_999)
    })
  })

  describe('findMissing', () => {
    it('finds a gap in the middle', () => {
      expect(findMissing([3, 0, 1])).toBe(2)
    })

    it('handles the missing value being 0', () => {
      expect(findMissing([1, 2, 3])).toBe(0)
    })

    it('handles the missing value being n', () => {
      expect(findMissing([0, 1, 2])).toBe(3)
    })

    it('handles the smallest case (n = 1)', () => {
      expect(findMissing([0])).toBe(1)
    })
  })

  describe('swapCountBits', () => {
    it('computes Hamming distance for disjoint bits', () => {
      expect(swapCountBits(1, 4)).toBe(2)
    })

    it('is 0 for equal values', () => {
      expect(swapCountBits(9, 9)).toBe(0)
    })

    it('counts every differing bit', () => {
      expect(swapCountBits(0b1111, 0b0000)).toBe(4)
    })

    it('is symmetric', () => {
      expect(swapCountBits(37, 5)).toBe(swapCountBits(5, 37))
    })
  })
})

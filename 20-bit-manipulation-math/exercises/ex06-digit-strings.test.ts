import { describe, expect, it } from 'vitest'
import { addBinary, isHappy, plusOne } from './ex06-digit-strings'

describe('20/ex06 — digit strings', () => {
  describe('addBinary', () => {
    it('"11" + "1" = "100"', () => {
      expect(addBinary('11', '1')).toBe('100')
    })

    it('"1010" + "1011" = "10101"', () => {
      expect(addBinary('1010', '1011')).toBe('10101')
    })

    it('"0" + "0" = "0"', () => {
      expect(addBinary('0', '0')).toBe('0')
    })

    it('"1" + "0" = "1"', () => {
      expect(addBinary('1', '0')).toBe('1')
    })

    it('handles different lengths with carry propagation', () => {
      expect(addBinary('1111', '1')).toBe('10000')
    })

    it('handles strings of all ones + 1', () => {
      expect(addBinary('111', '1')).toBe('1000')
    })
  })

  describe('plusOne', () => {
    it('increments a simple number', () => {
      expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
    })

    it('handles carry on the last digit', () => {
      expect(plusOne([1, 2, 9])).toEqual([1, 3, 0])
    })

    it('handles all nines', () => {
      expect(plusOne([9, 9])).toEqual([1, 0, 0])
    })

    it('handles [0]', () => {
      expect(plusOne([0])).toEqual([1])
    })

    it('handles [9]', () => {
      expect(plusOne([9])).toEqual([1, 0])
    })

    it('handles [9, 9, 9]', () => {
      expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0])
    })
  })

  describe('isHappy', () => {
    it('19 is happy (reaches 1 via 82 -> 68 -> 100 -> 1)', () => {
      expect(isHappy(19)).toBe(true)
    })

    it('1 is happy', () => {
      expect(isHappy(1)).toBe(true)
    })

    it('7 is happy', () => {
      expect(isHappy(7)).toBe(true)
    })

    it('2 is not happy', () => {
      expect(isHappy(2)).toBe(false)
    })

    it('4 is not happy', () => {
      expect(isHappy(4)).toBe(false)
    })

    it('known happy numbers', () => {
      for (const n of [1, 7, 10, 13, 19, 23, 28, 31, 32]) {
        expect(isHappy(n)).toBe(true)
      }
    })

    it('known unhappy numbers', () => {
      for (const n of [2, 3, 4, 5, 6, 8, 9, 11, 12, 14, 15]) {
        expect(isHappy(n)).toBe(false)
      }
    })
  })
})

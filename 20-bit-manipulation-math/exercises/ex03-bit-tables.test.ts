import { describe, expect, it } from 'vitest'
import { countBitsUpto, reverseBits32 } from './ex03-bit-tables'

describe('20/ex03 — bit tables', () => {
  describe('countBitsUpto', () => {
    it('builds the table for n = 5', () => {
      expect(countBitsUpto(5)).toEqual([0, 1, 1, 2, 1, 2])
    })

    it('handles n = 0', () => {
      expect(countBitsUpto(0)).toEqual([0])
    })

    it('matches brute-force popcount for every entry up to 200', () => {
      const table = countBitsUpto(200)
      const bruteForcePopcount = (x: number): number => {
        let count = 0
        let v = x
        while (v > 0) {
          count += v & 1
          v = Math.floor(v / 2)
        }
        return count
      }
      for (let i = 0; i <= 200; i++) {
        expect(table[i]).toBe(bruteForcePopcount(i))
      }
    })

    it('builds a table of length n + 1 for a large n without timing out', () => {
      const n = 1_000_000
      const table = countBitsUpto(n)
      expect(table.length).toBe(n + 1)
      expect(table[0]).toBe(0)
      expect(table[1]).toBe(1)
      expect(table[1023]).toBe(10) // 0b1111111111
      expect(table[1_000_000]).toBe(7)
    })
  })

  describe('reverseBits32', () => {
    it('moves bit 0 to bit 31', () => {
      expect(reverseBits32(1)).toBe(2147483648) // 2**31
    })

    it('leaves 0 as 0', () => {
      expect(reverseBits32(0)).toBe(0)
    })

    it('maps all-ones to all-ones', () => {
      expect(reverseBits32(4294967295)).toBe(4294967295) // 2**32 - 1
    })

    it('is its own inverse', () => {
      const n = 0b00000000000000000000000010110100
      expect(reverseBits32(reverseBits32(n))).toBe(n)
    })

    it('reverses a known pattern', () => {
      // 0b00000000000000000000000000000011 (3) reversed -> two leading
      // bits become the two highest bits: 0b11000000000000000000000000000000
      expect(reverseBits32(0b11)).toBe(0b11000000000000000000000000000000)
    })
  })
})

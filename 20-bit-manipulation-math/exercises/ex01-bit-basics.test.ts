import { describe, expect, it } from 'vitest'
import { clearBit, countSetBits, getBit, isPowerOfTwo, setBit, toggleBit } from './ex01-bit-basics'

describe('20/ex01 — bit basics', () => {
  describe('getBit', () => {
    it('reads a set bit', () => {
      expect(getBit(0b1010, 1)).toBe(1)
    })

    it('reads an unset bit', () => {
      expect(getBit(0b1010, 0)).toBe(0)
    })

    it('reads a bit beyond the highest set bit as 0', () => {
      expect(getBit(0b1, 10)).toBe(0)
    })
  })

  describe('setBit', () => {
    it('sets an unset bit', () => {
      expect(setBit(0b1000, 0)).toBe(0b1001)
    })

    it('leaves an already-set bit unchanged', () => {
      expect(setBit(0b1111, 2)).toBe(0b1111)
    })

    it('leaves bit 0 unchanged for n = 0', () => {
      expect(setBit(0, 3)).toBe(0b1000)
    })
  })

  describe('clearBit', () => {
    it('clears a set bit', () => {
      expect(clearBit(0b1111, 1)).toBe(0b1101)
    })

    it('leaves an already-clear bit unchanged', () => {
      expect(clearBit(0b1010, 0)).toBe(0b1010)
    })
  })

  describe('toggleBit', () => {
    it('flips 0 to 1', () => {
      expect(toggleBit(0b1010, 0)).toBe(0b1011)
    })

    it('flips 1 to 0', () => {
      expect(toggleBit(0b1011, 0)).toBe(0b1010)
    })

    it('is its own inverse', () => {
      const n = 0b10110101
      expect(toggleBit(toggleBit(n, 4), 4)).toBe(n)
    })
  })

  describe('isPowerOfTwo', () => {
    it('accepts powers of two', () => {
      for (const n of [1, 2, 4, 8, 16, 1024, 1073741824]) {
        expect(isPowerOfTwo(n)).toBe(true)
      }
    })

    it('rejects non powers of two', () => {
      for (const n of [0, 3, 5, 6, 18, 100]) {
        expect(isPowerOfTwo(n)).toBe(false)
      }
    })

    it('rejects negative numbers', () => {
      expect(isPowerOfTwo(-8)).toBe(false)
    })
  })

  describe('countSetBits', () => {
    it('counts zero for 0', () => {
      expect(countSetBits(0)).toBe(0)
    })

    it('counts bits in a mixed pattern', () => {
      expect(countSetBits(0b1011)).toBe(3)
    })

    it('counts a single high bit correctly (Kernighan: one iteration, not 31)', () => {
      expect(countSetBits(1073741824)).toBe(1) // 2**30
    })

    it('counts a dense run of bits', () => {
      expect(countSetBits(0b1111111111)).toBe(10)
    })

    it('counts all set bits within a 32-bit-ish range', () => {
      expect(countSetBits(2147483647)).toBe(31) // 2**31 - 1
    })
  })
})

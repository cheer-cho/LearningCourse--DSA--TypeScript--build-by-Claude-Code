import { describe, expect, it } from 'vitest'
import { gcd, isPrime, lcm, primesUpto } from './ex04-math-essentials'

describe('20/ex04 — math essentials', () => {
  describe('gcd', () => {
    it('finds the gcd of two numbers', () => {
      expect(gcd(48, 18)).toBe(6)
    })

    it('gcd(0, b) returns b', () => {
      expect(gcd(0, 7)).toBe(7)
    })

    it('gcd(a, 0) returns a', () => {
      expect(gcd(12, 0)).toBe(12)
    })

    it('gcd(0, 0) returns 0', () => {
      expect(gcd(0, 0)).toBe(0)
    })

    it('handles equal values', () => {
      expect(gcd(9, 9)).toBe(9)
    })

    it('handles coprime values', () => {
      expect(gcd(13, 7)).toBe(1)
    })

    it('handles a multiple of b', () => {
      expect(gcd(100, 25)).toBe(25)
    })
  })

  describe('lcm', () => {
    it('computes lcm(4, 6)', () => {
      expect(lcm(4, 6)).toBe(12)
    })

    it('computes lcm(5, 7) for coprimes', () => {
      expect(lcm(5, 7)).toBe(35)
    })

    it('lcm of equal values is that value', () => {
      expect(lcm(8, 8)).toBe(8)
    })

    it('lcm of 1 and n is n', () => {
      expect(lcm(1, 100)).toBe(100)
    })
  })

  describe('primesUpto', () => {
    it('returns primes up to 30', () => {
      expect(primesUpto(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
    })

    it('returns [] for n < 2', () => {
      expect(primesUpto(0)).toEqual([])
      expect(primesUpto(1)).toEqual([])
    })

    it('returns [2] for n = 2', () => {
      expect(primesUpto(2)).toEqual([2])
    })

    it('efficiency test: sieve of 1_000_000 runs instantly and ends with known primes', () => {
      const primes = primesUpto(1_000_000)
      // There are 78498 primes below 1,000,000
      expect(primes.length).toBe(78498)
      expect(primes[0]).toBe(2)
      expect(primes[primes.length - 1]).toBe(999983)
    })
  })

  describe('isPrime', () => {
    it('returns true for known primes', () => {
      for (const p of [2, 3, 5, 7, 11, 13, 17, 97]) {
        expect(isPrime(p)).toBe(true)
      }
    })

    it('returns false for composites', () => {
      for (const n of [0, 1, 4, 6, 9, 91, 100]) {
        expect(isPrime(n)).toBe(false)
      }
    })

    it('91 is composite (7 * 13), not prime', () => {
      expect(isPrime(91)).toBe(false)
    })

    it('returns false for negative numbers', () => {
      expect(isPrime(-7)).toBe(false)
    })

    it('handles large prime', () => {
      expect(isPrime(999983)).toBe(true)
    })
  })
})

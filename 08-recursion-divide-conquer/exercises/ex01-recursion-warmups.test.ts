import { describe, expect, it } from 'vitest'
import { countdown, factorial, reverseStringRec, sumDigits } from './ex01-recursion-warmups'

describe('ex08/ex01 — factorial', () => {
  it('base case: 0! and 1!', () => {
    expect(factorial(0)).toBe(1)
    expect(factorial(1)).toBe(1)
  })

  it('computes small factorials', () => {
    expect(factorial(5)).toBe(120)
    expect(factorial(7)).toBe(5040)
  })
})

describe('ex08/ex01 — sumDigits', () => {
  it('handles single digits', () => {
    expect(sumDigits(0)).toBe(0)
    expect(sumDigits(7)).toBe(7)
  })

  it('sums multi-digit numbers', () => {
    expect(sumDigits(1234)).toBe(10)
    expect(sumDigits(999)).toBe(27)
  })
})

describe('ex08/ex01 — countdown', () => {
  it('handles n <= 0 with an empty list', () => {
    expect(countdown(0)).toEqual([])
    expect(countdown(-3)).toEqual([])
  })

  it('counts down to 1', () => {
    expect(countdown(1)).toEqual([1])
    expect(countdown(4)).toEqual([4, 3, 2, 1])
  })
})

describe('ex08/ex01 — reverseStringRec', () => {
  it('handles empty and single-character strings', () => {
    expect(reverseStringRec('')).toBe('')
    expect(reverseStringRec('a')).toBe('a')
  })

  it('reverses longer strings', () => {
    expect(reverseStringRec('abcde')).toBe('edcba')
    expect(reverseStringRec('racecar')).toBe('racecar')
    expect(reverseStringRec('hello world')).toBe('dlrow olleh')
  })
})

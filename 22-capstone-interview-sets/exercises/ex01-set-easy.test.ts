/**
 * Tests for ex01-set-easy.ts — six easy-level interview problems.
 *
 * RED against stubs (each function throws), GREEN against solutions.
 * Check: npm test -- 22 -t ex01
 */

import { describe, it, expect } from 'vitest'
import {
  topSellingFlavor,
  twoCratesForCapacity,
  maxWindowUsage,
  isBalancedTemplate,
  shortestRouteToDock,
  firstDayReachingTotal,
} from './ex01-set-easy'

// ---------------------------------------------------------------------------
// topSellingFlavor
// ---------------------------------------------------------------------------

describe('ex01 topSellingFlavor', () => {
  it('returns the flavor with the highest count', () => {
    expect(topSellingFlavor(['mint', 'mint', 'vanilla', 'vanilla', 'mint'])).toBe('mint')
  })

  it('breaks ties alphabetically — earlier letter wins', () => {
    expect(topSellingFlavor(['choc', 'vanilla'])).toBe('choc')
  })

  it('handles a tie with more than two flavors', () => {
    // 'apple' < 'banana' < 'cherry', all count 1 → 'apple'
    expect(topSellingFlavor(['banana', 'cherry', 'apple'])).toBe('apple')
  })

  it('returns the single element for a one-item array', () => {
    expect(topSellingFlavor(['strawberry'])).toBe('strawberry')
  })

  it('handles all identical flavors', () => {
    expect(topSellingFlavor(['vanilla', 'vanilla', 'vanilla'])).toBe('vanilla')
  })

  it('throws on an empty array', () => {
    // Matches an "empty"-related message, so the unsolved TODO stub stays red.
    expect(() => topSellingFlavor([])).toThrow(/empty/i)
  })
})

// ---------------------------------------------------------------------------
// twoCratesForCapacity
// ---------------------------------------------------------------------------

describe('ex01 twoCratesForCapacity', () => {
  it('returns the pair that sums to target — basic case', () => {
    expect(twoCratesForCapacity([1, 3, 4, 6, 8], 10)).toEqual([4, 6])
  })

  it('handles duplicate values in the array', () => {
    expect(twoCratesForCapacity([2, 2, 3], 4)).toEqual([2, 2])
  })

  it('returns null when no pair sums to target', () => {
    expect(twoCratesForCapacity([1, 2], 100)).toBeNull()
  })

  it('finds the correct pair when multiple pairs are possible', () => {
    // [1,5,7,9] target=6: 1+5=6 ✓
    expect(twoCratesForCapacity([1, 5, 7, 9], 6)).toEqual([1, 5])
  })

  it('returns null for a single-element array (no pair possible)', () => {
    expect(twoCratesForCapacity([5], 10)).toBeNull()
  })

  it('returns null when the array has two elements that do not sum to target', () => {
    expect(twoCratesForCapacity([3, 7], 5)).toBeNull()
  })

  it('returns the pair when the array has exactly two elements that match', () => {
    expect(twoCratesForCapacity([3, 7], 10)).toEqual([3, 7])
  })
})

// ---------------------------------------------------------------------------
// maxWindowUsage
// ---------------------------------------------------------------------------

describe('ex01 maxWindowUsage', () => {
  it('returns the max sum of a k-sized window — basic case', () => {
    // [3,1,4,1,5,9,2], k=3 → windows: 8,6,10,15,16 → 16
    expect(maxWindowUsage([3, 1, 4, 1, 5, 9, 2], 3)).toBe(16)
  })

  it('handles a single-element array with k=1', () => {
    expect(maxWindowUsage([5], 1)).toBe(5)
  })

  it('returns the sum of the last two elements for k=2', () => {
    // [1,2,3,4,5] windows: 3,5,7,9 → 9
    expect(maxWindowUsage([1, 2, 3, 4, 5], 2)).toBe(9)
  })

  it('handles k equal to the array length', () => {
    expect(maxWindowUsage([1, 2, 3], 3)).toBe(6)
  })

  it('handles negative readings', () => {
    // [-1,-2,3,4] k=2 → windows: -3,1,7 → 7
    expect(maxWindowUsage([-1, -2, 3, 4], 2)).toBe(7)
  })
})

// ---------------------------------------------------------------------------
// isBalancedTemplate
// ---------------------------------------------------------------------------

describe('ex01 isBalancedTemplate', () => {
  it('returns true for a correctly nested template', () => {
    expect(isBalancedTemplate('foo(bar[baz]{qux})')).toBe(true)
  })

  it('returns false when a closing bracket mismatches the opener', () => {
    expect(isBalancedTemplate('foo(bar]')).toBe(false)
  })

  it('returns true for an empty string', () => {
    expect(isBalancedTemplate('')).toBe(true)
  })

  it('returns true for nested delimiters {[]}', () => {
    expect(isBalancedTemplate('{[]}')).toBe(true)
  })

  it('returns false for interleaved delimiters ([)]', () => {
    expect(isBalancedTemplate('([)]')).toBe(false)
  })

  it('returns false for unclosed opener', () => {
    expect(isBalancedTemplate('(foo')).toBe(false)
  })

  it('returns false for closer with nothing on stack', () => {
    expect(isBalancedTemplate(']bar')).toBe(false)
  })

  it('ignores regular characters', () => {
    expect(isBalancedTemplate('hello world')).toBe(true)
  })

  it('handles deeply nested matching delimiters', () => {
    expect(isBalancedTemplate('({[({[]})]})')).toBe(true)
  })
})

// ---------------------------------------------------------------------------
// shortestRouteToDock
// ---------------------------------------------------------------------------

describe('ex01 shortestRouteToDock', () => {
  it('returns the correct shortest path in a 3x3 grid', () => {
    // Open path along right column: (0,0)→(0,1)→(0,2)→(1,2)→(2,2) = 4 moves
    expect(shortestRouteToDock([[0, 0, 0], [1, 1, 0], [0, 0, 0]])).toBe(4)
  })

  it('returns -1 when the destination is unreachable', () => {
    expect(shortestRouteToDock([[0, 1], [1, 0]])).toBe(-1)
  })

  it('returns 0 for a 1x1 grid (start == end)', () => {
    expect(shortestRouteToDock([[0]])).toBe(0)
  })

  it('returns -1 when the start cell is blocked', () => {
    expect(shortestRouteToDock([[1, 0], [0, 0]])).toBe(-1)
  })

  it('returns -1 when the end cell is blocked', () => {
    expect(shortestRouteToDock([[0, 0], [0, 1]])).toBe(-1)
  })

  it('handles a straight-line open path', () => {
    // 1x4 grid: 3 moves
    expect(shortestRouteToDock([[0, 0, 0, 0]])).toBe(3)
  })

  it('handles an entirely open grid', () => {
    // 2x2 open: shortest is 2 moves
    expect(shortestRouteToDock([[0, 0], [0, 0]])).toBe(2)
  })
})

// ---------------------------------------------------------------------------
// firstDayReachingTotal
// ---------------------------------------------------------------------------

describe('ex01 firstDayReachingTotal', () => {
  it('returns the correct day index for a typical case', () => {
    // totals=[2,4,4,7,10], target=5 → day 3 (total 7 is first ≥ 5)
    expect(firstDayReachingTotal([2, 4, 4, 7, 10], 5)).toBe(3)
  })

  it('returns -1 when the target is never reached', () => {
    expect(firstDayReachingTotal([1, 2, 3], 10)).toBe(-1)
  })

  it('returns 0 when the first day already meets the target', () => {
    expect(firstDayReachingTotal([5, 5, 5], 5)).toBe(0)
  })

  it('returns the correct day when target lands exactly mid-array', () => {
    expect(firstDayReachingTotal([1, 10, 100], 10)).toBe(1)
  })

  it('returns the last index when only the last day reaches the target', () => {
    expect(firstDayReachingTotal([1, 2, 3, 4, 5], 5)).toBe(4)
  })

  it('handles a single-element array that meets the target', () => {
    expect(firstDayReachingTotal([7], 7)).toBe(0)
  })

  it('handles a single-element array that does not meet the target', () => {
    expect(firstDayReachingTotal([3], 10)).toBe(-1)
  })

  it('returns 0 when target is 0 and first total is 0', () => {
    expect(firstDayReachingTotal([0, 1, 2], 0)).toBe(0)
  })
})

import { describe, expect, it } from 'vitest'
import { climbWaysMemo, climbWaysNaive, climbWaysOptimized, climbWaysTable } from './ex01-stairs-framework'

// ways(n) for n = 0..10, Fibonacci-shifted: ways(n) = fib(n + 1).
const KNOWN = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

describe('ex18/ex01 — climbWaysNaive', () => {
  it('matches known values for small n', () => {
    KNOWN.forEach((expected, n) => {
      expect(climbWaysNaive(n)).toBe(expected)
    })
  })

  it('ticks once per call in the tree — the same shape as fib(n) from module 08', () => {
    let calls = 0
    climbWaysNaive(5, () => {
      calls += 1
    })
    expect(calls).toBe(15)
  })

  it('call count grows exponential-ish as n grows', () => {
    let calls10 = 0
    climbWaysNaive(10, () => {
      calls10 += 1
    })
    expect(calls10).toBe(177)
  })
})

describe('ex18/ex01 — climbWaysMemo', () => {
  it('matches known values for small n', () => {
    KNOWN.forEach((expected, n) => {
      expect(climbWaysMemo(n)).toBe(expected)
    })
  })

  it('ticks exactly once per distinct step: n + 1 ticks for climbWaysMemo(n)', () => {
    let ticks = 0
    climbWaysMemo(10, () => {
      ticks += 1
    })
    expect(ticks).toBe(11)
  })

  it('stays within the 2n tick budget for a larger n', () => {
    let ticks = 0
    climbWaysMemo(50, () => {
      ticks += 1
    })
    expect(ticks).toBeLessThanOrEqual(2 * 50)
  })

  it('stays fast for an n where naive would be infeasible', () => {
    let ticks = 0
    const result = climbWaysMemo(1000, () => {
      ticks += 1
    })
    expect(Number.isFinite(result)).toBe(true)
    expect(ticks).toBe(1001)
  })
})

describe('ex18/ex01 — climbWaysTable', () => {
  it('matches known values for small n', () => {
    KNOWN.forEach((expected, n) => {
      expect(climbWaysTable(n)).toBe(expected)
    })
  })

  it('agrees with the memoized version for a larger n', () => {
    expect(climbWaysTable(30)).toBe(climbWaysMemo(30))
  })

  it('handles a large n quickly — proof it is not exponential', () => {
    const result = climbWaysTable(100_000)
    expect(typeof result).toBe('number')
  })
})

describe('ex18/ex01 — climbWaysOptimized', () => {
  it('matches known values for small n', () => {
    KNOWN.forEach((expected, n) => {
      expect(climbWaysOptimized(n)).toBe(expected)
    })
  })

  it('agrees with the table version for a larger n', () => {
    expect(climbWaysOptimized(30)).toBe(climbWaysTable(30))
  })

  it('handles a large n quickly with O(1) space', () => {
    const result = climbWaysOptimized(100_000)
    expect(typeof result).toBe('number')
  })
})

import { describe, expect, it } from 'vitest'
import { fibMemo, fibNaive } from './ex02-call-tree-fib'

describe('ex08/ex02 — fibNaive', () => {
  it('returns correct Fibonacci values', () => {
    expect(fibNaive(0)).toBe(0)
    expect(fibNaive(1)).toBe(1)
    expect(fibNaive(2)).toBe(1)
    expect(fibNaive(10)).toBe(55)
  })

  it('ticks once per call in the tree — proven by exact count', () => {
    let calls = 0
    fibNaive(10, () => {
      calls += 1
    })
    expect(calls).toBe(177)
  })

  it('the call tree grows the same way for a smaller n', () => {
    let calls = 0
    fibNaive(5, () => {
      calls += 1
    })
    expect(calls).toBe(15)
  })
})

describe('ex08/ex02 — fibMemo', () => {
  it('returns the same values as the naive version', () => {
    expect(fibMemo(0)).toBe(0)
    expect(fibMemo(1)).toBe(1)
    expect(fibMemo(10)).toBe(55)
    expect(fibMemo(20)).toBe(6765)
  })

  it('ticks exactly once per distinct value: n + 1 ticks for fibMemo(n)', () => {
    let ticks = 0
    fibMemo(10, () => {
      ticks += 1
    })
    expect(ticks).toBe(11)
  })

  it('proves memoization collapses the call tree vs. the naive count', () => {
    let naiveCalls = 0
    fibNaive(20, () => {
      naiveCalls += 1
    })
    let memoTicks = 0
    fibMemo(20, () => {
      memoTicks += 1
    })
    expect(memoTicks).toBe(21)
    expect(memoTicks).toBeLessThan(naiveCalls)
  })

  it('stays fast for an n that would be infeasible naively', () => {
    let ticks = 0
    expect(fibMemo(60, () => (ticks += 1))).toBe(1548008755920)
    expect(ticks).toBe(61)
  })
})

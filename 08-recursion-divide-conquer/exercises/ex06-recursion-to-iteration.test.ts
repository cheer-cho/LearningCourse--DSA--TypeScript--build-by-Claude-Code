import { describe, expect, it } from 'vitest'
import { countdownIterative, deepSumIterative } from './ex06-recursion-to-iteration'
import type { NestedNumber } from './ex04-nested-structures'

// Chosen conservatively: across quick local checks, naive one-frame-
// per-level recursion on this shape of data overflowed Node's default
// call stack somewhere between ~3,000 and ~9,000 frames (it varies by
// how much each frame holds). 50,000 sits comfortably above that
// range regardless of machine/CI, so it reliably proves the point:
// the explicit-stack iterative version is bounded by heap memory, not
// call-stack depth, and keeps working long after naive recursion dies.
const DEEP_ENOUGH_TO_OVERFLOW = 50_000

function buildDeepChain(depth: number, leaf: number): NestedNumber {
  let nested: NestedNumber = leaf
  for (let level = 0; level < depth; level++) nested = [nested]
  return nested
}

// The exact recursive definitions from the reference comments above,
// reproduced here (not imported) purely to demonstrate the contrast.
function deepSumRecursive(nested: NestedNumber): number {
  if (typeof nested === 'number') return nested
  let total = 0
  for (const child of nested) total += deepSumRecursive(child)
  return total
}

function countdownRecursive(n: number): number[] {
  if (n <= 0) return []
  return [n, ...countdownRecursive(n - 1)]
}

describe('ex08/ex06 — deepSumIterative', () => {
  it('matches deepSum on ordinary nested input', () => {
    expect(deepSumIterative(5)).toBe(5)
    expect(deepSumIterative([1, [2, 3], [[4]], 5])).toBe(15)
    expect(deepSumIterative([])).toBe(0)
    expect(deepSumIterative([1, [], [2, []], 3])).toBe(6)
  })

  it('handles negatives', () => {
    expect(deepSumIterative([1, [-5, 3], -2])).toBe(-3)
  })

  it('handles input deep enough to overflow naive recursion', () => {
    const deepChain = buildDeepChain(DEEP_ENOUGH_TO_OVERFLOW, 7)
    expect(deepSumIterative(deepChain)).toBe(7)
    // The recursive reference, by contrast, cannot survive this depth.
    expect(() => deepSumRecursive(deepChain)).toThrow(RangeError)
  })
})

describe('ex08/ex06 — countdownIterative', () => {
  it('matches countdown on ordinary input', () => {
    expect(countdownIterative(0)).toEqual([])
    expect(countdownIterative(-3)).toEqual([])
    expect(countdownIterative(1)).toEqual([1])
    expect(countdownIterative(4)).toEqual([4, 3, 2, 1])
  })

  it('handles input deep enough to overflow naive recursion', () => {
    const result = countdownIterative(DEEP_ENOUGH_TO_OVERFLOW)
    expect(result.length).toBe(DEEP_ENOUGH_TO_OVERFLOW)
    expect(result[0]).toBe(DEEP_ENOUGH_TO_OVERFLOW)
    expect(result[result.length - 1]).toBe(1)
    // The recursive reference, by contrast, cannot survive this depth.
    expect(() => countdownRecursive(DEEP_ENOUGH_TO_OVERFLOW)).toThrow(RangeError)
  })
})

import { describe, expect, it } from 'vitest'
import { deepSum, flatten, maxDepthNested, type NestedNumber } from './ex04-nested-structures'

describe('ex08/ex04 — deepSum', () => {
  it('handles a bare number', () => {
    expect(deepSum(5)).toBe(5)
    expect(deepSum(0)).toBe(0)
  })

  it('handles a flat array', () => {
    expect(deepSum([1, 2, 3])).toBe(6)
  })

  it('handles deeply nested arrays', () => {
    expect(deepSum([1, [2, 3], [[4]], 5])).toBe(15)
    expect(deepSum([[[[7]]]])).toBe(7)
  })

  it('handles empty arrays', () => {
    expect(deepSum([])).toBe(0)
    expect(deepSum([1, [], [2, []], 3])).toBe(6)
  })

  it('handles negatives', () => {
    expect(deepSum([1, [-5, 3], -2])).toBe(-3)
  })
})

describe('ex08/ex04 — maxDepthNested', () => {
  it('a bare number has depth 0', () => {
    expect(maxDepthNested(5)).toBe(0)
  })

  it('a flat array has depth 1', () => {
    expect(maxDepthNested([1, 2, 3])).toBe(1)
    expect(maxDepthNested([])).toBe(1)
  })

  it('nesting increases depth by 1 per level', () => {
    expect(maxDepthNested([1, [2, 3]])).toBe(2)
    expect(maxDepthNested([1, [2, [3]]])).toBe(3)
    expect(maxDepthNested([[[[1]]]])).toBe(4)
  })

  it('takes the deepest branch, not the first', () => {
    expect(maxDepthNested([1, [2], [3, [4, [5]]]])).toBe(4)
  })
})

describe('ex08/ex04 — flatten', () => {
  it('handles a bare number', () => {
    expect(flatten(5)).toEqual([5])
  })

  it('handles a flat array', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('preserves left-to-right order through nesting', () => {
    expect(flatten([1, [2, [3, 4], 5], 6])).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('handles empty arrays and empty input', () => {
    expect(flatten([])).toEqual([])
    expect(flatten([1, [], [2, []], 3])).toEqual([1, 2, 3])
  })

  it('type-checks as a NestedNumber -> number[] transform', () => {
    const input: NestedNumber = [1, [2, 3]]
    const result: number[] = flatten(input)
    expect(result).toEqual([1, 2, 3])
  })
})

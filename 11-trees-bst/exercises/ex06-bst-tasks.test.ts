import { describe, expect, it } from 'vitest'
import { treeFromLevelArray } from './ex01-build-bst'
import { kthSmallest, lcaBst, rangeSumBst } from './ex06-bst-tasks'

const bst = () => treeFromLevelArray([5, 2, 8, 1, 3, 7, 9])

describe('ex06 — kthSmallest', () => {
  it('finds the 1st (minimum) value', () => {
    expect(kthSmallest(bst(), 1)).toBe(1)
  })

  it('finds a middle value', () => {
    expect(kthSmallest(bst(), 4)).toBe(5)
  })

  it('finds the last (maximum) value', () => {
    expect(kthSmallest(bst(), 7)).toBe(9)
  })

  it('returns null for k out of range', () => {
    expect(kthSmallest(bst(), 0)).toBeNull()
    expect(kthSmallest(bst(), 8)).toBeNull()
  })

  it('handles an empty tree', () => {
    expect(kthSmallest(null, 1)).toBeNull()
  })

  it('handles a single node', () => {
    expect(kthSmallest(treeFromLevelArray([42]), 1)).toBe(42)
  })
})

describe('ex06 — lcaBst', () => {
  it('finds the LCA when values split at the root', () => {
    expect(lcaBst(bst(), 2, 8)?.value).toBe(5)
  })

  it('finds the LCA within a subtree', () => {
    expect(lcaBst(bst(), 1, 3)?.value).toBe(2)
  })

  it('one value being an ancestor of the other', () => {
    expect(lcaBst(bst(), 2, 1)?.value).toBe(2)
  })

  it('two leaves under the same parent', () => {
    expect(lcaBst(bst(), 7, 9)?.value).toBe(8)
  })

  it('a value being the root itself', () => {
    expect(lcaBst(bst(), 5, 9)?.value).toBe(5)
  })
})

describe('ex06 — rangeSumBst', () => {
  it('sums values within an inclusive range', () => {
    expect(rangeSumBst(bst(), 2, 8)).toBe(2 + 3 + 5 + 7 + 8)
  })

  it('sums the whole tree when the range covers everything', () => {
    expect(rangeSumBst(bst(), 0, 100)).toBe(1 + 2 + 3 + 5 + 7 + 8 + 9)
  })

  it('returns 0 when nothing is in range', () => {
    expect(rangeSumBst(bst(), 100, 200)).toBe(0)
  })

  it('handles an empty tree', () => {
    expect(rangeSumBst(null, 0, 10)).toBe(0)
  })

  it('a range that matches exactly one value', () => {
    expect(rangeSumBst(bst(), 5, 5)).toBe(5)
  })
})

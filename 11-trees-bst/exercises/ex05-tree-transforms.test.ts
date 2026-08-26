import { describe, expect, it } from 'vitest'
import { treeFromLevelArray, treeToLevelArray } from './ex01-build-bst'
import { invert, isSameTree, isSubtree, isSymmetric } from './ex05-tree-transforms'

describe('ex05 — invert', () => {
  it('swaps children recursively', () => {
    const root = treeFromLevelArray([4, 2, 7, 1, 3, 6, 9])
    const inverted = invert(root)
    expect(treeToLevelArray(inverted)).toEqual([4, 7, 2, 9, 6, 3, 1])
  })

  it('handles an empty tree and a single node', () => {
    expect(invert(null)).toBeNull()
    expect(treeToLevelArray(invert(treeFromLevelArray([5])))).toEqual([5])
  })

  it('handles a lopsided tree', () => {
    const root = treeFromLevelArray([1, 2])
    expect(treeToLevelArray(invert(root))).toEqual([1, null, 2])
  })
})

describe('ex05 — isSameTree', () => {
  it('true for two empty trees', () => {
    expect(isSameTree(null, null)).toBe(true)
  })

  it('true for identical trees', () => {
    expect(isSameTree(treeFromLevelArray([1, 2, 3]), treeFromLevelArray([1, 2, 3]))).toBe(true)
  })

  it('false when shapes differ', () => {
    expect(isSameTree(treeFromLevelArray([1, 2]), treeFromLevelArray([1, null, 2]))).toBe(false)
  })

  it('false when a value differs', () => {
    expect(isSameTree(treeFromLevelArray([1, 2]), treeFromLevelArray([1, 9]))).toBe(false)
  })

  it('false when one tree is empty and the other is not', () => {
    expect(isSameTree(null, treeFromLevelArray([1]))).toBe(false)
  })
})

describe('ex05 — isSubtree', () => {
  it('finds an exact subtree match', () => {
    const root = treeFromLevelArray([3, 4, 5, 1, 2])
    const sub = treeFromLevelArray([4, 1, 2])
    expect(isSubtree(root, sub)).toBe(true)
  })

  it('rejects a value match that is not a full subtree match', () => {
    const root = treeFromLevelArray([3, 4, 5, 1, 2, null, null, null, null, 0])
    const sub = treeFromLevelArray([4, 1, 2])
    expect(isSubtree(root, sub)).toBe(false)
  })

  it('the whole tree counts as its own subtree', () => {
    const root = treeFromLevelArray([1, 2, 3])
    expect(isSubtree(root, treeFromLevelArray([1, 2, 3]))).toBe(true)
  })

  it('an empty sub-tree matches trivially', () => {
    expect(isSubtree(treeFromLevelArray([1, 2, 3]), null)).toBe(true)
  })

  it('an empty root only matches an empty sub-tree', () => {
    expect(isSubtree(null, treeFromLevelArray([1]))).toBe(false)
    expect(isSubtree(null, null)).toBe(true)
  })
})

describe('ex05 — isSymmetric', () => {
  it('true for a mirror-symmetric tree', () => {
    expect(isSymmetric(treeFromLevelArray([1, 2, 2, 3, 4, 4, 3]))).toBe(true)
  })

  it('false when values mismatch across the mirror', () => {
    expect(isSymmetric(treeFromLevelArray([1, 2, 2, null, 3, null, 3]))).toBe(false)
  })

  it('an empty tree and a single node are symmetric', () => {
    expect(isSymmetric(null)).toBe(true)
    expect(isSymmetric(treeFromLevelArray([1]))).toBe(true)
  })

  it('false when shapes mismatch across the mirror', () => {
    expect(isSymmetric(treeFromLevelArray([1, 2, 2, 3, null, 3]))).toBe(false)
  })
})

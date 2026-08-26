import { describe, expect, it } from 'vitest'
import { treeFromLevelArray } from './ex01-build-bst'
import { levelAverages, rightSideView, zigzagLevels } from './ex07-level-patterns'

describe('ex07 — rightSideView', () => {
  it('returns the rightmost node of each level', () => {
    const root = treeFromLevelArray([1, 2, 3, null, 5, null, 4])
    expect(rightSideView(root)).toEqual([1, 3, 4])
  })

  it('handles an empty tree', () => {
    expect(rightSideView(null)).toEqual([])
  })

  it('handles a single node', () => {
    expect(rightSideView(treeFromLevelArray([7]))).toEqual([7])
  })

  it('a level with only a left child still shows that left child', () => {
    const root = treeFromLevelArray([1, 2, 3, 4])
    expect(rightSideView(root)).toEqual([1, 3, 4])
  })

  it('a fully left-skewed chain shows every node', () => {
    const root = treeFromLevelArray([1, 2, null, 3])
    expect(rightSideView(root)).toEqual([1, 2, 3])
  })
})

describe('ex07 — levelAverages', () => {
  it('averages each level', () => {
    expect(levelAverages(treeFromLevelArray([3, 9, 20, null, null, 15, 7]))).toEqual([3, 14.5, 11])
  })

  it('handles an empty tree', () => {
    expect(levelAverages(null)).toEqual([])
  })

  it('handles a single node', () => {
    expect(levelAverages(treeFromLevelArray([10]))).toEqual([10])
  })

  it('handles negative values', () => {
    expect(levelAverages(treeFromLevelArray([0, -2, 2]))).toEqual([0, 0])
  })
})

describe('ex07 — zigzagLevels', () => {
  it('alternates direction level by level', () => {
    const root = treeFromLevelArray([1, 2, 3, 4, 5, 6, 7])
    expect(zigzagLevels(root)).toEqual([[1], [3, 2], [4, 5, 6, 7]])
  })

  it('handles an empty tree', () => {
    expect(zigzagLevels(null)).toEqual([])
  })

  it('handles a single node', () => {
    expect(zigzagLevels(treeFromLevelArray([9]))).toEqual([[9]])
  })

  it('handles an unbalanced tree', () => {
    const root = treeFromLevelArray([1, 2, null, 3])
    expect(zigzagLevels(root)).toEqual([[1], [2], [3]])
  })
})

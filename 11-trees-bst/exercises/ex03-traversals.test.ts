import { describe, expect, it } from 'vitest'
import { treeFromLevelArray } from './ex01-build-bst'
import { inorder, inorderIterative, levelOrder, postorder, preorder } from './ex03-traversals'

const sample = () => treeFromLevelArray([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13])

describe('ex03 — recursive traversals', () => {
  it('preorder visits root, left, right', () => {
    expect(preorder(sample())).toEqual([8, 3, 1, 6, 4, 7, 10, 14, 13])
  })

  it('inorder visits left, root, right (sorted on a BST)', () => {
    expect(inorder(sample())).toEqual([1, 3, 4, 6, 7, 8, 10, 13, 14])
  })

  it('postorder visits left, right, root', () => {
    expect(postorder(sample())).toEqual([1, 4, 7, 6, 3, 13, 14, 10, 8])
  })

  it('all three handle an empty tree', () => {
    expect(preorder(null)).toEqual([])
    expect(inorder(null)).toEqual([])
    expect(postorder(null)).toEqual([])
  })

  it('all three handle a single node', () => {
    const single = treeFromLevelArray([7])
    expect(preorder(single)).toEqual([7])
    expect(inorder(single)).toEqual([7])
    expect(postorder(single)).toEqual([7])
  })

  it('handles a left-skewed chain', () => {
    const chain = treeFromLevelArray([3, 2, null, 1])
    expect(inorder(chain)).toEqual([1, 2, 3])
    expect(preorder(chain)).toEqual([3, 2, 1])
  })
})

describe('ex03 — inorderIterative', () => {
  it('matches recursive inorder on the sample tree', () => {
    expect(inorderIterative(sample())).toEqual(inorder(sample()))
  })

  it('handles an empty tree and a single node', () => {
    expect(inorderIterative(null)).toEqual([])
    expect(inorderIterative(treeFromLevelArray([9]))).toEqual([9])
  })

  it('handles a right-skewed chain', () => {
    const chain = treeFromLevelArray([1, null, 2, null, 3])
    expect(inorderIterative(chain)).toEqual([1, 2, 3])
  })
})

describe('ex03 — levelOrder', () => {
  it('groups the sample tree by level', () => {
    expect(levelOrder(sample())).toEqual([[8], [3, 10], [1, 6, 14], [4, 7, 13]])
  })

  it('handles an empty tree', () => {
    expect(levelOrder(null)).toEqual([])
  })

  it('handles a single node', () => {
    expect(levelOrder(treeFromLevelArray([5]))).toEqual([[5]])
  })

  it('handles an unbalanced tree (missing nodes on one side)', () => {
    const tree = treeFromLevelArray([1, 2, null, 3])
    expect(levelOrder(tree)).toEqual([[1], [2], [3]])
  })
})

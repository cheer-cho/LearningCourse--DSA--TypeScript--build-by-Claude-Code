import { describe, expect, it } from 'vitest'
import { treeFromLevelArray, treeToLevelArray } from './ex01-build-bst'
import { deleteValue, isValidBst } from './ex02-bst-delete-validate'

describe('ex02 — deleteValue', () => {
  it('deletes a leaf', () => {
    const root = treeFromLevelArray([5, 2, 8])
    const result = deleteValue(root, 2)
    expect(treeToLevelArray(result)).toEqual([5, null, 8])
  })

  it('deletes a node with one child', () => {
    const root = treeFromLevelArray([5, 2, 8, 1])
    const result = deleteValue(root, 2)
    expect(treeToLevelArray(result)).toEqual([5, 1, 8])
  })

  it('deletes a node with two children by successor swap', () => {
    const root = treeFromLevelArray([5, 2, 8, 1, 3, 7, 9])
    const result = deleteValue(root, 5)
    // whatever value replaces the root, the resulting tree must still
    // be a valid BST containing everything except 5
    expect(isValidBstHelper(result)).toBe(true)
    const values = collectSorted(result)
    expect(values).toEqual([1, 2, 3, 7, 8, 9])
  })

  it('deleting the only node empties the tree', () => {
    const root = treeFromLevelArray([5])
    expect(deleteValue(root, 5)).toBeNull()
  })

  it('deleting a missing value is a no-op', () => {
    const root = treeFromLevelArray([5, 2, 8])
    const result = deleteValue(root, 100)
    expect(treeToLevelArray(result)).toEqual([5, 2, 8])
  })

  it('handles an empty tree', () => {
    expect(deleteValue(null, 1)).toBeNull()
  })
})

describe('ex02 — isValidBst', () => {
  it('accepts a valid BST', () => {
    expect(isValidBst(treeFromLevelArray([5, 2, 8, 1, 3, 7, 9]))).toBe(true)
  })

  it('accepts an empty tree and a single node', () => {
    expect(isValidBst(null)).toBe(true)
    expect(isValidBst(treeFromLevelArray([5]))).toBe(true)
  })

  it('rejects a node whose right value is smaller', () => {
    expect(isValidBst(treeFromLevelArray([5, 2, 3]))).toBe(false)
  })

  it('the famous trap: child ok, grandchild wrong', () => {
    // root 5, right child 8 (locally fine, 8 > 5), but 8's left child
    // is 4 -- 4 < 5, so it violates the global invariant even though
    // 4 < 8 passes a naive parent-vs-child check
    const root = treeFromLevelArray([5, 3, 8, null, null, 4, 9])
    expect(isValidBst(root)).toBe(false)
  })

  it('rejects duplicate values', () => {
    expect(isValidBst(treeFromLevelArray([5, 5, 8]))).toBe(false)
  })
})

// --- local helpers for this test file only ---

function isValidBstHelper(root: ReturnType<typeof treeFromLevelArray>): boolean {
  return isValidBst(root)
}

function collectSorted(root: ReturnType<typeof treeFromLevelArray>): number[] {
  const out: number[] = []
  const walk = (node: ReturnType<typeof treeFromLevelArray>): void => {
    if (node === null) return
    walk(node.left)
    out.push(node.value)
    walk(node.right)
  }
  walk(root)
  return out
}

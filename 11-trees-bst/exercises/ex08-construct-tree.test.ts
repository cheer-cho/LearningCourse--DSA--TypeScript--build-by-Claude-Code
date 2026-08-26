import { performance } from 'node:perf_hooks'
import { describe, expect, it } from 'vitest'
import { treeToLevelArray } from './ex01-build-bst'
import { inorder as inorderOf, preorder as preorderOf } from './ex03-traversals'
import { buildFromPreIn } from './ex08-construct-tree'

// Builds a balanced BST's preorder over the sorted values [0, n), by
// always picking the middle of the remaining range as the "root" —
// without ever materializing a TreeNode. Pairing this with the sorted
// inorder [0, n) gives a valid, large (n-node) preorder/inorder input
// whose recursion depth stays O(log n), so it's safe to build even
// for a big n.
function balancedPreorder(n: number): number[] {
  const out: number[] = []
  const walk = (lo: number, hi: number): void => {
    if (lo > hi) return
    const mid = Math.floor((lo + hi) / 2)
    out.push(mid)
    walk(lo, mid - 1)
    walk(mid + 1, hi)
  }
  walk(0, n - 1)
  return out
}

describe('ex08 — buildFromPreIn', () => {
  it('handles empty input', () => {
    expect(buildFromPreIn([], [])).toBeNull()
  })

  it('handles a single node', () => {
    const root = buildFromPreIn([7], [7])
    expect(treeToLevelArray(root)).toEqual([7])
  })

  it('reconstructs a small tree', () => {
    const root = buildFromPreIn([8, 3, 1, 6, 4, 7, 10, 14, 13], [1, 3, 4, 6, 7, 8, 10, 13, 14])
    expect(treeToLevelArray(root)).toEqual([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13])
  })

  it('handles a left-skewed chain', () => {
    const root = buildFromPreIn([3, 2, 1], [1, 2, 3])
    expect(treeToLevelArray(root)).toEqual([3, 2, null, 1])
  })

  it('handles a right-skewed chain', () => {
    const root = buildFromPreIn([1, 2, 3], [1, 2, 3])
    expect(treeToLevelArray(root)).toEqual([1, null, 2, null, 3])
  })

  it('round-trips through preorder/inorder for a hand-built tree', () => {
    const pre = [5, 3, 2, 4, 8, 7, 9]
    const ino = [2, 3, 4, 5, 7, 8, 9]
    const root = buildFromPreIn(pre, ino)
    expect(preorderOf(root)).toEqual(pre)
    expect(inorderOf(root)).toEqual(ino)
  })

  it('reconstructs a large balanced tree efficiently (efficiency test)', () => {
    const n = 10_000
    const inorderInput = Array.from({ length: n }, (_, i) => i)
    const preorderInput = balancedPreorder(n)

    const start = performance.now()
    const root = buildFromPreIn(preorderInput, inorderInput)
    const elapsed = performance.now() - start

    expect(inorderOf(root)).toEqual(inorderInput)
    expect(elapsed).toBeLessThan(1000) // generous: O(n) finishes in well under this
  })
})

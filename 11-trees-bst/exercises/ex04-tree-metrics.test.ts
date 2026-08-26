import { performance } from 'node:perf_hooks'
import { describe, expect, it } from 'vitest'
import { TreeNode, treeFromLevelArray } from './ex01-build-bst'
import { countNodes, diameter, isBalanced, maxDepth } from './ex04-tree-metrics'

// A purely left-leaning chain of `n` nodes — deliberately unbalanced,
// and big enough that an O(n^2) isBalanced (recomputing each
// subtree's height from scratch at every node) is dramatically slower
// than the O(n) bottom-up target.
function buildSkewedChain(n: number): TreeNode | null {
  let root: TreeNode | null = null
  for (let i = n - 1; i >= 0; i -= 1) {
    root = new TreeNode(i, root, null)
  }
  return root
}

// A complete/perfect binary tree of the given depth (every level full,
// every subtree's height exactly matches its sibling's).
function buildPerfectTree(depth: number): TreeNode | null {
  if (depth === 0) return null
  return new TreeNode(0, buildPerfectTree(depth - 1), buildPerfectTree(depth - 1))
}

// A fully-skewed chain looks like the obvious "worst case" for a naive
// top-down isBalanced, but it isn't: the root's own height check sees
// the huge left/right height gap immediately and returns false after a
// single O(n) pass — no repeated work ever happens (that's exactly why
// buildSkewedChain above doesn't punish a naive implementation).
//
// This tree is the opposite shape: a perfect tree, so every node's two
// children have exactly matching heights and the local diff-check
// passes all the way down — except at ONE node, deep on the rightmost
// path, whose right child is pruned away entirely. That node's OWN
// height is unchanged (still governed by its left child, which still
// reaches full depth), so every ancestor above it sees a perfectly
// matched pair of heights and keeps recursing: the imbalance is
// invisible until you are standing right on top of it. A naive
// solution that recomputes maxDepth() from scratch at every node has
// to fully re-walk most of the tree (real, repeated work at nearly
// every level -> O(n log n) total) before it ever reaches that one
// node. The O(n) bottom-up solution finds it in a single pass.
function buildHiddenImbalanceTree(depth: number): TreeNode {
  const root = buildPerfectTree(depth) as TreeNode
  let node = root
  for (let i = 0; i < depth - 3; i += 1) {
    node = node.right as TreeNode
  }
  node.right = null
  return root
}

const sample = () => treeFromLevelArray([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13])

describe('ex04 — maxDepth', () => {
  it('an empty tree has depth 0', () => {
    expect(maxDepth(null)).toBe(0)
  })

  it('a single node has depth 1', () => {
    expect(maxDepth(treeFromLevelArray([1]))).toBe(1)
  })

  it('counts the longest root-to-leaf path', () => {
    expect(maxDepth(sample())).toBe(4)
  })

  it('handles a skewed chain', () => {
    expect(maxDepth(buildSkewedChain(50))).toBe(50)
  })
})

describe('ex04 — countNodes', () => {
  it('an empty tree has 0 nodes', () => {
    expect(countNodes(null)).toBe(0)
  })

  it('counts every node, not just leaves', () => {
    expect(countNodes(sample())).toBe(9)
  })
})

describe('ex04 — isBalanced', () => {
  it('an empty tree and a single node are balanced', () => {
    expect(isBalanced(null)).toBe(true)
    expect(isBalanced(treeFromLevelArray([1]))).toBe(true)
  })

  it('accepts a balanced tree', () => {
    expect(isBalanced(treeFromLevelArray([1, 2, 3, 4, 5, 6, 7]))).toBe(true)
  })

  it('rejects a tree unbalanced at a deep node, even though the root looks fine', () => {
    // root: left height 2, right height 3 -- diff 1, balanced AT THE ROOT.
    // but node 3 (right child of root) has left height 0, right height 2:
    // diff 2, so the tree as a whole is not balanced.
    const node6 = new TreeNode(6)
    const node5 = new TreeNode(5, node6, null)
    const node3 = new TreeNode(3, null, node5)
    const node4 = new TreeNode(4)
    const node2 = new TreeNode(2, node4, null)
    const root = new TreeNode(1, node2, node3)
    expect(isBalanced(root)).toBe(false)
  })

  it('rejects an obviously skewed small tree', () => {
    expect(isBalanced(treeFromLevelArray([1, 2, null, 3]))).toBe(false)
  })

  it('finds a deeply buried imbalance efficiently (efficiency test)', () => {
    // See buildHiddenImbalanceTree: a perfect (shallow-looking) tree of
    // depth 23 (~8M nodes) whose one true imbalance is buried on the
    // rightmost path, undetectable from any ancestor above it. A naive
    // top-down solution (recompute maxDepth() from scratch at every
    // node) has to redo real work at nearly every level before reaching
    // it — measured at >1s locally. A bottom-up single pass (the O(n)
    // target) finds it in well under 500ms.
    const tree = buildHiddenImbalanceTree(23)
    const start = performance.now()
    const result = isBalanced(tree)
    const elapsed = performance.now() - start
    expect(result).toBe(false)
    expect(elapsed).toBeLessThan(500) // generous: O(n) finishes in well under this
  })
})

describe('ex04 — diameter', () => {
  it('an empty tree and a single node have diameter 0', () => {
    expect(diameter(null)).toBe(0)
    expect(diameter(treeFromLevelArray([1]))).toBe(0)
  })

  it('a chain of 3 nodes has diameter 2', () => {
    expect(diameter(treeFromLevelArray([1, 2, null, 3]))).toBe(2)
  })

  it('the longest path may not pass through the root', () => {
    expect(diameter(sample())).toBe(6)
  })

  it('two leaves off the root give diameter 2', () => {
    expect(diameter(treeFromLevelArray([1, 2, 3]))).toBe(2)
  })
})

// Reference solution — ex04

import { TreeNode } from './ex01-build-bst'

// Pattern: bottom-up DFS. O(n) time, O(h) space.
export function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

// Pattern: bottom-up DFS, combine child counts. O(n) time, O(h) space.
export function countNodes(root: TreeNode | null): number {
  if (root === null) return 0
  return 1 + countNodes(root.left) + countNodes(root.right)
}

// Pattern: bottom-up DFS computing height ONCE per node, using a -1
// sentinel to short-circuit and propagate "already unbalanced" back up
// without extra work. This is what keeps it O(n) instead of O(n^2) —
// a naive version calls a separate maxDepth() at every node, redoing
// work for every ancestor on a skewed tree.
export function isBalanced(root: TreeNode | null): boolean {
  const height = (node: TreeNode | null): number => {
    if (node === null) return 0
    const leftHeight = height(node.left)
    if (leftHeight === -1) return -1
    const rightHeight = height(node.right)
    if (rightHeight === -1) return -1
    if (Math.abs(leftHeight - rightHeight) > 1) return -1
    return 1 + Math.max(leftHeight, rightHeight)
  }
  return height(root) !== -1
}

// Pattern: bottom-up DFS that returns depth AND updates a running
// "best diameter" as a side effect of the same pass -- the diameter
// through a node is depth(left) + depth(right) in edges, and the
// global answer is the max of that over every node. O(n) time, O(h)
// space (one pass, no repeated subtree recomputation).
export function diameter(root: TreeNode | null): number {
  let best = 0
  const depth = (node: TreeNode | null): number => {
    if (node === null) return 0
    const leftDepth = depth(node.left)
    const rightDepth = depth(node.right)
    best = Math.max(best, leftDepth + rightDepth)
    return 1 + Math.max(leftDepth, rightDepth)
  }
  depth(root)
  return best
}

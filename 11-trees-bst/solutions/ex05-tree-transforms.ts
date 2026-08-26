// Reference solution — ex05

import { TreeNode } from './ex01-build-bst'

// Pattern: bottom-up DFS — invert the children first, then swap the
// (already-inverted) pair onto this node. O(n) time, O(h) space.
export function invert(root: TreeNode | null): TreeNode | null {
  if (root === null) return null
  const left = invert(root.left)
  const right = invert(root.right)
  root.left = right
  root.right = left
  return root
}

// Pattern: DFS combining both children's answers with AND. Short-
// circuits on the first mismatch. O(min(n, m)) time, O(h) space.
export function isSameTree(a: TreeNode | null, b: TreeNode | null): boolean {
  if (a === null && b === null) return true
  if (a === null || b === null) return false
  return a.value === b.value && isSameTree(a.left, b.left) && isSameTree(a.right, b.right)
}

// Pattern: DFS over `root`, trying isSameTree at every node. Each of
// the n nodes in root can trigger an O(m) comparison, hence O(n * m)
// worst case (e.g. a value that recurs often near the top).
export function isSubtree(root: TreeNode | null, sub: TreeNode | null): boolean {
  if (sub === null) return true
  if (root === null) return false
  if (isSameTree(root, sub)) return true
  return isSubtree(root.left, sub) || isSubtree(root.right, sub)
}

// Pattern: DFS on a PAIR of pointers that start as (left, right) and
// walk inward as mirror images of each other. O(n) time, O(h) space.
export function isSymmetric(root: TreeNode | null): boolean {
  const mirrors = (a: TreeNode | null, b: TreeNode | null): boolean => {
    if (a === null && b === null) return true
    if (a === null || b === null) return false
    return a.value === b.value && mirrors(a.left, b.right) && mirrors(a.right, b.left)
  }
  if (root === null) return true
  return mirrors(root.left, root.right)
}

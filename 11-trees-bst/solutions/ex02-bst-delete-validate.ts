// Reference solution — ex02

import { TreeNode } from './ex01-build-bst'

// Pattern: recursive BST delete, three cases. Walk down by ordering to
// find the value (O(h)); at the target, splice out a leaf/one-child
// node directly, or for two children copy up the inorder successor
// (min of the right subtree) and delete IT from the right subtree —
// that recursive call is itself at most a 0- or 1-child delete.
// O(h) time, O(h) space (recursion stack).
export function deleteValue(root: TreeNode | null, value: number): TreeNode | null {
  if (root === null) return null

  if (value < root.value) {
    root.left = deleteValue(root.left, value)
    return root
  }
  if (value > root.value) {
    root.right = deleteValue(root.right, value)
    return root
  }

  // found the node to delete
  if (root.left === null) return root.right
  if (root.right === null) return root.left

  // two children: find the inorder successor (leftmost of right subtree)
  let successor = root.right
  while (successor.left !== null) successor = successor.left
  root.value = successor.value
  root.right = deleteValue(root.right, successor.value)
  return root
}

// Pattern: validate with a tightening (min, max) bound, not a naive
// parent-vs-child comparison -- the invariant is global, so a node's
// bound must come from every ancestor decision on the path, not just
// its direct parent. O(n) time, O(h) space.
export function isValidBst(root: TreeNode | null): boolean {
  const check = (node: TreeNode | null, min: number | null, max: number | null): boolean => {
    if (node === null) return true
    if (min !== null && node.value <= min) return false
    if (max !== null && node.value >= max) return false
    return check(node.left, min, node.value) && check(node.right, node.value, max)
  }
  return check(root, null, null)
}

/**
 * ex03 — Traversals
 *
 * Scenario: the four ways to walk a tree, recursive and iterative.
 * Pattern: DFS (pre/in/post, "trust the subtree") vs BFS (level
 * order, explicit queue); DFS with an explicit stack.
 * Check: npm test -- 11 -t ex03
 */

import { TreeNode } from './ex01-build-bst'

/**
 * Visits root, then left subtree, then right subtree.
 *
 * @param root - the tree's root (may be `null`)
 * @returns values in preorder
 *
 * @example preorder(treeFromLevelArray([8, 3, 10])) -> [8, 3, 10]
 *
 * Target: O(n) time, O(h) space (call stack) + O(n) output
 */
export function preorder(root: TreeNode | null): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Visits left subtree, then root, then right subtree. On a valid BST
 * this comes out sorted ascending.
 *
 * @param root - the tree's root (may be `null`)
 * @returns values in inorder
 *
 * @example inorder(treeFromLevelArray([8, 3, 10])) -> [3, 8, 10]
 *
 * Target: O(n) time, O(h) space + O(n) output
 */
export function inorder(root: TreeNode | null): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Visits left subtree, then right subtree, then root.
 *
 * @param root - the tree's root (may be `null`)
 * @returns values in postorder
 *
 * @example postorder(treeFromLevelArray([8, 3, 10])) -> [3, 10, 8]
 *
 * Target: O(n) time, O(h) space + O(n) output
 */
export function postorder(root: TreeNode | null): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Same result as `inorder`, but with an explicit stack instead of
 * recursion — walk left as far as possible, visit, then step right.
 *
 * @param root - the tree's root (may be `null`)
 * @returns values in inorder
 *
 * @example inorderIterative(treeFromLevelArray([8, 3, 10])) -> [3, 8, 10]
 *
 * Target: O(n) time, O(h) space (explicit stack, no recursion)
 */
export function inorderIterative(root: TreeNode | null): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Groups values level by level (BFS), root's level first.
 *
 * @param root - the tree's root (may be `null`)
 * @returns one array of values per level, top to bottom
 *
 * @example
 * levelOrder(treeFromLevelArray([8, 3, 10, 1, 6]))
 * // -> [[8], [3, 10], [1, 6]]
 *
 * Target: O(n) time, O(n) space (queue can hold up to ~n/2 nodes)
 */
export function levelOrder(root: TreeNode | null): number[][] {
  throw new Error('TODO: implement me')
}

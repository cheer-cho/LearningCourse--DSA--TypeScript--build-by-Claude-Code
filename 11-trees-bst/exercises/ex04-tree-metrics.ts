/**
 * ex04 — Tree metrics
 *
 * Scenario: numbers that describe a tree's shape. Pattern: bottom-up
 * DFS ("trust the subtree" — compute each child's answer once, combine
 * at the parent) instead of recomputing subtree info at every node.
 * Check: npm test -- 11 -t ex04
 */

import { TreeNode } from './ex01-build-bst'

/**
 * The number of nodes on the longest root-to-leaf path (an empty tree
 * has depth 0, a single node has depth 1).
 *
 * @param root - the tree's root (may be `null`)
 * @returns the max depth
 *
 * @example maxDepth(treeFromLevelArray([1, 2, 3, 4])) -> 3
 *
 * Target: O(n) time, O(h) space
 */
export function maxDepth(root: TreeNode | null): number {
  throw new Error('TODO: implement me')
}

/**
 * Total number of nodes in the tree.
 *
 * @param root - the tree's root (may be `null`)
 * @returns the node count
 *
 * @example countNodes(treeFromLevelArray([1, 2, 3])) -> 3
 *
 * Target: O(n) time, O(h) space
 */
export function countNodes(root: TreeNode | null): number {
  throw new Error('TODO: implement me')
}

/**
 * Is the tree height-balanced? For EVERY node, the heights of its left
 * and right subtrees differ by at most 1. Compute each subtree's
 * height once, bottom-up — do not recompute a subtree's height once
 * per ancestor, that degrades to O(n^2) on a skewed tree.
 *
 * @param root - the tree's root (may be `null`)
 * @returns true iff every node satisfies the balance condition
 *
 * @example
 * isBalanced(treeFromLevelArray([1, 2, 3])) -> true
 * isBalanced(treeFromLevelArray([1, 2, null, 3])) -> true
 * isBalanced(treeFromLevelArray([1, 2, null, 3, null, 4])) -> false
 *
 * Target: O(n) time, O(h) space (single bottom-up pass)
 */
export function isBalanced(root: TreeNode | null): boolean {
  throw new Error('TODO: implement me')
}

/**
 * The number of edges on the longest path between any two nodes — the
 * path does NOT need to pass through the root.
 *
 * @param root - the tree's root (may be `null`)
 * @returns the diameter, in edges (0 for an empty tree or a single node)
 *
 * @example
 * // tree: 8 -> left 3 (-> 1, 6 (-> 4, 7)), right 10 (-> null, 14 (-> 13, null))
 * diameter(root) -> 6   // 4-6-3-8-10-14-13
 *
 * Target: O(n) time, O(h) space (single bottom-up pass)
 */
export function diameter(root: TreeNode | null): number {
  throw new Error('TODO: implement me')
}

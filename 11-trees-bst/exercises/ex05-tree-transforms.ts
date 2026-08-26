/**
 * ex05 — Tree transforms & comparisons
 *
 * Scenario: reshape a tree, or compare two trees' shape and values.
 * Pattern: DFS "combine child answers" — build the result from what
 * the recursive calls on the children already computed.
 * Check: npm test -- 11 -t ex05
 */

import { TreeNode } from './ex01-build-bst'

/**
 * Mirrors the tree: every node's left and right children are swapped,
 * recursively.
 *
 * @param root - the tree's root (may be `null`)
 * @returns the same root, mutated in place, with every subtree mirrored
 *
 * @example
 * // 1(2,3) -> 1(3,2)
 * invert(treeFromLevelArray([1, 2, 3]))
 * // -> treeToLevelArray(...) === [1, 3, 2]
 *
 * Target: O(n) time, O(h) space
 */
export function invert(root: TreeNode | null): TreeNode | null {
  throw new Error('TODO: implement me')
}

/**
 * Are two trees identical in both shape and values?
 *
 * @param a - first tree's root (may be `null`)
 * @param b - second tree's root (may be `null`)
 * @returns true iff every corresponding node matches
 *
 * @example
 * isSameTree(treeFromLevelArray([1, 2]), treeFromLevelArray([1, 2])) -> true
 * isSameTree(treeFromLevelArray([1, 2]), treeFromLevelArray([1, null, 2])) -> false
 *
 * Target: O(min(n, m)) time, O(h) space
 */
export function isSameTree(a: TreeNode | null, b: TreeNode | null): boolean {
  throw new Error('TODO: implement me')
}

/**
 * Does `sub` appear anywhere in `root` as an exact subtree (a node
 * whose ENTIRE subtree, not just its value, matches `sub`)?
 *
 * @param root - the tree to search in (may be `null`)
 * @param sub - the candidate subtree (may be `null`; `null` matches
 *   trivially at any point)
 * @returns true iff some node's subtree in `root` equals `sub` exactly
 *
 * @example
 * isSubtree(treeFromLevelArray([3, 4, 5, 1, 2]), treeFromLevelArray([4, 1, 2])) -> true
 * isSubtree(treeFromLevelArray([3, 4, 5]), treeFromLevelArray([4, 5])) -> false
 *
 * Target: O(n * m) worst case time, O(h) space (n, m = node counts)
 */
export function isSubtree(root: TreeNode | null, sub: TreeNode | null): boolean {
  throw new Error('TODO: implement me')
}

/**
 * Is the tree a mirror image of itself around its center?
 *
 * @param root - the tree's root (may be `null`)
 * @returns true iff the left and right subtrees are mirror images
 *
 * @example
 * isSymmetric(treeFromLevelArray([1, 2, 2, 3, 4, 4, 3])) -> true
 * isSymmetric(treeFromLevelArray([1, 2, 2, null, 3, null, 3])) -> false
 *
 * Target: O(n) time, O(h) space
 */
export function isSymmetric(root: TreeNode | null): boolean {
  throw new Error('TODO: implement me')
}

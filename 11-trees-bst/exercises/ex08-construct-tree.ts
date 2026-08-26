/**
 * ex08 — Construct a tree from preorder + inorder (HARD)
 *
 * Scenario: reverse the traversals from ex03 — rebuild the tree that
 * produced a given preorder/inorder pair. Pattern: DFS + a value ->
 * index map (avoid re-scanning inorder with indexOf/find every call,
 * that's the O(n^2) trap this exercise is built to punish).
 * Precondition: values are unique within a test case.
 * Check: npm test -- 11 -t ex08
 */

import { TreeNode } from './ex01-build-bst'

/**
 * Rebuilds the tree that produced these two traversals.
 * `preorder[0]` is always the root; its position in `inorder` splits
 * everything before it into the left subtree and everything after
 * into the right subtree. Build an index map ONCE up front (value ->
 * position in `inorder`) instead of searching `inorder` on every call
 * — that's what keeps the whole build O(n) instead of O(n^2).
 *
 * @param preorder - root-first traversal of the tree
 * @param inorder - left-root-right traversal of the same tree
 * @returns the reconstructed tree's root, or `null` for empty input
 *
 * @example
 * buildFromPreIn([8, 3, 1, 6, 4, 7, 10, 14, 13], [1, 3, 4, 6, 7, 8, 10, 13, 14])
 * // ->      8
 * //       /   \
 * //      3     10
 * //     / \      \
 * //    1   6      14
 * //       / \     /
 * //      4   7  13
 *
 * Target: O(n) time, O(n) space (index map + recursion stack)
 */
export function buildFromPreIn(preorder: number[], inorder: number[]): TreeNode | null {
  throw new Error('TODO: implement me')
}

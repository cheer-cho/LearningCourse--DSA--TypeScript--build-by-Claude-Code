/**
 * ex06 — Classic BST tasks
 *
 * Scenario: three problems that only make sense BECAUSE it's a BST —
 * each one would need extra sorting or a full scan on a plain tree.
 * Pattern: inorder = sorted order; ordering lets you skip whole
 * subtrees instead of visiting every node.
 * Check: npm test -- 11 -t ex06
 */

import { TreeNode } from './ex01-build-bst'

/**
 * The kth smallest value (1-indexed) in the BST. Stop the inorder walk
 * as soon as you reach the kth value — no need to visit the rest.
 *
 * @param root - the BST's root (may be `null`)
 * @param k - 1-indexed rank to find
 * @returns the kth smallest value, or `null` if k is out of range
 *
 * @example
 * // BST: 5 / \ 2 8, left: 2 has right child 3
 * kthSmallest(root, 1) -> 2
 * kthSmallest(root, 3) -> 5
 *
 * Target: O(h + k) time, O(h) space (inorder, stop early)
 */
export function kthSmallest(root: TreeNode | null, k: number): number | null {
  throw new Error('TODO: implement me')
}

/**
 * The lowest common ancestor of `a` and `b` in a BST. Assumes both
 * values exist in the tree. Uses the ordering: if both targets are
 * smaller than the current node, the LCA must be in the left subtree;
 * if both are bigger, it's in the right; otherwise the current node
 * IS the split point (the LCA) — no need to search both subtrees like
 * a plain binary tree would.
 *
 * @param root - the BST's root (assumed non-null when a, b exist in it)
 * @param a - first value
 * @param b - second value
 * @returns the LCA node, or `null` if `root` is `null`
 *
 * @example
 * // BST: 6 / \ 2 8, 2's children: 0, 4
 * lcaBst(root, 2, 8) -> node 6
 * lcaBst(root, 0, 4) -> node 2
 *
 * Target: O(h) time, O(1) extra space (iterative walk from the root)
 */
export function lcaBst(root: TreeNode | null, a: number, b: number): TreeNode | null {
  throw new Error('TODO: implement me')
}

/**
 * Sum of all values in the BST that fall within `[lo, hi]`, inclusive.
 * Prune: if a node's value is below `lo`, its whole left subtree is
 * out of range too — skip it (symmetric for `hi` and the right
 * subtree). This is the payoff for using a BST over a hash set here.
 *
 * @param root - the BST's root (may be `null`)
 * @param lo - inclusive lower bound
 * @param hi - inclusive upper bound
 * @returns the sum of in-range values
 *
 * @example
 * // BST: 10 / \ 5 15, 5's children: 3, 7
 * rangeSumBst(root, 5, 10) -> 22   // 5 + 7 + 10
 *
 * Target: O(n) worst case time (out-of-range subtrees are pruned in
 * O(1) each), O(h) space
 */
export function rangeSumBst(root: TreeNode | null, lo: number, hi: number): number {
  throw new Error('TODO: implement me')
}

/**
 * ex02 — BST delete & validate
 *
 * Scenario: keep a BST correct as you remove nodes, and learn to catch
 * "looks sorted but isn't" trees. Pattern: three-case delete
 * (leaf / one child / two children via successor swap), validate with
 * min/max bounds (not parent-vs-child).
 * Check: npm test -- 11 -t ex02
 */

import { TreeNode } from './ex01-build-bst'

/**
 * Deletes `value` from the BST rooted at `root`, keeping the BST
 * invariant. Three cases: a leaf is dropped, a one-child node is
 * spliced out, a two-children node copies its inorder successor's
 * value onto itself and deletes the successor from the right subtree
 * instead. A missing value is a no-op.
 *
 * @param root - the tree's root (may be `null`)
 * @param value - the value to remove
 * @returns the (possibly new) root after deletion
 *
 * @example
 * // tree: 5 / \ 2 8  -- deleteValue(root, 5) -> new root is 8, or the
 * // 5's inorder successor (whichever the implementation picks)
 *
 * Target: O(h) time, O(h) space (recursion stack; h = tree height)
 */
export function deleteValue(root: TreeNode | null, value: number): TreeNode | null {
  throw new Error('TODO: implement me')
}

/**
 * Is this a valid BST? The invariant is global: EVERY node in a left
 * subtree must be less than the ancestor, EVERY node in a right
 * subtree greater — not just immediate children. Track a tightening
 * (min, max) bound as you recurse, don't compare only parent-to-child.
 *
 * @param root - the tree's root (may be `null`)
 * @returns true iff every node satisfies the BST invariant
 *
 * @example
 * // valid:   5 / \ 2 8
 * // invalid: 5 / \ 2 8, but 8's left child is 4 (4 < 5, breaks the
 * // global invariant even though 4 < 8 locally passes a naive check)
 *
 * Target: O(n) time, O(h) space
 */
export function isValidBst(root: TreeNode | null): boolean {
  throw new Error('TODO: implement me')
}

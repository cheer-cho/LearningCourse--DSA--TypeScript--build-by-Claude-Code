/**
 * ex01 — Build a BST
 *
 * Scenario: every later exercise in this module builds/inspects trees
 * through the `TreeNode` shape and the two helpers defined here — get
 * these right first. Pattern: BST invariant, "trust the subtree"
 * recursion.
 * Check: npm test -- 11 -t ex01
 */

export class TreeNode {
  value: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

/**
 * Builds a tree from a LeetCode-style level-order array: `null` marks a
 * missing child. Children of a `null` slot are never read.
 *
 * @param values - level-order values, root first; `null` for a missing node
 * @returns the root, or `null` for an empty array / a `null` root
 *
 * @example
 * treeFromLevelArray([8, 3, 10, 1, 6, null, 14])
 * // ->      8
 * //       /   \
 * //      3     10
 * //     / \      \
 * //    1   6      14
 *
 * Target: O(n) time, O(n) space
 */
export function treeFromLevelArray(values: Array<number | null>): TreeNode | null {
  throw new Error('TODO: implement me')
}

/**
 * Inverse of `treeFromLevelArray`: serializes a tree back to a
 * level-order array, `null` for missing children, with trailing
 * `null`s trimmed so equal trees produce equal (canonical) arrays.
 *
 * @param root - the tree's root, or `null` for an empty tree
 * @returns level-order array, root first
 *
 * @example
 * treeToLevelArray(treeFromLevelArray([8, 3, 10, 1, 6, null, 14]))
 * // -> [8, 3, 10, 1, 6, null, 14]
 *
 * Target: O(n) time, O(n) space
 */
export function treeToLevelArray(root: TreeNode | null): Array<number | null> {
  throw new Error('TODO: implement me')
}

/**
 * A binary search tree over `number`s. Duplicate inserts are ignored —
 * a value already present stays exactly once.
 */
export class BST {
  root: TreeNode | null = null

  /**
   * Inserts a value, keeping the BST invariant. No-op if the value is
   * already present.
   *
   * @param value - the value to insert
   *
   * @example
   * const t = new BST(); t.insert(5); t.insert(5) // still just one node
   *
   * Target: O(h) time, O(1) extra space (h = tree height)
   */
  insert(value: number): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Is `value` in the tree?
   *
   * @param value - the value to search for
   * @returns true iff a node with this value exists
   *
   * Target: O(h) time, O(1) extra space
   */
  contains(value: number): boolean {
    throw new Error('TODO: implement me')
  }

  /**
   * The smallest value in the tree.
   *
   * @returns the minimum value, or `null` if the tree is empty
   *
   * Target: O(h) time, O(1) extra space
   */
  minValue(): number | null {
    throw new Error('TODO: implement me')
  }

  /**
   * The largest value in the tree.
   *
   * @returns the maximum value, or `null` if the tree is empty
   *
   * Target: O(h) time, O(1) extra space
   */
  maxValue(): number | null {
    throw new Error('TODO: implement me')
  }

  /**
   * All values in ascending order (an inorder traversal — free on a
   * valid BST).
   *
   * @returns values sorted ascending
   *
   * @example
   * // insert 5, 2, 8 -> toSortedArray() -> [2, 5, 8]
   *
   * Target: O(n) time, O(n) space
   */
  toSortedArray(): number[] {
    throw new Error('TODO: implement me')
  }
}

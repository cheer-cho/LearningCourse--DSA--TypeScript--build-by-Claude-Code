/**
 * ex07 — Level-order patterns
 *
 * Scenario: three problems all built on the same BFS skeleton — only
 * what you DO with each level's frontier changes.
 * Pattern: BFS, level by level; the "per level" cue.
 * Check: npm test -- 11 -t ex07
 */

import { TreeNode } from './ex01-build-bst'

/**
 * What you'd see standing to the right of the tree: the last (right-
 * most) node's value at each level, top to bottom.
 *
 * @param root - the tree's root (may be `null`)
 * @returns one value per level
 *
 * @example
 * // 1(2(null,5), 3(null,4))
 * rightSideView(root) -> [1, 3, 4]
 *
 * Target: O(n) time, O(n) space
 */
export function rightSideView(root: TreeNode | null): number[] {
  throw new Error('TODO: implement me')
}

/**
 * The average value at each level, top to bottom.
 *
 * @param root - the tree's root (may be `null`)
 * @returns one average per level
 *
 * @example levelAverages(treeFromLevelArray([3, 9, 20])) -> [3, 14.5]
 *
 * Target: O(n) time, O(n) space
 */
export function levelAverages(root: TreeNode | null): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Level order, but alternating direction: level 0 left-to-right,
 * level 1 right-to-left, level 2 left-to-right, and so on.
 *
 * @param root - the tree's root (may be `null`)
 * @returns one array of values per level, direction alternating
 *
 * @example
 * zigzagLevels(treeFromLevelArray([1, 2, 3, 4, 5, 6, 7]))
 * // -> [[1], [3, 2], [4, 5, 6, 7]]
 *
 * Target: O(n) time, O(n) space
 */
export function zigzagLevels(root: TreeNode | null): number[][] {
  throw new Error('TODO: implement me')
}

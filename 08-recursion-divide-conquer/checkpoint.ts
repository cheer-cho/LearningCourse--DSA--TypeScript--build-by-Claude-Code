/**
 * ✦ CHECKPOINT 8 — File tree
 *
 * A file-system tree: every node has a `name` and a `size`; directory
 * nodes additionally have `children`. Files are nodes with no
 * `children` (or an empty array) — this module's ex04 "leaf vs.
 * branch" recursion applies directly. This checkpoint is deliberately
 * a warm-up for module 11 (trees), where the same shape gets a real
 * BST built around it.
 *
 * One test builds a deep, single-branch chain (documented below) to
 * check your recursion depth choice is safe — plain recursion is fine
 * here as long as you keep the chosen depth in mind (see the comment
 * on that test).
 *
 * Passing `npm test -- 08` completes this module.
 *
 * Check: npm test -- 08 -t checkpoint
 */

export type Tree = {
  name: string
  size: number
  children?: Tree[]
}

/**
 * The total size of every node in the tree (files and directories both
 * contribute their own `size`; a directory's own size is typically 0
 * but is still included for generality).
 *
 * @param tree - the root of the file tree.
 * @returns the sum of every node's size.
 * @example totalSize({ name: 'a.txt', size: 5 }) -> 5
 * Target: O(nodes) time, O(max depth) space.
 */
export function totalSize(tree: Tree): number {
  throw new Error('TODO: implement me')
}

/**
 * How many levels deep the tree goes. A leaf (no children, or an
 * empty children array) has depth 1; a directory's depth is 1 + the
 * deepest of its children's depths.
 *
 * @param tree - the root of the file tree.
 * @returns the tree's depth.
 * @example maxTreeDepth({ name: 'a.txt', size: 5 }) -> 1
 * Target: O(nodes) time, O(max depth) space.
 */
export function maxTreeDepth(tree: Tree): number {
  throw new Error('TODO: implement me')
}

/**
 * Find the path (by name, root to target, inclusive) to the first
 * node named `name`, searching depth-first. Returns null if no node
 * has that name.
 *
 * @param tree - the root of the file tree.
 * @param name - the name to search for.
 * @returns an array of names from the root to the found node, or null.
 * @example findPath({ name: 'a', size: 0, children: [{ name: 'b', size: 1 }] }, 'b')
 *   -> ['a', 'b']
 * @example findPath({ name: 'a', size: 0 }, 'missing') -> null
 * Target: O(nodes) time, O(max depth) space.
 */
export function findPath(tree: Tree, name: string): string[] | null {
  throw new Error('TODO: implement me')
}

/**
 * The file (a leaf node — no children, or an empty children array)
 * with the largest size anywhere in the tree. Directory sizes are
 * ignored for this comparison, even if a directory node carries a
 * nonzero `size`.
 *
 * @param tree - the root of the file tree.
 * @returns the leaf node with the largest size.
 * @example largestFile({ name: 'a.txt', size: 5 }) -> { name: 'a.txt', size: 5 }
 * Target: O(nodes) time, O(max depth) space.
 */
export function largestFile(tree: Tree): Tree {
  throw new Error('TODO: implement me')
}

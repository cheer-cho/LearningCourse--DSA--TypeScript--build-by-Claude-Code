// Reference solution — checkpoint 8

export type Tree = {
  name: string
  size: number
  children?: Tree[]
}

function isLeaf(tree: Tree): boolean {
  return !tree.children || tree.children.length === 0
}

// Pattern: recursion on shape (leaf vs. branch), same as ex04's
// deepSum. O(nodes) time, O(max depth) space.
export function totalSize(tree: Tree): number {
  let total = tree.size
  for (const child of tree.children ?? []) total += totalSize(child)
  return total
}

// Pattern: recursion on shape, same as ex04's maxDepthNested (leaf
// depth 1 here instead of 0, since a bare file is still "one level").
// O(nodes) time, O(max depth) space.
export function maxTreeDepth(tree: Tree): number {
  if (isLeaf(tree)) return 1
  let deepest = 0
  for (const child of tree.children ?? []) deepest = Math.max(deepest, maxTreeDepth(child))
  return 1 + deepest
}

// Pattern: depth-first search building a path on the way down, undone
// on the way back up if the branch didn't contain the target (no
// shared mutation leaks between branches). O(nodes) time, O(max depth)
// space.
export function findPath(tree: Tree, name: string): string[] | null {
  if (tree.name === name) return [tree.name]
  for (const child of tree.children ?? []) {
    const childPath = findPath(child, name)
    if (childPath !== null) return [tree.name, ...childPath]
  }
  return null
}

// Pattern: recursion on shape, tracking the best leaf seen so far.
// O(nodes) time, O(max depth) space.
export function largestFile(tree: Tree): Tree {
  if (isLeaf(tree)) return tree
  let best: Tree | null = null
  for (const child of tree.children ?? []) {
    const candidate = largestFile(child)
    if (best === null || candidate.size > best.size) best = candidate
  }
  // A non-leaf tree always has at least one child (otherwise isLeaf
  // would have been true above), so `best` is never null here.
  return best as Tree
}

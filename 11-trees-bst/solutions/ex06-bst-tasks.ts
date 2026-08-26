// Reference solution — ex06

import { TreeNode } from './ex01-build-bst'

// Pattern: iterative inorder with an explicit stack, stopping the
// instant the kth value is popped -- no need to walk the rest of the
// tree. O(h + k) time (h to reach the first value, then k pops),
// O(h) space.
export function kthSmallest(root: TreeNode | null, k: number): number | null {
  if (k <= 0) return null
  const stack: TreeNode[] = []
  let current = root
  let remaining = k
  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current)
      current = current.left
    }
    const node = stack.pop()
    if (node === undefined) break
    remaining -= 1
    if (remaining === 0) return node.value
    current = node.right
  }
  return null // k was larger than the tree's node count
}

// Pattern: iterative walk using BST ordering -- while both targets are
// on the same side of the current node, descend that side; the first
// node where they split (or match) is the LCA. O(h) time, O(1) space.
export function lcaBst(root: TreeNode | null, a: number, b: number): TreeNode | null {
  let current = root
  while (current !== null) {
    if (a < current.value && b < current.value) {
      current = current.left
    } else if (a > current.value && b > current.value) {
      current = current.right
    } else {
      return current // split point, or one of a/b equals current.value
    }
  }
  return null
}

// Pattern: DFS that prunes using BST ordering -- a node's value below
// lo means its whole left subtree is too small to matter, above hi
// means its whole right subtree is too big. O(n) worst case (a
// skewed tree entirely in range), but out-of-range subtrees cost O(1)
// each instead of being visited. O(h) space.
export function rangeSumBst(root: TreeNode | null, lo: number, hi: number): number {
  if (root === null) return 0
  if (root.value < lo) return rangeSumBst(root.right, lo, hi)
  if (root.value > hi) return rangeSumBst(root.left, lo, hi)
  return root.value + rangeSumBst(root.left, lo, hi) + rangeSumBst(root.right, lo, hi)
}

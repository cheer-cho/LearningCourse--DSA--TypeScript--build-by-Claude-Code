// Reference solution — ex08

import { TreeNode } from './ex01-build-bst'

// Pattern: DFS driven by a shrinking (inorder-)range plus a moving
// preorder cursor. preorder[0] is always the next root; its position
// in inorder (via a value -> index MAP built once, O(1) lookups)
// splits the current inorder range into left/right. The preorder
// cursor advances left-subtree-first, matching preorder's own
// root-left-right order, so no array copying is needed either.
// O(n) time (map build + one visit per node), O(n) space (map + call
// stack in the worst case).
export function buildFromPreIn(preorder: number[], inorder: number[]): TreeNode | null {
  const indexOfValue = new Map<number, number>()
  for (let i = 0; i < inorder.length; i += 1) {
    const value = inorder[i]
    if (value !== undefined) indexOfValue.set(value, i)
  }

  let preorderCursor = 0

  const build = (inLo: number, inHi: number): TreeNode | null => {
    if (inLo > inHi) return null

    const rootValue = preorder[preorderCursor]
    if (rootValue === undefined) return null
    preorderCursor += 1

    const rootIndex = indexOfValue.get(rootValue)
    if (rootIndex === undefined) return null

    const node = new TreeNode(rootValue)
    node.left = build(inLo, rootIndex - 1) // left subtree's values come first in preorder
    node.right = build(rootIndex + 1, inHi)
    return node
  }

  return build(0, inorder.length - 1)
}

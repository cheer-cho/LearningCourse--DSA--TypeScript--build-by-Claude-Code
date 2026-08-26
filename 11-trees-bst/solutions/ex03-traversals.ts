// Reference solution — ex03

import { TreeNode } from './ex01-build-bst'

// Pattern: DFS, visit before recursing into children. O(n) time,
// O(h) call stack + O(n) output.
export function preorder(root: TreeNode | null): number[] {
  const out: number[] = []
  const walk = (node: TreeNode | null): void => {
    if (node === null) return
    out.push(node.value)
    walk(node.left)
    walk(node.right)
  }
  walk(root)
  return out
}

// Pattern: DFS, visit between the two children. O(n) time, O(h) stack.
export function inorder(root: TreeNode | null): number[] {
  const out: number[] = []
  const walk = (node: TreeNode | null): void => {
    if (node === null) return
    walk(node.left)
    out.push(node.value)
    walk(node.right)
  }
  walk(root)
  return out
}

// Pattern: DFS, visit after both children. O(n) time, O(h) stack.
export function postorder(root: TreeNode | null): number[] {
  const out: number[] = []
  const walk = (node: TreeNode | null): void => {
    if (node === null) return
    walk(node.left)
    walk(node.right)
    out.push(node.value)
  }
  walk(root)
  return out
}

// Pattern: same order as inorder, but the call stack is made explicit
// -- walk left as far as possible pushing along the way, pop and
// visit, then step into the right child. O(n) time, O(h) space.
export function inorderIterative(root: TreeNode | null): number[] {
  const out: number[] = []
  const stack: TreeNode[] = []
  let current = root
  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current)
      current = current.left
    }
    const node = stack.pop()
    if (node === undefined) break
    out.push(node.value)
    current = node.right
  }
  return out
}

// Pattern: BFS with an explicit queue -- the whole frontier advances
// one level at a time. O(n) time, O(n) space (widest level).
export function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return []
  const levels: number[][] = []
  let frontier: TreeNode[] = [root]
  while (frontier.length > 0) {
    levels.push(frontier.map((n) => n.value))
    const next: TreeNode[] = []
    for (const node of frontier) {
      if (node.left !== null) next.push(node.left)
      if (node.right !== null) next.push(node.right)
    }
    frontier = next
  }
  return levels
}

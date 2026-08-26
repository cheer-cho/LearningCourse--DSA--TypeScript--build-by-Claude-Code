// Reference solution — ex07

import { TreeNode } from './ex01-build-bst'

// Pattern: BFS; keep only the last value seen at each level.
// O(n) time, O(n) space (queue).
export function rightSideView(root: TreeNode | null): number[] {
  if (root === null) return []
  const view: number[] = []
  let frontier: TreeNode[] = [root]
  while (frontier.length > 0) {
    const last = frontier[frontier.length - 1]
    if (last !== undefined) view.push(last.value)
    const next: TreeNode[] = []
    for (const node of frontier) {
      if (node.left !== null) next.push(node.left)
      if (node.right !== null) next.push(node.right)
    }
    frontier = next
  }
  return view
}

// Pattern: BFS; reduce each level's frontier to a single average.
// O(n) time, O(n) space.
export function levelAverages(root: TreeNode | null): number[] {
  if (root === null) return []
  const averages: number[] = []
  let frontier: TreeNode[] = [root]
  while (frontier.length > 0) {
    const sum = frontier.reduce((total, node) => total + node.value, 0)
    averages.push(sum / frontier.length)
    const next: TreeNode[] = []
    for (const node of frontier) {
      if (node.left !== null) next.push(node.left)
      if (node.right !== null) next.push(node.right)
    }
    frontier = next
  }
  return averages
}

// Pattern: BFS; same level order as always, just reverse alternating
// levels before recording them. O(n) time, O(n) space.
export function zigzagLevels(root: TreeNode | null): number[][] {
  if (root === null) return []
  const levels: number[][] = []
  let frontier: TreeNode[] = [root]
  let leftToRight = true
  while (frontier.length > 0) {
    const values = frontier.map((node) => node.value)
    levels.push(leftToRight ? values : values.reverse())
    const next: TreeNode[] = []
    for (const node of frontier) {
      if (node.left !== null) next.push(node.left)
      if (node.right !== null) next.push(node.right)
    }
    frontier = next
    leftToRight = !leftToRight
  }
  return levels
}

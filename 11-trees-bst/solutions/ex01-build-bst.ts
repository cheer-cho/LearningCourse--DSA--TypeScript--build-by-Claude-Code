// Reference solution — ex01

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

// Pattern: BFS with an explicit queue, LeetCode-style level array.
// Each dequeued node consumes the next one or two array slots for its
// left/right children. O(n) time/space — every value is visited once.
export function treeFromLevelArray(values: Array<number | null>): TreeNode | null {
  const first = values[0]
  if (values.length === 0 || first === null || first === undefined) return null

  const root = new TreeNode(first)
  const queue: TreeNode[] = [root]
  let i = 1

  while (i < values.length) {
    const node = queue.shift()
    if (node === undefined) break

    const leftValue = values[i]
    i += 1
    if (leftValue !== null && leftValue !== undefined) {
      node.left = new TreeNode(leftValue)
      queue.push(node.left)
    }

    if (i < values.length) {
      const rightValue = values[i]
      i += 1
      if (rightValue !== null && rightValue !== undefined) {
        node.right = new TreeNode(rightValue)
        queue.push(node.right)
      }
    }
  }

  return root
}

// Pattern: BFS, mirroring treeFromLevelArray — enqueue every child
// (including nulls) so slot positions line up, then trim the trailing
// nulls that come from leaves' empty children. O(n) time/space.
export function treeToLevelArray(root: TreeNode | null): Array<number | null> {
  if (root === null) return []

  const result: Array<number | null> = []
  const queue: Array<TreeNode | null> = [root]

  while (queue.length > 0) {
    const node = queue.shift()
    if (node === undefined) break
    if (node === null) {
      result.push(null)
      continue
    }
    result.push(node.value)
    queue.push(node.left)
    queue.push(node.right)
  }

  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop()
  }

  return result
}

export class BST {
  root: TreeNode | null = null

  // Pattern: walk down comparing to node.value, going left/right by
  // the BST invariant. Iterative -> O(1) extra space besides the walk.
  insert(value: number): void {
    if (this.root === null) {
      this.root = new TreeNode(value)
      return
    }
    let current: TreeNode = this.root
    while (true) {
      if (value === current.value) return // duplicates ignored
      if (value < current.value) {
        if (current.left === null) {
          current.left = new TreeNode(value)
          return
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = new TreeNode(value)
          return
        }
        current = current.right
      }
    }
  }

  contains(value: number): boolean {
    let current = this.root
    while (current !== null) {
      if (value === current.value) return true
      current = value < current.value ? current.left : current.right
    }
    return false
  }

  minValue(): number | null {
    if (this.root === null) return null
    let current = this.root
    while (current.left !== null) current = current.left
    return current.value
  }

  maxValue(): number | null {
    if (this.root === null) return null
    let current = this.root
    while (current.right !== null) current = current.right
    return current.value
  }

  // Pattern: inorder traversal — left, visit, right — comes out sorted
  // for free on a valid BST. O(n) time, O(n) output + O(h) call stack.
  toSortedArray(): number[] {
    const out: number[] = []
    const walk = (node: TreeNode | null): void => {
      if (node === null) return
      walk(node.left)
      out.push(node.value)
      walk(node.right)
    }
    walk(this.root)
    return out
  }
}

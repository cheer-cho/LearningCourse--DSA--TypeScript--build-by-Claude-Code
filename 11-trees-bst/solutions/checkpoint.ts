// Reference solution — checkpoint
//
// Self-contained: verify-solutions.mjs copies this file directly over
// the module-root checkpoint.ts, so it cannot import from it.

export class OrgNode {
  name: string
  left: OrgNode | null
  right: OrgNode | null

  constructor(name: string, left: OrgNode | null = null, right: OrgNode | null = null) {
    this.name = name
    this.left = left
    this.right = right
  }
}

// Pattern: bottom-up DFS, combine child counts. O(n) time, O(h) space.
export function headcount(root: OrgNode | null): number {
  if (root === null) return 0
  return 1 + headcount(root.left) + headcount(root.right)
}

// Pattern: bottom-up DFS, same shape as ex04's maxDepth. O(n) time,
// O(h) space.
export function managementDepth(root: OrgNode | null): number {
  if (root === null) return 0
  return 1 + Math.max(managementDepth(root.left), managementDepth(root.right))
}

// Pattern: DFS carrying the path-so-far; try left, then right, undo
// on the way back out if the name wasn't found down that branch
// (the classic backtracking shape, previewed here for module 14).
// O(n) time, O(h) space.
export function chainOfCommand(root: OrgNode | null, name: string): string[] | null {
  if (root === null) return null
  if (root.name === name) return [root.name]

  const leftPath = chainOfCommand(root.left, name)
  if (leftPath !== null) return [root.name, ...leftPath]

  const rightPath = chainOfCommand(root.right, name)
  if (rightPath !== null) return [root.name, ...rightPath]

  return null
}

// Pattern: BFS, same shape as ex03's levelOrder / ex07's level
// patterns. O(n) time, O(n) space.
export function meetingsByLevel(root: OrgNode | null): string[][] {
  if (root === null) return []
  const levels: string[][] = []
  let frontier: OrgNode[] = [root]
  while (frontier.length > 0) {
    levels.push(frontier.map((node) => node.name))
    const next: OrgNode[] = []
    for (const node of frontier) {
      if (node.left !== null) next.push(node.left)
      if (node.right !== null) next.push(node.right)
    }
    frontier = next
  }
  return levels
}

// Pattern: two-value DFS on a PLAIN tree (no ordering to exploit, so
// unlike ex06's lcaBst this must search both subtrees). Each call
// reports what it found below it; a node where BOTH sides report a
// find is the split point, i.e. the answer. A contains() pre-check
// guards against a missing name -- without it, a name that's absent
// everywhere never blocks the other name's node from propagating all
// the way to the root, so the function would silently return the
// present name instead of null. O(n) time, O(h) space.
export function commonManager(root: OrgNode | null, a: string, b: string): string | null {
  const contains = (node: OrgNode | null, name: string): boolean => {
    if (node === null) return false
    return node.name === name || contains(node.left, name) || contains(node.right, name)
  }

  if (!contains(root, a) || !contains(root, b)) return null

  const find = (node: OrgNode | null): OrgNode | null => {
    if (node === null) return null
    if (node.name === a || node.name === b) return node

    const left = find(node.left)
    const right = find(node.right)
    if (left !== null && right !== null) return node // split point
    return left !== null ? left : right
  }
  return find(root)?.name ?? null
}

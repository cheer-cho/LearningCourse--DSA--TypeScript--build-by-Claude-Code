/**
 * ✦ CHECKPOINT 11 — Company org chart
 *
 * A company where every manager has at most two direct reports, given
 * as `left` and `right` (an org chart is just a binary tree with
 * names instead of numbers). Combines everything from this module:
 * DFS combining child answers, BFS per level, and a two-pointer DFS
 * for "lowest common ancestor" on a plain (non-BST) tree.
 *
 * Passing `npm test -- 11` completes this module.
 */

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

/**
 * Total number of people in the org, including the root.
 *
 * @param root - the org chart's root (may be `null`)
 * @returns the headcount
 *
 * Target: O(n) time, O(h) space
 */
export function headcount(root: OrgNode | null): number {
  throw new Error('TODO: implement me')
}

/**
 * How many layers of management deep the org goes: the number of
 * people on the longest root-to-leaf chain of command (an empty org
 * is 0, a lone CEO is 1).
 *
 * @param root - the org chart's root (may be `null`)
 * @returns the management depth
 *
 * Target: O(n) time, O(h) space
 */
export function managementDepth(root: OrgNode | null): number {
  throw new Error('TODO: implement me')
}

/**
 * The path of names from the root (CEO) down to `name`, inclusive of
 * both ends.
 *
 * @param root - the org chart's root (may be `null`)
 * @param name - the person to find
 * @returns the chain of command as an array of names, or `null` if
 *   `name` isn't in the org
 *
 * @example
 * // CEO -> VP -> Engineer
 * chainOfCommand(root, 'Engineer') -> ['CEO', 'VP', 'Engineer']
 *
 * Target: O(n) time, O(h) space
 */
export function chainOfCommand(root: OrgNode | null, name: string): string[] | null {
  throw new Error('TODO: implement me')
}

/**
 * Groups names by level (BFS) — everyone who could be pulled into the
 * same all-hands meeting at each layer of the org, root first.
 *
 * @param root - the org chart's root (may be `null`)
 * @returns one array of names per level, top to bottom
 *
 * Target: O(n) time, O(n) space
 */
export function meetingsByLevel(root: OrgNode | null): string[][] {
  throw new Error('TODO: implement me')
}

/**
 * The lowest common manager of `a` and `b`: the deepest person who has
 * both `a` and `b` somewhere below them (or is one of them). This is
 * a PLAIN tree (no ordering to exploit like ex06's BST version) — use
 * the two-value DFS: search both children, and if each side reports
 * finding one of the two names, the current node is the answer.
 *
 * @param root - the org chart's root (may be `null`)
 * @param a - first person's name
 * @param b - second person's name
 * @returns the common manager's name, or `null` if `root` is `null` OR
 *   either `a` or `b` isn't in the org
 *
 * @example
 * commonManager(root, 'Engineer-A', 'Rep-C') -> 'CEO'
 * commonManager(root, 'Engineer-A', 'Nobody') -> null
 *
 * Target: O(n) time, O(h) space
 */
export function commonManager(root: OrgNode | null, a: string, b: string): string | null {
  throw new Error('TODO: implement me')
}

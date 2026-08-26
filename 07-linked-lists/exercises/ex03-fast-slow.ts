/**
 * ex03 — Fast & slow pointers: middle of a list, cycle detection, and
 * cycle entry point (Floyd's algorithm). Uses ListNode from ex01.
 * Check: npm test -- 07 -t ex03
 */
import { ListNode } from './ex01-build-singly-list'

/**
 * Return the middle node. For an EVEN length, return the SECOND of the
 * two middles (e.g. for 1-2-3-4, return the node holding 3).
 * input 1 -> 2 -> 3 -> 4 -> 5   output node(3)
 * input 1 -> 2 -> 3 -> 4        output node(3)
 * input null                    output null
 * Target: O(n) time, O(1) space, one pass.
 */
export function middleNode<T>(head: ListNode<T> | null): ListNode<T> | null {
  throw new Error('TODO: implement me')
}

/**
 * Does the list contain a cycle (some node's `next` eventually points
 * back to an earlier node)?
 * Target: O(n) time, O(1) space.
 */
export function hasCycle<T>(head: ListNode<T> | null): boolean {
  throw new Error('TODO: implement me')
}

/**
 * If the list has a cycle, return the node where the cycle BEGINS
 * (the first repeated node). Return `null` if there is no cycle.
 * Floyd phase 2: after slow/fast meet inside the cycle, reset one
 * pointer to `head` and advance both one step at a time — they meet
 * exactly at the cycle's start. (See LESSON.md for why the math works.)
 * Target: O(n) time, O(1) space.
 */
export function cycleStart<T>(head: ListNode<T> | null): ListNode<T> | null {
  throw new Error('TODO: implement me')
}

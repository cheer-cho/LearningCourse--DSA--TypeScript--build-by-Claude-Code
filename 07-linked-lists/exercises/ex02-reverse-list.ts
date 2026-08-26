/**
 * ex02 — Reverse a singly linked list, iteratively and recursively.
 * Uses ListNode from ex01.
 * Check: npm test -- 07 -t ex02
 */
import { ListNode } from './ex01-build-singly-list'

/**
 * Reverse the list in place and return the new head.
 * Draw it first: at each step you need `prev`, `cur`, and a saved
 * `next` before you overwrite `cur.next` — otherwise the rest of the
 * list is lost.
 * input 1 -> 2 -> 3 -> null   output 3 -> 2 -> 1 -> null
 * input null                  output null
 * Target: O(n) time, O(1) space.
 */
export function reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {
  throw new Error('TODO: implement me')
}

/**
 * Reverse the list using recursion; return the new head. Reason about
 * one call: "reverse everything after me, then point the rest of the
 * list back at me."
 * input 1 -> 2 -> 3 -> null   output 3 -> 2 -> 1 -> null
 * input null                  output null
 * Target: O(n) time, O(n) space (call stack).
 */
export function reverseListRecursive<T>(head: ListNode<T> | null): ListNode<T> | null {
  throw new Error('TODO: implement me')
}

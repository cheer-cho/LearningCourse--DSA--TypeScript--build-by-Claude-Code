/**
 * ex02 — Reverse a singly linked list, iteratively and recursively.
 * Uses ListNode from ex01.
 * Check: npm test -- 07 -t ex02
 */
import { ListNode } from './ex01-build-singly-list'

// Pattern: three-pointer walk (prev, cur, next). Save `cur.next` before
// overwriting it, or the rest of the list is unreachable.
// Time: O(n), Space: O(1)
export function reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {
  let prev: ListNode<T> | null = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

// Pattern: recurse to the end first, then rewire on the way back up.
// `newHead` is always the last node reached (the original tail).
// Time: O(n), Space: O(n) call stack
export function reverseListRecursive<T>(head: ListNode<T> | null): ListNode<T> | null {
  if (!head || !head.next) return head
  const newHead = reverseListRecursive(head.next)
  head.next.next = head
  head.next = null
  return newHead
}

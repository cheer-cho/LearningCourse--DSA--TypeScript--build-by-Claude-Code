/**
 * ex05 — Reorder a list in place: L0, L1, ..., Ln -> L0, Ln, L1, Ln-1, ...
 * Combines three earlier moves into one. Uses ListNode from ex01.
 * Check: npm test -- 07 -t ex05
 */
import { ListNode } from './ex01-build-singly-list'

// Pattern: combine fast/slow (find middle) + in-place reversal + merge.
// Split at the (second) middle, reverse the second half, then splice
// the two halves together one node at a time.
// Time: O(n), Space: O(1)
export function reorder<T>(head: ListNode<T> | null): void {
  if (!head || !head.next) return

  // 1. Find the middle (second middle for even length).
  let slow = head
  let fast: ListNode<T> | null = head
  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next.next
  }

  // 2. Split into two halves and reverse the second.
  let secondHead = slow.next
  slow.next = null
  let prev: ListNode<T> | null = null
  let cur = secondHead
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  secondHead = prev

  // 3. Interleave first half (still starting at `head`) with the
  // reversed second half.
  let first: ListNode<T> | null = head
  let second: ListNode<T> | null = secondHead
  while (second) {
    const firstNext: ListNode<T> | null = first!.next
    const secondNext: ListNode<T> | null = second.next
    first!.next = second
    second.next = firstNext
    first = firstNext
    second = secondNext
  }
}

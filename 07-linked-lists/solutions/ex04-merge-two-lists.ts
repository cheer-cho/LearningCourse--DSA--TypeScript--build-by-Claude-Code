/**
 * ex04 — Splice two sorted lists into one, and remove the nth-from-end
 * node in a single pass. Uses ListNode from ex01.
 * Check: npm test -- 07 -t ex04
 */
import { ListNode } from './ex01-build-singly-list'

// Pattern: dummy/sentinel head + two-pointer merge (same idea as
// merging in merge sort, but relinking nodes instead of copying
// values). The dummy removes the "which list starts first" special
// case entirely.
// Time: O(n + m), Space: O(1) extra
export function mergeSorted(a: ListNode<number> | null, b: ListNode<number> | null): ListNode<number> | null {
  const dummy = new ListNode<number>(0)
  let tail = dummy
  let p1 = a
  let p2 = b

  while (p1 && p2) {
    if (p1.value <= p2.value) {
      tail.next = p1
      p1 = p1.next
    } else {
      tail.next = p2
      p2 = p2.next
    }
    tail = tail.next
  }
  tail.next = p1 ?? p2

  return dummy.next
}

// Pattern: gap-of-n two pointers + dummy head. Advance `fast` n steps
// first, then move `slow` and `fast` together — when `fast` hits the
// end, `slow` sits just before the node to remove. The dummy makes
// "remove the actual head" fall out of the same code path.
// Time: O(n), Space: O(1)
export function removeNthFromEnd<T>(head: ListNode<T> | null, n: number): ListNode<T> | null {
  // Sentinel's own value is never read, so the cast is safe.
  const dummy = new ListNode<T>(undefined as unknown as T, head)
  let fast: ListNode<T> | null = dummy
  for (let i = 0; i < n; i++) {
    fast = fast!.next
  }

  let slow: ListNode<T> = dummy
  while (fast && fast.next) {
    fast = fast.next
    slow = slow.next!
  }

  slow.next = slow.next!.next
  return dummy.next
}

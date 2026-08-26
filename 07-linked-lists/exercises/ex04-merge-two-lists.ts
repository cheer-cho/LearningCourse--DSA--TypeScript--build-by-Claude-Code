/**
 * ex04 — Splice two sorted lists into one, and remove the nth-from-end
 * node in a single pass. Uses ListNode from ex01.
 * Check: npm test -- 07 -t ex04
 */
import { ListNode } from './ex01-build-singly-list'

/**
 * Merge two ascending-sorted lists into one ascending-sorted list by
 * RELINKING existing nodes — never allocate a new ListNode. Use a
 * dummy head to avoid a special case for "which list starts first".
 * input a: 1 -> 3 -> 5, b: 2 -> 4 -> 6   output 1 -> 2 -> 3 -> 4 -> 5 -> 6
 * input a: null, b: 1 -> 2               output 1 -> 2
 * Target: O(n + m) time, O(1) extra space.
 */
export function mergeSorted(a: ListNode<number> | null, b: ListNode<number> | null): ListNode<number> | null {
  throw new Error('TODO: implement me')
}

/**
 * Remove the nth node from the END of the list (1-indexed: n = 1 means
 * "remove the last node") and return the new head. Do it in ONE pass
 * with a gap of n pointers between two runners, and a dummy head so
 * removing the actual head needs no special case.
 * input 1 -> 2 -> 3 -> 4 -> 5, n = 2   output 1 -> 2 -> 3 -> 5
 * input 1, n = 1                       output null
 * Target: O(n) time, O(1) space, single pass.
 */
export function removeNthFromEnd<T>(head: ListNode<T> | null, n: number): ListNode<T> | null {
  throw new Error('TODO: implement me')
}

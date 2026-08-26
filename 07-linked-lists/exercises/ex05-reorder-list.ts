/**
 * ex05 — Reorder a list in place: L0, L1, ..., Ln -> L0, Ln, L1, Ln-1, ...
 * Combines three earlier moves into one. Uses ListNode from ex01.
 * Check: npm test -- 07 -t ex05
 */
import { ListNode } from './ex01-build-singly-list'

/**
 * Reorder the list in place (mutate `next` pointers; do not return a
 * new list). The plan is three steps you already have from earlier
 * exercises:
 *   1. Find the middle (fast & slow, ex03's `middleNode`).
 *   2. Reverse the second half (ex02's `reverseList`).
 *   3. Interleave the two halves node by node.
 * input 1 -> 2 -> 3 -> 4          output 1 -> 4 -> 2 -> 3
 * input 1 -> 2 -> 3 -> 4 -> 5     output 1 -> 5 -> 2 -> 4 -> 3
 * Target: O(n) time, O(1) space.
 */
export function reorder<T>(head: ListNode<T> | null): void {
  throw new Error('TODO: implement me')
}

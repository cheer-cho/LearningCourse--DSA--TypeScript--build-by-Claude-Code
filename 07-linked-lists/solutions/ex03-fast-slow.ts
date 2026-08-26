/**
 * ex03 — Fast & slow pointers: middle of a list, cycle detection, and
 * cycle entry point (Floyd's algorithm). Uses ListNode from ex01.
 * Check: npm test -- 07 -t ex03
 */
import { ListNode } from './ex01-build-singly-list'

// Pattern: fast & slow pointers. Fast moves 2 steps per 1 slow step, so
// when fast reaches the end, slow sits at the middle. Starting both at
// `head` and stopping when `fast && fast.next` fails lands slow on the
// SECOND middle for even lengths.
// Time: O(n), Space: O(1)
export function middleNode<T>(head: ListNode<T> | null): ListNode<T> | null {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
  }
  return slow
}

// Pattern: fast & slow pointers. If there's a cycle, fast (2x speed)
// is lapping slow inside a loop and must eventually land on the same
// node; if the list ends, fast reaches null first.
// Time: O(n), Space: O(1)
export function hasCycle<T>(head: ListNode<T> | null): boolean {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}

// Pattern: Floyd's cycle detection, phase 2. Phase 1 finds a meeting
// point inside the cycle. Let the distance from head to the cycle
// start be `a`, and the meeting point be `b` steps into the cycle;
// the math (see LESSON.md) shows resetting one pointer to `head` and
// advancing both one step at a time makes them meet exactly at the
// cycle's start.
// Time: O(n), Space: O(1)
export function cycleStart<T>(head: ListNode<T> | null): ListNode<T> | null {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
    if (slow === fast) {
      let p1 = head
      let p2 = slow
      while (p1 !== p2) {
        p1 = p1!.next
        p2 = p2!.next
      }
      return p1
    }
  }
  return null
}

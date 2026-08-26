/**
 * ex01 — Build a singly linked list from scratch: node, list, and the
 * fromArray/toArray helpers every later exercise in this module reuses.
 * Check: npm test -- 07 -t ex01
 */

/**
 * One node of a singly linked list.
 * @param value - the payload stored at this node.
 * @param next - the following node, or `null` at the end of the chain.
 */
export class ListNode<T> {
  value: T
  next: ListNode<T> | null

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value
    this.next = next
  }
}

/**
 * A singly linked list with O(1) push/pop at the front and O(1) push at
 * the back (a tracked `tail` pointer avoids walking the list each time).
 */
export class SinglyLinkedList<T> {
  head: ListNode<T> | null = null
  tail: ListNode<T> | null = null
  private length = 0

  /**
   * Insert a new node before the current head.
   * Target: O(1) time, O(1) space.
   */
  pushFront(value: T): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Insert a new node after the current tail.
   * Target: O(1) time, O(1) space.
   */
  pushBack(value: T): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Remove and return the head's value.
   * @throws {Error} if the list is empty.
   * Target: O(1) time, O(1) space.
   */
  popFront(): T {
    throw new Error('TODO: implement me')
  }

  /**
   * Return the first node holding `value`, or `null` if none does.
   * Target: O(n) time, O(1) space.
   */
  find(value: T): ListNode<T> | null {
    throw new Error('TODO: implement me')
  }

  /**
   * Remove the first node holding `value`. Returns `true` if a node was
   * removed, `false` if `value` was not found.
   * Target: O(n) time, O(1) space.
   */
  deleteValue(value: T): boolean {
    throw new Error('TODO: implement me')
  }

  /**
   * Number of nodes currently in the list.
   * Target: O(1) time, O(1) space.
   */
  size(): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Read the list into a plain array, head to tail.
   * Target: O(n) time, O(n) space.
   */
  toArray(): T[] {
    throw new Error('TODO: implement me')
  }
}

/**
 * Build a raw node chain from a plain array (used directly by ex02-ex05,
 * which operate on `head: ListNode<T> | null`, not on SinglyLinkedList).
 * input [1, 2, 3] -> chain 1 -> 2 -> 3 -> null
 * Target: O(n) time, O(n) space.
 */
export function fromArray<T>(values: T[]): ListNode<T> | null {
  throw new Error('TODO: implement me')
}

/**
 * Read a raw node chain into a plain array, head to tail. Does not
 * terminate on a cyclic chain — only call it on acyclic input.
 * input (chain) 1 -> 2 -> 3 -> null -> output [1, 2, 3]
 * Target: O(n) time, O(n) space.
 */
export function toArray<T>(head: ListNode<T> | null): T[] {
  throw new Error('TODO: implement me')
}

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

  // Pattern: tracked tail pointer. Without it pushBack would need to
  // walk to the end every time (O(n)); keeping `tail` up to date on
  // every mutation makes it O(1).
  // Time: O(1), Space: O(1)
  pushFront(value: T): void {
    const node = new ListNode(value, this.head)
    this.head = node
    if (!this.tail) this.tail = node
    this.length++
  }

  // Time: O(1), Space: O(1)
  pushBack(value: T): void {
    const node = new ListNode(value)
    if (!this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }

  // Time: O(1), Space: O(1)
  popFront(): T {
    if (!this.head) throw new Error('popFront on an empty SinglyLinkedList')
    const { value } = this.head
    this.head = this.head.next
    if (!this.head) this.tail = null
    this.length--
    return value
  }

  // Time: O(n), Space: O(1)
  find(value: T): ListNode<T> | null {
    let cur = this.head
    while (cur) {
      if (cur.value === value) return cur
      cur = cur.next
    }
    return null
  }

  // Pattern: trailing pointer. A singly linked list can't look
  // backward, so deletion tracks the previous node as it walks, then
  // reroutes `prev.next` around the target.
  // Time: O(n), Space: O(1)
  deleteValue(value: T): boolean {
    let prev: ListNode<T> | null = null
    let cur = this.head
    while (cur) {
      if (cur.value === value) {
        if (prev) prev.next = cur.next
        else this.head = cur.next
        if (cur === this.tail) this.tail = prev
        this.length--
        return true
      }
      prev = cur
      cur = cur.next
    }
    return false
  }

  // Time: O(1), Space: O(1)
  size(): number {
    return this.length
  }

  // Time: O(n), Space: O(n)
  toArray(): T[] {
    const out: T[] = []
    let cur = this.head
    while (cur) {
      out.push(cur.value)
      cur = cur.next
    }
    return out
  }
}

// Time: O(n), Space: O(n)
export function fromArray<T>(values: T[]): ListNode<T> | null {
  let head: ListNode<T> | null = null
  let tail: ListNode<T> | null = null
  for (const value of values) {
    const node = new ListNode(value)
    if (!tail) {
      head = node
      tail = node
    } else {
      tail.next = node
      tail = node
    }
  }
  return head
}

// Time: O(n), Space: O(n)
export function toArray<T>(head: ListNode<T> | null): T[] {
  const out: T[] = []
  let cur = head
  while (cur) {
    out.push(cur.value)
    cur = cur.next
  }
  return out
}

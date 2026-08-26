/**
 * ex06 — Build a doubly linked list with HEAD/TAIL SENTINELS: every
 * real node always has a real prev and a real next, so insert/remove
 * code needs zero null-checks. That's the point of this exercise.
 * Check: npm test -- 07 -t ex06
 */

/**
 * One node of a doubly linked list.
 * @param value - the payload stored at this node.
 */
export class DoublyListNode<T> {
  value: T
  prev: DoublyListNode<T> | null = null
  next: DoublyListNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

/**
 * A doubly linked list bounded by two sentinel nodes (`headSentinel`
 * <-> ... real nodes ... <-> `tailSentinel`). Sentinels never hold a
 * meaningful `value` and are never removed — they exist purely so
 * every real node has a non-null neighbor on both sides.
 */
export class DoublyLinkedList<T> {
  private headSentinel: DoublyListNode<T>
  private tailSentinel: DoublyListNode<T>
  private length = 0

  constructor() {
    // Sentinel values are never read; the cast documents that intent.
    this.headSentinel = new DoublyListNode<T>(undefined as unknown as T)
    this.tailSentinel = new DoublyListNode<T>(undefined as unknown as T)
    this.headSentinel.next = this.tailSentinel
    this.tailSentinel.prev = this.headSentinel
  }

  // Pattern: sentinel-bounded insert. `node` always lands between two
  // REAL non-null neighbors (a sentinel counts), so there is never a
  // "list was empty" branch to write separately.
  // Time: O(1), Space: O(1)
  pushFront(value: T): DoublyListNode<T> {
    return this.insertAfter(this.headSentinel, value)
  }

  // Time: O(1), Space: O(1)
  pushBack(value: T): DoublyListNode<T> {
    return this.insertAfter(this.tailSentinel.prev!, value)
  }

  // Time: O(1), Space: O(1)
  popFront(): T {
    const node = this.headSentinel.next!
    if (node === this.tailSentinel) throw new Error('popFront on an empty DoublyLinkedList')
    this.removeNode(node)
    return node.value
  }

  // Time: O(1), Space: O(1)
  popBack(): T {
    const node = this.tailSentinel.prev!
    if (node === this.headSentinel) throw new Error('popBack on an empty DoublyLinkedList')
    this.removeNode(node)
    return node.value
  }

  // Pattern: unlink by rewiring the two neighbors to each other —
  // works identically for the first node, the last node, or a middle
  // node because sentinels guarantee `prev`/`next` are never null.
  // Time: O(1), Space: O(1)
  removeNode(node: DoublyListNode<T>): void {
    const prev = node.prev!
    const next = node.next!
    prev.next = next
    next.prev = prev
    node.prev = null
    node.next = null
    this.length--
  }

  // Time: O(n), Space: O(n)
  toArray(): T[] {
    const out: T[] = []
    let cur = this.headSentinel.next
    while (cur && cur !== this.tailSentinel) {
      out.push(cur.value)
      cur = cur.next
    }
    return out
  }

  private insertAfter(anchor: DoublyListNode<T>, value: T): DoublyListNode<T> {
    const node = new DoublyListNode(value)
    const after = anchor.next!
    node.prev = anchor
    node.next = after
    anchor.next = node
    after.prev = node
    this.length++
    return node
  }
}

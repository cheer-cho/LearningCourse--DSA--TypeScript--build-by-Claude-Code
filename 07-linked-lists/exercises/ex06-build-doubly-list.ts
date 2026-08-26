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

  /**
   * Insert a new node right after the head sentinel. Returns the
   * created node (callers may keep it for O(1) removal later).
   * Target: O(1) time, O(1) space.
   */
  pushFront(value: T): DoublyListNode<T> {
    throw new Error('TODO: implement me')
  }

  /**
   * Insert a new node right before the tail sentinel. Returns the
   * created node.
   * Target: O(1) time, O(1) space.
   */
  pushBack(value: T): DoublyListNode<T> {
    throw new Error('TODO: implement me')
  }

  /**
   * Remove and return the first real node's value.
   * @throws {Error} if the list is empty.
   * Target: O(1) time, O(1) space.
   */
  popFront(): T {
    throw new Error('TODO: implement me')
  }

  /**
   * Remove and return the last real node's value.
   * @throws {Error} if the list is empty.
   * Target: O(1) time, O(1) space.
   */
  popBack(): T {
    throw new Error('TODO: implement me')
  }

  /**
   * Remove a specific node in O(1) — the caller already holds the
   * node reference (e.g. from `pushFront`/`pushBack`, or a lookup map
   * as in ex07's LRU cache). Never call this with a sentinel.
   * Target: O(1) time, O(1) space.
   */
  removeNode(node: DoublyListNode<T>): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Read the list into a plain array, front to back.
   * Target: O(n) time, O(n) space.
   */
  toArray(): T[] {
    throw new Error('TODO: implement me')
  }
}

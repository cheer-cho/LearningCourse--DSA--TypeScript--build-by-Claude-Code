/**
 * ex07 — Build an LRU (Least Recently Used) cache: get/put both O(1),
 * by pairing a hash map (key -> node) with the sentinel doubly linked
 * list from ex06 (recency order). Evict the least-recently-used entry
 * on overflow.
 * Check: npm test -- 07 -t ex07
 */
import { DoublyLinkedList, DoublyListNode } from './ex06-build-doubly-list'

interface Entry<K, V> {
  key: K
  value: V
}

/**
 * A fixed-capacity cache that evicts the least-recently-used entry
 * when a `put` would exceed capacity. Most-recently-used entries live
 * at the front of the internal list; least-recently-used at the back.
 * `get` counts as a "use" and refreshes an entry's recency.
 * Target: O(1) time for both get and put.
 */
export class LRUCache<K, V> {
  private capacity: number
  private list = new DoublyLinkedList<Entry<K, V>>()
  private map = new Map<K, DoublyListNode<Entry<K, V>>>()

  constructor(capacity: number) {
    this.capacity = capacity
  }

  /**
   * Return the value for `key`, or `undefined` if absent. A hit
   * refreshes `key` as the most recently used entry.
   * Target: O(1) time, O(1) space.
   */
  get(key: K): V | undefined {
    throw new Error('TODO: implement me')
  }

  /**
   * Insert or update `key`. A new key that would push the cache over
   * capacity evicts the least-recently-used entry first. Either way,
   * `key` becomes the most recently used entry afterward.
   * Target: O(1) time, O(1) space.
   */
  put(key: K, value: V): void {
    throw new Error('TODO: implement me')
  }
}

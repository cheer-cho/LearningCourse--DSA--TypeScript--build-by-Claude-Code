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

  // Pattern: hash map (O(1) lookup) + doubly linked list (O(1)
  // reorder/removal given a node). A hash map alone can't track
  // recency order; a list alone can't do O(1) lookup by key —
  // together they give O(1) for everything.
  // Time: O(1), Space: O(1)
  get(key: K): V | undefined {
    const node = this.map.get(key)
    if (!node) return undefined
    this.list.removeNode(node)
    const fresh = this.list.pushFront(node.value)
    this.map.set(key, fresh)
    return node.value.value
  }

  // Time: O(1), Space: O(1)
  put(key: K, value: V): void {
    const existing = this.map.get(key)
    if (existing) {
      this.list.removeNode(existing)
    } else if (this.map.size >= this.capacity) {
      const evicted = this.list.popBack()
      if (evicted) this.map.delete(evicted.key)
    }
    const node = this.list.pushFront({ key, value })
    this.map.set(key, node)
  }
}

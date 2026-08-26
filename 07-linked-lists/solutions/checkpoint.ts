/**
 * ✦ CHECKPOINT 7 — Linked Lists
 *
 * A music queue. `PlayQueue` is a doubly linked list of upcoming songs
 * PLUS a capped "recently played" log — the same sentinel-list and
 * LRU-eviction ideas from ex06/ex07, applied to a new scenario.
 *
 * Pattern: two sentinel-bounded doubly linked lists (upcoming queue,
 * recent-plays log) — no null-checks at the boundaries, O(1) push/pop
 * at both ends, O(1) removal given a node.
 * Time: O(1) for addLast/playNext/playNow/history-append,
 *       O(n) for remove (must search for the song first)
 * Space: O(n) for the queue, O(recentCapacity) for the log
 */
export type Song = string

class Node {
  song: Song
  prev: Node | null = null
  next: Node | null = null
  constructor(song: Song) {
    this.song = song
  }
}

// A minimal sentinel-bounded doubly linked list, private to this file
// (same shape as ex06's DoublyLinkedList, kept local so the checkpoint
// has no cross-file dependency).
class SongList {
  private headSentinel = new Node('')
  private tailSentinel = new Node('')

  constructor() {
    this.headSentinel.next = this.tailSentinel
    this.tailSentinel.prev = this.headSentinel
  }

  pushFront(song: Song): Node {
    return this.insertAfter(this.headSentinel, song)
  }

  pushBack(song: Song): Node {
    return this.insertAfter(this.tailSentinel.prev!, song)
  }

  popFront(): Song | undefined {
    const node = this.headSentinel.next!
    if (node === this.tailSentinel) return undefined
    this.removeNode(node)
    return node.song
  }

  popBack(): Song | undefined {
    const node = this.tailSentinel.prev!
    if (node === this.headSentinel) return undefined
    this.removeNode(node)
    return node.song
  }

  removeNode(node: Node): void {
    const prev = node.prev!
    const next = node.next!
    prev.next = next
    next.prev = prev
    node.prev = null
    node.next = null
  }

  findFirst(song: Song): Node | null {
    let cur = this.headSentinel.next
    while (cur && cur !== this.tailSentinel) {
      if (cur.song === song) return cur
      cur = cur.next
    }
    return null
  }

  toArray(): Song[] {
    const out: Song[] = []
    let cur = this.headSentinel.next
    while (cur && cur !== this.tailSentinel) {
      out.push(cur.song)
      cur = cur.next
    }
    return out
  }

  private insertAfter(anchor: Node, song: Song): Node {
    const node = new Node(song)
    const after = anchor.next!
    node.prev = anchor
    node.next = after
    anchor.next = node
    after.prev = node
    return node
  }
}

export class PlayQueue {
  private queue = new SongList()
  private recent = new SongList()
  private recentSize = 0
  private recentCapacity: number

  constructor(recentCapacity: number) {
    this.recentCapacity = recentCapacity
  }

  addLast(song: Song): void {
    this.queue.pushBack(song)
  }

  playNext(): Song {
    const song = this.queue.popFront()
    if (song === undefined) throw new Error('playNext on an empty PlayQueue')
    this.recordPlayed(song)
    return song
  }

  playNow(song: Song): void {
    this.queue.pushFront(song)
  }

  remove(song: Song): boolean {
    const node = this.queue.findFirst(song)
    if (!node) return false
    this.queue.removeNode(node)
    return true
  }

  history(k: number): Song[] {
    return this.recent.toArray().slice(0, k)
  }

  // Pattern: same eviction rule as ex07's LRU cache — push the new
  // entry to the front (most recent), and if that pushes the log past
  // capacity, drop from the back (least recent).
  private recordPlayed(song: Song): void {
    this.recent.pushFront(song)
    this.recentSize++
    if (this.recentSize > this.recentCapacity) {
      this.recent.popBack()
      this.recentSize--
    }
  }
}

/**
 * ✦ CHECKPOINT 7 — Linked Lists
 *
 * A music queue. `PlayQueue` is a doubly linked list of upcoming songs
 * PLUS a capped "recently played" log — the same sentinel-list and
 * LRU-eviction ideas from ex06/ex07, applied to a new scenario. Every
 * declaration below explains its own job; this file is self-contained
 * (no imports from exercises/ needed).
 *
 * Passing `npm test -- 07` completes this module. 🎉
 */

/** A song is identified by its title (unique enough for this queue). */
export type Song = string

/**
 * A play queue backed by a doubly linked list, plus a capped log of
 * recently played songs.
 *
 * - `addLast`/`playNext`/`playNow`/`remove` operate on the upcoming
 *   queue (front = plays next, back = plays last).
 * - Every song popped by `playNext` is recorded into a "recently
 *   played" log, most-recent-first, capped at `recentCapacity`
 *   entries — the oldest entry is evicted when a new one arrives past
 *   capacity (the same eviction logic as ex07's LRU cache).
 *
 * @param recentCapacity - max number of songs `history` can ever
 *   report; older plays are evicted first.
 */
export class PlayQueue {
  constructor(recentCapacity: number) {
    throw new Error('TODO: implement me')
  }

  /**
   * Add `song` to the back of the queue (plays last among what's
   * currently queued).
   * Target: O(1) time, O(1) space.
   */
  addLast(song: Song): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Pop the front of the queue — that song is now playing — and
   * record it into the recently-played log. Returns the song.
   * @throws {Error} if the queue is empty.
   * Target: O(1) time, O(1) space.
   */
  playNext(): Song {
    throw new Error('TODO: implement me')
  }

  /**
   * Push `song` to the FRONT of the queue, so it plays next (before
   * anything already queued). Does not itself count as "played".
   * Target: O(1) time, O(1) space.
   */
  playNow(song: Song): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Remove the first queued occurrence of `song`. Returns `true` if a
   * song was removed, `false` if it was not found in the queue.
   * Target: O(n) time (search), O(1) space.
   */
  remove(song: Song): boolean {
    throw new Error('TODO: implement me')
  }

  /**
   * The up-to-`k` most recently played songs, most-recent-first.
   * Never returns more than `recentCapacity` entries even if
   * `k` is larger.
   * input plays: 'a' then 'b' then 'c', history(2) -> ['c', 'b']
   * Target: O(k) time, O(k) space.
   */
  history(k: number): Song[] {
    throw new Error('TODO: implement me')
  }
}

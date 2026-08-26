/**
 * Checkpoint — Inventory shelf.
 *
 * Ties together this module's two threads: a self-built growable
 * container (Shelf, a simplified re-implementation of ex01's
 * DynamicArray) and free functions that manipulate plain arrays in
 * place (echoing ex02-ex04). Nothing here imports from exercises/ —
 * everything is rebuilt from scratch so this file stands alone.
 *
 * Test: npm test -- 02
 */

/**
 * A growable shelf of items, backed by your own doubling array —
 * push/pop/get only, same growth rule as ex01's DynamicArray.
 */
export class Shelf<T> {
  private buffer!: T[]
  private len = 0
  private cap = 0

  /**
   * Create an empty Shelf with starting capacity 1. Preallocate the
   * backing buffer once — never call .push on it, only index into it.
   */
  constructor() {
    throw new Error('TODO: implement me')
  }

  /**
   * Number of items currently on the shelf.
   *
   * Target complexity: O(1) time, O(1) space
   */
  size(): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Size of the backing buffer. Always >= size().
   *
   * Target complexity: O(1) time, O(1) space
   */
  capacity(): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Place `item` on the shelf, doubling the backing buffer if it is
   * full before writing.
   *
   * Target complexity: O(1) amortized time, O(1) amortized space
   */
  push(item: T): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Remove and return the most recently placed item.
   *
   * @throws RangeError if the shelf is empty
   *
   * Target complexity: O(1) time, O(1) space
   */
  pop(): T {
    throw new Error('TODO: implement me')
  }

  /**
   * Read the item at `index`.
   *
   * @throws RangeError if index is out of bounds
   *
   * Target complexity: O(1) time, O(1) space
   */
  get(index: number): T {
    throw new Error('TODO: implement me')
  }
}

/**
 * Merge two sorted restock lists into one new sorted list.
 *
 * @example restockMerge([1, 4], [2, 3]) -> [1, 2, 3, 4]
 *
 * Target complexity: O(m + n) time, O(m + n) space
 */
export function restockMerge(a: number[], b: number[]): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Compact `slots` in place: pack non-null items to the front,
 * preserving order, and return how many are valid. `null` marks an
 * empty slot. Entries at and after the returned count are leftover and
 * irrelevant.
 *
 * @returns the count of valid (non-null) items
 * @example compact(["a", null, "b", null, "c"]) -> 3
 *   (slots starts ["a", "b", "c", ...])
 *
 * Target complexity: O(n) time, O(1) space
 */
export function compact(slots: (string | null)[]): number {
  throw new Error('TODO: implement me')
}

/**
 * Rotate the display order of `items` right by `k`, in place.
 *
 * @param k - may be 0, equal to items.length, or greater than it
 * @example rotateDisplay(["a", "b", "c", "d"], 1) -> mutates to
 *   ["d", "a", "b", "c"]
 *
 * Target complexity: O(n) time, O(1) space
 */
export function rotateDisplay(items: string[], k: number): void {
  throw new Error('TODO: implement me')
}

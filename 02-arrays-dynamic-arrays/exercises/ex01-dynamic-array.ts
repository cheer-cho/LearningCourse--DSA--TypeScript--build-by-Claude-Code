/**
 * Build a dynamic array from scratch: a fixed-capacity backing buffer
 * that doubles when full. This is what push on a real array does under
 * the hood, and why it is amortized O(1) despite occasional O(n) work.
 *
 * Test: npm test -- 02 -t ex01
 */

export class DynamicArray<T> {
  private buffer!: T[]
  private len = 0
  private cap = 0

  /**
   * Create an empty DynamicArray with starting capacity 1. Preallocate
   * the backing buffer once here — never call .push on it afterwards,
   * only index into it (buffer[i] = x).
   */
  constructor() {
    throw new Error('TODO: implement me')
  }

  /**
   * Number of elements currently stored (not the buffer's capacity).
   *
   * @example a fresh DynamicArray -> size() === 0
   *
   * Target complexity: O(1) time, O(1) space
   */
  size(): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Size of the backing buffer. Always >= size().
   *
   * @example a fresh DynamicArray -> capacity() === 1
   *
   * Target complexity: O(1) time, O(1) space
   */
  capacity(): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Read the element at `index`.
   *
   * @param index - 0-based position, must satisfy 0 <= index < size()
   * @throws RangeError if index is out of bounds
   * @example after push(9), get(0) -> 9
   *
   * Target complexity: O(1) time, O(1) space
   */
  get(index: number): T {
    throw new Error('TODO: implement me')
  }

  /**
   * Overwrite the element at `index`.
   *
   * @param index - 0-based position, must satisfy 0 <= index < size()
   * @throws RangeError if index is out of bounds
   *
   * Target complexity: O(1) time, O(1) space
   */
  set(index: number, value: T): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Append `value` at the end. When the buffer is full, allocate a NEW
   * buffer at double the capacity, copy every element across, then
   * write the new value.
   *
   * @example starting empty, push(9) -> size() === 1, get(0) === 9
   *
   * Target complexity: O(1) amortized time, O(1) amortized space
   */
  push(value: T): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Remove and return the last element.
   *
   * @throws RangeError if the array is empty
   *
   * Target complexity: O(1) time, O(1) space
   */
  pop(): T {
    throw new Error('TODO: implement me')
  }
}

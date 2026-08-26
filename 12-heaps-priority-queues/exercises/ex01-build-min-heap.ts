/**
 * ex01 — Build a binary min-heap from scratch
 *
 * A heap array packs a complete binary tree: for index i, the parent
 * is (i-1)>>1, the children are 2i+1 and 2i+2. No pointers needed —
 * the tree is always "complete", so array packing has no gaps.
 *
 * Implement MinHeap: push/pop/peek/size/isEmpty, plus a static
 * heapify(nums) that builds a heap from an existing array bottom-up
 * in O(n). FROM SCRATCH — no library heap.
 *
 * Check: npm test -- 12 -t ex01
 */

export class MinHeap {
  private heap: number[] = []

  /**
   * Build a MinHeap from an existing array in O(n) using bottom-up
   * heapify (sift-down starting from the last parent, up to the
   * root) — NOT by pushing values one at a time (that would cost
   * O(n log n)).
   *
   * @param nums - numbers to heapify (not mutated; the heap gets its own copy)
   * @returns a new MinHeap containing every value in nums
   * input: [5, 3, 8, 1] -> a heap whose pop() sequence is 1, 3, 5, 8
   * Target: O(n) time, O(n) space
   */
  static heapify(nums: number[]): MinHeap {
    throw new Error('TODO: implement me')
  }

  /**
   * Insert a value, restoring the heap property by sifting it up.
   * @param val - value to insert
   * input: push(4) on a heap containing [1, 3, 5] -> heap now also contains 4
   * Target: O(log n) time, O(1) amortized space
   */
  push(val: number): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Remove and return the smallest value, restoring the heap property
   * by sifting the new root down.
   * @returns the smallest value currently in the heap
   * @throws if the heap is empty
   * input: pop() on a heap whose minimum is 1 -> 1
   * Target: O(log n) time, O(1) space
   */
  pop(): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Look at the smallest value without removing it.
   * @returns the smallest value currently in the heap
   * @throws if the heap is empty
   * Target: O(1) time, O(1) space
   */
  peek(): number {
    throw new Error('TODO: implement me')
  }

  /**
   * @returns the number of elements currently in the heap
   * Target: O(1) time
   */
  size(): number {
    throw new Error('TODO: implement me')
  }

  /**
   * @returns true if the heap has no elements
   * Target: O(1) time
   */
  isEmpty(): boolean {
    throw new Error('TODO: implement me')
  }
}

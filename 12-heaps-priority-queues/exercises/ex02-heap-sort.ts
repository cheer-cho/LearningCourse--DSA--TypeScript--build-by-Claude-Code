/**
 * ex02 — Heap sort
 *
 * Turn an array into a max-heap in place (bottom-up, O(n)), then
 * repeatedly swap the root (the current max) with the last unsorted
 * slot and sift down — the classic in-place heap sort. No library
 * heap; build the heap logic yourself (a MinHeap-and-negate approach
 * or an in-place max-heap array are both fine).
 *
 * Check: npm test -- 12 -t ex02
 */

/**
 * Sort numbers ascending using a heap.
 * @param nums - numbers to sort (not mutated)
 * @returns a new array with the same numbers in ascending order
 * input: [5, 3, 8, 1] -> [1, 3, 5, 8]
 * Target: O(n log n) time, O(1) extra space beyond the output copy
 */
export function heapSort(nums: number[]): number[] {
  throw new Error('TODO: implement me')
}

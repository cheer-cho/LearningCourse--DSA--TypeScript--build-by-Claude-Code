// Merge sort, built from scratch: split to singletons, merge back up
// in sorted order. Always O(n log n) and STABLE. Run: npm test -- 09 -t ex02

/**
 * Sorts ascending using merge sort. Returns a NEW array; the input is
 * never mutated.
 *
 * STABLE: two elements that compare equal keep their original
 * relative order. This matters whenever you sort by one key but the
 * rest of the record should stay in its prior order (see ex06 and the
 * checkpoint).
 *
 * @param items - elements to sort
 * @param compareFn - comparator: negative if `a` sorts before `b`,
 *   positive if after, `0` if equal. Omit only when `items` are
 *   numbers (defaults to ascending numeric order).
 * @returns a new array, sorted per `compareFn`
 *
 * @example mergeSort([5, 2, 4, 6, 1, 3]) -> [1, 2, 3, 4, 5, 6]
 * @example mergeSort([{ k: 2 }, { k: 1 }], (a, b) => a.k - b.k) -> [{ k: 1 }, { k: 2 }]
 *
 * Target complexity: O(n log n) time always, O(n) space
 */
export function mergeSort(nums: number[]): number[]
export function mergeSort<T>(items: T[], compareFn: (a: T, b: T) => number): T[]
export function mergeSort<T>(items: T[], compareFn?: (a: T, b: T) => number): T[] {
  throw new Error('TODO: implement me')
}

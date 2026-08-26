// Elementary sorts: insertion sort and selection sort. Both O(n^2)
// worst case, but insertion sort is ADAPTIVE (near-linear on
// nearly-sorted input). Run: npm test -- 09 -t ex01

/**
 * Sorts numbers ascending using insertion sort. Returns a NEW array;
 * `nums` is left untouched.
 *
 * Adaptive: grows the sorted prefix one element at a time, shifting
 * larger elements right to make room. On nearly-sorted input, most
 * elements need zero or one shift.
 *
 * @param nums - numbers to sort
 * @param onShift - optional hook called once per element shift (lets
 *   tests measure how adaptive the implementation is — ignore it for
 *   normal use)
 * @returns a new array, sorted ascending
 *
 * @example insertionSort([5, 2, 4, 6, 1, 3]) -> [1, 2, 3, 4, 5, 6]
 * @example insertionSort([]) -> []
 *
 * Target complexity: O(n^2) worst case, O(n) on nearly-sorted input; O(n) space
 */
export function insertionSort(nums: number[], onShift?: () => void): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Sorts numbers ascending using selection sort. Returns a NEW array;
 * `nums` is left untouched.
 *
 * Repeatedly finds the minimum of the unsorted suffix and swaps it
 * into place. Always scans the whole suffix, so it is NOT adaptive —
 * best, average, and worst case are all the same.
 *
 * @param nums - numbers to sort
 * @returns a new array, sorted ascending
 *
 * @example selectionSort([5, 2, 4, 6, 1, 3]) -> [1, 2, 3, 4, 5, 6]
 *
 * Target complexity: O(n^2) time always, O(n) space
 */
export function selectionSort(nums: number[]): number[] {
  throw new Error('TODO: implement me')
}

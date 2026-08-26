// Quick sort, built from scratch: partition around a pivot so
// everything smaller ends up left of it and everything bigger ends up
// right, then recurse on each side. Run: npm test -- 09 -t ex03

/**
 * Sorts `nums` ascending IN PLACE using quick sort (mutates the
 * array; returns nothing). Any correct partition scheme is fine
 * (Lomuto is the classic choice). Pick the pivot RANDOMLY — a fixed
 * pivot (e.g. always the first element) degrades to O(n^2) on
 * already-sorted input. After partitioning, recurse into the SMALLER
 * side and loop over the LARGER side, so the call stack stays
 * O(log n) deep even in an unlucky run.
 *
 * @param nums - numbers to sort in place
 *
 * @example
 *   const a = [5, 2, 4, 6, 1, 3]
 *   quickSort(a)
 *   // a is now [1, 2, 3, 4, 5, 6]
 *
 * Target complexity: O(n log n) average time, O(log n) space (stack)
 */
export function quickSort(nums: number[]): void {
  throw new Error('TODO: implement me')
}

// Sorting as a problem-solving tool: once you see "if only this were
// in the right order...", write the comparator and let sort do the
// rest. Run: npm test -- 09 -t ex06

/**
 * Arranges the numbers into the largest possible number by
 * concatenating their decimal string forms, and returns that number
 * as a string. Order each pair (a, b) by comparing the strings
 * `a + b` vs `b + a` — whichever concatenation is bigger decides which
 * goes first.
 *
 * @param nums - non-negative integers
 * @returns the largest possible concatenation, as a string
 *
 * @example largestConcatNumber([9, 34, 3]) -> "9343"
 * @example largestConcatNumber([0, 0]) -> "0"
 *
 * Target complexity: O(n log n) time
 */
export function largestConcatNumber(nums: number[]): string {
  throw new Error('TODO: implement me')
}

/**
 * Sorts `nums` by frequency ascending (rarest values first); ties are
 * broken by value descending. Returns a NEW array.
 *
 * @param nums - numbers to sort
 * @returns a new array ordered by (frequency asc, value desc)
 *
 * @example sortByFrequency([1, 1, 2, 2, 2, 3]) -> [3, 1, 1, 2, 2, 2]
 *
 * Target complexity: O(n log n) time
 */
export function sortByFrequency(nums: number[]): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Sorts `nums` by each value's position in `order` (its rank).
 * Values not present in `order` go last, sorted ascending among
 * themselves. `order` has no duplicates. Returns a NEW array.
 *
 * @param nums - numbers to sort
 * @param order - ranking list; an earlier position sorts earlier
 * @returns a new array of `nums` arranged per `order`, unknowns last (ascending)
 *
 * @example relativeOrder([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]) -> [2,2,2,1,4,3,3,9,6,7,19]
 *
 * Target complexity: O(n log n) time
 */
export function relativeOrder(nums: number[], order: number[]): number[] {
  throw new Error('TODO: implement me')
}

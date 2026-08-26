// Counting sort (bounded integer keys, no comparisons) and the Dutch
// national flag three-way partition (sort an array of only 0/1/2 in
// one pass). Run: npm test -- 09 -t ex05

/**
 * Stable sort of `items` ascending by `getValue(item)`, where every
 * value is an integer in `[0, maxValue]`. Returns a NEW array.
 *
 * STABLE: items with equal values keep their original relative
 * order — count occurrences per value, turn counts into starting
 * positions (prefix sums), then place each item (in original order)
 * at its value's next free slot.
 *
 * @param items - elements to sort
 * @param getValue - extracts the integer sort key (0..maxValue) from an item
 * @param maxValue - the largest possible value returned by `getValue`
 * @returns a new array, sorted ascending by value, ties in original order
 *
 * @example countingSort([5, 1, 1, 3], (v) => v, 5) -> [1, 1, 3, 5]
 *
 * Target complexity: O(n + maxValue) time, O(n + maxValue) space
 */
export function countingSort<T>(items: T[], getValue: (item: T) => number, maxValue: number): T[] {
  throw new Error('TODO: implement me')
}

/**
 * Sorts an array containing only the values 0, 1, 2 (e.g. color
 * codes) IN PLACE in a single pass, using the Dutch national flag
 * three-pointer technique (low / mid / high) — no counting pass first.
 *
 * @param nums - array containing only the values 0, 1, 2
 *
 * @example
 *   const a = [2, 0, 1, 1, 0, 2]
 *   sortColors(a)
 *   // a is now [0, 0, 1, 1, 2, 2]
 *
 * Target complexity: O(n) time, O(1) space, single pass
 */
export function sortColors(nums: number[]): void {
  throw new Error('TODO: implement me')
}

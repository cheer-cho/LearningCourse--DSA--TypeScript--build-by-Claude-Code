// ex01 — Classic binary search: THE course template, then a use of it.
// Scenario: a sorted leaderboard of scores; find a score's index, or
// count how many entries share a score.
// Check: npm test -- 10 -t ex01

/**
 * Finds `target` in a sorted (ascending) array using the half-open
 * `[lo, hi)` template: `while (lo < hi)`, `mid = lo + (hi-lo)/2`,
 * shrink to the side that could still hold `target`.
 *
 * @param nums - ascending sorted array (may contain duplicates)
 * @param target - value to find
 * @returns the index of one occurrence of `target`, or -1 if absent
 * @example binarySearch([1, 3, 5, 7, 9], 7) -> 3
 * @example binarySearch([1, 3, 5, 7, 9], 4) -> -1
 * @example binarySearch([], 4) -> -1
 * Target complexity: O(log n) time, O(1) space
 */
export function binarySearch(nums: number[], target: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Counts how many elements equal `target` in a sorted array, using two
 * boundary searches (first index `>= target`, first index `> target`)
 * instead of scanning — no element is ever compared to `target` twice.
 *
 * @param nums - ascending sorted array (may contain duplicates)
 * @param target - value to count
 * @returns the number of elements equal to `target`
 * @example countOccurrences([1, 2, 2, 2, 3], 2) -> 3
 * @example countOccurrences([1, 2, 3], 5) -> 0
 * @example countOccurrences([], 1) -> 0
 * Target complexity: O(log n) time, O(1) space
 */
export function countOccurrences(nums: number[], target: number): number {
  throw new Error('TODO: implement me')
}

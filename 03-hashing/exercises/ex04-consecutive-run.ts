// Scenario: a scheduling tool needs the longest unbroken stretch of
// consecutive day-numbers in an unsorted list of booked days. Pattern:
// the "set trick" — O(1) membership tests replace sorting.
// Run: npm test -- 03 -t ex04

/**
 * Length of the longest run of consecutive integers in `nums` (input
 * order does not matter; duplicates count once).
 *
 * Sorting first gives O(n log n). The set trick gets O(n): put every
 * value in a set, then only START counting a run from a value `x`
 * whose predecessor `x - 1` is NOT in the set (a run's beginning).
 * Every other value gets skipped as "not a start", so across the
 * whole scan each element is extended into at most once — the inner
 * while loop's total work is O(n), not O(n) per outer value.
 *
 * @param nums - the numbers to scan (may be empty, unsorted, may
 *   contain duplicates)
 * @returns the length of the longest consecutive run, 0 if `nums` is
 *   empty
 *
 * longestConsecutive([100, 4, 200, 1, 3, 2]) -> 4   (1, 2, 3, 4)
 * longestConsecutive([]) -> 0
 * longestConsecutive([5, 5, 5]) -> 1
 *
 * Target complexity: O(n) time, O(n) space.
 */
export function longestConsecutive(nums: number[]): number {
  throw new Error('TODO: implement me')
}

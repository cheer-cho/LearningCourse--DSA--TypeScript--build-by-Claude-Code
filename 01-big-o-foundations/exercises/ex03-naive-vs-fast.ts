/**
 * ex03 — naive-vs-fast: the same question, two complexities.
 * Pattern(s): brute-force all-pairs (n^2) vs hash set lookup (n).
 * Check: npm test -- 01 -t ex03
 */

/**
 * Detect a duplicate value by comparing every pair — the honest O(n^2)
 * way. Calls tick() once per comparison made (every i < j pair, checked
 * in order, stopping as soon as a duplicate is found).
 * @param nums - numbers to check
 * @param tick - called once per comparison
 * @returns true if any value repeats
 * input -> output: ([1, 2, 3, 2], tick) -> true
 * Target complexity: O(n^2) time, O(1) space
 */
export function hasDuplicateNaive(nums: number[], tick: () => void): boolean {
  throw new Error('TODO: implement me')
}

/**
 * Detect a duplicate value using a set of values seen so far.
 * @param nums - numbers to check
 * @returns true if any value repeats
 * input -> output: ([1, 2, 3, 2]) -> true
 * Target complexity: O(n) time, O(n) space
 */
export function hasDuplicateFast(nums: number[]): boolean {
  throw new Error('TODO: implement me')
}

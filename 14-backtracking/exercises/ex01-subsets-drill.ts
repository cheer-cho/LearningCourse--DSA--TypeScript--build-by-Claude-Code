// You're building a "select any combo of toppings" preview for a
// pizza app: every possible subset of the chosen toppings, including
// none of them and all of them. Pattern: backtracking — subsets shape
// (include/exclude). Check: npm test -- 14 -t ex01

/**
 * All subsets (the power set) of `nums`. `nums` has no duplicate
 * values. Order of subsets, and order of elements within a subset,
 * does not matter to the caller (tests compare as sets of sets).
 *
 * @param nums - distinct numbers.
 * @returns every subset, including `[]` and the full array.
 * @remarks Edge case: `nums = []` -> `[[]]` (one subset: the empty one).
 * @example subsets([1, 2]) -> [[], [1], [2], [1, 2]]
 * Target complexity: O(2^n * n) time (2^n subsets, O(n) to copy each), O(n) extra space.
 */
export function subsets(nums: number[]): number[][] {
  throw new Error('TODO: implement me')
}

/**
 * All subsets of `nums`, where `nums` MAY contain duplicate values —
 * duplicate subsets (as multisets) must appear only once in the
 * result.
 *
 * @param nums - numbers, possibly with duplicates.
 * @returns every distinct subset.
 * @remarks Edge case: all values equal -> only n + 1 subsets (sizes 0..n).
 * @example subsetsWithDup([1, 2, 2]) -> [[], [1], [2], [1,2], [2,2], [1,2,2]]
 * Target complexity: O(2^n * n) time, O(n) extra space (sort first).
 */
export function subsetsWithDup(nums: number[]): number[][] {
  throw new Error('TODO: implement me')
}

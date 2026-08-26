// A race-results predictor: every possible finishing order for a set
// of runners. Pattern: backtracking — permutations shape (used-set),
// plus the duplicate-runner-numbers variant. Check: npm test -- 14 -t ex03

/**
 * Every permutation (ordering) of `nums`. `nums` has no duplicate
 * values.
 *
 * @param nums - distinct numbers.
 * @returns every ordering, length `nums.length!`.
 * @remarks Edge case: `nums = []` -> `[[]]` (one permutation: the empty one).
 * @example permutations([1, 2]) -> [[1, 2], [2, 1]]
 * Target complexity: O(n! * n) time (n! permutations, O(n) to copy each), O(n) extra space.
 */
export function permutations(nums: number[]): number[][] {
  throw new Error('TODO: implement me')
}

/**
 * Every DISTINCT permutation of `nums`, where `nums` MAY contain
 * duplicate values. Use a counter map of remaining-value -> count and
 * skip a value once its count hits 0 at a given call, rather than the
 * usual "used[] boolean array" — a plain used-array would still
 * revisit the same value from two different original indices and
 * produce duplicate permutations, since duplicate *values* (not just
 * duplicate indices) need to collapse into one branch per position.
 *
 * @param nums - numbers, possibly with duplicates.
 * @returns every distinct ordering.
 * @remarks Edge case: all values equal -> exactly one permutation.
 * @example permutationsUnique([1, 1, 2]) -> [[1,1,2],[1,2,1],[2,1,1]]
 * Target complexity: O(n! * n) time worst case (fewer when duplicates collapse branches).
 */
export function permutationsUnique(nums: number[]): number[][] {
  throw new Error('TODO: implement me')
}

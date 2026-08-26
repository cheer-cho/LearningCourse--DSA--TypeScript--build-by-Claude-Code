// ex04 — Triplet sum: fixed first element + opposite-ends inner scan,
// with duplicate skipping. Pattern: two pointers (opposite ends), O(n^2).
// Check: npm test -- 04 -t ex04

/**
 * Find every unique triplet of values in `nums` that sums to 0.
 *
 * Sort first, then for each index `i` (the fixed first element), run
 * opposite-ends two pointers over the remainder of the array looking
 * for pairs that sum to `-nums[i]`. Skip over duplicate values — both
 * for `i` and for the two inner pointers — so the same triplet (as a
 * multiset of values) is never emitted twice.
 *
 * @param nums - array of integers, any order, may contain duplicates
 * @returns an array of triplets `[a, b, c]` with `a + b + c === 0`;
 *   each triplet of VALUES appears at most once; order of triplets and
 *   order within a triplet do not matter
 * @example
 * threeSumZero([-1, 0, 1, 2, -1, -4])
 *   -> [[-1, -1, 2], [-1, 0, 1]]   // order-insensitive
 * threeSumZero([0, 1, 1]) -> []
 *
 * Target: O(n^2) time, O(1) extra space (not counting the output).
 */
export function threeSumZero(nums: number[]): number[][] {
  throw new Error('TODO: implement me')
}

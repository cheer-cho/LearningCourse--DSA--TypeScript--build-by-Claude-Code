// ex03 — Move zeroes & partition evens/odds: same-direction and
// opposite-ends in-place rearrangement. Pattern: two pointers.
// Check: npm test -- 04 -t ex03

/**
 * Move every `0` in `nums` to the end, IN PLACE, preserving the
 * relative order of the non-zero elements. Mutates `nums`; returns
 * nothing.
 *
 * Reader/writer same-direction two pointers: `writer` marks the next
 * slot for a kept (non-zero) value, `reader` scans ahead.
 *
 * @param nums - array to rearrange in place
 * @example
 * const a = [0, 1, 0, 3, 12]
 * moveZeroes(a)  // a is now [1, 3, 12, 0, 0]
 *
 * Target: O(n) time, O(1) space.
 */
export function moveZeroes(nums: number[]): void {
  throw new Error('TODO: implement me')
}

/**
 * Rearrange `nums` IN PLACE so every even number comes before every
 * odd number. Relative order within evens/odds does NOT need to be
 * preserved. Mutates `nums`; returns nothing.
 *
 * Opposite-ends two pointers with a swap: when the left pointer sits
 * on an odd value and the right pointer sits on an even value, swap
 * them and continue closing in.
 *
 * @param nums - array to rearrange in place
 * @example
 * const a = [3, 1, 2, 4]
 * partitionEvenOdd(a)  // a's evens (2, 4) now all precede its odds (in some order)
 *
 * Target: O(n) time, O(1) space.
 */
export function partitionEvenOdd(nums: number[]): void {
  throw new Error('TODO: implement me')
}

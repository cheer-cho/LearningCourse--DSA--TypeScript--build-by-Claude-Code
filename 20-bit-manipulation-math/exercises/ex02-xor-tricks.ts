/**
 * ex02 — XOR tricks
 *
 * Scenario: a sensor log records readings twice each (once per
 * redundant sensor) except when one sensor drops a reading — find the
 * odd one out, find the missing ID, and measure how different two
 * readings are bit-for-bit. Pattern: XOR's three superpowers
 * (a^a=0, a^0=a, order doesn't matter) from the lesson.
 *
 * Check: npm test -- 20 -t ex02
 */

/**
 * Every value in nums appears exactly twice except one, which appears
 * exactly once. Find it.
 * XOR the whole array: every pair cancels to 0 (a^a=0), and XOR with
 * 0 is a no-op (a^0=a), so only the unpaired value survives — order
 * doesn't matter, so the pairs don't even need to be adjacent.
 * @param nums - non-empty array where exactly one value appears once
 *   and every other value appears exactly twice
 * @returns the value that appears exactly once
 * input: findSingle([4, 1, 2, 1, 2]) -> 4
 * input: findSingle([7]) -> 7
 * Target: O(n) time, O(1) space
 */
export function findSingle(nums: number[]): number {
  throw new Error('TODO: implement me')
}

/**
 * nums holds n distinct values drawn from 0..n (inclusive) with
 * exactly one missing. Find the missing value.
 *
 * XOR version (required here): XOR together 0..n AND every element of
 * nums. Every value that's present cancels with its counterpart in
 * 0..n (a^a=0); only the missing value — which has no partner in
 * nums — survives.
 *
 * (An alternative is summing 0..n and subtracting sum(nums); it's
 * simpler to read but risks integer overflow in fixed-width-integer
 * languages for large n. JS numbers are floats up to 2**53 so this
 * particular overflow isn't a practical concern here, but the XOR
 * approach is what the lesson wants you to practice.)
 *
 * @param nums - array of length n holding n distinct values from
 *   0..n inclusive, with exactly one value missing
 * @returns the missing value
 * edge cases: missing value is 0 -> 0; missing value is n -> n
 * input: findMissing([3, 0, 1]) -> 2 (n = 3, range is 0..3)
 * Target: O(n) time, O(1) space
 */
export function findMissing(nums: number[]): number {
  throw new Error('TODO: implement me')
}

/**
 * Hamming distance between a and b: the number of bit positions where
 * they disagree. a ^ b has a 1 exactly at each disagreeing position,
 * so the answer is just the popcount of a ^ b.
 * @param a - non-negative integer
 * @param b - non-negative integer
 * @returns count of differing bit positions
 * edge cases: a === b -> 0
 * input: swapCountBits(1, 4) -> 2 (0b001 vs 0b100 disagree in 2 places)
 * Target: O(popcount(a ^ b)) time, O(1) space
 */
export function swapCountBits(a: number, b: number): number {
  throw new Error('TODO: implement me')
}

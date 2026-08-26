/**
 * ex03 — Bit tables
 *
 * Scenario: a dashboard needs a popcount lookup table for every value
 * up to n (build it once, answer many queries in O(1)), and a
 * firmware routine needs to reverse a 32-bit register's bit order.
 * Pattern: popcount-as-DP, and shift-and-mask bit reversal.
 *
 * Check: npm test -- 20 -t ex03
 */

/**
 * Build a table where result[i] is the number of set bits in i, for
 * every i from 0 to n inclusive.
 *
 * This is secretly dynamic programming: dp[i] = dp[i >> 1] + (i & 1).
 * Dropping i's lowest bit (i >> 1) gives a SMALLER number whose
 * popcount you've already computed earlier in the same pass; add back
 * the bit you dropped (i & 1, which is 0 or 1) and you have i's
 * popcount. Base case dp[0] = 0. Building it this way reuses every
 * previous answer instead of recounting bits from scratch each time.
 *
 * @param n - non-negative integer, the table's inclusive upper bound
 * @returns array of length n + 1 where result[i] = popcount(i)
 * edge cases: n = 0 -> [0]
 * input: countBitsUpto(5) -> [0, 1, 1, 2, 1, 2]
 * Target: O(n) time, O(n) space
 */
export function countBitsUpto(n: number): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Reverse the 32 bits of n (bit 0 <-> bit 31, bit 1 <-> bit 30, ...).
 * @param n - a 32-bit value, given as a non-negative integer in
 *   [0, 2**32 - 1]
 * @returns the bit-reversed value, as a non-negative integer in
 *   [0, 2**32 - 1] (see the lesson's gotchas box on why the result
 *   needs `>>> 0` rather than plain arithmetic)
 * input: reverseBits32(1) -> 2147483648 (2**31 — bit 0 moves to bit 31)
 * input: reverseBits32(0) -> 0
 * Target: O(1) time (32 fixed iterations), O(1) space
 */
export function reverseBits32(n: number): number {
  throw new Error('TODO: implement me')
}

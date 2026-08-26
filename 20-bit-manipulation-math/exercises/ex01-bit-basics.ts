/**
 * ex01 — Bit basics
 *
 * Scenario: a permissions/feature-flag system packs booleans into one
 * integer, one bit per flag. Pattern: the core bit-toolkit recipes
 * from the lesson (get/set/clear/toggle, power-of-two, popcount).
 *
 * All inputs are non-negative integers within the 32-bit signed range
 * (0 to 2**31 - 1) unless a docstring says otherwise — see the
 * lesson's gotchas box on JS/TS bitwise semantics.
 *
 * Check: npm test -- 20 -t ex01
 */

/**
 * Read bit i of n (bit 0 = least significant).
 * @param n - non-negative integer
 * @param i - bit position, 0 <= i <= 31
 * @returns 0 or 1
 * edge cases: i beyond n's highest set bit -> 0
 * input: getBit(0b1010, 1) -> 1
 * input: getBit(0b1010, 0) -> 0
 * Target: O(1) time, O(1) space
 */
export function getBit(n: number, i: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Return n with bit i forced to 1 (every other bit unchanged).
 * @param n - non-negative integer
 * @param i - bit position, 0 <= i <= 31
 * @returns the new integer
 * edge cases: bit already 1 -> n unchanged
 * input: setBit(0b1000, 0) -> 0b1001 (9)
 * Target: O(1) time, O(1) space
 */
export function setBit(n: number, i: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Return n with bit i forced to 0 (every other bit unchanged).
 * @param n - non-negative integer
 * @param i - bit position, 0 <= i <= 31
 * @returns the new integer
 * edge cases: bit already 0 -> n unchanged
 * input: clearBit(0b1111, 1) -> 0b1101 (13)
 * Target: O(1) time, O(1) space
 */
export function clearBit(n: number, i: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Return n with bit i flipped (1 -> 0, 0 -> 1), every other bit unchanged.
 * @param n - non-negative integer
 * @param i - bit position, 0 <= i <= 31
 * @returns the new integer
 * input: toggleBit(0b1010, 0) -> 0b1011 (11)
 * input: toggleBit(0b1011, 0) -> 0b1010 (10)
 * Target: O(1) time, O(1) space
 */
export function toggleBit(n: number, i: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Is n a power of two (1, 2, 4, 8, ...)?
 * A power of two has exactly one set bit, so dropping its lowest set
 * bit (n & (n - 1)) always leaves 0.
 * @param n - any integer
 * @returns true iff n > 0 and n has exactly one set bit
 * edge cases: n <= 0 -> false (0 and negatives are never powers of two here)
 * input: isPowerOfTwo(16) -> true
 * input: isPowerOfTwo(18) -> false
 * Target: O(1) time, O(1) space
 */
export function isPowerOfTwo(n: number): boolean {
  throw new Error('TODO: implement me')
}

/**
 * Count the set (1) bits in n — its "popcount" / Hamming weight.
 * Use Kernighan's trick (n & (n - 1) drops the lowest set bit each
 * iteration) so the loop runs once per SET bit, not once per bit of
 * width — a sparse number like 2**30 finishes in one iteration, not
 * thirty-one.
 * @param n - non-negative integer
 * @returns number of 1 bits in n's binary representation
 * edge cases: n = 0 -> 0
 * input: countSetBits(0b1011) -> 3
 * input: countSetBits(1073741824) -> 1 (2**30, a single set bit)
 * Target: O(popcount(n)) time, O(1) space
 */
export function countSetBits(n: number): number {
  throw new Error('TODO: implement me')
}

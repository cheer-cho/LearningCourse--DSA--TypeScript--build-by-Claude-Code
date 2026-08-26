/**
 * ex06 — Digit strings
 *
 * Scenario: a low-level math library that operates on numeric strings
 * and digit arrays, where using the language's built-in big-integer
 * parser on the whole string is banned — the goal is to practice the
 * carry-loop and digit-array idioms that appear in interview questions
 * on arbitrary-precision arithmetic.
 * Pattern: carry loop (addBinary, plusOne), cycle detection with a Set
 * (isHappy).
 *
 * Check: npm test -- 20 -t ex06
 */

/**
 * Add two binary strings and return their sum as a binary string.
 * Do NOT convert the whole string to an integer (no parseInt(a, 2) on
 * the full input) — work with a carry loop from right to left, the same
 * way you add two binary numbers by hand. BigInt parsing the whole
 * string is also banned (defeats the exercise's purpose).
 * @param a - non-empty binary string, no leading zeros except "0" itself
 * @param b - non-empty binary string, no leading zeros except "0" itself
 * @returns their sum as a binary string
 * edge cases: "0" + "0" -> "0"; different lengths -> align from the right
 * input: addBinary("11", "1") -> "100"
 * input: addBinary("1010", "1011") -> "10101"
 * Target: O(max(a.length, b.length)) time, O(max(a.length, b.length)) space
 */
export function addBinary(a: string, b: string): string {
  throw new Error('TODO: implement me')
}

/**
 * Increment a non-negative integer represented as an array of its
 * decimal digits (most significant digit first) by one.
 * Handle the carry — e.g. [9] -> [1, 0], [1, 2, 9] -> [1, 3, 0],
 * [9, 9] -> [1, 0, 0].
 * @param digits - array of single decimal digits, digits[0] is the
 *   most significant; no leading zeros (except the representation of 0
 *   itself: [0])
 * @returns a new array representing the incremented value; the original
 *   may be mutated in place (either approach is fine)
 * edge cases: [0] -> [1]; all nines -> new array one digit longer
 * input: plusOne([1, 2, 3]) -> [1, 2, 4]
 * input: plusOne([9, 9]) -> [1, 0, 0]
 * Target: O(n) time, O(1) extra space (amortized — the carry propagation
 *   rarely adds a new digit)
 */
export function plusOne(digits: number[]): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Is n a "happy number"?
 * Starting from n, repeatedly replace the number with the sum of squares
 * of its digits. A number is happy if this sequence eventually reaches 1
 * (and stays there). Otherwise the sequence loops forever without
 * hitting 1.
 *
 * Cycle detection: use a Set to remember every value seen; if we reach
 * 1 -> true; if we reach a value already in the Set -> false.
 *
 * (Note: Floyd's cycle-detection algorithm from module 07 also works
 * here with a slow/fast pointer — the Set version is clearer for an
 * interview setting since the cycle in the unhappy sequence is not
 * too long in practice.)
 *
 * @param n - positive integer
 * @returns true if n is happy, false if its sequence loops
 * edge cases: n = 1 -> true; n = 7 -> true (known happy number)
 * input: isHappy(19) -> true  (19 -> 82 -> 68 -> 100 -> 1)
 * input: isHappy(2)  -> false (2 cycles without reaching 1)
 * Target: O(log n) per step, terminates quickly for typical n (the
 *   unhappy cycle is short — at most a few dozen distinct values)
 */
export function isHappy(n: number): boolean {
  throw new Error('TODO: implement me')
}

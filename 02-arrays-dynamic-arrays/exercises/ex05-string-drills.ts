/**
 * Strings are immutable in TS/JS — repeated `s += char` in a loop is an
 * O(n^2) trap, since every += allocates a new string. Build pieces in
 * an array instead, then join once: O(n).
 *
 * Test: npm test -- 02 -t ex05
 */

/**
 * Reverse the WORD order of `s`, collapsing runs of extra whitespace to
 * single spaces and trimming the ends.
 *
 * @example reverseWords("  the sky   is blue ") -> "blue is sky the"
 *
 * Target complexity: O(n) time, O(n) space
 */
export function reverseWords(s: string): string {
  throw new Error('TODO: implement me')
}

/**
 * Run-length encode `s`: each maximal run of the same character becomes
 * that character followed by its run length (always a number, even for
 * runs of length 1).
 *
 * @example runLengthEncode("aaabbc") -> "a3b2c1"
 * @example runLengthEncode("") -> ""
 *
 * Target complexity: O(n) time, O(n) space
 */
export function runLengthEncode(s: string): string {
  throw new Error('TODO: implement me')
}

/**
 * Decode a string produced by runLengthEncode back to the original.
 *
 * @example runLengthDecode("a3b2c1") -> "aaabbc"
 * @example runLengthDecode("") -> ""
 *
 * Target complexity: O(n) time, O(n) space
 */
export function runLengthDecode(s: string): string {
  throw new Error('TODO: implement me')
}

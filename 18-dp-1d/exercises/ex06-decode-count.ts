/**
 * ex06 — Decoding a digit transmission
 *
 * Scenario: an old radio protocol maps '1'..'26' to letters A..Z (no
 * letter maps to 0, and codes above 26 don't exist). A received
 * message is a string of digits with no separators — count how many
 * distinct letter-sequences it could decode to. The edge-case
 * gauntlet: leading zeros, "10", "27", "100" — get these right and
 * you understand the recurrence.
 *
 * Check: npm test -- 18 -t ex06
 */

/**
 * Number of distinct ways `digits` can be decoded under the '1'..'26'
 * -> letter mapping.
 *
 * State: ways(i) = number of ways to decode the first i digits.
 * Choice: the last decoded chunk was ONE digit (digits[i-1], valid
 * only if it isn't '0') or TWO digits (digits[i-2..i), valid only if
 * it parses to 10..26).
 * Recurrence: ways(i) = (one-digit valid ? ways(i-1) : 0)
 *                      + (two-digit valid ? ways(i-2) : 0).
 * Base cases: ways(0) = 1 (the empty prefix decodes one way: nothing).
 * ways(1) = 1 if digits[0] != '0', else 0.
 *
 * Public contract: an empty `digits` string has no message to decode,
 * so it returns 0 (distinct from the internal ways(0) = 1 base case
 * used to build up the recurrence for non-empty input).
 *
 * @param digits - a string of decimal digits ('0'-'9'), no separators.
 * @returns the number of distinct valid decodings.
 * @example decodeWays('12') -> 2 ("AB" or "L")
 * @example decodeWays('226') -> 3 ("BZ", "VF", "BBF")
 * @example decodeWays('06') -> 0 (leading zero, no valid single or
 *   double-digit code starts with 0)
 * @example decodeWays('') -> 0
 * Target: O(n) time, O(1) space (rolling variables).
 */
export function decodeWays(digits: string): number {
  throw new Error('TODO: implement me')
}

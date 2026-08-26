// ex02 — Valid palindrome: opposite-ends two pointers over a string,
// plus a one-mismatch greedy branch. Pattern: two pointers (opposite ends).
// Check: npm test -- 04 -t ex02

/**
 * Check whether `s`, after ignoring everything except letters/digits
 * and ignoring case, reads the same forwards and backwards.
 *
 * @param s - arbitrary input string (may contain spaces, punctuation)
 * @returns true if the cleaned string is a palindrome
 * @example
 * isCleanPalindrome("A man, a plan, a canal: Panama") -> true
 * isCleanPalindrome("race a car") -> false
 * isCleanPalindrome("") -> true
 *
 * Target: O(n) time, O(1) space.
 */
export function isCleanPalindrome(s: string): boolean {
  throw new Error('TODO: implement me')
}

/**
 * Check whether `s` (letters only, no cleaning needed here) can be
 * made into a palindrome by deleting AT MOST one character.
 *
 * Two pointers close in from both ends. On a mismatch, you have two
 * candidate fixes — skip the left character, or skip the right one —
 * and only one deletion is allowed, so try both remaining substrings
 * for a straight palindrome and accept if either works. This is the
 * first taste of a "greedy branch": you don't know which skip is
 * correct, so you try both and let the cheap check decide.
 *
 * @param s - lowercase input string
 * @returns true if `s` is a palindrome, or becomes one after removing
 *   exactly one character
 * @example
 * validAfterOneDelete("abca") -> true    // remove 'b' or 'c'
 * validAfterOneDelete("abc") -> false
 *
 * Target: O(n) time, O(1) space.
 */
export function validAfterOneDelete(s: string): boolean {
  throw new Error('TODO: implement me')
}

// Longest substring that can be made all-one-character by replacing at
// most k characters ("character replacement"). Variable-size window:
// valid while (window size - count of the window's most frequent char)
// <= k, i.e. the number of characters you'd need to swap is within budget.
// Check: npm test -- 05 -t ex04

/**
 * Length of the longest substring of `s` that becomes uniform (all one
 * character) after replacing at most `k` of its characters.
 *
 * A window of size `len` with a most-frequent character occurring
 * `maxFreq` times needs exactly `len - maxFreq` replacements. Track
 * `maxFreq` as a running "high-water mark" while growing the window
 * (update it only when the new character raises it) and never lower it
 * on shrink. That staleness is fine: `maxFreq` can only ever be an
 * *overestimate* of the current window's true max frequency, so a
 * window is never accepted as valid unless it truly is; the algorithm
 * just occasionally skips a shrink that a fresher count would have
 * allowed. Since the window can never grow past its best-ever size once
 * that size is invalid, an already-recorded best length is never lost —
 * a stale `maxFreq` costs nothing but doesn't need re-verifying.
 *
 * @param s - the input string.
 * @param k - max allowed replacements (non-negative).
 * @returns the longest achievable uniform run's length.
 * @throws RangeError if `k` is negative.
 *
 * @example longestUniformWithKEdits('aabccbb', 2) -> 5   // "bccbb" or "abccb"
 * @example longestUniformWithKEdits('abcde', 0) -> 1     // no repeats at all
 *
 * Target: O(n) time, O(alphabet size) space.
 */
export function longestUniformWithKEdits(s: string, k: number): number {
  throw new Error('TODO: implement me')
}

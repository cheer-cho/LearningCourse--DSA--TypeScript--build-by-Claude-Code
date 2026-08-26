/**
 * ex06 — Monotonic stack: next greater element
 *
 * Scenario: a weather station log and a generic "what's the next
 * bigger one" query — the same monotonic-stack idea underneath both.
 * Check: npm test -- 06 -t ex06
 */

/**
 * `temps[i]` is a daily temperature. For each day, how many days must
 * pass until a strictly warmer day? `0` if none exists.
 *
 * Edge cases: empty input -> `[]`; a strictly decreasing sequence ->
 * all `0`s (never warms up again).
 *
 * Example:
 *   daysUntilWarmer([73, 74, 75, 71, 69, 72]) -> [1, 1, 0, 2, 1, 0]
 *
 * Target complexity: O(n) time, O(n) space.
 */
export function daysUntilWarmer(temps: number[]): number[] {
  throw new Error('TODO: implement me')
}

/**
 * For each element of `nums`, the next element to its right that is
 * strictly greater — or `-1` if none exists. (Not circular: only look
 * rightward, don't wrap to the start.)
 *
 * Edge cases: empty input -> `[]`; a strictly decreasing sequence ->
 * all `-1`s; duplicates don't count as "greater".
 *
 * Example:
 *   nextGreater([2, 1, 2, 4, 3]) -> [4, 2, 4, -1, -1]
 *
 * Target complexity: O(n) time, O(n) space.
 */
export function nextGreater(nums: number[]): number[] {
  throw new Error('TODO: implement me')
}

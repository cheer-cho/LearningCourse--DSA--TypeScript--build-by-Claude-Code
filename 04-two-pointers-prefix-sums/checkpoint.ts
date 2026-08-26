// ✦ CHECKPOINT 4 — Elevation survey
//
// A hiking trail's elevation profile (array of readings, one per
// checkpoint marker) needs four analyses. Combines: opposite-ends two
// pointers, same-direction reader/writer compaction, and prefix sums
// (both a repeated-query object and a pivot-style scan).
// Check: npm test -- 04

/**
 * `sortedReadings` is ascending sorted. Find two readings that sum to
 * exactly `target` (a "flat pair" — together they cancel out to a
 * known combined elevation), using opposite-ends two pointers.
 *
 * @param sortedReadings - ascending sorted elevation readings
 * @param target - the combined value to find
 * @returns the 0-indexed pair `[i, j]` with `i < j`, or `null` if none
 * @example
 * flatPairs([-4, -1, 0, 3, 8], 4) -> [0, 4]   // -4 + 8 === 4
 *
 * Target: O(n) time, O(1) space.
 */
export function flatPairs(sortedReadings: number[], target: number): [number, number] | null {
  throw new Error('TODO: implement me')
}

/**
 * Marks a missing/broken sensor reading. Real elevation readings in
 * this survey are always >= 0, so -1 can never collide with a valid
 * reading.
 */
export const GAP_SENTINEL = -1

/**
 * A faulty sensor recorded `GAP_SENTINEL` for readings it missed.
 * Remove every `GAP_SENTINEL` from `readings` IN PLACE, keeping the
 * remaining readings in their original order, and shrink the array to
 * just those readings (reader/writer compaction — no new array
 * allocated).
 *
 * @param readings - elevation readings, may contain GAP_SENTINEL gaps;
 *   mutated in place
 * @example
 * const r = [10, GAP_SENTINEL, 12, GAP_SENTINEL, 15]
 * compactGaps(r)  // r is now [10, 12, 15]
 *
 * Target: O(n) time, O(1) extra space.
 */
export function compactGaps(readings: number[]): void {
  throw new Error('TODO: implement me')
}

/**
 * Precompute once so repeated "net elevation gain between checkpoint
 * `i` and checkpoint `j`" queries (inclusive) answer in O(1).
 *
 * @param readings - elevation readings for the whole trail
 * @returns an object whose `query(i, j)` returns the inclusive sum
 *   `readings[i] + ... + readings[j]`
 * @example
 * const survey = rangeGain([2, -1, 3, 4, -2])
 * survey.query(1, 3) -> 6   // -1 + 3 + 4
 *
 * Target: O(n) precompute, O(1) per query.
 */
export function rangeGain(readings: number[]): { query(i: number, j: number): number } {
  throw new Error('TODO: implement me')
}

/**
 * Find the smallest checkpoint index where the total elevation gained
 * strictly before it equals the total gained strictly after it (the
 * checkpoint itself counts toward neither side) — a "balanced"
 * checkpoint for splitting the trail into two equal-effort halves.
 *
 * @param readings - elevation readings for the whole trail
 * @returns the smallest balanced index, or -1 if none exists
 * @example
 * balancedCheckpoint([1, 7, 3, 6, 5, 6]) -> 3
 *
 * Target: O(n) time, O(n) space.
 */
export function balancedCheckpoint(readings: number[]): number {
  throw new Error('TODO: implement me')
}

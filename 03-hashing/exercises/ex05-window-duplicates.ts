// Scenario: an anti-fraud stream watches for the same transaction ID
// appearing twice within a short window of recent events. Pattern:
// last-seen-index map — bridges toward sliding window (module 05).
// Run: npm test -- 03 -t ex05

/**
 * True if some value in `nums` occurs at least twice within index
 * distance `k` of another occurrence (two equal values at indices
 * i < j with j - i <= k).
 *
 * Track the last-seen index of every value in a map. For each new
 * index, check whether the same value was seen within the last `k`
 * positions — no need to materialize a literal sliding window.
 *
 * @param nums - the values to scan
 * @param k - the maximum allowed index distance (k >= 0)
 * @returns whether a near-duplicate exists
 *
 * hasNearbyDuplicate([1, 2, 3, 1], 3) -> true   (two 1s, distance 3)
 * hasNearbyDuplicate([1, 2, 3, 1], 2) -> false  (distance 3 > k)
 * hasNearbyDuplicate([1, 2, 3, 4], 2) -> false
 *
 * Target complexity: O(n) time, O(n) space (the map holds one entry
 * per distinct value and is never pruned; a bounded-window eviction
 * variant could tighten this to O(min(n, k)) as a further refinement).
 */
export function hasNearbyDuplicate(nums: number[], k: number): boolean {
  throw new Error('TODO: implement me')
}

/**
 * The first value in `stream` found to repeat within index distance
 * `k` of its previous occurrence, scanning left to right.
 *
 * Same last-seen-index map as `hasNearbyDuplicate`, but returns the
 * offending value (at the point of the second occurrence) instead of
 * a boolean, stopping at the first hit.
 *
 * @param stream - the values to scan, in order
 * @param k - the maximum allowed index distance (k >= 0)
 * @returns the first value found to repeat within `k`, or `undefined`
 *   if none does
 *
 * firstRepeatedWithin([5, 1, 5, 2], 2) -> 5
 * firstRepeatedWithin([5, 1, 2, 5], 2) -> undefined
 *
 * Target complexity: O(n) time, O(n) space (the map holds one entry
 * per distinct value and is never pruned; a bounded-window eviction
 * variant could tighten this to O(min(n, k)) as a further refinement).
 */
export function firstRepeatedWithin(stream: number[], k: number): number | undefined {
  throw new Error('TODO: implement me')
}

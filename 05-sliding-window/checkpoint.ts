// Checkpoint: "Traffic monitor" — per-second request counts feed four
// window checks a rate-limiter dashboard would need: worst fixed-size
// minute, longest run within budget, shortest run that breaches a
// threshold, and whether a known burst pattern occurred anywhere.
// Check: npm test -- 05

/**
 * The largest total request count over any 60 consecutive seconds.
 *
 * @param counts - per-second request counts, one entry per second.
 * @returns the maximum 60-second sum.
 * @throws RangeError if `counts` has fewer than 60 entries.
 *
 * Target: O(n) time, O(1) space.
 */
export function worstMinute(counts: number[]): number {
  throw new Error('TODO: implement me')
}

/**
 * Length of the longest contiguous run of seconds whose combined request
 * count stays within `budget`.
 *
 * @param counts - per-second request counts (all non-negative).
 * @param budget - the max allowed sum for a run.
 * @returns the longest such run's length (0 if even one second already
 *   exceeds `budget`).
 *
 * Target: O(n) time, O(1) space.
 */
export function longestWithinBudget(counts: number[], budget: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Length of the shortest contiguous run of seconds whose combined
 * request count reaches or exceeds `threshold`.
 *
 * @param counts - per-second request counts (all non-negative).
 * @param threshold - the sum to reach.
 * @returns the shortest such run's length, or 0 if no run reaches it.
 *
 * Target: O(n) time, O(1) space.
 */
export function shortestBreach(counts: number[], threshold: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Whether some contiguous run of `counts` is a permutation of `pattern`
 * (same multiset of per-second counts, any order) — e.g. detecting a
 * known burst signature occurring anywhere in the log, regardless of
 * exact alignment.
 *
 * @param counts - per-second request counts (small non-negative ints).
 * @param pattern - the burst signature to look for.
 * @returns whether a matching contiguous run exists.
 *
 * Target: O(n + m) time, O(m) space, where m = pattern.length.
 */
export function hasPatternBurst(counts: number[], pattern: number[]): boolean {
  throw new Error('TODO: implement me')
}

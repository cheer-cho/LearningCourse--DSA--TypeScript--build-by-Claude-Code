// A calendar tool: collapse a messy pile of busy intervals into their
// simplest form, and separately, slot one new interval into an
// already-tidy calendar without re-sorting everything. Pattern: greedy
// sort-by-start + sweep. Check: npm test -- 17 -t ex05
//
// Course-wide convention: two intervals [a,b] and [c,d] (b <= c) only
// OVERLAP if b > c — touching at a single point (b === c) does NOT
// count as overlapping and does NOT get merged. Pin this: [1,2] and
// [2,3] stay two separate intervals everywhere in this module except
// ex07 (a different question — see its docstring).

/**
 * Merge every pair of overlapping intervals into the smallest set of
 * intervals covering the same total range.
 *
 * @param intervals - each `[start, end]`, start <= end; unsorted, may overlap.
 * @returns merged intervals, sorted by start, no two overlapping (touching is fine).
 * @remarks Edge case: `[]` -> `[]`. Touching intervals stay separate — see the note above.
 * @example mergeIntervals([[1,3],[2,6],[8,10],[15,18]]) -> [[1,6],[8,10],[15,18]]
 * @example mergeIntervals([[1,2],[2,3]]) -> [[1,2],[2,3]]   // touching, not merged
 * Target complexity: O(n log n) time (the sort dominates), O(n) space for the output.
 */
export function mergeIntervals(intervals: number[][]): number[][] {
  throw new Error('TODO: implement me')
}

/**
 * Insert `newInterval` into `sortedIntervals` (already sorted by start
 * and non-overlapping — including "touching is not overlapping") and
 * merge as needed, WITHOUT re-sorting from scratch: a three-phase
 * single scan — copy everything strictly before the new interval,
 * merge everything that overlaps it, copy everything strictly after.
 *
 * @param sortedIntervals - sorted by start, no two overlapping.
 * @param newInterval - `[start, end]` to insert.
 * @returns the updated sorted, non-overlapping interval list.
 * @remarks Edge case: `sortedIntervals = []` -> `[newInterval]`.
 * @example insertInterval([[1,3],[6,9]], [2,5]) -> [[1,5],[6,9]]
 * @example insertInterval([[1,5]], [5,8]) -> [[1,5],[5,8]]   // touching, not merged
 * Target complexity: O(n) time (no sort needed — input is already sorted), O(n) space.
 */
export function insertInterval(sortedIntervals: number[][], newInterval: number[]): number[][] {
  throw new Error('TODO: implement me')
}

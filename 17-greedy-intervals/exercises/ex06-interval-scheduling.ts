// A single-room booking system, from four angles: how many bookings
// can one attendee catch, how many would need to be dropped, can
// everyone attend everything with just one room, and how many rooms
// does a whole calendar actually need? Pattern: greedy sort-by-end
// selection (+ a start/end sweep for room counting).
// Check: npm test -- 17 -t ex06
//
// Same convention as ex05: touching intervals ([1,2] and [2,3]) do NOT
// overlap — one attendee CAN catch both, one room CAN host both back
// to back.

/**
 * The maximum number of non-overlapping intervals selectable from
 * `intervals` (touching is allowed between selections).
 *
 * This is the exchange-argument showcase of the module: sort by END
 * time and always take the next interval whose start is at or after
 * the last taken interval's end. Taking the earliest-ending option at
 * every step never costs you a future pick — see LESSON.md's exchange
 * argument for the full proof sketch.
 *
 * @param intervals - each `[start, end]`, start <= end.
 * @returns the size of the largest non-overlapping subset.
 * @remarks Edge case: `[]` -> 0.
 * @example maxNonOverlapping([[1,3],[2,4],[3,5]]) -> 2   // e.g. [1,3] and [3,5]
 * Target complexity: O(n log n) time.
 */
export function maxNonOverlapping(intervals: number[][]): number {
  throw new Error('TODO: implement me')
}

/**
 * The minimum number of intervals to remove so none of the remaining
 * ones overlap. Equal to `intervals.length - maxNonOverlapping(intervals)`.
 *
 * @param intervals - each `[start, end]`, start <= end.
 * @returns minimum removals needed.
 * @remarks Edge case: `[]` -> 0.
 * @example minRemovals([[1,3],[2,4],[3,5]]) -> 1
 * Target complexity: O(n log n) time.
 */
export function minRemovals(intervals: number[][]): number {
  throw new Error('TODO: implement me')
}

/**
 * Whether a single attendee could attend every interval in
 * `intervals` (i.e. none of them overlap each other; touching is fine).
 *
 * @param intervals - each `[start, end]`, start <= end.
 * @returns true if no two intervals overlap.
 * @remarks Edge case: `[]` or a single interval -> true.
 * @example canAttendAll([[1,2],[2,3],[3,4]]) -> true    // only touching
 * @example canAttendAll([[1,3],[2,4]]) -> false
 * Target complexity: O(n log n) time.
 */
export function canAttendAll(intervals: number[][]): boolean {
  throw new Error('TODO: implement me')
}

/**
 * The minimum number of rooms needed to host every interval in
 * `intervals` simultaneously (two intervals need separate rooms only
 * if they truly overlap — touching intervals may share a room, since
 * the room is free again the instant the first one ends).
 *
 * Sweep idea: turn each interval into a `+1` event at its start and a
 * `-1` event at its end, sort all events by time, and — critically —
 * process `-1` events before `+1` events at the SAME timestamp (a room
 * frees up before the next booking needs it). Track the running total;
 * the answer is its peak. (A two-heap / one-heap approach also works —
 * either is accepted.)
 *
 * @param intervals - each `[start, end]`, start <= end.
 * @returns minimum concurrent rooms needed.
 * @remarks Edge case: `[]` -> 0.
 * @example minRooms([[0,30],[5,10],[15,20]]) -> 2
 * @example minRooms([[1,2],[2,3]]) -> 1   // touching: same room, back to back
 * Target complexity: O(n log n) time.
 */
export function minRooms(intervals: number[][]): number {
  throw new Error('TODO: implement me')
}

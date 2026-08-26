// Reference solution — ex06

/**
 * Pattern: greedy sort-by-end. Sort intervals by their end time, then
 * walk through: if the current interval's start is at or after the last
 * selected interval's end, select it (touching counts as non-overlapping).
 * Exchange argument: the earliest-ending option at every step frees up
 * the most room for future picks — any swap of a later-ending choice
 * can only make things worse or equal, never better.
 * Time: O(n log n). Space: O(1) beyond the sort.
 */
export function maxNonOverlapping(intervals: number[][]): number {
  if (intervals.length === 0) return 0

  const sorted = [...intervals].sort((a, b) => a[1]! - b[1]!)
  let count = 1
  let lastEnd = sorted[0]![1]!

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i]!
    if (start! >= lastEnd) {
      count++
      lastEnd = end!
    }
  }

  return count
}

/**
 * Pattern: greedy — minRemovals = n - maxNonOverlapping.
 * Every interval we KEEP is non-overlapping; the rest are removed.
 * Time: O(n log n). Space: O(1) beyond the sort.
 */
export function minRemovals(intervals: number[][]): number {
  return intervals.length - maxNonOverlapping(intervals)
}

/**
 * Pattern: greedy sort-by-start + linear scan. Sort by start, then
 * check adjacent pairs: if any pair overlaps (next.start < prev.end),
 * not all can be attended. Touching (next.start === prev.end) is fine.
 * Time: O(n log n). Space: O(1) beyond the sort.
 */
export function canAttendAll(intervals: number[][]): boolean {
  if (intervals.length <= 1) return true

  const sorted = [...intervals].sort((a, b) => a[0]! - b[0]!)
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i]![0]! < sorted[i - 1]![1]!) return false
  }

  return true
}

/**
 * Pattern: greedy event-point sweep. Convert each interval to two
 * events: +1 at start, -1 at end. Sort events by time, breaking ties
 * by processing -1 (room freed) before +1 (room needed) at the same
 * timestamp — that captures the "touching intervals share a room" rule.
 * Track the running room count; the peak is the answer.
 * Time: O(n log n). Space: O(n) for the events array.
 */
export function minRooms(intervals: number[][]): number {
  if (intervals.length === 0) return 0

  // Build [time, delta] events; -1 before +1 at same time (free before allocate)
  const events: [number, number][] = []
  for (const [start, end] of intervals) {
    events.push([start!, 1])
    events.push([end!, -1])
  }

  // Sort: by time ascending; at same time, -1 (free) before +1 (book)
  events.sort((a, b) => a[0]! - b[0]! || a[1]! - b[1]!)

  let rooms = 0
  let peak = 0
  for (const [, delta] of events) {
    rooms += delta
    if (rooms > peak) peak = rooms
  }

  return peak
}

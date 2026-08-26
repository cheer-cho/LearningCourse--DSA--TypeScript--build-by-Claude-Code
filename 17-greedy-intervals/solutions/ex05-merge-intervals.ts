// Reference solution — ex05

/**
 * Pattern: greedy sort-by-start + sweep. Once sorted by start, any
 * interval that overlaps the interval accumulated so far must appear
 * immediately next in the scan (nothing later could reach back and
 * overlap something the sweep has already passed) — so one linear
 * pass after the sort is enough. Overlap uses strict `<`: touching
 * endpoints do not trigger a merge (course-wide convention).
 * Time: O(n log n), the sort dominates. Space: O(n) for the output.
 */
export function mergeIntervals(intervals: number[][]): number[][] {
  if (intervals.length === 0) return []

  const sorted = [...intervals].sort((a, b) => a[0]! - b[0]!)
  const result: number[][] = [sorted[0]!.slice()]

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i]!
    const last = result[result.length - 1]!
    if (start! < last[1]!) {
      last[1] = Math.max(last[1]!, end!)
    } else {
      result.push([start!, end!])
    }
  }

  return result
}

/**
 * Pattern: greedy three-phase linear scan — no sort needed because the
 * input is already sorted and non-overlapping. Phase 1 copies every
 * interval that ends at or before the new interval starts (guaranteed
 * safe: they can never overlap it). Phase 2 absorbs every interval
 * whose start is strictly before the growing merged interval's end.
 * Phase 3 copies whatever is left untouched.
 * Time: O(n). Space: O(n) for the output.
 */
export function insertInterval(sortedIntervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = []
  const n = sortedIntervals.length
  let i = 0

  while (i < n && sortedIntervals[i]![1]! <= newInterval[0]!) {
    result.push(sortedIntervals[i]!)
    i++
  }

  let mergedStart = newInterval[0]!
  let mergedEnd = newInterval[1]!
  while (i < n && sortedIntervals[i]![0]! < mergedEnd) {
    mergedStart = Math.min(mergedStart, sortedIntervals[i]![0]!)
    mergedEnd = Math.max(mergedEnd, sortedIntervals[i]![1]!)
    i++
  }
  result.push([mergedStart, mergedEnd])

  while (i < n) {
    result.push(sortedIntervals[i]!)
    i++
  }

  return result
}

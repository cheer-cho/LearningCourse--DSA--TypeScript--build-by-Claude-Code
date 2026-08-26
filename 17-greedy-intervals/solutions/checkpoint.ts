// Reference solution — checkpoint 17

export interface Talk {
  title: string
  start: number
  end: number
}

/**
 * Pattern: greedy sort-by-end (interval scheduling). Sort talks by end
 * time, then greedily take each talk whose start is at or after the last
 * selected talk's end. The exchange argument guarantees this maximises
 * the count — the earliest-ending choice never costs a future pick.
 * Time: O(n log n). Space: O(n) for the chosen titles.
 */
export function planDay(talks: Talk[]): string[] {
  if (talks.length === 0) return []

  const sorted = [...talks].sort((a, b) => a.end - b.end)
  const chosen: string[] = []
  let lastEnd = -Infinity

  for (const talk of sorted) {
    if (talk.start >= lastEnd) {
      chosen.push(talk.title)
      lastEnd = talk.end
    }
  }

  return chosen
}

/**
 * Pattern: greedy event-point sweep. Convert each talk to a +1 event at
 * its start and a -1 event at its end; sort by time (ties broken:
 * process -1 before +1 so touching talks share a room). The peak of the
 * running total is the minimum concurrent rooms needed.
 * Time: O(n log n). Space: O(n) for the events array.
 */
export function roomsNeeded(talks: Talk[]): number {
  if (talks.length === 0) return 0

  const events: [number, number][] = []
  for (const talk of talks) {
    events.push([talk.start, 1])
    events.push([talk.end, -1])
  }

  // At equal time: process -1 first (room freed before next booking)
  events.sort((a, b) => a[0]! - b[0]! || a[1]! - b[1]!)

  let rooms = 0
  let peak = 0
  for (const [, delta] of events) {
    rooms += delta
    if (rooms > peak) peak = rooms
  }

  return peak
}

/**
 * Pattern: greedy sort-by-start + sweep (merge intervals). Flatten all
 * calendars into one array, sort by start, then walk and merge overlapping
 * intervals. Touching does not merge (course-wide convention: start < prev.end
 * is the overlap test, not <=).
 * Time: O(n log n) where n = total intervals. Space: O(n) for output.
 */
export function mergeBusy(calendars: number[][][]): number[][] {
  const all: number[][] = []
  for (const cal of calendars) {
    for (const interval of cal) {
      all.push(interval)
    }
  }

  if (all.length === 0) return []

  all.sort((a, b) => a[0]! - b[0]!)

  const result: number[][] = [all[0]!.slice()]
  for (let i = 1; i < all.length; i++) {
    const [start, end] = all[i]!
    const last = result[result.length - 1]!
    if (start! < last[1]!) {
      // True overlap: merge
      last[1] = Math.max(last[1]!, end!)
    } else {
      // Disjoint or touching: keep separate
      result.push([start!, end!])
    }
  }

  return result
}

/**
 * Pattern: greedy running-best sweep (Kadane's) with bounds tracking.
 * Track the best sum ending at the current position: if it goes
 * negative, drop the prefix and restart here — a negative prefix can
 * only drag down any extension. The exchange argument: replacing any
 * run with a negative prefix by dropping that prefix never makes the
 * sum worse. `curStart` tracks where the current run began so the
 * winning bounds can be recorded alongside the winning total.
 * Time: O(n). Space: O(1).
 */
export function coffeeRun(energyLevels: number[]): [number, number, number] {
  let best = energyLevels[0]!
  let cur = energyLevels[0]!
  let bestStart = 0
  let bestEnd = 0
  let curStart = 0

  for (let i = 1; i < energyLevels.length; i++) {
    const level = energyLevels[i]!
    if (cur < 0) {
      cur = level
      curStart = i
    } else {
      cur = cur + level
    }
    if (cur > best) {
      best = cur
      bestStart = curStart
      bestEnd = i
    }
  }

  return [best, bestStart, bestEnd]
}

// Reference solution — checkpoint 4 (Elevation survey)

// Marks a missing/broken sensor reading. Real elevation readings in
// this survey are always >= 0, so -1 can never collide with a valid
// reading.
export const GAP_SENTINEL = -1

// Pattern: opposite-ends two pointers (ex01's pattern). Sum too big ->
// move the right pointer in; too small -> move the left pointer in.
// Target: O(n) time, O(1) space.
export function flatPairs(sortedReadings: number[], target: number): [number, number] | null {
  let l = 0
  let r = sortedReadings.length - 1

  while (l < r) {
    const sum = sortedReadings[l]! + sortedReadings[r]!
    if (sum === target) return [l, r]
    if (sum > target) {
      r--
    } else {
      l++
    }
  }

  return null
}

// Pattern: same-direction reader/writer compaction (ex03's pattern),
// then truncate the array length in place.
// Target: O(n) time, O(1) extra space.
export function compactGaps(readings: number[]): void {
  let writer = 0

  for (let reader = 0; reader < readings.length; reader++) {
    if (readings[reader] !== GAP_SENTINEL) {
      readings[writer] = readings[reader]!
      writer++
    }
  }

  readings.length = writer
}

// Pattern: prefix sums precomputed once, closed over by the returned
// query function (ex06's pattern).
// Target: O(n) build, O(1) query.
export function rangeGain(readings: number[]): { query(i: number, j: number): number } {
  const prefix = new Array<number>(readings.length + 1)
  prefix[0] = 0
  for (let k = 1; k <= readings.length; k++) {
    prefix[k] = prefix[k - 1]! + readings[k - 1]!
  }

  return {
    query(i: number, j: number): number {
      return prefix[j + 1]! - prefix[i]!
    },
  }
}

// Pattern: prefix sums via a running total, no array needed (ex06's
// pivotIndex pattern). Track the left-side running sum; the right
// side is always total - leftSum - readings[k].
// Target: O(n) time, O(1) extra space.
export function balancedCheckpoint(readings: number[]): number {
  const total = readings.reduce((sum, value) => sum + value, 0)
  let leftSum = 0

  for (let k = 0; k < readings.length; k++) {
    const rightSum = total - leftSum - readings[k]!
    if (leftSum === rightSum) return k
    leftSum += readings[k]!
  }

  return -1
}

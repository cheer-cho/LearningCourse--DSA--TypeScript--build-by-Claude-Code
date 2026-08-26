/**
 * ✦ CHECKPOINT 21 — Metrics board
 *
 * A lightweight metrics service that combines every tool from this module:
 * two segment trees for range sum and range min, a monotonic deque for
 * peak-window detection, and KMP or Rabin-Karp for log scanning.
 *
 * Passing `npm test -- 21` completes this module.
 */

export class MetricsBoard {
  /**
   * Initialises the board with an initial array of sensor readings.
   *
   * Internally keep TWO trees:
   *   - A sum segment tree (for windowTotal)
   *   - A min segment tree (for windowLow)
   *
   * @param initialValues - starting sensor values (at least one element)
   * Target: O(n) build
   */
  constructor(initialValues: number[]) {
    throw new Error('TODO: implement me')
  }

  /**
   * Updates the sensor value at position `i` (0-indexed) to `v`.
   * Both internal trees must reflect the new value.
   *
   * @param i - 0-indexed sensor index
   * @param v - new reading
   * @returns nothing
   * Target: O(log n) time
   */
  record(i: number, v: number): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Returns the SUM of sensor values in [i, j] (both inclusive).
   *
   * @param i - left endpoint (0-indexed)
   * @param j - right endpoint (0-indexed)
   * @returns sum of readings[i..j]
   * Target: O(log n) time
   */
  windowTotal(i: number, j: number): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Returns the MINIMUM sensor value in [i, j] (both inclusive).
   *
   * @param i - left endpoint (0-indexed)
   * @param j - right endpoint (0-indexed)
   * @returns minimum reading in readings[i..j]
   * Target: O(log n) time
   */
  windowLow(i: number, j: number): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Scans `logText` for every occurrence of `signature` and returns
   * the 0-indexed start positions.
   *
   * Use EITHER KMP or Rabin-Karp — your choice. Your JSDoc comment
   * MUST name which algorithm you chose and one-sentence justify it.
   *
   * @param logText   - raw log string to search
   * @param signature - pattern to find in the log
   * @returns sorted array of start positions; [] if not found or
   *          signature is empty
   * @example alertScan("ERROR: disk full ERROR: disk full", "ERROR") -> [0, 17]
   * Target: O(n + m) time  (n = logText.length, m = signature.length)
   */
  alertScan(logText: string, signature: string): number[] {
    throw new Error('TODO: implement me')
  }

  /**
   * Finds the window of size `k` in `readings` with the highest SUM,
   * and returns that maximum sum.
   *
   * You may use either a monotonic deque OR prefix sums — your choice.
   * Your JSDoc comment MUST name which you chose.
   *
   * @param readings - arbitrary array of numbers (independent from the board's values)
   * @param k        - window size (1 <= k <= readings.length)
   * @returns the maximum window sum; 0 if readings is empty or k > readings.length
   * @example busiestWindow([1, 4, 2, 9, 7, 3], 3) -> 19  (window [9,7,3] = 19)
   * Target: O(n) time
   */
  busiestWindow(readings: number[], k: number): number {
    throw new Error('TODO: implement me')
  }
}

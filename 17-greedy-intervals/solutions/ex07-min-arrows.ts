// Reference solution — ex07

/**
 * Pattern: greedy sort-by-end. Sort balloons by right endpoint. Shoot
 * the first arrow at the current balloon's right endpoint (the latest
 * position that still pops it), which also pops every overlapping
 * balloon whose left endpoint is at or before that position. Move to
 * the next unpopped balloon and repeat.
 *
 * Why sort by end? The arrow must be within [left, right] of the
 * current balloon. Placing it at `right` (the rightmost legal position)
 * maximises the chance that it also reaches the right side of
 * overlapping balloons — greedy exchange: any choice strictly left of
 * `right` can only pop a subset of what shooting at `right` pops.
 *
 * Touching counts as a hit here (closed ranges) — unlike the scheduling
 * convention: `left <= arrowX` (not strict) is the overlap check.
 * Time: O(n log n). Space: O(1) beyond the sort.
 */
export function minArrows(balloonRanges: number[][]): number {
  if (balloonRanges.length === 0) return 0

  const sorted = [...balloonRanges].sort((a, b) => a[1]! - b[1]!)
  let arrows = 1
  let arrowX = sorted[0]![1]!

  for (let i = 1; i < sorted.length; i++) {
    const [left] = sorted[i]!
    if (left! > arrowX) {
      // This balloon is not hit by the current arrow; shoot a new one
      arrows++
      arrowX = sorted[i]![1]!
    }
    // left <= arrowX: current arrow hits this balloon too, no new arrow
  }

  return arrows
}

// A balloon gallery: balloons are mounted on a wall as horizontal
// ranges [left, right]. Arrows shot straight up pop every balloon
// whose range includes the arrow's x-position (closed ranges: an
// arrow at x hits any balloon with left <= x <= right). Find the
// fewest arrows that pop ALL balloons.
// Pattern: greedy sort-by-end. Check: npm test -- 17 -t ex07
//
// Course note for ex07 specifically: ranges here are CLOSED — a point
// x belongs to [a,b] when a <= x <= b. So an arrow at x = 2 pops
// BOTH [1,2] and [2,3]. This contrasts with the scheduling exercises
// (ex05/ex06) where touching at a boundary does NOT count as overlap —
// the difference is the question being asked ("does this point fall
// inside both closed ranges?" vs "do two events conflict at a boundary?").
// Read the problem carefully and pin the touching case in tests.

/**
 * Minimum number of arrows needed to pop every balloon, where each
 * balloon occupies a closed horizontal range `[left, right]`.
 *
 * Greedy rule: sort balloons by right endpoint, shoot the first arrow
 * at the right endpoint of the leftmost-ending balloon, then skip all
 * balloons hit by that arrow (those with `left <= arrow_x`), and repeat.
 * Shooting at the RIGHT endpoint of the current balloon maximises how
 * many overlapping balloons you pop with one arrow.
 *
 * @param balloonRanges - each `[left, right]` is a closed range on the x-axis.
 * @returns the minimum number of arrows to pop all balloons.
 * @remarks Edge case: `[]` -> 0.
 * @example minArrows([[10,16],[2,8],[1,6],[7,12]]) -> 2
 * @example minArrows([[1,2],[3,4],[5,6],[7,8]]) -> 4   // no overlap, 4 arrows
 * @example minArrows([[1,2],[2,3]]) -> 1   // arrow at x=2 pops both (closed range!)
 * Target complexity: O(n log n) time.
 */
export function minArrows(balloonRanges: number[][]): number {
  throw new Error('TODO: implement me')
}

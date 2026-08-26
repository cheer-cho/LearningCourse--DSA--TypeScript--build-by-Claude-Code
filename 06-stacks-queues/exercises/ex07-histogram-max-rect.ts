/**
 * ex07 — Largest rectangle in a histogram (HARD)
 *
 * Scenario: `heights[i]` is the height of a unit-width histogram bar.
 * Find the area of the largest all-rectangle region you can carve out
 * of the skyline.
 * Check: npm test -- 06 -t ex07
 */

/**
 * The key insight: for each bar, imagine it as the SHORTEST bar in
 * the rectangle (so the rectangle's height is `heights[i]`). The
 * rectangle can then extend left and right until it hits a bar
 * SHORTER than `heights[i]` — its width is the distance between those
 * two nearer-smaller neighbors, minus 1. A monotonic (increasing)
 * stack of indexes finds each bar's nearer-smaller neighbors in one
 * pass: when a new bar is shorter than the stack's top, the top bar's
 * right boundary is finally known, so pop it and compute its area.
 * Push a sentinel height of 0 at the end to flush every remaining bar
 * off the stack without a special final loop.
 *
 * Edge cases: empty input -> 0; a single bar -> its height; all bars
 * equal height `h` over `n` bars -> `h * n`.
 *
 * Examples:
 *   largestRectangle([2, 1, 5, 6, 2, 3]) -> 10   (bars of height 5,6)
 *   largestRectangle([2, 4])             -> 4
 *   largestRectangle([])                 -> 0
 *
 * Target complexity: O(n) time, O(n) space.
 */
export function largestRectangle(heights: number[]): number {
  throw new Error('TODO: implement me')
}

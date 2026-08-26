// ex05 — Container with most water: opposite-ends two pointers with an
// exchange-argument proof for which side to move. Pattern: two pointers.
// Check: npm test -- 04 -t ex05

/**
 * `heights[i]` is the height of a vertical line at position `i`. Two
 * lines and the x-axis between them form a container; its capacity is
 * `min(heights[i], heights[j]) * (j - i)`. Return the largest capacity
 * achievable over any pair of lines.
 *
 * Opposite-ends two pointers, starting at the widest possible
 * container (`l = 0`, `r = n - 1`) and closing in. WHY it's safe to
 * always move the pointer at the SHORTER line: capacity is capped by
 * the shorter side, and width can only shrink as the pointers close
 * in. Keeping the shorter line and moving it can only hurt (width
 * drops, height cap stays the same or gets worse). Keeping the taller
 * line, though, still has a chance to find an even taller partner and
 * beat the current best — so moving the shorter side is the only move
 * that can possibly improve the answer. (An informal exchange
 * argument — every alternative move is provably no better.)
 *
 * @param heights - non-negative line heights, length >= 2
 * @returns the maximum container capacity
 * @example
 * maxContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]) -> 49   // lines at index 1 and 8
 * maxContainer([1, 1]) -> 1
 *
 * Target: O(n) time, O(1) space.
 */
export function maxContainer(heights: number[]): number {
  throw new Error('TODO: implement me')
}

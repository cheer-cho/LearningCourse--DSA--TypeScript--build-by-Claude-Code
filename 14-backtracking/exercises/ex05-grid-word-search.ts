// A word-search puzzle solver: given a letter grid, can `word` be
// traced out via adjacent (up/down/left/right) cells, never reusing a
// cell within one path? Pattern: backtracking DFS over a grid, with
// in-place visited marking (mark, recurse, restore). Check: npm test -- 14 -t ex05

/**
 * Whether `word` can be spelled by a path of adjacent cells
 * (horizontally or vertically neighboring, no diagonals) in `board`,
 * using each grid cell at most once per path.
 *
 * @param board - a rectangular grid of single-character strings.
 * @param word - the word to search for (non-empty).
 * @returns true if some path spells `word`.
 * @remarks Edge cases: `word` longer than the number of cells -> false.
 *   A path may need to revisit a LETTER (e.g. two separate 'a' cells)
 *   but never the SAME cell twice — that's the reuse-forbidden trap.
 * @example existsInGrid([['a','b'],['c','d']], 'abdc') -> true
 * Target complexity: O(rows * cols * 4^L) time worst case, where L = word.length;
 *   O(L) extra space (recursion depth), using the board itself for visited-marking.
 */
export function existsInGrid(board: string[][], word: string): boolean {
  throw new Error('TODO: implement me')
}

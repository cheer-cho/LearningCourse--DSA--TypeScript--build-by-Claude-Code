/**
 * ex02 — Balanced brackets
 *
 * Scenario: a code formatter needs to check whether a snippet's
 * brackets are well-nested, and (for the simpler "()"-only case) how
 * many characters must be deleted to fix a broken one.
 * Check: npm test -- 06 -t ex02
 */

/**
 * Is every `()`, `[]`, `{}` in `s` properly opened, closed, and
 * nested? Non-bracket characters are ignored.
 *
 * Watch out for interleaving: `([)]` is NOT balanced even though each
 * bracket type appears in matched pairs — `)` closes `[` instead of
 * `(`.
 *
 * Edge cases: empty string -> true; a lone opener or closer -> false.
 *
 * Examples:
 *   isBalanced('{[()]}')  -> true
 *   isBalanced('([)]')    -> false
 *   isBalanced('(a + b])' -> false
 *
 * Target complexity: O(n) time, O(n) space.
 */
export function isBalanced(s: string): boolean {
  throw new Error('TODO: implement me')
}

/**
 * `s` contains only `(` and `)` (and possibly other characters, which
 * are ignored). Return the minimum number of parens that must be
 * removed so what remains is balanced.
 *
 * Edge cases: already balanced -> 0; all one kind (`"((("`) -> that
 * many.
 *
 * Examples:
 *   minRemovalsToBalance('()())')   -> 1
 *   minRemovalsToBalance('(((')     -> 3
 *   minRemovalsToBalance(')()(')    -> 2
 *
 * Target complexity: O(n) time, O(1) extra space (besides the stack
 * you may use — a single counter suffices).
 */
export function minRemovalsToBalance(s: string): number {
  throw new Error('TODO: implement me')
}

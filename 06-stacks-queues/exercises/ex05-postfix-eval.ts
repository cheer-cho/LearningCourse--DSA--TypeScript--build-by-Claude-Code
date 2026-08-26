/**
 * ex05 — Postfix (reverse Polish) evaluator
 *
 * Scenario: a calculator's expression compiler emits postfix token
 * streams (no parens, no precedence rules needed) — evaluate one.
 * Check: npm test -- 06 -t ex05
 */

/**
 * Evaluate a postfix expression. `tokens` is a mix of numeric strings
 * and the operators `+ - * /`. Division TRUNCATES TOWARD ZERO (like
 * `Math.trunc`, not `Math.floor`) — e.g. `-7 / 2` -> `-3`, not `-4`.
 *
 * Edge cases: a single-number expression (no operators) is valid.
 * Division by zero throws.
 *
 * Examples:
 *   evalPostfix(['3', '4', '+'])        -> 7
 *   evalPostfix(['5', '1', '2', '+', '4', '*', '+', '3', '-'])  -> 14
 *   evalPostfix(['7', '-2', '/'])       -> -3   (truncated toward 0)
 *
 * Target complexity: O(n) time, O(n) space.
 */
export function evalPostfix(tokens: string[]): number {
  throw new Error('TODO: implement me')
}

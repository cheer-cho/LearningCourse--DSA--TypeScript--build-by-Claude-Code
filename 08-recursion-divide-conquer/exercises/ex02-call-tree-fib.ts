/**
 * ex02 — The call tree of fib, naive vs. memoized
 *
 * Both functions take an optional `tick` callback so the tests can
 * PROVE how many times work actually happens — by counting, not by
 * vibes. See LESSON.md's fib(5) call tree diagram before starting.
 *
 * Check: npm test -- 08 -t ex02
 */

/**
 * The nth Fibonacci number, computed by naive recursion (no cache).
 * Calls `tick()` once at the START of every single call, computed or
 * not — so `tick` counts the exact size of the call tree.
 *
 * Base case: n <= 1 -> n.
 * Shrinking step: fibNaive(n - 1) + fibNaive(n - 2).
 *
 * @param n - a non-negative integer index into the Fibonacci sequence.
 * @param tick - optional callback invoked once per call (any call, not
 *   just newly-computed ones).
 * @returns the nth Fibonacci number (fib(0) = 0, fib(1) = 1).
 * @example fibNaive(0) -> 0
 * @example fibNaive(10) -> 55, having called tick() 177 times
 * Target: O(2^n) time, O(n) space (stack depth, not call count).
 */
export function fibNaive(n: number, tick?: () => void): number {
  throw new Error('TODO: implement me')
}

/**
 * The nth Fibonacci number, computed with memoization (a cache keyed
 * by n). Calls `tick()` exactly once per DISTINCT value ever computed
 * — repeat lookups of an already-cached value must NOT tick again.
 *
 * Base case: n <= 1 -> n (still counts as "computed" -> still ticks).
 * Shrinking step: fibMemo(n - 1) + fibMemo(n - 2), reusing cached
 * results instead of recomputing them.
 *
 * @param n - a non-negative integer index into the Fibonacci sequence.
 * @param tick - optional callback invoked once per newly-computed value.
 * @returns the nth Fibonacci number.
 * @example fibMemo(0) -> 0
 * @example fibMemo(10) -> 55, having called tick() 11 times (n + 1)
 * Target: O(n) time, O(n) space.
 */
export function fibMemo(n: number, tick?: () => void): number {
  throw new Error('TODO: implement me')
}

/**
 * ex01 — THE framework, materialized: climbing a staircase four ways
 *
 * Scenario: a staircase of n steps; each move covers 1 or 2 steps;
 * count the distinct ways to reach the top. Same shape as fib (module
 * 08) — this exercise walks the SAME recurrence through naive
 * recursion, memoization, a bottom-up table, and finally O(1) space,
 * so you can see the whole framework fall out of one problem.
 *
 * Check: npm test -- 18 -t ex01
 */

/**
 * Number of distinct ways to climb n steps (1 or 2 at a time), via
 * plain recursion with no cache — the whole call tree, every time.
 * `tick` fires once at the START of every call (computed or not), so
 * tests can prove the call count grows like fib's does.
 *
 * State: ways(i) = number of ways to reach step i.
 * Choice: the last move onto step i was a 1-step or a 2-step.
 * Recurrence: ways(i) = ways(i - 1) + ways(i - 2).
 * Base cases: ways(0) = 1 (already there), ways(1) = 1 (one single step).
 *
 * @param n - number of steps (n >= 0).
 * @param tick - optional callback invoked once per recursive call.
 * @returns the number of distinct ways to reach the top.
 * @example climbWaysNaive(3) -> 3
 * @example climbWaysNaive(5) -> 8
 * Target: O(2^n) time, O(n) space (call stack depth).
 */
export function climbWaysNaive(n: number, tick?: () => void): number {
  throw new Error('TODO: implement me')
}

/**
 * Same count as `climbWaysNaive`, but memoized: a cache keyed by step
 * index means each distinct step is solved once. `tick` fires exactly
 * once per NEWLY computed step (cache hits must not tick again) — so a
 * passing test can show ticks stay linear in n, never exponential.
 *
 * State / choice / recurrence / base cases: identical to
 * `climbWaysNaive` — memoization changes nothing about the math, only
 * how often each state is actually computed.
 *
 * @param n - number of steps (n >= 0).
 * @param tick - optional callback invoked once per newly-computed step.
 * @returns the number of distinct ways to reach the top.
 * @example climbWaysMemo(3) -> 3
 * @example climbWaysMemo(10) -> 89, having ticked 11 times (n + 1)
 * Target: O(n) time, O(n) space.
 */
export function climbWaysMemo(n: number, tick?: () => void): number {
  throw new Error('TODO: implement me')
}

/**
 * Same count, computed bottom-up into a table indexed by step, in
 * ascending order (order matters: step i needs i - 1 and i - 2
 * already filled in before you can compute it).
 *
 * @param n - number of steps (n >= 0).
 * @returns the number of distinct ways to reach the top.
 * @example climbWaysTable(5) -> 8
 * Target: O(n) time, O(n) space.
 */
export function climbWaysTable(n: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Same count again, but noticing the table only ever needs its last
 * two entries — collapse the array into two variables. The
 * space-optimization move: whenever dp[i] depends only on dp[i - 1]
 * and dp[i - 2], you never need the whole table.
 *
 * @param n - number of steps (n >= 0).
 * @returns the number of distinct ways to reach the top.
 * @example climbWaysOptimized(5) -> 8
 * Target: O(n) time, O(1) space.
 */
export function climbWaysOptimized(n: number): number {
  throw new Error('TODO: implement me')
}

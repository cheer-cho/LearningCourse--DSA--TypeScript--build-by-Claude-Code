/**
 * ex01 — Timed set: EASY (6 problems)
 *
 * Six independent problems, fresh scenarios, no labels attached — figure
 * out each approach yourself, exactly like a real interview. Before you
 * code: restate the problem, name the brute force and its complexity,
 * then name the approach you suspect and WHY. Timebox ~15 min each.
 *
 * Check: npm test -- 22 -t ex01
 */

/**
 * A corner ice-cream cart logs the flavor of every cone sold today, in
 * sale order. Find the flavor that sold the most units. Ties break
 * alphabetically (earlier in the alphabet wins).
 * @param sales - flavor name logged once per cone sold
 * @returns the best-selling flavor name
 * @throws if `sales` is empty (error message should mention "empty")
 * @example topSellingFlavor(['mint', 'mint', 'vanilla', 'vanilla', 'mint']) -> 'mint'
 * @example topSellingFlavor(['choc', 'vanilla']) -> 'choc'
 * Target: O(n) time, O(n) space
 */
export function topSellingFlavor(sales: string[]): string {
  throw new Error('TODO: implement me')
}

/**
 * A warehouse has crates sorted ascending by weight. Find two DIFFERENT
 * crates (by position, not value) whose weights sum to exactly `target`.
 * @param weights - crate weights, sorted ascending, may contain duplicates
 * @param target - the exact combined weight to hit
 * @returns the two weights `[smaller, larger]` that sum to target, or
 *   null if no such pair exists
 * @example twoCratesForCapacity([1, 3, 4, 6, 8], 10) -> [4, 6]
 * @example twoCratesForCapacity([2, 2, 3], 4) -> [2, 2]
 * @example twoCratesForCapacity([1, 2], 100) -> null
 * Target: O(n) time, O(1) space
 */
export function twoCratesForCapacity(weights: number[], target: number): [number, number] | null {
  throw new Error('TODO: implement me')
}

/**
 * A factory floor logs hourly energy usage. Find the maximum total
 * usage over any window of exactly `k` consecutive hours.
 * @param readings - one usage reading per hour
 * @param k - window size, 1 <= k <= readings.length
 * @returns the highest sum of any k consecutive readings
 * @throws if k is not between 1 and readings.length
 * @example maxWindowUsage([3, 1, 4, 1, 5, 9, 2], 3) -> 16
 * @example maxWindowUsage([5], 1) -> 5
 * Target: O(n) time, O(1) space
 */
export function maxWindowUsage(readings: number[], k: number): number {
  throw new Error('TODO: implement me')
}

/**
 * A template engine uses three kinds of delimiter pairs: (), [], {}.
 * Decide whether every opening delimiter in `s` is closed by the
 * matching kind, in the correct order. Non-delimiter characters are
 * ignored.
 * @param s - template source text
 * @returns true if every delimiter is validly nested and closed
 * @example isBalancedTemplate('foo(bar[baz]{qux})') -> true
 * @example isBalancedTemplate('foo(bar]') -> false
 * @example isBalancedTemplate('') -> true
 * Target: O(n) time, O(n) space
 */
export function isBalancedTemplate(s: string): boolean {
  throw new Error('TODO: implement me')
}

/**
 * A warehouse robot starts at the top-left corner of a grid and must
 * reach the loading dock at the bottom-right corner, moving one cell
 * up/down/left/right at a time. Some cells are blocked shelving.
 * @param grid - rows of 0 (open floor) / 1 (blocked shelving)
 * @returns the minimum number of moves from top-left to bottom-right,
 *   or -1 if the dock is unreachable (including when the start or end
 *   cell is itself blocked, or the grid is empty)
 * @example shortestRouteToDock([[0,0,0],[1,1,0],[0,0,0]]) -> 4
 * @example shortestRouteToDock([[0,1],[1,0]]) -> -1
 * @example shortestRouteToDock([[0]]) -> 0
 * Target: O(rows * cols) time, O(rows * cols) space
 */
export function shortestRouteToDock(grid: number[][]): number {
  throw new Error('TODO: implement me')
}

/**
 * A weather station logs a cumulative rainfall total once a day; the
 * totals never decrease (each day's total is >= the day before). Find
 * the earliest day whose cumulative total is at least `target`.
 * @param totals - cumulative rainfall per day, non-decreasing
 * @param target - the rainfall total to reach
 * @returns the 0-based index of the first day whose total is >= target,
 *   or -1 if no day reaches it
 * @example firstDayReachingTotal([2, 4, 4, 7, 10], 5) -> 3
 * @example firstDayReachingTotal([1, 2, 3], 10) -> -1
 * @example firstDayReachingTotal([5, 5, 5], 5) -> 0
 * Target: O(log n) time, O(1) space
 */
export function firstDayReachingTotal(totals: number[], target: number): number {
  throw new Error('TODO: implement me')
}

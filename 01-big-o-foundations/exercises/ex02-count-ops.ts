/**
 * ex02 — count-ops: SEE growth rates instead of reading about them.
 * Pattern(s): sequential loop (n), nested loop (n^2), halving (log n).
 * Check: npm test -- 01 -t ex02
 */

/**
 * Sum every number in nums, calling tick() once per element visited.
 * @param nums - numbers to sum
 * @param tick - called exactly once per unit of work
 * @returns the sum of nums
 * input -> output: ([1, 2, 3], tick) -> 6, and tick is called 3 times
 * Target complexity: O(n) time, O(1) extra space
 */
export function sumAll(nums: number[], tick: () => void): number {
  throw new Error('TODO: implement me')
}

/**
 * Build every ordered pair (items[i], items[j]) for i, j in
 * [0, items.length), calling tick() once per pair produced — including
 * pairs where i === j.
 * @param items - source array
 * @param tick - called exactly once per pair produced
 * @returns all n^2 ordered pairs, row-major (i outer, j inner)
 * input -> output: (['a', 'b'], tick) -> [['a','a'],['a','b'],['b','a'],['b','b']],
 *   tick is called 4 times
 * Target complexity: O(n^2) time, O(n^2) space (the output has n^2 pairs)
 */
export function allPairs<T>(items: T[], tick: () => void): [T, T][] {
  throw new Error('TODO: implement me')
}

/**
 * Repeatedly halve n (floor division) until it reaches 0, calling tick()
 * once per value visited (including the starting value).
 * @param n - a non-negative integer
 * @param tick - called exactly once per unit of work
 * @returns the number of ticks performed: floor(log2(n)) + 1 for n >= 1,
 *   and 0 when n = 0
 * input -> output: (8, tick) -> 4, and tick is called 4 times
 * input -> output: (0, tick) -> 0, and tick is called 0 times
 * Target complexity: O(log n) time, O(1) space
 */
export function halveDown(n: number, tick: () => void): number {
  throw new Error('TODO: implement me')
}

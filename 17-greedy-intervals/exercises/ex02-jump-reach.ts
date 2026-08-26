// A platformer level: nums[i] is the furthest a hop from tile i can
// travel. Can you reach the last tile at all, and if so, in how few
// hops? Pattern: greedy furthest-reach sweep. Check: npm test -- 17 -t ex02

/**
 * Whether the last index is reachable, starting at index 0, where
 * `nums[i]` is the furthest single jump from index `i` (any jump
 * length from `0` to `nums[i]` is allowed).
 *
 * @param nums - jump-length capacity at each index, all >= 0.
 * @returns true if the last index is reachable from index 0.
 * @remarks Edge case: single-element array -> true (already there).
 * @example canReachEnd([2,3,1,1,4]) -> true
 * @example canReachEnd([3,2,1,0,4]) -> false   // stuck at index 3
 * Target complexity: O(n) time, O(1) space.
 */
export function canReachEnd(nums: number[]): boolean {
  throw new Error('TODO: implement me')
}

/**
 * Minimum number of jumps to reach the last index from index 0 (same
 * jump rule as `canReachEnd`). Uses the current-window/next-window
 * sweep: track the furthest reach achievable with the jumps used so
 * far, and only pay for one more jump when you must cross past the
 * current window's edge. This beats the natural DP formulation
 * (`minJumpsTo[i] = 1 + min(minJumpsTo[j] for j that can reach i)`,
 * O(n^2)) by never re-examining an index once it's inside a resolved
 * window.
 *
 * @param nums - jump-length capacity at each index, all >= 0.
 * @returns fewest jumps needed, or -1 if the last index is unreachable.
 * @remarks Edge case: single-element array -> 0 (already there, no jumps needed).
 * @example minJumps([2,3,1,1,4]) -> 2   // index 0 -> 1 -> 4
 * Target complexity: O(n) time, O(1) space.
 */
export function minJumps(nums: number[]): number {
  throw new Error('TODO: implement me')
}

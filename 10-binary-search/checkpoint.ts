/**
 * CHECKPOINT 10 — Release bisector
 *
 * A release-engineering toolkit for a CI pipeline. Combines: search on
 * an injected predicate (not an array), search on the answer over a
 * count instead of a capacity, and boundary search over sorted tags
 * with duplicates.
 *
 * Passing `npm test -- 10` completes this module.
 */

/**
 * Builds are numbered `1..n`. `isBad(build)` is monotone: false for
 * every good build, true for every build from the first bad one
 * onward (at least one bad build exists — `isBad(n)` is always true).
 * Find the FIRST bad build using as few calls to `isBad` as possible —
 * THE binary search template over the build-number range, `isBad` in
 * the role `nums[mid] >= target` played in ex01.
 *
 *   Signature: (n: number, isBad: (build: number) => boolean) => number
 *
 * @example firstBadBuild(10, (b) => b >= 6) -> 6
 */
export function firstBadBuild(n: number, isBad: (build: number) => boolean): number {
  throw new Error('TODO: implement me')
}

/**
 * `loads` are test-suite durations (hours), run in order. A "rig"
 * processes one CONTIGUOUS run of `loads` before the next rig takes
 * over, and a rig's total must not exceed `hours`. Find the MINIMUM
 * number of rigs needed — search on the answer over the rig COUNT
 * (not, like ex05, over a capacity): `can(r)` = "loads split into
 * <= r contiguous groups each summing to <= hours" is monotone in
 * `r` (more rigs can only make it easier), so binary search the
 * first feasible `r` over `[1, loads.length]`.
 *
 *   Signature: (loads: number[], hours: number) => number
 *
 * Precondition: every single load fits in one rig
 * (`Math.max(...loads) <= hours`).
 *
 * @example minTestRigs([3, 5, 8, 2], 10) -> 2
 */
export function minTestRigs(loads: number[], hours: number): number {
  throw new Error('TODO: implement me')
}

/**
 * `tags` is a sorted (ascending) array of version-tag strings that may
 * repeat (a tag can be re-applied). Find the first and last index of
 * `target` via two boundary searches (module 10's `lowerBound` /
 * `upperBound` idea, over strings instead of numbers).
 *
 *   Signature: (tags: string[], target: string) => { first: number; last: number }
 *
 * @example findVersion(['v1', 'v2', 'v2', 'v2', 'v3'], 'v2') -> { first: 1, last: 3 }
 * @example findVersion(['v1', 'v2'], 'v9') -> { first: -1, last: -1 }
 */
export function findVersion(tags: string[], target: string): { first: number; last: number } {
  throw new Error('TODO: implement me')
}

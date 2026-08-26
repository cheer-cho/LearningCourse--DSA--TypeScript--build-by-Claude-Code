// A ferry evacuation: each lifeboat holds at most 2 people and a
// weight limit. Separately, a relief org has care kits of varying
// sizes and a list of needs — hand out kits to satisfy as many needs
// as possible. Pattern: greedy sort + two pointers. Check: npm test -- 17 -t ex04

/**
 * Minimum number of lifeboats to evacuate everyone. Each boat holds at
 * most 2 people, and their combined weight must not exceed `limit`.
 *
 * Greedy idea: sort by weight. Always try to pair the heaviest
 * remaining person with the lightest remaining person — if even the
 * lightest person can't bring the heaviest one under the limit, no one
 * else (they're all >= the lightest) can either, so the heaviest goes
 * alone.
 *
 * @param weights - each person's weight; every weight <= limit
 *   (everyone fits in a boat alone).
 * @param limit - max combined weight per boat.
 * @returns fewest boats needed.
 * @remarks Edge case: empty input -> 0 boats.
 * @example minBoats([1,2], 3) -> 1
 * @example minBoats([3,2,2,1], 3) -> 3
 * Target complexity: O(n log n) time (the sort dominates), O(1) extra space.
 */
export function minBoats(weights: number[], limit: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Assign kits to needs to satisfy as many needs as possible. A kit can
 * satisfy a need only if `kit >= need`; each kit is used at most once
 * and satisfies at most one need.
 *
 * Greedy idea: sort both ascending. Always try the smallest unused
 * kit against the smallest unsatisfied need — if it's big enough, use
 * it there (saving every bigger kit for a bigger or equally-hard
 * need); if it's too small, it's too small for every remaining
 * (larger) need too, so discard it.
 *
 * @param kits - available kit sizes.
 * @param needs - required sizes to satisfy.
 * @returns the maximum number of needs that can be satisfied.
 * @remarks Edge case: no kits or no needs -> 0.
 * @example assignKits([1,2,3], [1,2]) -> 2
 * @example assignKits([1,2], [1,2,3]) -> 2
 * Target complexity: O(n log n + m log m) time.
 */
export function assignKits(kits: number[], needs: number[]): number {
  throw new Error('TODO: implement me')
}

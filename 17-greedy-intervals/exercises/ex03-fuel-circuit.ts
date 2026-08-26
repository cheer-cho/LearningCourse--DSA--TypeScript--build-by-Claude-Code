// A circular delivery route: station i gives you gas[i] fuel and costs
// cost[i] fuel to drive to the next station. Starting with an empty
// tank, is there a station you can start from and complete the whole
// loop? Pattern: greedy net-balance sweep. Check: npm test -- 17 -t ex03

/**
 * The index to start a circular route from so a car (starting with an
 * empty tank) can complete the full loop, or -1 if no such start
 * exists.
 *
 * Two insights, both required to argue this is correct:
 * 1. If `sum(gas) >= sum(cost)`, SOME valid start exists (total supply
 *    covers total demand over the full loop) — otherwise none does.
 * 2. If the running tank total ever goes negative while starting from
 *    station `s`, no station between `s` and the failure point could
 *    have been a valid start either (they'd arrive at the failure
 *    point with an even smaller surplus) — so the next candidate start
 *    is the very next station after the failure.
 *
 * @param gas - fuel gained at each station, gas.length === cost.length.
 * @param cost - fuel spent driving from station i to station i + 1.
 * @returns a valid starting index (guaranteed unique if one exists), or -1.
 * @remarks Edge case: empty input -> -1 (no stations, no valid start).
 * @example startStation([1,2,3,4,5], [3,4,5,1,2]) -> 3
 * @example startStation([2,3,4], [3,4,3]) -> -1
 * Target complexity: O(n) time, O(1) space.
 */
export function startStation(gas: number[], cost: number[]): number {
  throw new Error('TODO: implement me')
}

// ex07 — Count subarrays summing to k: prefix sum + hash map of prefix
// counts. Pattern: prefix sums + hashing.
// Check: npm test -- 04 -t ex07

/**
 * Count how many contiguous subarrays of `nums` sum to exactly `k`.
 *
 * Walk the array keeping a running prefix sum. A subarray ending at
 * the current index sums to `k` exactly when some EARLIER prefix sum
 * equalled `runningSum - k` — so keep a hash map of "how many times
 * has each prefix sum been seen so far" and look up `runningSum - k`
 * at every step.
 *
 * `nums` may contain negative numbers (the tests include them). That
 * matters: it's exactly what breaks the sliding-window approach from
 * next module — a variable window only works when growing it can only
 * increase the sum, which negatives violate. Prefix sum + hash map has
 * no such requirement.
 *
 * @param nums - array of integers, may include negatives
 * @param k - target subarray sum
 * @returns the number of contiguous subarrays summing to `k`
 * @example
 * countSubarraysWithSum([1, 1, 1], 2) -> 2       // [1,1] at (0,1) and (1,2)
 * countSubarraysWithSum([1, -1, 0], 0) -> 3       // [1,-1], [0], [1,-1,0]
 *
 * Target: O(n) time, O(n) space.
 */
export function countSubarraysWithSum(nums: number[], k: number): number {
  throw new Error('TODO: implement me')
}

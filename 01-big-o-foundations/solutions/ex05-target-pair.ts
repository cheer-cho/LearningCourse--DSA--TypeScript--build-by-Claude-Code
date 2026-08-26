/**
 * ex05 — target-pair: the 5-step framework, start to finish.
 * Pattern(s): brute-force pair check (n^2) vs complement lookup (n).
 * Check: npm test -- 01 -t ex05
 */

/**
 * Does any pair of DIFFERENT positions in nums sum to target? Checks
 * every pair — the brute-force baseline.
 *
 * The 5-step framework, applied:
 * 1. Understand: find i != j with nums[i] + nums[j] === target.
 * 2. Brute force: try every pair. O(n^2) time, O(1) space.
 * 3. Bottleneck: for each i, re-scanning the rest of the array for its
 *    partner.
 * 4. Pattern: trade space for time — remember what you've already seen.
 * 5. Verify: see hasPairFast below, and its tests, for the O(n) version.
 *
 * @param nums - numbers to search
 * @param target - the sum to find
 * @returns true if some pair sums to target
 * input -> output: ([2, 7, 11, 15], 9) -> true (2 + 7)
 * Target complexity: O(n^2) time, O(1) space
 */
export function hasPairBrute(nums: number[], target: number): boolean {
  // Pattern: brute-force all-pairs — the honest baseline before finding
  // the bottleneck. Time: O(n^2), Space: O(1).
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // i, j < nums.length, so both reads are safe.
      if (nums[i]! + nums[j]! === target) return true
    }
  }
  return false
}

/**
 * Does any pair of DIFFERENT positions in nums sum to target? Remembers
 * every value seen so far and checks for its complement — one pass.
 * @param nums - numbers to search
 * @param target - the sum to find
 * @returns true if some pair sums to target
 * input -> output: ([2, 7, 11, 15], 9) -> true (2 + 7)
 * Target complexity: O(n) time, O(n) space
 */
export function hasPairFast(nums: number[], target: number): boolean {
  // Pattern: complement lookup via a hash set — for each value, check
  // whether its partner (target - value) was already seen. One pass
  // replaces the inner O(n) scan. Time: O(n), Space: O(n).
  const seen = new Set<number>()
  for (const x of nums) {
    if (seen.has(target - x)) return true
    seen.add(x)
  }
  return false
}

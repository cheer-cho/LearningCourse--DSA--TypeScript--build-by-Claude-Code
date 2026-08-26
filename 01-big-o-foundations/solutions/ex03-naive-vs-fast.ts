/**
 * ex03 — naive-vs-fast: the same question, two complexities.
 * Pattern(s): brute-force all-pairs (n^2) vs hash set lookup (n).
 * Check: npm test -- 01 -t ex03
 */

/**
 * Detect a duplicate value by comparing every pair — the honest O(n^2)
 * way. Calls tick() once per comparison made (every i < j pair, checked
 * in order, stopping as soon as a duplicate is found).
 * @param nums - numbers to check
 * @param tick - called once per comparison
 * @returns true if any value repeats
 * input -> output: ([1, 2, 3, 2], tick) -> true
 * Target complexity: O(n^2) time, O(1) space
 */
export function hasDuplicateNaive(nums: number[], tick: () => void): boolean {
  // Pattern: brute-force all-pairs — the honest baseline before finding
  // the bottleneck. Time: O(n^2), Space: O(1).
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      tick()
      if (nums[i] === nums[j]) return true
    }
  }
  return false
}

/**
 * Detect a duplicate value using a set of values seen so far.
 * @param nums - numbers to check
 * @returns true if any value repeats
 * input -> output: ([1, 2, 3, 2]) -> true
 * Target complexity: O(n) time, O(n) space
 */
export function hasDuplicateFast(nums: number[]): boolean {
  // Pattern: hash set membership trades space for time — O(1) average
  // lookup replaces the inner O(n) scan. Time: O(n), Space: O(n).
  const seen = new Set<number>()
  for (const x of nums) {
    if (seen.has(x)) return true
    seen.add(x)
  }
  return false
}

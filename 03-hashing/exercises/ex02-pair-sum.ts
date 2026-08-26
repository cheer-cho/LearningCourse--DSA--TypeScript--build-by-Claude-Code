// Scenario: a receipts app needs to find two line items that together
// refund a target amount. Pattern: complement lookup with a hash map
// (the "two-sum" shape).
// Run: npm test -- 03 -t ex02

/**
 * Indices of two numbers in `nums` that add up to `target`.
 *
 * Module 01's brute-force `targetPair` checks every pair — O(n²). Here
 * one pass suffices: for each value, check whether its complement
 * (`target - value`) was already seen, recording each value's index as
 * you go. No pair is ever revisited.
 *
 * @param nums - the numbers to search (may contain duplicates)
 * @param target - the sum to find
 * @returns a tuple of the two indices (order is not significant), or
 *   `undefined` if no pair sums to `target`
 *
 * pairSum([2, 7, 11, 15], 9) -> [0, 1]
 * pairSum([3, 3], 6) -> [0, 1]
 * pairSum([1, 2, 3], 100) -> undefined
 *
 * Target complexity: O(n) time, O(n) space.
 */
export function pairSum(nums: number[], target: number): [number, number] | undefined {
  throw new Error('TODO: implement me')
}

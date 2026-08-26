// Reference solution — ex01

export interface SubarrayBounds {
  best: number
  start: number
  end: number
}

/**
 * Pattern: greedy running-best sweep (Kadane's). At each index, either
 * extend the run ending at the previous index or restart here — a
 * negative running sum can only drag down anything built on top of it,
 * so dropping it never loses the optimum (exchange argument).
 * Time: O(n). Space: O(1).
 */
export function maxSubarraySum(nums: number[]): number {
  let currentSum = nums[0]!
  let best = nums[0]!
  for (let i = 1; i < nums.length; i++) {
    const value = nums[i]!
    currentSum = currentSum < 0 ? value : currentSum + value
    if (currentSum > best) best = currentSum
  }
  return best
}

/**
 * Pattern: same Kadane sweep, tracking the window's start alongside
 * the running sum so the winning range can be reported, not just its
 * value.
 * Time: O(n). Space: O(1).
 */
export function maxSubarrayBounds(nums: number[]): SubarrayBounds {
  let currentSum = nums[0]!
  let currentStart = 0
  let best = nums[0]!
  let bestStart = 0
  let bestEnd = 0

  for (let i = 1; i < nums.length; i++) {
    const value = nums[i]!
    if (currentSum < 0) {
      currentSum = value
      currentStart = i
    } else {
      currentSum += value
    }
    if (currentSum > best) {
      best = currentSum
      bestStart = currentStart
      bestEnd = i
    }
  }

  return { best, start: bestStart, end: bestEnd }
}

/**
 * Pattern: greedy net-balance over consecutive-day deltas. Any
 * multi-day hold's profit telescopes into the sum of its daily deltas,
 * so summing every positive daily delta reproduces the best possible
 * total without ever holding across a loss.
 * Time: O(n). Space: O(1).
 */
export function bestTradesUnlimited(prices: number[]): number {
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    const delta = prices[i]! - prices[i - 1]!
    if (delta > 0) profit += delta
  }
  return profit
}

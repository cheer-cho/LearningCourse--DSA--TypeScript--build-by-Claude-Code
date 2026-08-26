// Reference solution — ex07

// --- lisLength: O(n²) DP ---
// State: dp[i] = length of the LIS ending at index i.
// Choice: for each j < i where nums[j] < nums[i], extend the LIS at j.
// Recurrence: dp[i] = 1 + max(dp[j]) for valid j; default to 1.
// Base case: every dp[i] starts at 1 (single-element LIS).
// Order: fill left to right; dp[i] only reads dp[j] for j < i.
// O(n²) time, O(n) space.
export function lisLength(nums: number[]): number {
  const n = nums.length
  if (n === 0) return 0

  const dp = new Array<number>(n).fill(1)
  let best = 1

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j]! < nums[i]!) {
        dp[i] = Math.max(dp[i]!, dp[j]! + 1)
      }
    }
    best = Math.max(best, dp[i]!)
  }

  return best
}

// --- lisLengthFast: O(n log n) patience-sort tails trick ---
// State: tails[k] is the smallest possible ending value of a rising run
// of length k + 1.
// Choice: for each num, either extend the longest run so far (append,
// achieving a new length) or replace the leftmost tail >= num (a smaller
// tail at the same length is strictly better for future extensions).
// Recurrence: tails is updated one num at a time via binary search
// (lower_bound: find the first index where tails[mid] >= num) — this is
// a DP on achievable run lengths, not the actual LIS elements.
// Base case: tails starts empty (a rising run of length 0).
// Order: process nums left to right; tails.length at the end IS the LIS
// length.
// O(n log n) time, O(n) space.
export function lisLengthFast(nums: number[]): number {
  const tails: number[] = []

  for (const num of nums) {
    // Binary search: find leftmost index where tails[index] >= num.
    let lo = 0
    let hi = tails.length
    while (lo < hi) {
      const mid = (lo + hi) >>> 1
      if (tails[mid]! < num) {
        lo = mid + 1
      } else {
        hi = mid
      }
    }
    // lo is the insertion point.
    if (lo === tails.length) {
      tails.push(num) // num is larger than all tails — new length achievable
    } else {
      tails[lo] = num // replace: smaller tail at same length is strictly better
    }
  }

  return tails.length
}

// Reference solution — checkpoint 18: Freelancer calendar

// maxEarnings: house-robber shape.
// State: best(i) = max earnings from the first i days.
// Choice: skip day i - 1, or work it (add to best(i-2)).
// Recurrence: best(i) = max(best(i-1), best(i-2) + dayPay[i-1]).
// Base cases: best(0) = 0, best(1) = 0.
// Order: bottom-up, rolling two variables. O(n) time, O(1) space.
export function maxEarnings(dayPay: number[]): number {
  let prev2 = 0
  let prev1 = 0
  for (const pay of dayPay) {
    const current = Math.max(prev1, prev2 + pay)
    prev2 = prev1
    prev1 = current
  }
  return prev1
}

// minGearCost: min-cost-climb shape (identical recurrence to ex02).
// State: cheapest(i) = min cost landing on day i.
// Choice: land on day i by stepping from day i - 1 or day i - 2
// (paying dayCosts[i] either way) — pick whichever predecessor is cheaper.
// Recurrence: cheapest(i) = dayCosts[i] + min(cheapest(i-1), cheapest(i-2)).
// Base cases: cheapest(0) = dayCosts[0], cheapest(1) = dayCosts[1].
// Order: bottom-up, rolling two variables. O(n) time, O(1) space.
export function minGearCost(dayCosts: number[]): number {
  const n = dayCosts.length
  if (n <= 1) return 0

  let prev2 = dayCosts[0]!
  let prev1 = dayCosts[1]!
  for (let i = 2; i < n; i++) {
    const current = dayCosts[i]! + Math.min(prev1, prev2)
    prev2 = prev1
    prev1 = current
  }
  return Math.min(prev1, prev2)
}

// waysToFill: coin-change "count ordered compositions" variant.
// State: ways(i) = ordered ways to tile exactly i days.
// Choice: the LAST block placed; any blockSize <= i.
// Recurrence: ways(i) = sum over size of ways(i - size) for size <= i.
// Base case: ways(0) = 1.
// Order: ascending i; ways(i - size) is always already computed.
// O(nDays * blockSizes.length) time, O(nDays) space.
export function waysToFill(nDays: number, blockSizes: number[]): number {
  const ways = new Array<number>(nDays + 1).fill(0)
  ways[0] = 1

  for (let i = 1; i <= nDays; i++) {
    for (const size of blockSizes) {
      if (size <= i) {
        ways[i] = ways[i]! + ways[i - size]!
      }
    }
  }

  return ways[nDays]!
}

// longestGrowthStreak: LIS O(n log n) tails trick.
// State: tails[k] is the smallest possible ending value of a rising run
// of length k + 1.
// Choice: for each revenue, either extend the longest streak so far
// (append, achieving a new length) or replace the leftmost tail >=
// revenue (a smaller tail at the same length is strictly better).
// Recurrence: tails is updated one revenue at a time via binary search
// (inline module-10 lower-bound template, no imports needed).
// Base case: tails starts empty (a growth streak of length 0).
// Order: process revenues left to right; tails.length at the end IS the
// answer.
// O(n log n) time, O(n) space.
export function longestGrowthStreak(revenues: number[]): number {
  const tails: number[] = []

  for (const rev of revenues) {
    let lo = 0
    let hi = tails.length
    while (lo < hi) {
      const mid = (lo + hi) >>> 1
      if (tails[mid]! < rev) {
        lo = mid + 1
      } else {
        hi = mid
      }
    }
    if (lo === tails.length) {
      tails.push(rev)
    } else {
      tails[lo] = rev
    }
  }

  return tails.length
}

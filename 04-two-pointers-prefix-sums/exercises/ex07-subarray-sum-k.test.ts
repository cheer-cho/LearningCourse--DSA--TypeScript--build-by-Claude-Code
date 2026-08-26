import { describe, expect, it } from 'vitest'
import { countSubarraysWithSum } from './ex07-subarray-sum-k'

describe('ex04/ex07 — countSubarraysWithSum', () => {
  it('counts the classic example', () => {
    expect(countSubarraysWithSum([1, 1, 1], 2)).toBe(2)
  })

  it('handles negatives, including subarrays that cancel out', () => {
    expect(countSubarraysWithSum([1, -1, 0], 0)).toBe(3)
  })

  it('counts a single qualifying subarray', () => {
    expect(countSubarraysWithSum([1, 2, 3], 3)).toBe(2) // [1,2] and [3]
  })

  it('returns 0 when no subarray matches', () => {
    expect(countSubarraysWithSum([1, 2, 3], 100)).toBe(0)
  })

  it('handles an empty array', () => {
    expect(countSubarraysWithSum([], 0)).toBe(0)
  })

  it('handles a target of zero with all-zero input', () => {
    expect(countSubarraysWithSum([0, 0, 0], 0)).toBe(6) // every contiguous subarray
  })

  it('efficiency: resolves a large array in one pass', () => {
    const n = 100_000
    const nums = new Array<number>(n).fill(1)
    const k = 5
    // A subarray of all 1s sums to k exactly when it has length k;
    // there are (n - k + 1) starting positions for such a subarray.
    // A brute-force double loop would be ~10^10 additions here.
    expect(countSubarraysWithSum(nums, k)).toBe(n - k + 1)
  })
})

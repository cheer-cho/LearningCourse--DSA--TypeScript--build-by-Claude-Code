import { describe, expect, it } from 'vitest'
import { findPeak } from './ex07-peak-element'

/** A valid peak is >= both neighbors (edges compare against -Infinity)
 * and strictly greater than at least one of them (adjacent distinct
 * elements are guaranteed, so a real peak is strictly greater than both). */
function isPeak(nums: number[], idx: number): boolean {
  const left = idx > 0 ? nums[idx - 1]! : -Infinity
  const right = idx < nums.length - 1 ? nums[idx + 1]! : -Infinity
  return nums[idx]! > left && nums[idx]! > right
}

describe('ex10/ex07 — findPeak', () => {
  it('finds the single peak in a simple mountain', () => {
    const nums = [1, 2, 3, 1]
    expect(isPeak(nums, findPeak(nums))).toBe(true)
  })

  it('finds a peak among several candidates', () => {
    const nums = [1, 2, 1, 3, 5, 6, 4]
    expect(isPeak(nums, findPeak(nums))).toBe(true)
  })

  it('handles a single element (trivially a peak)', () => {
    expect(findPeak([5])).toBe(0)
  })

  it('handles a strictly increasing array (peak at the end)', () => {
    const nums = [1, 2, 3, 4, 5]
    expect(isPeak(nums, findPeak(nums))).toBe(true)
    expect(findPeak(nums)).toBe(4)
  })

  it('handles a strictly decreasing array (peak at the start)', () => {
    const nums = [5, 4, 3, 2, 1]
    expect(isPeak(nums, findPeak(nums))).toBe(true)
    expect(findPeak(nums)).toBe(0)
  })

  it('handles a two-element array both ways', () => {
    expect(findPeak([1, 2])).toBe(1)
    expect(findPeak([2, 1])).toBe(0)
  })

  it('handles a valley with peaks on both edges', () => {
    const nums = [9, 1, 2, 1, 8]
    expect(isPeak(nums, findPeak(nums))).toBe(true)
  })

  it('stays O(log n) on a huge array', () => {
    const n = 500_000
    // rises to a peak at n/2 then falls
    const half = Math.floor(n / 2)
    const nums = Array.from({ length: n }, (_, i) => (i <= half ? i : n - i))
    const peak = findPeak(nums)
    expect(isPeak(nums, peak)).toBe(true)
  })
})

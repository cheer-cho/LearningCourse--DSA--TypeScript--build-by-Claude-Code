import { describe, expect, it, vi } from 'vitest'
import { kthLargest } from './ex04-quickselect'

describe('ex04 — quickselect', () => {
  it('finds the 2nd largest', () => {
    expect(kthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5)
  })

  it('k = 1 returns the maximum', () => {
    expect(kthLargest([3, 2, 1, 5, 6, 4], 1)).toBe(6)
  })

  it('k = n returns the minimum', () => {
    const nums = [3, 2, 1, 5, 6, 4]
    expect(kthLargest(nums, nums.length)).toBe(1)
  })

  it('handles a single element', () => {
    expect(kthLargest([1], 1)).toBe(1)
  })

  it('handles duplicates', () => {
    expect(kthLargest([1, 1, 1, 2, 2], 1)).toBe(2)
    expect(kthLargest([1, 1, 1, 2, 2], 3)).toBe(1)
  })

  it('handles negative numbers', () => {
    expect(kthLargest([-3, -1, -8, 0, 5], 2)).toBe(0)
  })

  it('does not mutate the input', () => {
    const original = [3, 2, 1, 5, 6, 4]
    const copy = [...original]
    kthLargest(original, 3)
    expect(original).toEqual(copy)
  })

  it('throws for an empty array', () => {
    expect(() => kthLargest([], 1)).toThrow()
  })

  it('throws when k is out of range', () => {
    expect(() => kthLargest([1, 2, 3], 0)).toThrow()
    expect(() => kthLargest([1, 2, 3], 4)).toThrow()
  })

  it('finds the correct value in a large array for k = 1, mid, and n (efficiency: O(n) target)', () => {
    const n = 200_000
    const nums = Array.from({ length: n }, () => Math.floor(Math.random() * n))
    const sorted = [...nums].sort((a, b) => a - b)

    expect(kthLargest(nums, 1)).toBe(sorted[n - 1])
    expect(kthLargest(nums, n)).toBe(sorted[0])
    const mid = Math.floor(n / 2)
    expect(kthLargest(nums, mid)).toBe(sorted[n - mid])
  })

  it('does not fully sort the array — partition only (guard against a .sort() shortcut)', () => {
    // A `.sort()`-based implementation would also pass the correctness
    // tests above; this guard is what actually enforces quickselect.
    const n = 200_000
    const nums = Array.from({ length: n }, () => Math.floor(Math.random() * n))
    const sortSpy = vi.spyOn(Array.prototype, 'sort')

    let calledOnFullArray: boolean
    try {
      kthLargest(nums, 1)
      calledOnFullArray = sortSpy.mock.instances.some(
        (instance) => Array.isArray(instance) && instance.length === n,
      )
    } finally {
      sortSpy.mockRestore()
    }

    expect(calledOnFullArray).toBe(false)
  })
})

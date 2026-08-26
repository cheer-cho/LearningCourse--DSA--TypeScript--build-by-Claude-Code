import { describe, expect, it } from 'vitest'
import { Fenwick, countSmallerAfter } from './ex03-build-fenwick'

describe('21/ex03 — Fenwick', () => {
  it('prefix sum after a series of adds', () => {
    const fw = new Fenwick(5)
    fw.add(0, 3)
    fw.add(2, 2)
    fw.add(4, 1)
    expect(fw.prefixSum(0)).toBe(3)
    expect(fw.prefixSum(2)).toBe(5)
    expect(fw.prefixSum(4)).toBe(6)
  })

  it('range sum uses two prefix queries', () => {
    const fw = new Fenwick(5)
    fw.add(0, 3)
    fw.add(2, 2)
    fw.add(4, 1)
    expect(fw.rangeSum(2, 4)).toBe(3)
    expect(fw.rangeSum(0, 0)).toBe(3)
    expect(fw.rangeSum(1, 3)).toBe(2)
  })

  it('handles single-element tree', () => {
    const fw = new Fenwick(1)
    fw.add(0, 7)
    expect(fw.prefixSum(0)).toBe(7)
    expect(fw.rangeSum(0, 0)).toBe(7)
  })

  it('handles negative deltas', () => {
    const fw = new Fenwick(4)
    fw.add(0, 10)
    fw.add(0, -3)
    fw.add(2, 5)
    expect(fw.prefixSum(0)).toBe(7)
    expect(fw.prefixSum(3)).toBe(12)
  })

  it('handles multiple updates to the same position', () => {
    const fw = new Fenwick(3)
    fw.add(1, 2)
    fw.add(1, 3)
    expect(fw.prefixSum(1)).toBe(5)
    expect(fw.rangeSum(1, 1)).toBe(5)
  })

  it('rangeSum(i, j) is 0 when all positions in range are 0', () => {
    const fw = new Fenwick(5)
    fw.add(0, 1)
    fw.add(4, 1)
    expect(fw.rangeSum(1, 3)).toBe(0)
  })
})

describe('21/ex03 — countSmallerAfter', () => {
  it('reverse-sorted: each element has known count', () => {
    expect(countSmallerAfter([3, 2, 1])).toEqual([2, 1, 0])
  })

  it('sorted: no element has anything smaller to its right', () => {
    expect(countSmallerAfter([1, 2, 3])).toEqual([0, 0, 0])
  })

  it('mixed example from docstring', () => {
    expect(countSmallerAfter([5, 2, 6, 1])).toEqual([2, 1, 1, 0])
  })

  it('last element always returns 0', () => {
    const result = countSmallerAfter([9, 1, 5])
    expect(result[result.length - 1]).toBe(0)
  })

  it('single element', () => {
    expect(countSmallerAfter([42])).toEqual([0])
  })

  it('handles duplicates', () => {
    // For [2, 2, 1]: 2 has 1 smaller (just 1), 2 has 1 smaller (just 1), 1 has 0
    expect(countSmallerAfter([2, 2, 1])).toEqual([1, 1, 0])
  })

  it('handles negative values', () => {
    // [-1]: to its right are [-3, 2, -2]; only -3 is strictly smaller -> 2? No:
    //   -3 < -1 (yes), 2 < -1 (no), -2 < -1 (yes) -> count = 2
    // [-3]: to its right are [2, -2]; none is strictly smaller -> 0
    // [2]:  to its right is [-2]; -2 < 2 -> 1
    // [-2]: nothing to the right -> 0
    expect(countSmallerAfter([-1, -3, 2, -2])).toEqual([2, 0, 1, 0])
  })

  it('all identical: no element is strictly smaller', () => {
    expect(countSmallerAfter([5, 5, 5, 5])).toEqual([0, 0, 0, 0])
  })

  it('efficiency: n=100_000 completes in O(n log n)', () => {
    const n = 100_000
    // Adversarial: descending so every element has many smaller-to-right
    const nums = Array.from({ length: n }, (_, i) => n - i)
    const start = performance.now()
    const result = countSmallerAfter(nums)
    const elapsed = performance.now() - start
    expect(elapsed).toBeLessThan(2000)
    expect(result[0]).toBe(n - 1)   // largest element, all others are smaller
    expect(result[n - 1]).toBe(0)   // smallest element, nothing is smaller
  })
})

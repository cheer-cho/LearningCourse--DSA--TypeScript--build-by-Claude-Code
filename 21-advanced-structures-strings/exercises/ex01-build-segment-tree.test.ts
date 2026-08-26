import { describe, expect, it } from 'vitest'
import { SegmentTree } from './ex01-build-segment-tree'

describe('21/ex01 — SegmentTree', () => {
  it('computes range sum on a small array', () => {
    const st = new SegmentTree([2, 5, 1, 4, 9, 3])
    expect(st.rangeSum(0, 5)).toBe(24)
    expect(st.rangeSum(0, 0)).toBe(2)
    expect(st.rangeSum(5, 5)).toBe(3)
    expect(st.rangeSum(1, 4)).toBe(19)
  })

  it('reflects a point update in subsequent queries', () => {
    const st = new SegmentTree([2, 5, 1, 4, 9, 3])
    st.update(2, 10)
    expect(st.rangeSum(0, 5)).toBe(33)
    expect(st.rangeSum(1, 4)).toBe(28)
    expect(st.rangeSum(2, 2)).toBe(10)
  })

  it('handles multiple updates', () => {
    const st = new SegmentTree([1, 2, 3, 4, 5])
    st.update(0, 10)
    st.update(4, 20)
    expect(st.rangeSum(0, 4)).toBe(39)
    expect(st.rangeSum(0, 0)).toBe(10)
    expect(st.rangeSum(4, 4)).toBe(20)
  })

  it('handles an array of length 1', () => {
    const st = new SegmentTree([42])
    expect(st.rangeSum(0, 0)).toBe(42)
    st.update(0, 7)
    expect(st.rangeSum(0, 0)).toBe(7)
  })

  it('handles negative values', () => {
    const st = new SegmentTree([-3, -1, 0, 2, 4])
    expect(st.rangeSum(0, 4)).toBe(2)
    expect(st.rangeSum(0, 2)).toBe(-4)
    st.update(1, -10)
    expect(st.rangeSum(0, 2)).toBe(-13)
  })

  it('handles all zeros', () => {
    const st = new SegmentTree([0, 0, 0, 0])
    expect(st.rangeSum(0, 3)).toBe(0)
    st.update(2, 5)
    expect(st.rangeSum(0, 3)).toBe(5)
  })

  it('efficiency: n=100_000 with 50_000 mixed ops completes quickly', () => {
    const n = 100_000
    const nums = Array.from({ length: n }, (_, i) => i % 100)
    const st = new SegmentTree(nums)

    const start = performance.now()
    let checksum = 0
    for (let op = 0; op < 50_000; op++) {
      if (op % 2 === 0) {
        // point update
        const idx = (op * 7) % n
        st.update(idx, op % 200)
      } else {
        // range query
        const lo = (op * 3) % n
        const hi = Math.min(lo + 1000, n - 1)
        checksum += st.rangeSum(lo, hi)
      }
    }
    const elapsed = performance.now() - start
    expect(elapsed).toBeLessThan(2000)
    // ensure the result isn't optimized away
    expect(checksum).toBeGreaterThanOrEqual(0)
  })
})

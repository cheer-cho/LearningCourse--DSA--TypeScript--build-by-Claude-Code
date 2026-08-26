import { describe, expect, it } from 'vitest'
import { KthLargest } from './ex05-kth-largest-stream'

describe('12/ex05 — kth largest in a stream', () => {
  it('tracks the 3rd largest as scores arrive', () => {
    const kth = new KthLargest(3, [4, 5, 8, 2])
    expect(kth.add(3)).toBe(4)
    expect(kth.add(5)).toBe(5)
    expect(kth.add(10)).toBe(5)
    expect(kth.add(9)).toBe(8)
    expect(kth.add(4)).toBe(8)
  })

  it('handles k = 1 (running maximum)', () => {
    const kth = new KthLargest(1, [])
    expect(kth.add(3)).toBe(3)
    expect(kth.add(1)).toBe(3)
    expect(kth.add(7)).toBe(7)
  })

  it('handles an empty initial list', () => {
    const kth = new KthLargest(3, [])
    kth.add(1)
    kth.add(2)
    expect(kth.add(3)).toBe(1)
  })

  it('handles duplicate scores', () => {
    const kth = new KthLargest(2, [5, 5, 5])
    expect(kth.add(5)).toBe(5)
  })

  it('stays correct across 100_000 adds', () => {
    const k = 500
    const kth = new KthLargest(k, [])
    const scores: number[] = []
    let last = -Infinity
    for (let i = 0; i < 100_000; i++) {
      const val = Math.floor(Math.random() * 1_000_000)
      scores.push(val)
      last = kth.add(val)
    }
    const expected = [...scores].sort((a, b) => b - a)[k - 1]!
    expect(last).toBe(expected)
  })
})

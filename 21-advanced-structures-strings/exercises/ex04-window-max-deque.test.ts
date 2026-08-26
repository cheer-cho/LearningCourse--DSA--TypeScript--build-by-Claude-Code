import { describe, expect, it } from 'vitest'
import { windowMaxes } from './ex04-window-max-deque'

describe('21/ex04 — windowMaxes', () => {
  it('produces the correct maxes for the LESSON.md example', () => {
    expect(windowMaxes([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7])
  })

  it('window size 1: every element is its own max', () => {
    expect(windowMaxes([4, 2, 7, 1], 1)).toEqual([4, 2, 7, 1])
  })

  it('window equals full array: result is just the global max', () => {
    expect(windowMaxes([4, 3, 2, 7, 1], 5)).toEqual([7])
  })

  it('decreasing array: each window max is its leftmost element', () => {
    expect(windowMaxes([4, 3, 2, 1], 2)).toEqual([4, 3, 2])
  })

  it('increasing array: each window max is its rightmost element', () => {
    expect(windowMaxes([1, 2, 3, 4], 2)).toEqual([2, 3, 4])
  })

  it('single element array with k=1', () => {
    expect(windowMaxes([42], 1)).toEqual([42])
  })

  it('handles negative values', () => {
    expect(windowMaxes([-3, -1, -4, -1, -5], 2)).toEqual([-1, -1, -1, -1])
  })

  it('handles equal elements', () => {
    expect(windowMaxes([5, 5, 5, 5], 3)).toEqual([5, 5])
  })

  it('returns [] for empty input', () => {
    expect(windowMaxes([], 1)).toEqual([])
  })

  it('returns [] when k > nums.length', () => {
    expect(windowMaxes([1, 2], 5)).toEqual([])
  })

  it('k=2 on alternating values', () => {
    expect(windowMaxes([1, 3, 1, 3, 1, 3], 2)).toEqual([3, 3, 3, 3, 3])
  })

  it('efficiency: n=200_000 vs O(n*k) naive — must complete quickly', () => {
    const n = 200_000
    const k = 1000
    // worst case for naive: many distinct values
    const nums = Array.from({ length: n }, (_, i) => (i * 7 + 13) % n)
    const start = performance.now()
    const result = windowMaxes(nums, k)
    const elapsed = performance.now() - start
    expect(result.length).toBe(n - k + 1)
    expect(elapsed).toBeLessThan(2000)
  })
})

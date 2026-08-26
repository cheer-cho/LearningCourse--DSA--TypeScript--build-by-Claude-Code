import { describe, expect, it } from 'vitest'
import { waysToTarget } from './ex06-target-sum-ways'

describe('ex19/ex06 — waysToTarget', () => {
  it('[1,1,1,1,1] target 3 -> 5', () => {
    expect(waysToTarget([1, 1, 1, 1, 1], 3)).toBe(5)
  })

  it('[1] target 1 -> 1', () => {
    expect(waysToTarget([1], 1)).toBe(1)
  })

  it('[1] target -1 -> 1', () => {
    expect(waysToTarget([1], -1)).toBe(1)
  })

  it('[1] target 2 -> 0 (impossible)', () => {
    expect(waysToTarget([1], 2)).toBe(0)
  })

  it('zero handling: [1,0] target 1 -> 2', () => {
    // +1+0 and +1-0 both give 1
    expect(waysToTarget([1, 0], 1)).toBe(2)
  })

  it('all zeros: [0,0,0] target 0 -> 8', () => {
    // Each of 3 zeros can be + or -, all give sum 0
    expect(waysToTarget([0, 0, 0], 0)).toBe(8)
  })

  it('odd (sum + target) -> 0', () => {
    // sum = 3, target = 2 -> sum+target = 5, odd -> impossible
    expect(waysToTarget([1, 2], 2)).toBe(0)
  })

  it('|target| > sum -> 0', () => {
    expect(waysToTarget([1, 2], 10)).toBe(0)
  })

  it('negative target works via reduction', () => {
    // [1,1,1,1,1] target -1: P = (5 + (-1))/2 = 2, C(5,2) = 10 ways
    expect(waysToTarget([1, 1, 1, 1, 1], -1)).toBe(10)
  })

  it('[0,0] target 0 -> 4', () => {
    expect(waysToTarget([0, 0], 0)).toBe(4)
  })

  it('empty nums target 0 -> 1', () => {
    expect(waysToTarget([], 0)).toBe(1)
  })

  it('empty nums target non-zero -> 0', () => {
    expect(waysToTarget([], 1)).toBe(0)
  })
})

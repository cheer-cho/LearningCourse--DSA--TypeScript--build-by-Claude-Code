import { describe, expect, it } from 'vitest'
import { canReachEnd, minJumps } from './ex02-jump-reach'

describe('17/ex02 — canReachEnd', () => {
  it('reachable classic case', () => {
    expect(canReachEnd([2, 3, 1, 1, 4])).toBe(true)
  })

  it('unreachable: gets stuck on a zero', () => {
    expect(canReachEnd([3, 2, 1, 0, 4])).toBe(false)
  })

  it('single element: already there', () => {
    expect(canReachEnd([0])).toBe(true)
  })

  it('all zeros past the first: only reachable if length 1', () => {
    expect(canReachEnd([1, 0, 0])).toBe(false)
  })

  it('generous jump at the start clears everything', () => {
    expect(canReachEnd([5, 0, 0, 0, 0])).toBe(true)
  })

  it('efficiency: n = 200_000 all-ones (must hop every tile) completes instantly', () => {
    const n = 200_000
    const nums = new Array(n).fill(1)
    expect(canReachEnd(nums)).toBe(true)
  })
})

describe('17/ex02 — minJumps', () => {
  it('classic case: two jumps', () => {
    expect(minJumps([2, 3, 1, 1, 4])).toBe(2)
  })

  it('single element: zero jumps needed', () => {
    expect(minJumps([0])).toBe(0)
  })

  it('unreachable: returns -1', () => {
    expect(minJumps([3, 2, 1, 0, 4])).toBe(-1)
  })

  it('one big jump clears everything in a single hop', () => {
    expect(minJumps([10, 1, 1, 1, 1])).toBe(1)
  })

  it('forced to hop every tile one at a time', () => {
    expect(minJumps([1, 1, 1, 1])).toBe(3)
  })

  it('efficiency: n = 200_000 all-ones completes instantly and matches n - 1', () => {
    const n = 200_000
    const nums = new Array(n).fill(1)
    expect(minJumps(nums)).toBe(n - 1)
  })
})

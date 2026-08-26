import { describe, expect, it } from 'vitest'
import { reverse, rotateRight } from './ex02-reverse-in-place'

describe('reverse', () => {
  it('reverses an even-length array', () => {
    const nums = [1, 2, 3, 4]
    reverse(nums)
    expect(nums).toEqual([4, 3, 2, 1])
  })

  it('reverses an odd-length array', () => {
    const nums = [1, 2, 3, 4, 5]
    reverse(nums)
    expect(nums).toEqual([5, 4, 3, 2, 1])
  })

  it('leaves a single-element array unchanged', () => {
    const nums = [7]
    reverse(nums)
    expect(nums).toEqual([7])
  })

  it('leaves an empty array unchanged', () => {
    const nums: number[] = []
    reverse(nums)
    expect(nums).toEqual([])
  })

  it('handles negatives and duplicates', () => {
    const nums = [-1, 3, 3, -5, 0]
    reverse(nums)
    expect(nums).toEqual([0, -5, 3, 3, -1])
  })
})

describe('rotateRight', () => {
  it('rotates by a typical k', () => {
    const nums = [1, 2, 3, 4, 5]
    rotateRight(nums, 2)
    expect(nums).toEqual([4, 5, 1, 2, 3])
  })

  it('k = 0 is a no-op', () => {
    const nums = [1, 2, 3]
    rotateRight(nums, 0)
    expect(nums).toEqual([1, 2, 3])
  })

  it('k = n is a no-op', () => {
    const nums = [1, 2, 3, 4]
    rotateRight(nums, 4)
    expect(nums).toEqual([1, 2, 3, 4])
  })

  it('k > n wraps around using k % n', () => {
    const nums = [1, 2, 3]
    rotateRight(nums, 5) // 5 % 3 === 2
    expect(nums).toEqual([2, 3, 1])
  })

  it('handles a single-element array for any k', () => {
    const nums = [9]
    rotateRight(nums, 4)
    expect(nums).toEqual([9])
  })

  it('handles an empty array', () => {
    const nums: number[] = []
    rotateRight(nums, 3)
    expect(nums).toEqual([])
  })
})

import { describe, expect, it } from 'vitest'
import { findVersion, firstBadBuild, minTestRigs } from './checkpoint'

describe('checkpoint — firstBadBuild', () => {
  it('finds the first bad build in the middle of the range', () => {
    expect(firstBadBuild(10, (b) => b >= 6)).toBe(6)
  })

  it('handles every build being bad', () => {
    expect(firstBadBuild(10, () => true)).toBe(1)
  })

  it('handles only the last build being bad', () => {
    expect(firstBadBuild(10, (b) => b === 10)).toBe(10)
  })

  it('handles a single build', () => {
    expect(firstBadBuild(1, () => true)).toBe(1)
  })

  it('uses close to log2(n) calls to the predicate', () => {
    const n = 1_000_000
    const threshold = 654_321
    let calls = 0
    const isBad = (b: number): boolean => {
      calls++
      return b >= threshold
    }
    expect(firstBadBuild(n, isBad)).toBe(threshold)
    expect(calls).toBeLessThanOrEqual(Math.floor(Math.log2(n)) + 2)
  })
})

describe('checkpoint — minTestRigs', () => {
  it('matches a worked example with an uneven split', () => {
    expect(minTestRigs([3, 5, 8, 2], 10)).toBe(2)
  })

  it('needs one rig per load when none can share', () => {
    expect(minTestRigs([4, 4, 4, 4], 4)).toBe(4)
  })

  it('handles a tighter budget forcing more, smaller groups', () => {
    expect(minTestRigs([2, 2, 2, 2, 2], 5)).toBe(3)
  })

  it('handles a single load', () => {
    expect(minTestRigs([7], 7)).toBe(1)
    expect(minTestRigs([7], 100)).toBe(1)
  })

  it('handles everything fitting on one rig', () => {
    expect(minTestRigs([1, 2, 3], 100)).toBe(1)
  })

  it('stays fast on a large load list', () => {
    const loads = Array.from({ length: 100_000 }, () => 3)
    // constant loads -> exact answer: ceil(n / floor(hours / load))
    expect(minTestRigs(loads, 30)).toBe(10_000)
  })
})

describe('checkpoint — findVersion', () => {
  it('finds first and last of a repeated tag', () => {
    expect(findVersion(['v1', 'v2', 'v2', 'v2', 'v3'], 'v2')).toEqual({ first: 1, last: 3 })
  })

  it('finds a tag that appears once', () => {
    expect(findVersion(['v1', 'v2', 'v3'], 'v1')).toEqual({ first: 0, last: 0 })
  })

  it('returns -1/-1 when the tag is absent', () => {
    expect(findVersion(['v1', 'v2', 'v3'], 'v9')).toEqual({ first: -1, last: -1 })
  })

  it('handles an empty tag list', () => {
    expect(findVersion([], 'v1')).toEqual({ first: -1, last: -1 })
  })

  it('handles every tag being the same', () => {
    expect(findVersion(['v1', 'v1', 'v1'], 'v1')).toEqual({ first: 0, last: 2 })
  })

  it('handles the target at the very start or very end', () => {
    const tags = ['v1', 'v2', 'v3', 'v4', 'v5']
    expect(findVersion(tags, 'v1')).toEqual({ first: 0, last: 0 })
    expect(findVersion(tags, 'v5')).toEqual({ first: 4, last: 4 })
  })
})

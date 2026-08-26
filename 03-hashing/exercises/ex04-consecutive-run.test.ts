import { describe, it, expect } from 'vitest'
import { longestConsecutive } from './ex04-consecutive-run'

describe('longestConsecutive', () => {
  it('finds the longest run in a typical unsorted case', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4)
  })

  it('returns 0 for an empty array', () => {
    expect(longestConsecutive([])).toBe(0)
  })

  it('returns 1 for a single element', () => {
    expect(longestConsecutive([42])).toBe(1)
  })

  it('treats duplicates as a single element', () => {
    expect(longestConsecutive([5, 5, 5])).toBe(1)
  })

  it('handles negative numbers', () => {
    expect(longestConsecutive([-3, -2, -1, 0, 1])).toBe(5)
  })

  it('handles an already-sorted, fully consecutive array', () => {
    expect(longestConsecutive([1, 2, 3, 4, 5])).toBe(5)
  })

  it('handles several disjoint runs, picking the longest', () => {
    expect(longestConsecutive([10, 11, 1, 2, 3, 4, 20])).toBe(4)
  })

  it('stays fast on a large shuffled input (n = 200,000)', () => {
    const chunkSize = 199_000
    const values: number[] = []
    // Two disjoint runs: [0, chunkSize) and a shorter one far away.
    for (let i = 0; i < chunkSize; i++) values.push(i)
    for (let i = 0; i < 1_000; i++) values.push(1_000_000 + i)

    // Shuffle deterministically so the runs aren't handed in order.
    for (let i = values.length - 1; i > 0; i--) {
      const j = (i * 2654435761) % (i + 1)
      const vi = values[i]
      const vj = values[j]
      if (vi === undefined || vj === undefined) continue
      values[i] = vj
      values[j] = vi
    }

    expect(longestConsecutive(values)).toBe(chunkSize)
  })
})

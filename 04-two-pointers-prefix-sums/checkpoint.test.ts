import { describe, expect, it } from 'vitest'
import { balancedCheckpoint, compactGaps, flatPairs, GAP_SENTINEL, rangeGain } from './checkpoint'

describe('checkpoint 4 — flatPairs', () => {
  it('finds a pair summing to target', () => {
    expect(flatPairs([-4, -1, 0, 3, 8], 4)).toEqual([0, 4])
  })

  it('returns null when no pair sums to target', () => {
    expect(flatPairs([1, 2, 3], 50)).toBeNull()
  })

  it('handles too-short input', () => {
    expect(flatPairs([], 0)).toBeNull()
    expect(flatPairs([5], 5)).toBeNull()
  })

  it('efficiency: resolves a large sorted survey quickly', () => {
    const n = 200_000
    const readings = Array.from({ length: n }, (_, i) => i)
    expect(flatPairs(readings, 5_000_000)).toBeNull()
  })
})

describe('checkpoint 4 — compactGaps', () => {
  it('removes GAP_SENTINEL gaps, preserving order, and shrinks the array', () => {
    const readings = [10, GAP_SENTINEL, 12, GAP_SENTINEL, 15]
    compactGaps(readings)
    expect(readings).toEqual([10, 12, 15])
  })

  it('handles an array with no gaps', () => {
    const readings = [1, 2, 3]
    compactGaps(readings)
    expect(readings).toEqual([1, 2, 3])
  })

  it('handles an array that is all gaps', () => {
    const readings = [GAP_SENTINEL, GAP_SENTINEL]
    compactGaps(readings)
    expect(readings).toEqual([])
  })

  it('handles an empty array', () => {
    const readings: number[] = []
    compactGaps(readings)
    expect(readings).toEqual([])
  })
})

describe('checkpoint 4 — rangeGain', () => {
  it('answers inclusive range queries', () => {
    const survey = rangeGain([2, -1, 3, 4, -2])
    expect(survey.query(1, 3)).toBe(6)
    expect(survey.query(0, 4)).toBe(6)
    expect(survey.query(2, 2)).toBe(3)
  })

  it('handles a single reading', () => {
    const survey = rangeGain([9])
    expect(survey.query(0, 0)).toBe(9)
  })

  it('efficiency: many queries against a large survey return correct gains', () => {
    const n = 100_000
    const readings = new Array<number>(n).fill(1)
    const survey = rangeGain(readings)

    // Every inclusive range (i, j) of all-1 deltas nets (j - i + 1).
    // 100_000 O(1) queries here would be infeasible if each one
    // re-summed its slice from scratch; every one is checked exactly.
    for (let i = 0; i < n; i += 2) {
      const j = n - 1 - (i % 4)
      if (j <= i) continue
      expect(survey.query(i, j)).toBe(j - i + 1)
    }
  })
})

describe('checkpoint 4 — balancedCheckpoint', () => {
  it('finds the classic balanced index', () => {
    expect(balancedCheckpoint([1, 7, 3, 6, 5, 6])).toBe(3)
  })

  it('returns -1 when no balanced index exists', () => {
    expect(balancedCheckpoint([1, 2, 3])).toBe(-1)
  })

  it('handles a single reading', () => {
    expect(balancedCheckpoint([4])).toBe(0)
  })

  it('handles an empty array', () => {
    expect(balancedCheckpoint([])).toBe(-1)
  })
})

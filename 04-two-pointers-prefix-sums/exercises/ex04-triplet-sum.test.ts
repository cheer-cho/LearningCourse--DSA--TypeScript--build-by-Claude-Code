import { describe, expect, it } from 'vitest'
import { threeSumZero } from './ex04-triplet-sum'

function normalize(triplets: number[][]): string[] {
  return triplets.map((t) => [...t].sort((a, b) => a - b).join(',')).sort()
}

describe('ex04/ex04 — threeSumZero', () => {
  it('finds all unique triplets summing to zero', () => {
    const result = threeSumZero([-1, 0, 1, 2, -1, -4])
    expect(normalize(result)).toEqual(normalize([
      [-1, -1, 2],
      [-1, 0, 1],
    ]))
  })

  it('returns nothing when no triplet sums to zero', () => {
    expect(threeSumZero([0, 1, 1])).toEqual([])
  })

  it('does not duplicate a triplet when values repeat heavily', () => {
    const result = threeSumZero([0, 0, 0, 0])
    expect(normalize(result)).toEqual(normalize([[0, 0, 0]]))
  })

  it('handles arrays too short to have a triplet', () => {
    expect(threeSumZero([])).toEqual([])
    expect(threeSumZero([1, -1])).toEqual([])
  })

  it('handles all-positive and all-negative arrays (no valid triplet)', () => {
    expect(threeSumZero([1, 2, 3])).toEqual([])
    expect(threeSumZero([-1, -2, -3])).toEqual([])
  })

  it('finds multiple distinct triplets from a larger mixed array', () => {
    const result = threeSumZero([-4, -2, -2, -2, 0, 1, 2, 2, 2, 4])
    expect(normalize(result)).toEqual(normalize([
      [-4, 0, 4],
      [-4, 2, 2],
      [-2, 0, 2],
      [-2, -2, 4],
    ]))
  })
})

import { describe, expect, it } from 'vitest'
import { kClosest } from './ex04-k-closest-points'

const sqDist = ([x, y]: [number, number]): number => x * x + y * y

describe('12/ex04 — k closest points to the origin', () => {
  it('finds the k closest among a small set', () => {
    const points: Array<[number, number]> = [
      [1, 3],
      [-2, 2],
      [5, 8],
      [0, 1],
    ]
    const result = kClosest(points, 2)
    expect(result).toHaveLength(2)
    expect(new Set(result.map(sqDist))).toEqual(new Set([sqDist([-2, 2]), sqDist([0, 1])]))
  })

  it('handles k = 0', () => {
    expect(kClosest([[1, 1]], 0)).toEqual([])
  })

  it('handles k equal to the number of points', () => {
    const points: Array<[number, number]> = [
      [3, 4],
      [1, 1],
    ]
    expect(kClosest(points, 2)).toHaveLength(2)
  })

  it('handles points already at the origin', () => {
    const points: Array<[number, number]> = [
      [0, 0],
      [5, 5],
      [1, 1],
    ]
    expect(kClosest(points, 1)).toEqual([[0, 0]])
  })

  it('handles ties on distance (checks the distance multiset, not exact points)', () => {
    const points: Array<[number, number]> = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
      [3, 3],
    ]
    const result = kClosest(points, 4)
    const distances = result.map(sqDist).sort((a, b) => a - b)
    expect(distances).toEqual([1, 1, 1, 1])
  })

  it('finds the k closest among 200_000 points', () => {
    const n = 200_000
    const points: Array<[number, number]> = Array.from({ length: n }, (_, i) => [i, 0])
    const result = kClosest(points, 5)
    const distances = result.map(sqDist).sort((a, b) => a - b)
    expect(distances).toEqual([0, 1, 4, 9, 16])
  })
})

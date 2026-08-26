import { describe, expect, it } from 'vitest'
import { minCostConnectPoints } from './ex05-prim-connect-points'

describe('16/ex05 — minCostConnectPoints (Prim)', () => {
  it('matches the classic 5-point example', () => {
    const points: [number, number][] = [
      [0, 0],
      [2, 2],
      [3, 10],
      [5, 2],
      [7, 0],
    ]
    expect(minCostConnectPoints(points)).toBe(20)
  })

  it('handles two points — the only route is the direct one', () => {
    expect(
      minCostConnectPoints([
        [0, 0],
        [3, 4],
      ]),
    ).toBe(7)
  })

  it('handles a single point — nothing to connect', () => {
    expect(minCostConnectPoints([[5, 5]])).toBe(0)
  })

  it('costs 0 when every point is already at the same location', () => {
    expect(
      minCostConnectPoints([
        [1, 1],
        [1, 1],
        [1, 1],
      ]),
    ).toBe(0)
  })

  it('connects points on a straight line at the sum of consecutive gaps', () => {
    const points: [number, number][] = [
      [0, 0],
      [1, 0],
      [3, 0],
      [6, 0],
    ]
    expect(minCostConnectPoints(points)).toBe(6)
  })

  it('handles negative coordinates', () => {
    const points: [number, number][] = [
      [-2, -2],
      [0, 0],
      [2, 2],
    ]
    expect(minCostConnectPoints(points)).toBe(8)
  })
})

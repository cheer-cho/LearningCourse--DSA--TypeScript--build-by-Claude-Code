import { describe, expect, it } from 'vitest'
import { cheapestWithinKStops } from './ex07-k-stops-cheapest'

describe('16/ex07 — cheapestWithinKStops', () => {
  const flights: [number, number, number][] = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500],
  ]

  it('takes the cheaper 1-stop route when the stop budget allows it', () => {
    expect(cheapestWithinKStops(3, flights, 0, 2, 1)).toBe(200)
  })

  it('falls back to the direct route when 0 stops are allowed', () => {
    expect(cheapestWithinKStops(3, flights, 0, 2, 0)).toBe(500)
  })

  it('returns null when no route exists within the stop budget', () => {
    const noDirect: [number, number, number][] = [
      [0, 1, 100],
      [1, 2, 100],
      [2, 3, 100],
    ]
    expect(cheapestWithinKStops(4, noDirect, 0, 3, 1)).toBeNull()
  })

  it('returns null when dst is completely unreachable', () => {
    expect(cheapestWithinKStops(3, [[0, 1, 10]], 0, 2, 5)).toBeNull()
  })

  it('returns 0 when src === dst', () => {
    expect(cheapestWithinKStops(3, flights, 1, 1, 2)).toBe(0)
  })

  it('a large k behaves like unlimited stops', () => {
    const chain: [number, number, number][] = [
      [0, 1, 1],
      [1, 2, 1],
      [2, 3, 1],
      [3, 4, 1],
    ]
    expect(cheapestWithinKStops(5, chain, 0, 4, 10)).toBe(4)
  })

  it('picks the cheaper of two routes that both fit the stop budget', () => {
    const routes: [number, number, number][] = [
      [0, 1, 1],
      [1, 3, 1],
      [0, 2, 5],
      [2, 3, 1],
    ]
    // 0->1->3 costs 2 within 1 stop; 0->2->3 costs 6 within 1 stop.
    expect(cheapestWithinKStops(4, routes, 0, 3, 1)).toBe(2)
  })
})

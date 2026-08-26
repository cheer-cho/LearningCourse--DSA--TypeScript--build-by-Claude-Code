import { describe, expect, it } from 'vitest'
import { projectOrder, cheapestGrid, fastestSignal, sameNetwork } from './checkpoint'

function isValidOrder(order: number[] | null, n: number, deps: [number, number][]): boolean {
  if (order === null) return false
  if (order.length !== n) return false
  if (new Set(order).size !== n) return false
  const position = new Map(order.map((p, i) => [p, i]))
  return deps.every(([project, dependsOn]) => position.get(dependsOn)! < position.get(project)!)
}

describe('16/checkpoint — projectOrder', () => {
  it('orders a diamond dependency', () => {
    const deps: [number, number][] = [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ]
    expect(isValidOrder(projectOrder(4, deps), 4, deps)).toBe(true)
  })

  it('returns null on a cycle', () => {
    expect(
      projectOrder(3, [
        [1, 0],
        [2, 1],
        [0, 2],
      ]),
    ).toBeNull()
  })

  it('handles projects with no dependencies at all', () => {
    expect(isValidOrder(projectOrder(4, []), 4, [])).toBe(true)
  })
})

describe('16/checkpoint — cheapestGrid', () => {
  it('finds the minimum spanning cost', () => {
    const routes: [number, number, number][] = [
      [0, 1, 1],
      [1, 2, 2],
      [2, 3, 3],
      [0, 3, 10],
    ]
    expect(cheapestGrid(4, routes)).toBe(6)
  })

  it('returns null when districts cannot all be connected', () => {
    expect(cheapestGrid(3, [[0, 1, 5]])).toBeNull()
  })

  it('skips a redundant cycle-forming route', () => {
    const routes: [number, number, number][] = [
      [0, 1, 1],
      [1, 2, 1],
      [0, 2, 1],
    ]
    expect(cheapestGrid(3, routes)).toBe(2)
  })
})

describe('16/checkpoint — fastestSignal', () => {
  it('finds the cheaper multi-hop route over a pricier direct link', () => {
    const routes: [number, number, number][] = [
      [0, 1, 4],
      [0, 2, 1],
      [2, 1, 1],
    ]
    expect(fastestSignal(3, routes, 0)).toEqual([0, 2, 1])
  })

  it('marks unreachable districts as -1', () => {
    expect(fastestSignal(3, [[0, 1, 5]], 0)).toEqual([0, 5, -1])
  })

  it('the hub itself has distance 0', () => {
    expect(fastestSignal(2, [[1, 0, 3]], 1)).toEqual([3, 0])
  })

  it('routes are undirected — reaches backward too', () => {
    expect(fastestSignal(2, [[1, 0, 3]], 0)).toEqual([0, 3])
  })
})

describe('16/checkpoint — sameNetwork', () => {
  it('answers a small batch of queries correctly', () => {
    const built: [number, number][] = [
      [0, 1],
      [1, 2],
      [3, 4],
    ]
    const queries: [number, number][] = [
      [0, 2],
      [0, 3],
      [3, 4],
    ]
    expect(sameNetwork(5, built, queries)).toEqual([true, false, true])
  })

  it('every district is its own network before any routes are built', () => {
    expect(
      sameNetwork(
        3,
        [],
        [
          [0, 1],
          [1, 2],
        ],
      ),
    ).toEqual([false, false])
  })

  it('handles a query pair that is the same district twice', () => {
    expect(sameNetwork(3, [], [[1, 1]])).toEqual([true])
  })

  it('answers 200_000 batched queries efficiently', () => {
    const n = 100_000
    const built: [number, number][] = Array.from({ length: n - 1 }, (_, i) => [i, i + 1])
    const queries: [number, number][] = Array.from({ length: 200_000 }, (_, i) => [
      i % n,
      (i * 37) % n,
    ])
    const results = sameNetwork(n, built, queries)
    expect(results.every((r) => r === true)).toBe(true)
  }, 10_000)
})

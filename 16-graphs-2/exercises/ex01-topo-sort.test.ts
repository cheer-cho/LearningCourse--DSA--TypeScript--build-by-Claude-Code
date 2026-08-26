import { describe, expect, it } from 'vitest'
import { buildOrder, canFinish } from './ex01-topo-sort'

/** A valid order: every course appears exactly once, and every
 * prereq appears before the course that needs it. */
function isValidOrder(order: number[] | null, n: number, prereqs: [number, number][]): boolean {
  if (order === null) return false
  if (order.length !== n) return false
  if (new Set(order).size !== n) return false
  const position = new Map(order.map((course, i) => [course, i]))
  return prereqs.every(([course, prereq]) => position.get(prereq)! < position.get(course)!)
}

describe('16/ex01 — buildOrder', () => {
  it('orders a simple diamond dependency', () => {
    const prereqs: [number, number][] = [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ]
    expect(isValidOrder(buildOrder(4, prereqs), 4, prereqs)).toBe(true)
  })

  it('returns null when the graph has a cycle', () => {
    expect(
      buildOrder(2, [
        [0, 1],
        [1, 0],
      ]),
    ).toBeNull()
  })

  it('detects a cycle buried among unrelated valid edges', () => {
    const prereqs: [number, number][] = [
      [1, 0],
      [3, 4],
      [4, 3],
    ]
    expect(buildOrder(5, prereqs)).toBeNull()
  })

  it('handles zero prerequisites — any order is valid', () => {
    expect(isValidOrder(buildOrder(3, []), 3, [])).toBe(true)
  })

  it('handles a single course with no prerequisites', () => {
    expect(buildOrder(1, [])).toEqual([0])
  })

  it('orders a long chain correctly', () => {
    const prereqs: [number, number][] = [
      [1, 0],
      [2, 1],
      [3, 2],
      [4, 3],
    ]
    expect(buildOrder(5, prereqs)).toEqual([0, 1, 2, 3, 4])
  })

  it('handles disconnected groups of courses', () => {
    const prereqs: [number, number][] = [
      [1, 0],
      [3, 2],
    ]
    expect(isValidOrder(buildOrder(4, prereqs), 4, prereqs)).toBe(true)
  })

  it('builds a valid order for a 50_000-node chain (efficiency)', () => {
    const n = 50_000
    const prereqs: [number, number][] = Array.from({ length: n - 1 }, (_, i) => [i + 1, i])
    const order = buildOrder(n, prereqs)
    expect(order).not.toBeNull()
    expect(order).toEqual(Array.from({ length: n }, (_, i) => i))
  })
})

describe('16/ex01 — canFinish', () => {
  it('is true for a completable set of courses', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true)
  })

  it('is false when a cycle blocks completion', () => {
    expect(
      canFinish(2, [
        [0, 1],
        [1, 0],
      ]),
    ).toBe(false)
  })

  it('is true when there are no prerequisites at all', () => {
    expect(canFinish(5, [])).toBe(true)
  })

  it('is false for a self-loop', () => {
    expect(canFinish(1, [[0, 0]])).toBe(false)
  })

  it('is true for a diamond dependency', () => {
    expect(
      canFinish(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ]),
    ).toBe(true)
  })
})

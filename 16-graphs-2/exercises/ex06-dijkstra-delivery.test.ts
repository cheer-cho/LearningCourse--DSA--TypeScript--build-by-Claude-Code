import { describe, expect, it } from 'vitest'
import { deliveryTimes, shortestRoute } from './ex06-dijkstra-delivery'

describe('16/ex06 — deliveryTimes (Dijkstra)', () => {
  it('finds a cheaper 2-hop route over a more expensive direct edge', () => {
    const edges: [number, number, number][] = [
      [0, 1, 4],
      [0, 2, 1],
      [2, 1, 1],
    ]
    expect(deliveryTimes(3, edges, 0)).toEqual([0, 2, 1])
  })

  it('marks unreachable nodes as -1', () => {
    const edges: [number, number, number][] = [[0, 1, 5]]
    expect(deliveryTimes(3, edges, 0)).toEqual([0, 5, -1])
  })

  it('the source always has distance 0', () => {
    const edges: [number, number, number][] = [
      [1, 0, 3],
      [0, 1, 3],
    ]
    expect(deliveryTimes(2, edges, 1)[1]).toBe(0)
  })

  it('handles a single node with no edges', () => {
    expect(deliveryTimes(1, [], 0)).toEqual([0])
  })

  it('ignores a more expensive parallel edge between the same nodes', () => {
    const edges: [number, number, number][] = [
      [0, 1, 10],
      [0, 1, 2],
    ]
    expect(deliveryTimes(2, edges, 0)).toEqual([0, 2])
  })

  it('respects edge direction (does not travel backward along a directed edge)', () => {
    const edges: [number, number, number][] = [[0, 1, 1]]
    expect(deliveryTimes(2, edges, 1)).toEqual([-1, 0])
  })

  it('handles 50_000 edges efficiently', () => {
    const n = 20_000
    const edges: [number, number, number][] = []
    // A long cheap chain plus noisy edges whose cost exceeds the entire
    // chain length, so they can never be part of a shorter path.
    for (let i = 0; i < n - 1; i++) edges.push([i, i + 1, 1])
    for (let i = 0; edges.length < 50_000; i++) {
      const from = i % n
      const to = (i * 7 + 13) % n
      edges.push([from, to, n + 1]) // n+1 > any chain path, never a shortcut
    }
    const dist = deliveryTimes(n, edges, 0)
    expect(dist[0]).toBe(0)
    expect(dist[n - 1]).toBe(n - 1) // the cheap chain is the true shortest path
  })
})

describe('16/ex06 — shortestRoute', () => {
  it('returns the cheapest path, not the fewest-hops path', () => {
    const edges: [number, number, number][] = [
      [0, 1, 4],
      [0, 2, 1],
      [2, 1, 1],
    ]
    expect(shortestRoute(3, edges, 0, 1)).toEqual([0, 2, 1])
  })

  it('returns [a] when a === b', () => {
    expect(shortestRoute(3, [], 1, 1)).toEqual([1])
  })

  it('returns null when b is unreachable from a', () => {
    const edges: [number, number, number][] = [[0, 1, 1]]
    expect(shortestRoute(3, edges, 0, 2)).toBeNull()
  })

  it('returns a direct single-edge path when that is cheapest', () => {
    const edges: [number, number, number][] = [
      [0, 1, 1],
      [0, 2, 100],
      [2, 1, 1],
    ]
    expect(shortestRoute(3, edges, 0, 1)).toEqual([0, 1])
  })
})

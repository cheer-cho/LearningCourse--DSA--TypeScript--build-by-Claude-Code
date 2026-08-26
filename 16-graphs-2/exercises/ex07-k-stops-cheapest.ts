/**
 * ex07 — Cheapest flight within k stops (bounded Bellman-Ford)
 *
 * Scenario: flights with prices; find the cheapest route from src to
 * dst using AT MOST k stops (k+1 edges). Plain Dijkstra fails here —
 * it tracks "cheapest way to reach a node" with no notion of "in how
 * many hops", so it can lock in a route that uses too many stops
 * before a valid-but-pricier k-stops route is even considered.
 *
 * Pattern: relax every edge, exactly k+1 times, over a dist array
 * that's COPIED each round (relaxing in place within a round would
 * let one round's update chain through more than one extra edge,
 * silently allowing more than k stops).
 *
 * Check: npm test -- 16 -t ex07
 */

/**
 * Cheapest price from src to dst using at most k stops.
 * @param n - number of airports, labeled 0..n-1
 * @param flights - directed routes as [from, to, price]
 * @param src - starting airport
 * @param dst - destination airport
 * @param k - maximum number of stops allowed (k+1 edges), k >= 0
 * @returns the cheapest total price within k stops, or null if no such
 *   route exists
 * input: n=3, flights=[[0,1,100],[1,2,100],[0,2,500]], src=0, dst=2, k=1 -> 200
 * input: n=3, flights=[[0,1,100],[1,2,100],[0,2,500]], src=0, dst=2, k=0 -> 500
 * Target: O(k * E) time, O(V) space
 */
export function cheapestWithinKStops(
  n: number,
  flights: [number, number, number][],
  src: number,
  dst: number,
  k: number,
): number | null {
  throw new Error('TODO: implement me')
}

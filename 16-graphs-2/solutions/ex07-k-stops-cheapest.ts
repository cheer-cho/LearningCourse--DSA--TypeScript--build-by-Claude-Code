// Reference solution — ex07
// Pattern: bounded Bellman-Ford. Each of the k+1 rounds relaxes every
// edge using LAST round's distances (a fresh copy per round), which
// caps how many edges any path can use to exactly (round count). A
// shared in-place array would let updates chain within a single round,
// silently allowing more than k stops.
// Time: O(k * E), Space: O(V)

export function cheapestWithinKStops(
  n: number,
  flights: [number, number, number][],
  src: number,
  dst: number,
  k: number,
): number | null {
  let dist = new Array(n).fill(Infinity)
  dist[src] = 0

  for (let round = 0; round <= k; round++) {
    const next = [...dist]
    for (const [from, to, price] of flights) {
      if (dist[from] === Infinity) continue
      const candidate = dist[from] + price
      if (candidate < next[to]!) next[to] = candidate
    }
    dist = next
  }

  return dist[dst] === Infinity ? null : dist[dst]
}

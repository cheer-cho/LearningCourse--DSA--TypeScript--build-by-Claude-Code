// solutions/checkpoint.ts — reference solutions for the final mock checkpoint

/**
 * countPairsDivisible
 * Pattern: remainder-bucket counting (hashing, module 03).
 * Two numbers pair up iff their remainders mod `divisor` sum to 0 mod
 * divisor, so the needed complement of remainder r is (divisor - r) %
 * divisor. One forward pass: count matches against already-recorded
 * remainders, then record the current one — no double-counting.
 * Time O(n), Space O(divisor).
 */
export function countPairsDivisible(nums: number[], divisor: number): number {
  const bucket = new Array<number>(divisor).fill(0)
  let pairs = 0
  for (const num of nums) {
    const r = ((num % divisor) + divisor) % divisor
    const complement = (divisor - r) % divisor
    pairs += bucket[complement]!
    bucket[r]!++
  }
  return pairs
}

/**
 * longestBalancedStretch
 * Pattern: prefix sums + first-seen hash map (module 04).
 * Map 0 → -1 and 1 → +1; a stretch is balanced iff the running total
 * is EQUAL at its two ends. Record the first index each total appears
 * at (total 0 is "seen" at index -1); every later repeat of a total
 * closes a balanced stretch of length (i - firstSeen).
 * Time O(n), Space O(n).
 */
export function longestBalancedStretch(results: number[]): number {
  const firstSeen = new Map<number, number>([[0, -1]])
  let total = 0
  let best = 0

  for (let i = 0; i < results.length; i++) {
    total += results[i] === 1 ? 1 : -1
    const seenAt = firstSeen.get(total)
    if (seenAt === undefined) {
      firstSeen.set(total, i)
    } else {
      best = Math.max(best, i - seenAt)
    }
  }

  return best
}

/**
 * minRoomsNeeded
 * Pattern: interval sweep (greedy, module 17) — sorted starts vs ends.
 * Sort start times and end times separately. Walk the starts: if the
 * earliest un-freed end is <= this start, a room frees up (advance the
 * end pointer); otherwise a new room opens. The peak room count is the
 * maximum simultaneous overlap — no assignment ever beats it.
 * Time O(n log n), Space O(n).
 */
export function minRoomsNeeded(sessions: [number, number][]): number {
  const starts = sessions.map(([s]) => s).sort((a, b) => a - b)
  const ends = sessions.map(([, e]) => e).sort((a, b) => a - b)

  let rooms = 0
  let endIdx = 0
  for (const start of starts) {
    if (start >= ends[endIdx]!) {
      endIdx++ // a running session ended — reuse its room
    } else {
      rooms++ // every earlier session is still running — open a room
    }
  }
  return rooms
}

/**
 * earliestFullConnection
 * Pattern: union-find with path compression + sort by time (module 16).
 * Sort the logs chronologically, then union each pair; every successful
 * union reduces the component count by one. The moment it reaches 1,
 * the current log's timestamp is the answer.
 * Time O(m log m + m α(n)), Space O(n + m).
 */
export function earliestFullConnection(
  n: number,
  logs: [number, number, number][],
): number {
  if (n <= 1) return 0

  const parent = Array.from({ length: n }, (_, i) => i)
  const find = (x: number): number => {
    let root = x
    while (parent[root] !== root) root = parent[root]!
    let cur = x
    while (parent[cur] !== root) {
      const next = parent[cur]!
      parent[cur] = root
      cur = next
    }
    return root
  }

  const sorted = logs.slice().sort((a, b) => a[0] - b[0])
  let components = n

  for (const [time, a, b] of sorted) {
    const rootA = find(a)
    const rootB = find(b)
    if (rootA !== rootB) {
      parent[rootA] = rootB
      components--
      if (components === 1) return time
    }
  }

  return -1
}

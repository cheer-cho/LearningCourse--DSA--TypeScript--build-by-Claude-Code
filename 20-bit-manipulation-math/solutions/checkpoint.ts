// Reference solution — checkpoint 20
// Pattern: the full module-20 toolkit applied to a hardware-diagnostics
// theme.
// parityReport: Kernighan's popcount loop per packet + XOR fold for the
//   checksum — O(sum of popcounts) time, O(n) output space.
// findFaultySensor: XOR fold over all readings (pairs cancel, odd one
//   out survives) — O(n) time, O(1) space.
// firmwareGridRotate: transpose then reverse each row — O(n²) time,
//   O(1) extra space.
// primeChannelIds: Sieve of Eratosthenes — O(n log log n) time, O(n) space.

export function parityReport(packets: number[]): {
  perPacketBitCounts: number[]
  overallChecksum: number
} {
  const perPacketBitCounts: number[] = []
  let overallChecksum = 0
  for (const packet of packets) {
    let count = 0
    let n = packet
    while (n !== 0) {
      n &= n - 1 // Kernighan: drop lowest set bit
      count++
    }
    perPacketBitCounts.push(count)
    overallChecksum ^= packet
  }
  return { perPacketBitCounts, overallChecksum }
}

export function findFaultySensor(readings: number[]): number {
  let result = 0
  for (const r of readings) result ^= r
  return result
}

export function firmwareGridRotate(grid: number[][]): void {
  const n = grid.length
  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const tmp = grid[i]![j]!
      grid[i]![j] = grid[j]![i]!
      grid[j]![i] = tmp
    }
  }
  // Reverse each row
  for (let i = 0; i < n; i++) {
    grid[i]!.reverse()
  }
}

export function primeChannelIds(limit: number): number[] {
  if (limit < 2) return []
  const composite: boolean[] = new Array(limit + 1).fill(false)
  const primes: number[] = []
  for (let i = 2; i <= limit; i++) {
    if (!composite[i]) {
      primes.push(i)
      for (let j = i * i; j <= limit; j += i) {
        composite[j] = true
      }
    }
  }
  return primes
}

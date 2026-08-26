/**
 * CHECKPOINT 20 — Hardware diagnostics
 *
 * A hardware diagnostics subsystem uses the full module-20 toolkit.
 * Four functions covering: popcount-based parity, XOR-based fault
 * detection, in-place grid rotation, and prime enumeration via sieve.
 *
 * Passing `npm test -- 20` completes this module.
 */

/**
 * Given a list of packets (each represented as a non-negative integer
 * whose bits are the payload), produce a diagnostic report:
 *   - perPacketBitCounts: the popcount (number of 1-bits) in each packet
 *   - overallChecksum: XOR of every packet (a quick parity check — any
 *     odd-count corruption changes this value)
 *
 * Use Kernighan's trick for popcount (n & (n - 1) drops the lowest set
 * bit each iteration — O(popcount) per packet, not O(bit width)).
 *
 * @param packets - array of non-negative integers (32-bit range)
 * @returns { perPacketBitCounts: number[], overallChecksum: number }
 * edge cases: empty array -> { perPacketBitCounts: [], overallChecksum: 0 }
 * input: parityReport([5, 3, 6]) -> { perPacketBitCounts: [2, 2, 2], overallChecksum: 0 }
 *   (5 = 0b101, 3 = 0b011, 6 = 0b110; 5^3^6 = 0)
 * Target: O(sum of popcounts) time, O(n) space for the output array
 */
export function parityReport(packets: number[]): {
  perPacketBitCounts: number[]
  overallChecksum: number
} {
  throw new Error('TODO: implement me')
}

/**
 * In a sensor array, every reading is duplicated (appears exactly twice)
 * for redundancy, except one faulty sensor whose reading appears exactly
 * once. Find it.
 * Use XOR fold (the "findSingle" trick from ex02): pairs cancel to 0,
 * and the unpaired value survives.
 * @param readings - non-empty array of non-negative integers; exactly one
 *   value appears once, all others appear exactly twice
 * @returns the reading that appears exactly once
 * input: findFaultySensor([7, 3, 7, 5, 3]) -> 5
 * Target: O(n) time, O(1) space
 */
export function findFaultySensor(readings: number[]): number {
  throw new Error('TODO: implement me')
}

/**
 * Rotate a firmware image grid (square matrix) 90° clockwise in place.
 * Recipe: transpose (swap grid[i][j] with grid[j][i] for j > i) then
 * reverse each row.
 * @param grid - n×n matrix of numbers (n >= 1); mutated in place
 * @returns void
 * input: [[1,2],[3,4]] -> [[3,1],[4,2]]
 * Target: O(n²) time, O(1) extra space
 */
export function firmwareGridRotate(grid: number[][]): void {
  throw new Error('TODO: implement me')
}

/**
 * Return all prime channel IDs from 2 up to and including `limit`,
 * using the Sieve of Eratosthenes.
 * (Channel IDs are primes because primes have no sub-harmonics, so
 * two prime channels never interfere with each other's multiples.)
 * @param limit - inclusive upper bound, >= 0
 * @returns primes in ascending order
 * edge cases: limit < 2 -> []
 * input: primeChannelIds(20) -> [2, 3, 5, 7, 11, 13, 17, 19]
 * Target: O(limit * log log limit) time, O(limit) space
 */
export function primeChannelIds(limit: number): number[] {
  throw new Error('TODO: implement me')
}

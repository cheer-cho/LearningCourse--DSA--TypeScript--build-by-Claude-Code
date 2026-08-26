import { describe, expect, it } from 'vitest'
import { findFaultySensor, firmwareGridRotate, parityReport, primeChannelIds } from './checkpoint'

describe('checkpoint 20 — parityReport', () => {
  it('computes per-packet popcounts and overall XOR checksum', () => {
    // 5 = 0b101 (2 bits), 3 = 0b011 (2 bits), 6 = 0b110 (2 bits); 5^3^6 = 0
    expect(parityReport([5, 3, 6])).toEqual({
      perPacketBitCounts: [2, 2, 2],
      overallChecksum: 0,
    })
  })

  it('handles an empty array', () => {
    expect(parityReport([])).toEqual({
      perPacketBitCounts: [],
      overallChecksum: 0,
    })
  })

  it('handles a single packet', () => {
    expect(parityReport([7])).toEqual({
      perPacketBitCounts: [3],
      overallChecksum: 7,
    })
  })

  it('checksum is non-zero when packets do not cancel', () => {
    // 1 ^ 2 = 3
    expect(parityReport([1, 2])).toEqual({
      perPacketBitCounts: [1, 1],
      overallChecksum: 3,
    })
  })

  it('handles a large sparse packet correctly (Kernighan: 1 iteration, not 30)', () => {
    const packet = 1073741824 // 2**30 — one set bit
    const report = parityReport([packet])
    expect(report.perPacketBitCounts[0]).toBe(1)
    expect(report.overallChecksum).toBe(packet)
  })
})

describe('checkpoint 20 — findFaultySensor', () => {
  it('finds the faulty reading among duplicated readings', () => {
    expect(findFaultySensor([7, 3, 7, 5, 3])).toBe(5)
  })

  it('handles the faulty sensor being the first element', () => {
    expect(findFaultySensor([99, 1, 1, 2, 2])).toBe(99)
  })

  it('handles a single-element array', () => {
    expect(findFaultySensor([42])).toBe(42)
  })

  it('finds the fault among ~100,000 duplicated readings', () => {
    const readings: number[] = []
    for (let i = 0; i < 50_000; i++) readings.push(i, i)
    readings.push(999_999) // the single faulty one
    // shuffle so pairs aren't adjacent
    for (let i = readings.length - 1; i > 0; i--) {
      const j = (i * 2654435761) % (i + 1)
      const a = readings[i]!
      const b = readings[j]!
      readings[i] = b
      readings[j] = a
    }
    expect(findFaultySensor(readings)).toBe(999_999)
  })
})

describe('checkpoint 20 — firmwareGridRotate', () => {
  it('rotates a 3×3 grid 90° clockwise', () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    firmwareGridRotate(grid)
    expect(grid).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ])
  })

  it('leaves a 1×1 grid unchanged', () => {
    const grid = [[5]]
    firmwareGridRotate(grid)
    expect(grid).toEqual([[5]])
  })

  it('four rotations restore the original', () => {
    const original = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]
    const grid = original.map((row) => [...row])
    for (let i = 0; i < 4; i++) firmwareGridRotate(grid)
    expect(grid).toEqual(original)
  })
})

describe('checkpoint 20 — primeChannelIds', () => {
  it('returns primes up to 20', () => {
    expect(primeChannelIds(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19])
  })

  it('returns [] for limit < 2', () => {
    expect(primeChannelIds(1)).toEqual([])
    expect(primeChannelIds(0)).toEqual([])
  })

  it('returns [2] for limit = 2', () => {
    expect(primeChannelIds(2)).toEqual([2])
  })

  it('efficiency test: sieve of 1_000_000 runs instantly with correct count', () => {
    const primes = primeChannelIds(1_000_000)
    // There are 78498 primes up to 1,000,000
    expect(primes.length).toBe(78498)
    expect(primes[0]).toBe(2)
    expect(primes[primes.length - 1]).toBe(999983)
  })
})

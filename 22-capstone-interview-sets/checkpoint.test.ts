// Checkpoint — final-mock: 4 fresh problems (1 easy, 2 medium, 1 hard), no pattern labels.
// Passing this checkpoint means you have completed the entire DSA course. Congratulations! 🎓
import { describe, it, expect } from 'vitest'
import {
  countPairsDivisible,
  longestBalancedStretch,
  minRoomsNeeded,
  earliestFullConnection,
} from './checkpoint'

describe('checkpoint', () => {
  // ── Problem 1: countPairsDivisible ──────────────────────────────────────────

  describe('countPairsDivisible', () => {
    it('counts pairs whose sum is divisible — basic', () => {
      // (1,2)=3, (1,5)=6, (2,4)=6, (3,6)=9, (4,5)=9 → 5 pairs
      expect(countPairsDivisible([1, 2, 3, 4, 5, 6], 3)).toBe(5)
    })

    it('returns 0 for an empty array', () => {
      expect(countPairsDivisible([], 3)).toBe(0)
    })

    it('counts all pairs when every element is divisible', () => {
      // (3,6)=9, (3,9)=12, (6,9)=15 → C(3,2) = 3 pairs
      expect(countPairsDivisible([3, 6, 9], 3)).toBe(3)
    })

    it('finds a single qualifying pair', () => {
      // only 2+3=5 is divisible by 5
      expect(countPairsDivisible([1, 2, 3], 5)).toBe(1)
    })

    it('counts all pairs when divisor is 1 (every sum qualifies)', () => {
      // C(4,2) = 6 pairs, all divisible by 1
      expect(countPairsDivisible([0, 0, 0, 0], 1)).toBe(6)
    })

    it('efficiency: n = 200_000 completes and is correct', () => {
      const n = 200_000
      // All elements ≡ 1 (mod 2): a pair sums to 2 ≡ 0 — every pair counts.
      const nums = Array.from({ length: n }, () => 1)
      expect(countPairsDivisible(nums, 2)).toBe((n * (n - 1)) / 2)
    })
  })

  // ── Problem 2: longestBalancedStretch ───────────────────────────────────────

  describe('longestBalancedStretch', () => {
    it('finds the trivial balanced pair', () => {
      expect(longestBalancedStretch([0, 1])).toBe(2)
    })

    it('finds the longest stretch inside a longer log', () => {
      // Indices 2..7 = [1,0,0,0,1,1]: three passes, three fails → length 6.
      expect(longestBalancedStretch([0, 0, 1, 0, 0, 0, 1, 1])).toBe(6)
    })

    it('returns 0 when the log never balances', () => {
      expect(longestBalancedStretch([1, 1, 1])).toBe(0)
    })

    it('returns 0 for an empty log', () => {
      expect(longestBalancedStretch([])).toBe(0)
    })

    it('returns the whole length when the full log balances', () => {
      expect(longestBalancedStretch([1, 0, 1, 1, 0, 0])).toBe(6)
    })

    it('handles a stretch that must skip the first entry', () => {
      expect(longestBalancedStretch([0, 1, 0])).toBe(2)
    })

    it('efficiency: n = 200_000 alternating entries completes and is correct', () => {
      const n = 200_000
      const results = Array.from({ length: n }, (_, i) => i % 2)
      expect(longestBalancedStretch(results)).toBe(n)
    })
  })

  // ── Problem 3: minRoomsNeeded ───────────────────────────────────────────────

  describe('minRoomsNeeded', () => {
    it('needs 2 rooms for one long session overlapping two short ones', () => {
      expect(minRoomsNeeded([[0, 30], [5, 10], [15, 20]])).toBe(2)
    })

    it('needs 1 room for non-overlapping sessions', () => {
      expect(minRoomsNeeded([[7, 10], [2, 4]])).toBe(1)
    })

    it('lets back-to-back sessions share a room (end is exclusive)', () => {
      expect(minRoomsNeeded([[1, 3], [3, 5]])).toBe(1)
    })

    it('returns 0 for no sessions', () => {
      expect(minRoomsNeeded([])).toBe(0)
    })

    it('returns 1 for a single session', () => {
      expect(minRoomsNeeded([[4, 9]])).toBe(1)
    })

    it('handles a dense mixed schedule', () => {
      expect(
        minRoomsNeeded([[1, 10], [2, 7], [3, 19], [8, 12], [10, 20], [11, 30]]),
      ).toBe(4)
    })

    it('efficiency: 100_000 nested sessions complete and are correct', () => {
      const n = 100_000
      // Session i = [i, 200_000 - i): all sessions overlap at time 100_000.
      const sessions: [number, number][] = Array.from(
        { length: n },
        (_, i) => [i, 200_000 - i] as [number, number],
      )
      expect(minRoomsNeeded(sessions)).toBe(n)
    })
  })

  // ── Problem 4: earliestFullConnection ───────────────────────────────────────

  describe('earliestFullConnection', () => {
    it('finds the timestamp of the final connecting message', () => {
      expect(earliestFullConnection(4, [[3, 2, 3], [0, 0, 1], [1, 1, 2]])).toBe(3)
    })

    it('returns -1 when the workspace never fully connects', () => {
      expect(earliestFullConnection(2, [])).toBe(-1)
      expect(earliestFullConnection(3, [[5, 0, 1]])).toBe(-1)
    })

    it('returns 0 for a single-member workspace', () => {
      expect(earliestFullConnection(1, [])).toBe(0)
    })

    it('ignores redundant messages between already-connected members', () => {
      // The t=2 message repeats an existing acquaintance; t=5 connects all.
      expect(earliestFullConnection(3, [[1, 0, 1], [2, 0, 1], [5, 1, 2]])).toBe(5)
    })

    it('handles logs arriving badly out of order', () => {
      expect(
        earliestFullConnection(4, [[9, 0, 3], [2, 1, 2], [4, 0, 1], [7, 2, 3]]),
      ).toBe(7)
    })

    it('efficiency: 100_000 members with shuffled chain logs is correct', () => {
      const n = 100_000
      // Edge (i, i+1) at time i+1, delivered in reverse order.
      const logs: [number, number, number][] = []
      for (let i = n - 2; i >= 0; i--) {
        logs.push([i + 1, i, i + 1])
      }
      expect(earliestFullConnection(n, logs)).toBe(n - 1)
    })
  })
})

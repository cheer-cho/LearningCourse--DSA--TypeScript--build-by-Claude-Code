import { describe, it, expect } from 'vitest'
import {
  isMergedStream,
  minTrailEffort,
  runningMedian,
  minWindowCoverage,
} from './ex03-set-hard'

describe('ex03 — Hard timed set', () => {
  // ─── isMergedStream ──────────────────────────────────────────────────────────

  describe('isMergedStream', () => {
    it('accepts a valid interleaving of two logs', () => {
      expect(isMergedStream('aabcc', 'dbbca', 'aadbbcbcac')).toBe(true)
    })

    it('rejects a stream that breaks one log\'s internal order', () => {
      expect(isMergedStream('aabcc', 'dbbca', 'aadbbbaccc')).toBe(false)
    })

    it('accepts three empty strings', () => {
      expect(isMergedStream('', '', '')).toBe(true)
    })

    it('handles one empty log (merged must equal the other log)', () => {
      expect(isMergedStream('abc', '', 'abc')).toBe(true)
      expect(isMergedStream('abc', '', 'abd')).toBe(false)
    })

    it('rejects a merged stream of the wrong length', () => {
      expect(isMergedStream('a', 'b', 'abc')).toBe(false)
    })

    it('accepts a simple two-character interleaving', () => {
      expect(isMergedStream('a', 'b', 'ab')).toBe(true)
      expect(isMergedStream('a', 'b', 'ba')).toBe(true)
    })

    it('efficiency: two 1000-char logs complete and are correct', () => {
      const a = 'ab'.repeat(500)
      const b = 'ab'.repeat(500)
      const merged = 'aabb'.repeat(500)
      expect(isMergedStream(a, b, merged)).toBe(true)
    })
  })

  // ─── minTrailEffort ──────────────────────────────────────────────────────────

  describe('minTrailEffort', () => {
    it('routes around the peak in the classic 3x3 example', () => {
      expect(minTrailEffort([[1, 2, 2], [3, 8, 2], [5, 3, 5]])).toBe(2)
    })

    it('finds the gentle staircase route', () => {
      expect(minTrailEffort([[1, 2, 3], [3, 8, 4], [5, 3, 5]])).toBe(1)
    })

    it('finds a zero-effort route when one exists', () => {
      expect(
        minTrailEffort([
          [1, 2, 1, 1, 1],
          [1, 2, 1, 2, 1],
          [1, 2, 1, 2, 1],
          [1, 2, 1, 2, 1],
          [1, 1, 1, 2, 1],
        ]),
      ).toBe(0)
    })

    it('returns 0 for a single-cell grid', () => {
      expect(minTrailEffort([[7]])).toBe(0)
    })

    it('returns the single step change for a two-cell grid', () => {
      expect(minTrailEffort([[1], [10]])).toBe(9)
    })

    it('efficiency: a 200x200 grid completes and is correct', () => {
      const size = 200
      // Checkerboard heights: every single step changes by exactly 100.
      const heights = Array.from({ length: size }, (_, r) =>
        Array.from({ length: size }, (_, c) => ((r + c) % 2) * 100),
      )
      expect(minTrailEffort(heights)).toBe(100)
    })
  })

  // ─── runningMedian ───────────────────────────────────────────────────────────

  describe('runningMedian', () => {
    it('single element → [that element]', () => {
      expect(runningMedian([1])).toEqual([1])
    })

    it('[1, 2] → [1, 1.5]', () => {
      expect(runningMedian([1, 2])).toEqual([1, 1.5])
    })

    it('[3, 1, 2] → [3, 2, 2]', () => {
      // after 3: [3]→3; after 1: [1,3]→2; after 2: [1,2,3]→2
      expect(runningMedian([3, 1, 2])).toEqual([3, 2, 2])
    })

    it('[5, 3, 8, 1] → [5, 4, 5, 4]', () => {
      // after 5:[5]→5; after 3:[3,5]→4; after 8:[3,5,8]→5; after 1:[1,3,5,8]→4
      expect(runningMedian([5, 3, 8, 1])).toEqual([5, 4, 5, 4])
    })

    it('empty stream → []', () => {
      expect(runningMedian([])).toEqual([])
    })

    it('efficiency: n=100_000 ascending readings completes and is correct', () => {
      const n = 100_000
      const stream = Array.from({ length: n }, (_, i) => i)
      const result = runningMedian(stream)
      expect(result.length).toBe(n)
      // For 0..k-1 the median after k readings is always (k - 1) / 2.
      expect(result[0]).toBe(0)
      expect(result[999]).toBe(499.5)
      expect(result[n - 1]).toBe((n - 1) / 2)
    })
  })

  // ─── minWindowCoverage ───────────────────────────────────────────────────────

  describe('minWindowCoverage', () => {
    it('"ADOBECODEBANC", required="ABC" → "BANC"', () => {
      expect(minWindowCoverage('ADOBECODEBANC', 'ABC')).toBe('BANC')
    })

    it('single char, required matches it → that char', () => {
      expect(minWindowCoverage('a', 'a')).toBe('a')
    })

    it('only one "a" but required needs two → ""', () => {
      expect(minWindowCoverage('a', 'aa')).toBe('')
    })

    it('empty text → ""', () => {
      expect(minWindowCoverage('', 'a')).toBe('')
    })

    it('"aa", required="aa" → "aa"', () => {
      expect(minWindowCoverage('aa', 'aa')).toBe('aa')
    })

    it('"bba", required="ab" → "ba"', () => {
      // window must contain at least one 'a' and one 'b'
      // 'bba'[1..2] = 'ba' is the shortest such window
      expect(minWindowCoverage('bba', 'ab')).toBe('ba')
    })

    it('efficiency: 200_000-char text completes and is correct', () => {
      // A decoy 'a' at the front; the only full cover sits at the very end.
      const text = `a${'x'.repeat(200_000)}abc`
      expect(minWindowCoverage(text, 'abc')).toBe('abc')
    })
  })
})

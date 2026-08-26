/**
 * Tests for ex02-set-medium.ts — six medium-level interview problems.
 *
 * RED against stubs (each function throws), GREEN against solutions.
 * Check: npm test -- 22 -t ex02
 */

import { describe, it, expect } from 'vitest'
import {
  longestFreshSequence,
  smallestSerial,
  topKFrequentWords,
  longestPipelineChain,
  minFestivalCost,
  allBracketLayouts,
} from './ex02-set-medium'

// ---------------------------------------------------------------------------
// longestFreshSequence
// ---------------------------------------------------------------------------

describe('ex02 longestFreshSequence', () => {
  it('returns 3 for the longest window with at most 2 distinct songs', () => {
    // 'a','b','a' forms a window of length 3 with only {a,b}
    expect(longestFreshSequence(['a', 'b', 'a', 'c', 'd'], 2)).toBe(3)
  })

  it('returns full length when all songs are the same and k=1', () => {
    expect(longestFreshSequence(['x', 'x', 'x'], 1)).toBe(3)
  })

  it('returns 0 for an empty log', () => {
    expect(longestFreshSequence([], 2)).toBe(0)
  })

  it('returns 0 when k is 0', () => {
    expect(longestFreshSequence(['a', 'b', 'c'], 0)).toBe(0)
  })

  it('returns 1 when k=1 and all songs are distinct', () => {
    expect(longestFreshSequence(['a', 'b', 'c', 'd'], 1)).toBe(1)
  })

  it('returns 4 for a window that spans a repeated song across distinct ones', () => {
    // 'a','b','a','b' has 2 distinct → length 4 is valid (then 'c' breaks it)
    expect(longestFreshSequence(['a', 'b', 'a', 'b', 'c', 'b'], 2)).toBe(4)
  })

  it('efficiency: a 200_000-play log completes and is correct', () => {
    const n = 200_000
    // Two alternating songs, then a third song for the last quarter.
    const log = Array.from({ length: n }, (_, i) =>
      i < (3 * n) / 4 ? (i % 2 === 0 ? 'a' : 'b') : 'c',
    )
    // The alternating a/b prefix is the longest run with at most 2 songs.
    expect(longestFreshSequence(log, 2)).toBe((3 * n) / 4)
  })
})

// ---------------------------------------------------------------------------
// smallestSerial
// ---------------------------------------------------------------------------

describe('ex02 smallestSerial', () => {
  it('produces the classic 1432219 / k=3 result', () => {
    expect(smallestSerial('1432219', 3)).toBe('1219')
  })

  it('strips the leading zero exposed by a deletion', () => {
    expect(smallestSerial('10200', 1)).toBe('200')
  })

  it('returns "0" when every digit is deleted', () => {
    expect(smallestSerial('10', 2)).toBe('0')
  })

  it('deletes from the end when digits never decrease', () => {
    expect(smallestSerial('112', 1)).toBe('11')
    expect(smallestSerial('12345', 2)).toBe('123')
  })

  it('deletes from the front when digits strictly decrease', () => {
    expect(smallestSerial('54321', 2)).toBe('321')
  })

  it('returns "0" for a single digit with k=1', () => {
    expect(smallestSerial('9', 1)).toBe('0')
  })

  it('returns the serial unchanged when k=0', () => {
    expect(smallestSerial('4321', 0)).toBe('4321')
  })

  it('efficiency: a 100_000-digit serial completes and is correct', () => {
    const block = '9876543210'
    const serial = block.repeat(10_000)
    const expected = `43210${block.repeat(9_999)}`
    expect(smallestSerial(serial, 5)).toBe(expected)
  })
})

// ---------------------------------------------------------------------------
// topKFrequentWords
// ---------------------------------------------------------------------------

describe('ex02 topKFrequentWords', () => {
  it('returns the top 2 most frequent words', () => {
    expect(topKFrequentWords(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2)).toEqual([
      'i',
      'love',
    ])
  })

  it('returns top 4 words ordered by frequency then alphabetically', () => {
    // Counts: is=3, the=3, sunny=2, day=1 → sorted by (-count, alpha)
    expect(
      topKFrequentWords(
        ['the', 'day', 'is', 'sunny', 'the', 'the', 'sunny', 'is', 'is'],
        4,
      ),
    ).toEqual(['is', 'the', 'sunny', 'day'])
  })

  it('returns a single word for a single-element word list', () => {
    expect(topKFrequentWords(['a'], 1)).toEqual(['a'])
  })

  it('breaks ties alphabetically — a before b when counts are equal', () => {
    // 'a' and 'b' each appear 2 times; k=1 → 'a' wins
    expect(topKFrequentWords(['b', 'a', 'b', 'a'], 1)).toEqual(['a'])
  })

  it('handles k equal to the number of unique words', () => {
    const result = topKFrequentWords(['c', 'b', 'a'], 3)
    expect(result).toHaveLength(3)
    expect(result).toContain('a')
    expect(result).toContain('b')
    expect(result).toContain('c')
  })

  it('efficiency: 200_000 words complete and pick the right top-3', () => {
    // Deterministic skew: 'hot' > 'warm' > 'mild' in count, plus 10_000
    // filler words that each appear once. A size-k heap stays O(n log
    // k); a full sort over ~10_000 distinct words would still finish,
    // but this pins down an exact expected answer either way.
    const words: string[] = []
    for (let i = 0; i < 100_000; i++) words.push('hot')
    for (let i = 0; i < 60_000; i++) words.push('warm')
    for (let i = 0; i < 30_000; i++) words.push('mild')
    for (let i = 0; i < 10_000; i++) words.push(`filler-${i}`)
    expect(words).toHaveLength(200_000)
    expect(topKFrequentWords(words, 3)).toEqual(['hot', 'warm', 'mild'])
  })
})

// ---------------------------------------------------------------------------
// longestPipelineChain
// ---------------------------------------------------------------------------

describe('ex02 longestPipelineChain', () => {
  it('finds the longest chain through branching dependencies', () => {
    // 0 → {1,2} → 3: longest forced chain is 0→1→3 (or 0→2→3), length 3
    expect(longestPipelineChain(4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toBe(3)
  })

  it('returns -1 when the dependencies form a cycle', () => {
    expect(longestPipelineChain(2, [[0, 1], [1, 0]])).toBe(-1)
  })

  it('returns 1 when no task depends on another', () => {
    expect(longestPipelineChain(3, [])).toBe(1)
  })

  it('returns 0 for an empty pipeline', () => {
    expect(longestPipelineChain(0, [])).toBe(0)
  })

  it('returns the full count for a strict chain', () => {
    expect(longestPipelineChain(5, [[1, 0], [2, 1], [3, 2], [4, 3]])).toBe(5)
  })

  it('detects a cycle hidden behind an innocent prefix', () => {
    // 0 → 1 is fine, but 2 and 3 depend on each other.
    expect(longestPipelineChain(4, [[1, 0], [2, 3], [3, 2]])).toBe(-1)
  })

  it('efficiency: a 100_000-task chain completes and is correct', () => {
    const n = 100_000
    const deps: [number, number][] = Array.from(
      { length: n - 1 },
      (_, i) => [i + 1, i] as [number, number],
    )
    expect(longestPipelineChain(n, deps)).toBe(n)
  })
})

// ---------------------------------------------------------------------------
// minFestivalCost
// ---------------------------------------------------------------------------

describe('ex02 minFestivalCost', () => {
  it('solves the classic 3-stall example', () => {
    // gold (2) + teal (5) + gold (3) = 10
    expect(minFestivalCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]])).toBe(10)
  })

  it('picks the cheapest color for a single stall', () => {
    expect(minFestivalCost([[17, 2, 17]])).toBe(2)
  })

  it('returns 0 for no stalls', () => {
    expect(minFestivalCost([])).toBe(0)
  })

  it('forces the second stall onto a pricier color', () => {
    // Both stalls prefer red (1), but adjacent stalls must differ: 1 + 50.
    expect(minFestivalCost([[1, 50, 50], [1, 50, 50]])).toBe(51)
  })

  it('handles all-equal costs (any valid coloring works)', () => {
    expect(minFestivalCost([[1, 1, 1], [1, 1, 1]])).toBe(2)
  })

  it('efficiency: 100_000 stalls complete and are correct', () => {
    const n = 100_000
    const costs: [number, number, number][] = Array.from({ length: n }, (_, i) =>
      i % 2 === 0 ? [1, 100, 100] : [100, 1, 100],
    )
    // Alternate red/gold at cost 1 per stall.
    expect(minFestivalCost(costs)).toBe(n)
  })
})

// ---------------------------------------------------------------------------
// allBracketLayouts
// ---------------------------------------------------------------------------

describe('ex02 allBracketLayouts', () => {
  it('returns the single layout for n=1', () => {
    expect(allBracketLayouts(1)).toEqual(['()'])
  })

  it('returns both layouts for n=2', () => {
    expect(allBracketLayouts(2).sort()).toEqual(['(())', '()()'])
  })

  it('returns all 5 layouts for n=3', () => {
    expect(allBracketLayouts(3).sort()).toEqual([
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ])
  })

  it('returns [""] for n=0', () => {
    expect(allBracketLayouts(0)).toEqual([''])
  })

  it('returns the 14 Catalan layouts for n=4, all valid', () => {
    const layouts = allBracketLayouts(4)
    expect(layouts).toHaveLength(14)
    expect(new Set(layouts).size).toBe(14) // no duplicates
    for (const layout of layouts) {
      expect(layout).toHaveLength(8)
      let depth = 0
      for (const ch of layout) {
        depth += ch === '(' ? 1 : -1
        expect(depth).toBeGreaterThanOrEqual(0)
      }
      expect(depth).toBe(0)
    }
  })
})

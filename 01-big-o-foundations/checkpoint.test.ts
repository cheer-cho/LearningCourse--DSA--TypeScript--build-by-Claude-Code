import { describe, expect, it } from 'vitest'
import { complexityReport, firstRepeated, mostCommon } from './checkpoint'

describe('✦ checkpoint 1 — performance review', () => {
  describe('mostCommon', () => {
    it('finds the outright most frequent word', () => {
      expect(mostCommon(['a', 'b', 'a', 'c', 'a'])).toBe('a')
    })

    it('breaks ties by first occurrence', () => {
      expect(mostCommon(['b', 'a', 'a', 'b'])).toBe('b')
    })

    it('handles a single word', () => {
      expect(mostCommon(['only'])).toBe('only')
    })

    it('stays fast at n = 200,000 words drawn from a small vocabulary', () => {
      const vocab: string[] = ['red', 'green', 'blue']
      const words: string[] = Array.from({ length: 200_000 }, (_, i) => vocab[i % 3]!)
      words.push('red') // breaks the tie decisively in red's favor
      expect(mostCommon(words)).toBe('red')
    })
  })

  describe('firstRepeated', () => {
    it('returns the first value seen twice', () => {
      expect(firstRepeated([2, 1, 3, 5, 3, 2])).toBe(3)
    })

    it('returns undefined when nothing repeats', () => {
      expect(firstRepeated([1, 2, 3])).toBeUndefined()
    })

    it('handles an empty array', () => {
      expect(firstRepeated([])).toBeUndefined()
    })

    it('handles adjacent duplicates', () => {
      expect(firstRepeated([1, 1, 2])).toBe(1)
    })

    it('stays fast at n = 200,000 with the only duplicate near the end', () => {
      const nums = Array.from({ length: 200_000 }, (_, i) => i)
      nums.push(199_999)
      expect(firstRepeated(nums)).toBe(199_999)
    })
  })

  describe('complexityReport', () => {
    const report = complexityReport()

    it('classifies mostCommon and firstRepeated as O(n)', () => {
      expect(report.mostCommonTime).toBe('O(n)')
      expect(report.firstRepeatedTime).toBe('O(n)')
    })

    it('classifies snippet I (binary search) as O(log n)', () => {
      expect(report.snippetITime).toBe('O(log n)')
    })

    it('classifies snippet J (constant-bounded inner loop) as O(n)', () => {
      expect(report.snippetJTime).toBe('O(n)')
    })

    it('classifies snippet K (nested loop over the same array) as O(n^2)', () => {
      expect(report.snippetKTime).toBe('O(n^2)')
    })
  })
})

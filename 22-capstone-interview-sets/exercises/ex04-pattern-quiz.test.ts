/**
 * Tests for ex04-pattern-quiz.ts
 * Each of q1..q20 must map to the exact correct pattern label.
 * Check: npm test -- 22 -t ex04
 */

import { describe, it, expect } from 'vitest'
import { patternQuiz } from './ex04-pattern-quiz'

describe('ex04 — Pattern-recognition quiz', () => {
  it('q1  — word-frequency counting → hash-map/set', () => {
    expect(patternQuiz().q1).toBe('hash-map/set')
  })

  it('q2  — two-sum on sorted array → two-pointers', () => {
    expect(patternQuiz().q2).toBe('two-pointers')
  })

  it('q3  — max product of fixed-length subarray → fixed-window', () => {
    expect(patternQuiz().q3).toBe('fixed-window')
  })

  it('q4  — longest substring without repeats → variable-window', () => {
    expect(patternQuiz().q4).toBe('variable-window')
  })

  it('q5  — count subarrays summing to k (with negatives) → prefix-sums', () => {
    expect(patternQuiz().q5).toBe('prefix-sums')
  })

  it('q6  — next greater element in histogram → monotonic-stack', () => {
    expect(patternQuiz().q6).toBe('monotonic-stack')
  })

  it('q7  — validate nested HTML tags → stack/queue', () => {
    expect(patternQuiz().q7).toBe('stack/queue')
  })

  it('q8  — leftmost insertion position in sorted array → binary-search', () => {
    expect(patternQuiz().q8).toBe('binary-search')
  })

  it('q9  — minimum steps in unweighted maze → BFS', () => {
    expect(patternQuiz().q9).toBe('BFS')
  })

  it('q10 — generate every subset → DFS/backtracking', () => {
    expect(patternQuiz().q10).toBe('DFS/backtracking')
  })

  it('q11 — merge k sorted lists → heap/priority-queue', () => {
    expect(patternQuiz().q11).toBe('heap/priority-queue')
  })

  it('q12 — course schedule cycle detection → topological-sort', () => {
    expect(patternQuiz().q12).toBe('topological-sort')
  })

  it('q13 — dynamic connectivity queries → union-find', () => {
    expect(patternQuiz().q13).toBe('union-find')
  })

  it('q14 — minimum meeting rooms needed → greedy', () => {
    expect(patternQuiz().q14).toBe('greedy')
  })

  it('q15 — ways to climb n stairs (1/2/3 steps) → DP-1D', () => {
    expect(patternQuiz().q15).toBe('DP-1D')
  })

  it('q16 — minimum cost path through grid → DP-2D', () => {
    expect(patternQuiz().q16).toBe('DP-2D')
  })

  it('q17 — shortest weighted travel time from source → Dijkstra', () => {
    expect(patternQuiz().q17).toBe('Dijkstra')
  })

  it('q18 — range-sum queries with point updates → segment-tree', () => {
    expect(patternQuiz().q18).toBe('segment-tree')
  })

  it('q19 — find dictionary words in letter grid → trie', () => {
    expect(patternQuiz().q19).toBe('trie')
  })

  it('q20 — running median from a stream → two-heaps', () => {
    expect(patternQuiz().q20).toBe('two-heaps')
  })
})

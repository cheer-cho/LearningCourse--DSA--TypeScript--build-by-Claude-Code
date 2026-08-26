import { describe, expect, it, vi } from 'vitest'
import { bucketByGrade, rankPlayers, topKScores, type PlayerRecord } from './checkpoint'

function player(name: string, score: number, wins: number, joined: number): PlayerRecord {
  return { name, score, wins, joined }
}

describe('checkpoint — rankPlayers', () => {
  it('ranks by score descending', () => {
    const records = [player('a', 10, 1, 1), player('b', 30, 1, 1), player('c', 20, 1, 1)]
    expect(rankPlayers(records).map((r) => r.name)).toEqual(['b', 'c', 'a'])
  })

  it('breaks score ties by wins descending', () => {
    const records = [player('a', 20, 2, 1), player('b', 20, 5, 1), player('c', 20, 3, 1)]
    expect(rankPlayers(records).map((r) => r.name)).toEqual(['b', 'c', 'a'])
  })

  it('breaks score+wins ties by joined ascending', () => {
    const records = [player('a', 20, 2, 5), player('b', 20, 2, 1), player('c', 20, 2, 3)]
    expect(rankPlayers(records).map((r) => r.name)).toEqual(['b', 'c', 'a'])
  })

  it('is stable when every key ties', () => {
    const records = [player('a', 10, 1, 1), player('b', 10, 1, 1), player('c', 10, 1, 1)]
    expect(rankPlayers(records).map((r) => r.name)).toEqual(['a', 'b', 'c'])
  })

  it('does not mutate the input', () => {
    const records = [player('a', 10, 1, 1), player('b', 30, 1, 1)]
    const copy = [...records]
    rankPlayers(records)
    expect(records).toEqual(copy)
  })

  it('handles an empty array', () => {
    expect(rankPlayers([])).toEqual([])
  })
})

describe('checkpoint — topKScores', () => {
  it('returns the top k, highest-ranked first', () => {
    const records = [player('a', 10, 1, 1), player('b', 30, 1, 1), player('c', 20, 1, 1), player('d', 5, 1, 1)]
    expect(topKScores(records, 2).map((r) => r.name)).toEqual(['b', 'c'])
  })

  it('matches rankPlayers for the full ordering rules within the top k', () => {
    const records = [
      player('a', 20, 2, 5),
      player('b', 20, 2, 1),
      player('c', 20, 5, 3),
      player('d', 10, 9, 9),
    ]
    expect(topKScores(records, 3).map((r) => r.name)).toEqual(['c', 'b', 'a'])
  })

  it('handles k = 0', () => {
    const records = [player('a', 10, 1, 1)]
    expect(topKScores(records, 0)).toEqual([])
  })

  it('handles k = records.length', () => {
    const records = [player('a', 10, 1, 1), player('b', 30, 1, 1)]
    expect(topKScores(records, 2).map((r) => r.name)).toEqual(['b', 'a'])
  })

  it('handles an empty array', () => {
    expect(topKScores([], 0)).toEqual([])
  })

  it('finds the top k in a large field without timing out (efficiency: no full sort target)', () => {
    const n = 200_000
    const records = Array.from({ length: n }, (_, i) => player(`p${i}`, Math.floor(Math.random() * n), 0, i))
    const k = 10
    const top = topKScores(records, k)
    expect(top.length).toBe(k)
    for (let i = 1; i < top.length; i++) {
      expect(top[i]!.score).toBeLessThanOrEqual(top[i - 1]!.score)
    }
    const maxScore = records.reduce((best, r) => Math.max(best, r.score), -Infinity)
    expect(top[0]!.score).toBe(maxScore)
  })

  it('does not fully sort all n records — partition, then sort only the k slice', () => {
    // A `.sort()`-over-everything implementation would also pass the
    // correctness tests above; this guard is what enforces the
    // quickselect-then-sort-the-slice approach. Sorting the small k
    // slice is expected and fine — sorting all n records is not.
    const n = 200_000
    const records = Array.from({ length: n }, (_, i) => player(`p${i}`, Math.floor(Math.random() * n), 0, i))
    const k = 10
    const sortSpy = vi.spyOn(Array.prototype, 'sort')

    let calledOnFullArray: boolean
    try {
      topKScores(records, k)
      calledOnFullArray = sortSpy.mock.instances.some(
        (instance) => Array.isArray(instance) && instance.length === n,
      )
    } finally {
      sortSpy.mockRestore()
    }

    expect(calledOnFullArray).toBe(false)
  })
})

describe('checkpoint — bucketByGrade', () => {
  it('buckets scores into the correct grade bands, ascending within each bucket', () => {
    const buckets = bucketByGrade([95, 82, 71, 60, 45, 90, 100, 0, 59, 88])
    expect(buckets.A).toEqual([90, 95, 100])
    expect(buckets.B).toEqual([82, 88])
    expect(buckets.C).toEqual([71])
    expect(buckets.D).toEqual([60])
    expect(buckets.F).toEqual([0, 45, 59])
  })

  it('handles an empty array', () => {
    const buckets = bucketByGrade([])
    expect(buckets).toEqual({ F: [], D: [], C: [], B: [], A: [] })
  })

  it('handles boundary scores', () => {
    const buckets = bucketByGrade([59, 60, 69, 70, 79, 80, 89, 90])
    expect(buckets.F).toEqual([59])
    expect(buckets.D).toEqual([60, 69])
    expect(buckets.C).toEqual([70, 79])
    expect(buckets.B).toEqual([80, 89])
    expect(buckets.A).toEqual([90])
  })

  it('handles duplicate scores', () => {
    const buckets = bucketByGrade([90, 90, 90])
    expect(buckets.A).toEqual([90, 90, 90])
  })
})

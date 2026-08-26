import { describe, expect, it } from 'vitest'
import { combinationSum, combinationsOf } from './ex02-combo-sum'

function normalize(result: number[][]): string[] {
  return result.map((sub) => JSON.stringify(sub)).sort()
}

describe('ex14/ex02 — combinationsOf', () => {
  it('n = 0, k = 0 -> one empty combination', () => {
    expect(combinationsOf(0, 0)).toEqual([[]])
  })

  it('k = 0 -> one empty combination regardless of n', () => {
    expect(combinationsOf(5, 0)).toEqual([[]])
  })

  it('k = n -> exactly one combination: everything', () => {
    expect(combinationsOf(3, 3)).toEqual([[1, 2, 3]])
  })

  it('classic 4 choose 2', () => {
    expect(normalize(combinationsOf(4, 2))).toEqual(
      normalize([
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4],
      ]),
    )
  })
})

describe('ex14/ex02 — combinationSum', () => {
  it('no candidate fits -> empty result', () => {
    expect(combinationSum([5], 3)).toEqual([])
  })

  it('reuse allowed: single candidate repeated', () => {
    expect(normalize(combinationSum([2], 6))).toEqual(normalize([[2, 2, 2]]))
  })

  it('mixes a direct hit and a reused combo (prune-on-sorted path)', () => {
    expect(normalize(combinationSum([2, 3, 6, 7], 7))).toEqual(
      normalize([
        [2, 2, 3],
        [7],
      ]),
    )
  })

  it('unsorted input still works (sorts internally)', () => {
    expect(normalize(combinationSum([7, 3, 2], 7))).toEqual(
      normalize([
        [2, 2, 3],
        [7],
      ]),
    )
  })
})

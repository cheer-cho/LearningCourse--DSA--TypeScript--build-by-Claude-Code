import { describe, expect, it } from 'vitest'
import { permutations, permutationsUnique } from './ex03-permutations-drill'

function normalize(result: number[][]): string[] {
  return result.map((sub) => JSON.stringify(sub)).sort()
}

describe('ex14/ex03 — permutations', () => {
  it('empty input has exactly one permutation: the empty one', () => {
    expect(permutations([])).toEqual([[]])
  })

  it('single element', () => {
    expect(permutations([9])).toEqual([[9]])
  })

  it('two elements', () => {
    expect(normalize(permutations([1, 2]))).toEqual(
      normalize([
        [1, 2],
        [2, 1],
      ]),
    )
  })

  it('three elements: all 6 orderings', () => {
    expect(normalize(permutations([1, 2, 3]))).toEqual(
      normalize([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ]),
    )
  })
})

describe('ex14/ex03 — permutationsUnique', () => {
  it('empty input has exactly one permutation: the empty one', () => {
    expect(permutationsUnique([])).toEqual([[]])
  })

  it('all values equal: exactly one distinct permutation', () => {
    expect(permutationsUnique([2, 2, 2])).toEqual([[2, 2, 2]])
  })

  it('one duplicate pair: no repeated permutations', () => {
    expect(normalize(permutationsUnique([1, 1, 2]))).toEqual(
      normalize([
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
      ]),
    )
  })

  it('no duplicates behaves like permutations', () => {
    expect(normalize(permutationsUnique([3, 4]))).toEqual(
      normalize([
        [3, 4],
        [4, 3],
      ]),
    )
  })
})

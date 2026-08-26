import { describe, expect, it } from 'vitest'
import { insertionSort, selectionSort } from './ex01-insertion-selection'

describe('ex01 — insertion sort', () => {
  it('sorts a shuffled array', () => {
    expect(insertionSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('handles an empty array', () => {
    expect(insertionSort([])).toEqual([])
  })

  it('handles a single element', () => {
    expect(insertionSort([42])).toEqual([42])
  })

  it('handles duplicates', () => {
    expect(insertionSort([3, 1, 3, 2, 1])).toEqual([1, 1, 2, 3, 3])
  })

  it('handles negative numbers', () => {
    expect(insertionSort([-3, 5, -1, 0, -8])).toEqual([-8, -3, -1, 0, 5])
  })

  it('leaves an already-sorted array sorted', () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  it('handles an all-equal array', () => {
    expect(insertionSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7])
  })

  it('does not mutate the input', () => {
    const original = [5, 2, 4, 6, 1, 3]
    const copy = [...original]
    insertionSort(original)
    expect(original).toEqual(copy)
  })

  it('is adaptive: shift count is roughly linear on nearly-sorted input, not quadratic', () => {
    const n = 2000
    const nearlySorted = Array.from({ length: n }, (_, i) => i)
    // Swap every adjacent pair: n/2 swaps, each creating exactly one
    // inversion, so total inversions (and thus shifts) are Theta(n) —
    // nowhere near the ~n^2/4 shifts a random array would cause.
    for (let i = 0; i + 1 < n; i += 2) {
      const tmp = nearlySorted[i]!
      nearlySorted[i] = nearlySorted[i + 1]!
      nearlySorted[i + 1] = tmp
    }

    let shifts = 0
    const result = insertionSort(nearlySorted, () => {
      shifts++
    })

    expect(result).toEqual(Array.from({ length: n }, (_, i) => i))
    expect(shifts).toBeGreaterThan(0)
    expect(shifts).toBeLessThan(n) // rules out the ~n^2/4 quadratic case
  })
})

describe('ex01 — selection sort', () => {
  it('sorts a shuffled array', () => {
    expect(selectionSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('handles an empty array', () => {
    expect(selectionSort([])).toEqual([])
  })

  it('handles a single element', () => {
    expect(selectionSort([42])).toEqual([42])
  })

  it('handles duplicates', () => {
    expect(selectionSort([3, 1, 3, 2, 1])).toEqual([1, 1, 2, 3, 3])
  })

  it('handles negative numbers', () => {
    expect(selectionSort([-3, 5, -1, 0, -8])).toEqual([-8, -3, -1, 0, 5])
  })

  it('handles an already-sorted array', () => {
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  it('handles a reverse-sorted array', () => {
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  it('does not mutate the input', () => {
    const original = [5, 2, 4, 6, 1, 3]
    const copy = [...original]
    selectionSort(original)
    expect(original).toEqual(copy)
  })
})

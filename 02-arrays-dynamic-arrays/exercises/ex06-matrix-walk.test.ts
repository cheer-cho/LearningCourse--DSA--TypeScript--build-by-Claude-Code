import { describe, expect, it } from 'vitest'
import { colSums, mainDiagonal, rowSums, transpose } from './ex06-matrix-walk'

describe('rowSums', () => {
  it('sums each row of a rectangular grid', () => {
    expect(
      rowSums([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toEqual([6, 15])
  })

  it('handles a single row', () => {
    expect(rowSums([[1, 2, 3]])).toEqual([6])
  })

  it('handles negatives', () => {
    expect(
      rowSums([
        [-1, 1],
        [2, -2],
      ]),
    ).toEqual([0, 0])
  })

  it('handles an empty grid', () => {
    expect(rowSums([])).toEqual([])
  })
})

describe('colSums', () => {
  it('sums each column of a rectangular grid', () => {
    expect(
      colSums([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toEqual([5, 7, 9])
  })

  it('handles a single column', () => {
    expect(colSums([[1], [2], [3]])).toEqual([6])
  })

  it('handles an empty grid', () => {
    expect(colSums([])).toEqual([])
  })
})

describe('mainDiagonal', () => {
  it('reads the diagonal of a square grid', () => {
    expect(
      mainDiagonal([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([1, 5, 9])
  })

  it('stops at the shorter dimension for a wide grid', () => {
    expect(
      mainDiagonal([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toEqual([1, 5])
  })

  it('stops at the shorter dimension for a tall grid', () => {
    expect(
      mainDiagonal([
        [1, 2],
        [3, 4],
        [5, 6],
      ]),
    ).toEqual([1, 4])
  })

  it('handles an empty grid', () => {
    expect(mainDiagonal([])).toEqual([])
  })
})

describe('transpose', () => {
  it('transposes a square grid', () => {
    expect(
      transpose([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([
      [1, 3],
      [2, 4],
    ])
  })

  it('transposes a non-square grid', () => {
    expect(
      transpose([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ])
  })

  it('handles a single row', () => {
    expect(transpose([[1, 2, 3]])).toEqual([[1], [2], [3]])
  })

  it('handles an empty grid', () => {
    expect(transpose([])).toEqual([])
  })
})

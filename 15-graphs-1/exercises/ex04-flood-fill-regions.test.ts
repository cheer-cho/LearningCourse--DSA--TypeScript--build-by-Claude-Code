import { describe, expect, it } from 'vitest'
import { captureRegions, floodFill } from './ex04-flood-fill-regions'

describe('ex15/ex04 — floodFill', () => {
  it('repaints a connected region', () => {
    const image = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ]
    expect(floodFill(image, 0, 0, 2)).toEqual([
      [2, 2, 0],
      [2, 2, 0],
      [0, 0, 0],
    ])
  })

  it('does not spill into a different-colored region', () => {
    const image = [
      [1, 1, 2],
      [1, 1, 2],
    ]
    expect(floodFill(image, 0, 0, 5)).toEqual([
      [5, 5, 2],
      [5, 5, 2],
    ])
  })

  it('new color equal to starting color: no change, no infinite loop', () => {
    const image = [
      [3, 3],
      [3, 3],
    ]
    expect(floodFill(image, 0, 0, 3)).toEqual([
      [3, 3],
      [3, 3],
    ])
  })

  it('single-cell image', () => {
    expect(floodFill([[7]], 0, 0, 9)).toEqual([[9]])
  })

  it('original grid is not mutated', () => {
    const image = [
      [1, 1],
      [1, 1],
    ]
    const snapshot = image.map((row) => [...row])
    floodFill(image, 0, 0, 4)
    expect(image).toEqual(snapshot)
  })
})

describe('ex15/ex04 — captureRegions', () => {
  it('fully interior region gets captured', () => {
    const board = [
      ['.', '.', '.'],
      ['.', 'R', '.'],
      ['.', '.', '.'],
    ]
    expect(captureRegions(board)).toEqual([
      ['.', '.', '.'],
      ['.', 'C', '.'],
      ['.', '.', '.'],
    ])
  })

  it('border-connected region survives', () => {
    const board = [
      ['.', 'R', '.'],
      ['R', 'R', 'R'],
      ['.', '.', '.'],
    ]
    expect(captureRegions(board)).toEqual([
      ['.', 'R', '.'],
      ['R', 'R', 'R'],
      ['.', '.', '.'],
    ])
  })

  it('mixed board: one region survives via border, one gets captured', () => {
    const board = [
      ['R', '.', '.', '.'],
      ['.', '.', 'R', '.'],
      ['.', '.', 'R', '.'],
      ['.', '.', '.', '.'],
    ]
    expect(captureRegions(board)).toEqual([
      ['R', '.', '.', '.'],
      ['.', '.', 'C', '.'],
      ['.', '.', 'C', '.'],
      ['.', '.', '.', '.'],
    ])
  })

  it('all-empty board is unchanged', () => {
    const board = [
      ['.', '.'],
      ['.', '.'],
    ]
    expect(captureRegions(board)).toEqual(board)
  })

  it('every cell on the border survives trivially', () => {
    const board = [
      ['R', 'R', 'R'],
      ['R', '.', 'R'],
      ['R', 'R', 'R'],
    ]
    expect(captureRegions(board)).toEqual(board)
  })
})

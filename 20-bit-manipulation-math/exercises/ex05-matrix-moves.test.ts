import { describe, expect, it } from 'vitest'
import { rotate90InPlace, spiralOrder, zeroRowsCols } from './ex05-matrix-moves'

describe('20/ex05 — matrix moves', () => {
  describe('rotate90InPlace', () => {
    it('rotates a 3×3 grid clockwise', () => {
      const grid = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]
      rotate90InPlace(grid)
      expect(grid).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ])
    })

    it('leaves a 1×1 grid unchanged', () => {
      const grid = [[42]]
      rotate90InPlace(grid)
      expect(grid).toEqual([[42]])
    })

    it('rotates a 2×2 grid clockwise', () => {
      const grid = [
        [1, 2],
        [3, 4],
      ]
      rotate90InPlace(grid)
      expect(grid).toEqual([
        [3, 1],
        [4, 2],
      ])
    })

    it('four rotations restore the original', () => {
      const original = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]
      const grid = original.map((row) => [...row])
      for (let i = 0; i < 4; i++) rotate90InPlace(grid)
      expect(grid).toEqual(original)
    })

    it('rotates a 4×4 grid clockwise', () => {
      const grid = [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ]
      rotate90InPlace(grid)
      expect(grid).toEqual([
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
      ])
    })
  })

  describe('spiralOrder', () => {
    it('returns 3×3 grid in spiral order', () => {
      expect(
        spiralOrder([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ]),
      ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
    })

    it('returns a 1×1 grid', () => {
      expect(spiralOrder([[7]])).toEqual([7])
    })

    it('returns a single row', () => {
      expect(spiralOrder([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4])
    })

    it('returns a single column', () => {
      expect(spiralOrder([[1], [2], [3]])).toEqual([1, 2, 3])
    })

    it('returns a 3×4 rectangular grid in spiral order', () => {
      expect(
        spiralOrder([
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
        ]),
      ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
    })
  })

  describe('zeroRowsCols', () => {
    it('zeros out the row and column of a zero in the interior', () => {
      const grid = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ]
      zeroRowsCols(grid)
      expect(grid).toEqual([
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ])
    })

    it('leaves a grid with no zeros unchanged', () => {
      const grid = [
        [1, 2, 3],
        [4, 5, 6],
      ]
      zeroRowsCols(grid)
      expect(grid).toEqual([
        [1, 2, 3],
        [4, 5, 6],
      ])
    })

    it('handles a zero in the first row', () => {
      const grid = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ]
      zeroRowsCols(grid)
      expect(grid).toEqual([
        [0, 0, 0],
        [0, 4, 5],
        [0, 7, 8],
      ])
    })

    it('handles a zero in the first column', () => {
      const grid = [
        [1, 2, 3],
        [0, 5, 6],
        [7, 8, 9],
      ]
      zeroRowsCols(grid)
      expect(grid).toEqual([
        [0, 2, 3],
        [0, 0, 0],
        [0, 8, 9],
      ])
    })

    it('handles multiple zeros', () => {
      const grid = [
        [1, 2, 3, 4],
        [5, 0, 7, 8],
        [0, 10, 11, 12],
      ]
      zeroRowsCols(grid)
      expect(grid).toEqual([
        [0, 0, 3, 4],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ])
    })
  })
})

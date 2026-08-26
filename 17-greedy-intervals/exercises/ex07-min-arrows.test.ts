import { describe, expect, it } from 'vitest'
import { minArrows } from './ex07-min-arrows'

describe('17/ex07 — minArrows', () => {
  it('classic four-balloon example: 2 arrows', () => {
    // sort by end: [1,6],[2,8],[7,12],[10,16]
    // arrow at 6 pops [1,6],[2,8] (since 2<=6 and 6<=8); arrow at 12 pops [7,12],[10,16]
    expect(minArrows([[10, 16], [2, 8], [1, 6], [7, 12]])).toBe(2)
  })

  it('all disjoint: one arrow per balloon', () => {
    expect(minArrows([[1, 2], [3, 4], [5, 6], [7, 8]])).toBe(4)
  })

  it('touching at boundary: ONE arrow pops both (closed range)', () => {
    // This is the key difference from scheduling: arrow at x=2 hits both [1,2] and [2,3]
    expect(minArrows([[1, 2], [2, 3]])).toBe(1)
  })

  it('all nested: one arrow pops everything', () => {
    expect(minArrows([[1, 10], [2, 8], [3, 7]])).toBe(1)
  })

  it('empty: 0 arrows', () => {
    expect(minArrows([])).toBe(0)
  })

  it('single balloon: 1 arrow', () => {
    expect(minArrows([[5, 10]])).toBe(1)
  })

  it('three groups: 3 arrows', () => {
    // [1,3],[2,3]: one arrow; [5,7],[6,8]: one arrow; [10,12]: one arrow
    expect(minArrows([[1, 3], [2, 3], [5, 7], [6, 8], [10, 12]])).toBe(3)
  })

  it('large balloon spanning everything: 2 arrows needed', () => {
    // sort by end: [3,5],[7,9],[1,20]
    // arrow at x=5: pops [3,5] (trivial) and [1,20] (1<=5<=20); next is [7,9], 7 > 5 -> new arrow
    // arrow at x=9: pops [7,9] (done). Total: 2.
    // The large balloon [1,20] is popped by the first arrow (x=5 is inside [1,20]).
    expect(minArrows([[1, 20], [3, 5], [7, 9]])).toBe(2)
  })

  it('efficiency: 100_000 non-overlapping balloons needs 100_000 arrows', () => {
    const n = 100_000
    // [0,1],[2,3],[4,5],... — strictly non-overlapping, no touching
    const balloons: number[][] = Array.from({ length: n }, (_, i) => [i * 2, i * 2 + 1])
    expect(minArrows(balloons)).toBe(n)
  })
})

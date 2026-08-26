import { describe, expect, it } from 'vitest'
import { minutesToInfect, shortestExit } from './ex05-infection-spread'

describe('ex15/ex05 — minutesToInfect', () => {
  it('spreads from a single source across the worked-example grid', () => {
    const grid = [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ]
    expect(minutesToInfect(grid)).toBe(4)
  })

  it('multiple sources infect simultaneously, finishing faster than one source could', () => {
    const grid = [[2, 1, 1, 1, 2]]
    // Seeding the queue with BOTH sources up front: the middle cell is
    // reached in 2 minutes (from either end), not 3 as it would be from
    // a single source spreading alone.
    expect(minutesToInfect(grid)).toBe(2)
  })

  it('unreachable healthy server -> -1', () => {
    const grid = [
      [2, 0, 1],
      [0, 0, 0],
      [1, 0, 0],
    ]
    expect(minutesToInfect(grid)).toBe(-1)
  })

  it('no healthy servers at all -> 0 minutes', () => {
    expect(
      minutesToInfect([
        [2, 0],
        [0, 2],
      ]),
    ).toBe(0)
  })

  it('healthy servers with no infected source ever -> -1', () => {
    expect(minutesToInfect([[1, 1]])).toBe(-1)
  })

  it('empty grid takes 0 minutes', () => {
    expect(minutesToInfect([])).toBe(0)
  })
})

describe('ex15/ex05 — shortestExit', () => {
  it('finds the worked-example shortest exit', () => {
    const maze = [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 0],
      [1, 1, 1, 1],
    ]
    expect(shortestExit(maze, [1, 1])).toBe(3)
  })

  it('start already on the border costs 0 steps', () => {
    const maze = [
      [0, 0],
      [0, 0],
    ]
    expect(shortestExit(maze, [0, 0])).toBe(0)
  })

  it('fully walled-off interior cell cannot escape', () => {
    const maze = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ]
    expect(shortestExit(maze, [1, 1])).toBe(-1)
  })

  it('picks the nearer of two possible exits', () => {
    const maze = [
      [1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1],
    ]
    // Open corridor along row 1. (1,0) and (1,5) are both border cells
    // (col 0 / col 5), 2 and 3 steps away from (1,2) respectively — the
    // shorter one must win.
    expect(shortestExit(maze, [1, 2])).toBe(2)
  })
})

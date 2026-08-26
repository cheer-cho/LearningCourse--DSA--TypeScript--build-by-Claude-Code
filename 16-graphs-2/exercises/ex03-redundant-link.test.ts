import { describe, expect, it } from 'vitest'
import { redundantConnection, countProvinces } from './ex03-redundant-link'

describe('16/ex03 — redundantConnection', () => {
  it('finds the edge that closes a simple triangle', () => {
    expect(
      redundantConnection([
        [1, 2],
        [1, 3],
        [2, 3],
      ]),
    ).toEqual([2, 3])
  })

  it('finds the edge that closes a cycle later in a bigger tree', () => {
    expect(
      redundantConnection([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 4],
        [1, 5],
      ]),
    ).toEqual([1, 4])
  })

  it('handles the smallest possible cycle (two nodes, two edges)', () => {
    expect(
      redundantConnection([
        [1, 2],
        [2, 1],
      ]),
    ).toEqual([2, 1])
  })

  it('returns the LAST closing edge when the redundant edge is not first', () => {
    const edges: [number, number][] = [
      [1, 2],
      [3, 4],
      [2, 3],
      [4, 1],
    ]
    expect(redundantConnection(edges)).toEqual([4, 1])
  })
})

describe('16/ex03 — countProvinces', () => {
  it('counts two provinces', () => {
    expect(
      countProvinces([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ]),
    ).toBe(2)
  })

  it('counts one province when everything connects', () => {
    expect(
      countProvinces([
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
      ]),
    ).toBe(1)
  })

  it('counts n provinces when nothing connects', () => {
    expect(
      countProvinces([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toBe(3)
  })

  it('handles a single city', () => {
    expect(countProvinces([[1]])).toBe(1)
  })

  it('handles indirect connections (a-b, b-c but not a-c directly)', () => {
    expect(
      countProvinces([
        [1, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 1],
      ]),
    ).toBe(2)
  })
})

import { describe, expect, it } from 'vitest'
import { BST, treeFromLevelArray, treeToLevelArray } from './ex01-build-bst'

describe('ex01 — treeFromLevelArray / treeToLevelArray', () => {
  it('round-trips an empty tree', () => {
    expect(treeFromLevelArray([])).toBeNull()
    expect(treeToLevelArray(null)).toEqual([])
  })

  it('round-trips a single node', () => {
    const root = treeFromLevelArray([5])
    expect(root?.value).toBe(5)
    expect(treeToLevelArray(root)).toEqual([5])
  })

  it('round-trips a tree with gaps', () => {
    const values = [8, 3, 10, 1, 6, null, 14]
    const root = treeFromLevelArray(values)
    expect(root?.value).toBe(8)
    expect(root?.left?.value).toBe(3)
    expect(root?.right?.value).toBe(10)
    expect(root?.left?.left?.value).toBe(1)
    expect(root?.left?.right?.value).toBe(6)
    expect(root?.right?.left).toBeNull()
    expect(root?.right?.right?.value).toBe(14)
    expect(treeToLevelArray(root)).toEqual(values)
  })

  it('a null root produces an empty tree', () => {
    expect(treeFromLevelArray([null])).toBeNull()
  })

  it('trims trailing nulls to a canonical array', () => {
    const root = treeFromLevelArray([1, 2])
    // level array would naively be [1, 2, null] before trimming
    expect(treeToLevelArray(root)).toEqual([1, 2])
  })
})

describe('ex01 — BST', () => {
  it('starts empty', () => {
    const bst = new BST()
    expect(bst.root).toBeNull()
    expect(bst.contains(1)).toBe(false)
    expect(bst.minValue()).toBeNull()
    expect(bst.maxValue()).toBeNull()
    expect(bst.toSortedArray()).toEqual([])
  })

  it('inserts and finds values', () => {
    const bst = new BST()
    for (const v of [5, 2, 8, 1, 3, 7, 9]) bst.insert(v)
    expect(bst.contains(7)).toBe(true)
    expect(bst.contains(4)).toBe(false)
  })

  it('ignores duplicate inserts', () => {
    const bst = new BST()
    bst.insert(5)
    bst.insert(5)
    bst.insert(5)
    expect(bst.toSortedArray()).toEqual([5])
  })

  it('tracks min and max', () => {
    const bst = new BST()
    for (const v of [5, 2, 8, 1, 9]) bst.insert(v)
    expect(bst.minValue()).toBe(1)
    expect(bst.maxValue()).toBe(9)
  })

  it('a single-node tree has equal min and max', () => {
    const bst = new BST()
    bst.insert(42)
    expect(bst.minValue()).toBe(42)
    expect(bst.maxValue()).toBe(42)
  })

  it('toSortedArray always comes out ascending regardless of insert order', () => {
    const bst = new BST()
    for (const v of [50, 10, 90, 5, 20, 80, 95, 1]) bst.insert(v)
    expect(bst.toSortedArray()).toEqual([1, 5, 10, 20, 50, 80, 90, 95])
  })

  it('handles negative values', () => {
    const bst = new BST()
    for (const v of [-5, -10, 0, 10, -1]) bst.insert(v)
    expect(bst.toSortedArray()).toEqual([-10, -5, -1, 0, 10])
  })
})

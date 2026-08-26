import { describe, expect, it } from 'vitest'
import { UnionFind } from './ex02-build-union-find'

describe('16/ex02 — UnionFind built from scratch', () => {
  it('starts with every element its own component', () => {
    const uf = new UnionFind(5)
    expect(uf.componentCount()).toBe(5)
    for (let i = 0; i < 5; i++) expect(uf.find(i)).toBe(i)
    expect(uf.connected(0, 1)).toBe(false)
  })

  it('an element is always connected to itself', () => {
    const uf = new UnionFind(3)
    expect(uf.connected(2, 2)).toBe(true)
  })

  it('union merges two components and drops the count', () => {
    const uf = new UnionFind(4)
    expect(uf.union(0, 1)).toBe(true)
    expect(uf.componentCount()).toBe(3)
    expect(uf.connected(0, 1)).toBe(true)
  })

  it('union on an already-connected pair returns false and changes nothing', () => {
    const uf = new UnionFind(3)
    uf.union(0, 1)
    expect(uf.union(0, 1)).toBe(false)
    expect(uf.componentCount()).toBe(2)
  })

  it('union is transitive across chained merges', () => {
    const uf = new UnionFind(5)
    uf.union(0, 1)
    uf.union(1, 2)
    expect(uf.connected(0, 2)).toBe(true)
    expect(uf.connected(2, 0)).toBe(true)
    expect(uf.connected(0, 3)).toBe(false)
  })

  it('find returns the same root for every member after several merges', () => {
    const uf = new UnionFind(6)
    uf.union(0, 1)
    uf.union(2, 3)
    uf.union(1, 2)
    const root = uf.find(0)
    expect(uf.find(1)).toBe(root)
    expect(uf.find(2)).toBe(root)
    expect(uf.find(3)).toBe(root)
    expect(uf.find(4)).not.toBe(root)
  })

  it('merging everything leaves exactly one component', () => {
    const uf = new UnionFind(10)
    for (let i = 1; i < 10; i++) uf.union(0, i)
    expect(uf.componentCount()).toBe(1)
    for (let i = 0; i < 10; i++) expect(uf.connected(0, i)).toBe(true)
  })

  it('throws on an out-of-range element', () => {
    const uf = new UnionFind(3)
    expect(() => uf.find(3)).toThrow()
    expect(() => uf.find(-1)).toThrow()
  })

  it('handles n = 1 (a single, already-connected element)', () => {
    const uf = new UnionFind(1)
    expect(uf.componentCount()).toBe(1)
    expect(uf.connected(0, 0)).toBe(true)
  })

  it('performs 200_000 mixed union/connected ops efficiently (punishes no compression)', () => {
    const n = 200_000
    const uf = new UnionFind(n)

    // Chain unions: without path compression AND union by rank, this
    // pattern can make the tree degrade toward a straight-line chain
    // of depth n.
    for (let i = 1; i < n; i++) uf.union(i - 1, i)

    // A naive O(n)-per-find implementation would make these 200_000
    // queries cost O(n * q) — far too slow. Amortized-O(1) find keeps
    // this fast.
    for (let i = 0; i < 200_000; i++) {
      const a = Math.floor(Math.random() * n)
      const b = Math.floor(Math.random() * n)
      expect(uf.connected(a, b)).toBe(true)
    }
    expect(uf.componentCount()).toBe(1)
  }, 10_000)
})

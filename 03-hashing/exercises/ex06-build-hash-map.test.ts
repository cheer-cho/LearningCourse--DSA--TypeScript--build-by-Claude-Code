import { describe, it, expect } from 'vitest'
import { HashMap } from './ex06-build-hash-map'

describe('HashMap basics', () => {
  it('stores and retrieves string keys', () => {
    const map = new HashMap<string, number>()
    map.set('a', 1)
    map.set('b', 2)
    expect(map.get('a')).toBe(1)
    expect(map.get('b')).toBe(2)
    expect(map.get('c')).toBeUndefined()
  })

  it('stores and retrieves integer keys', () => {
    const map = new HashMap<number, string>()
    map.set(1, 'one')
    map.set(2, 'two')
    expect(map.get(1)).toBe('one')
    expect(map.get(2)).toBe('two')
  })

  it('overwrites an existing key without growing size', () => {
    const map = new HashMap<string, number>()
    map.set('x', 1)
    map.set('x', 2)
    expect(map.get('x')).toBe(2)
    expect(map.size()).toBe(1)
  })

  it('reports has() correctly', () => {
    const map = new HashMap<string, number>()
    map.set('x', 1)
    expect(map.has('x')).toBe(true)
    expect(map.has('y')).toBe(false)
  })

  it('deletes a key and updates size', () => {
    const map = new HashMap<string, number>()
    map.set('x', 1)
    map.set('y', 2)
    expect(map.delete('x')).toBe(true)
    expect(map.get('x')).toBeUndefined()
    expect(map.size()).toBe(1)
  })

  it('returns false deleting a key that is not present', () => {
    const map = new HashMap<string, number>()
    expect(map.delete('missing')).toBe(false)
  })

  it('lists all keys after mixed operations', () => {
    const map = new HashMap<string, number>()
    map.set('a', 1)
    map.set('b', 2)
    map.set('c', 3)
    map.delete('b')
    expect(new Set(map.keys())).toEqual(new Set(['a', 'c']))
  })

  it('starts empty', () => {
    const map = new HashMap<string, number>()
    expect(map.size()).toBe(0)
    expect(map.keys()).toEqual([])
  })

  it('handles colliding keys landing in the same bucket', () => {
    const map = new HashMap<string, number>(1) // one bucket -> everything collides
    map.set('one', 1)
    map.set('two', 2)
    map.set('three', 3)
    expect(map.get('one')).toBe(1)
    expect(map.get('two')).toBe(2)
    expect(map.get('three')).toBe(3)
    expect(map.size()).toBe(3)
    expect(map.delete('two')).toBe(true)
    expect(map.get('two')).toBeUndefined()
    expect(map.get('one')).toBe(1)
    expect(map.get('three')).toBe(3)
  })
})

describe('HashMap resize', () => {
  it('grows bucket count once the load factor is exceeded', () => {
    const map = new HashMap<number, number>(4)
    const before = map.bucketCount()
    for (let i = 0; i < 10; i++) map.set(i, i)
    expect(map.bucketCount()).toBeGreaterThan(before)
  })

  it('keeps every key retrievable across multiple resizes', () => {
    const map = new HashMap<number, number>(4)
    for (let i = 0; i < 500; i++) map.set(i, i * i)
    for (let i = 0; i < 500; i++) expect(map.get(i)).toBe(i * i)
    expect(map.size()).toBe(500)
  })
})

describe('HashMap under load', () => {
  it('matches a reference Map across 10,000 mixed set/get/delete operations', () => {
    const map = new HashMap<number, number>()
    const reference = new Map<number, number>()

    for (let i = 0; i < 10_000; i++) {
      const key = i % 3_000
      const op = i % 5
      if (op < 3) {
        map.set(key, i)
        reference.set(key, i)
      } else if (op === 3) {
        expect(map.get(key)).toBe(reference.get(key))
      } else {
        expect(map.delete(key)).toBe(reference.delete(key))
      }
    }

    expect(map.size()).toBe(reference.size)
    for (const [key, value] of reference) {
      expect(map.get(key)).toBe(value)
    }
    expect(new Set(map.keys())).toEqual(new Set(reference.keys()))
    expect(map.bucketCount()).toBeGreaterThan(8) // resized at least once
  })
})

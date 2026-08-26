import { describe, expect, it } from 'vitest'
import { LRUCache } from './ex07-lru-cache'

describe('ex07 - LRUCache', () => {
  it('returns undefined for a missing key', () => {
    const cache = new LRUCache<string, number>(2)
    expect(cache.get('a')).toBeUndefined()
  })

  it('stores and retrieves a value', () => {
    const cache = new LRUCache<string, number>(2)
    cache.put('a', 1)
    expect(cache.get('a')).toBe(1)
  })

  it('put on an existing key updates its value', () => {
    const cache = new LRUCache<string, number>(2)
    cache.put('a', 1)
    cache.put('a', 2)
    expect(cache.get('a')).toBe(2)
  })

  it('evicts the least-recently-used entry on overflow', () => {
    const cache = new LRUCache<string, number>(2)
    cache.put('a', 1)
    cache.put('b', 2)
    cache.put('c', 3) // evicts 'a' (nothing has touched it since insert)
    expect(cache.get('a')).toBeUndefined()
    expect(cache.get('b')).toBe(2)
    expect(cache.get('c')).toBe(3)
  })

  it('get refreshes recency, saving a key from eviction', () => {
    const cache = new LRUCache<string, number>(2)
    cache.put('a', 1)
    cache.put('b', 2)
    cache.get('a') // 'a' is now more recent than 'b'
    cache.put('c', 3) // evicts 'b', not 'a'
    expect(cache.get('a')).toBe(1)
    expect(cache.get('b')).toBeUndefined()
    expect(cache.get('c')).toBe(3)
  })

  it('put on an existing key also refreshes recency', () => {
    const cache = new LRUCache<string, number>(2)
    cache.put('a', 1)
    cache.put('b', 2)
    cache.put('a', 10) // 'a' is now more recent than 'b'
    cache.put('c', 3) // evicts 'b'
    expect(cache.get('a')).toBe(10)
    expect(cache.get('b')).toBeUndefined()
  })

  it('handles capacity 1', () => {
    const cache = new LRUCache<string, number>(1)
    cache.put('a', 1)
    cache.put('b', 2)
    expect(cache.get('a')).toBeUndefined()
    expect(cache.get('b')).toBe(2)
  })

  it('efficiency: 100_000 mixed get/put ops at capacity 500 stay fast', () => {
    const capacity = 500
    const cache = new LRUCache<number, number>(capacity)
    for (let i = 0; i < 100_000; i++) {
      const key = i % (capacity * 2)
      if (i % 3 === 0) {
        cache.put(key, i)
      } else {
        cache.get(key)
      }
    }
    // Sanity: the most recently inserted key is present.
    const lastKey = 99_999 % (capacity * 2)
    expect(cache.get(lastKey)).toBeDefined()
  })
})

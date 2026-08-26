import { describe, expect, it } from 'vitest'
import { MinHeap } from './ex01-build-min-heap'

describe('12/ex01 — MinHeap built from scratch', () => {
  it('push then pop returns values in ascending order', () => {
    const heap = new MinHeap()
    heap.push(5)
    heap.push(3)
    heap.push(8)
    heap.push(1)
    expect(heap.pop()).toBe(1)
    expect(heap.pop()).toBe(3)
    expect(heap.pop()).toBe(5)
    expect(heap.pop()).toBe(8)
  })

  it('peek returns the minimum without removing it', () => {
    const heap = new MinHeap()
    heap.push(4)
    heap.push(2)
    expect(heap.peek()).toBe(2)
    expect(heap.size()).toBe(2)
  })

  it('throws when popping or peeking an empty heap', () => {
    const heap = new MinHeap()
    expect(() => heap.pop()).toThrow()
    expect(() => heap.peek()).toThrow()
  })

  it('isEmpty and size track the heap contents', () => {
    const heap = new MinHeap()
    expect(heap.isEmpty()).toBe(true)
    heap.push(1)
    expect(heap.isEmpty()).toBe(false)
    expect(heap.size()).toBe(1)
    heap.pop()
    expect(heap.isEmpty()).toBe(true)
  })

  it('pops duplicates the correct number of times, still in order', () => {
    const heap = new MinHeap()
    for (const v of [2, 2, 1, 1, 3, 1]) heap.push(v)
    const popped: number[] = []
    while (!heap.isEmpty()) popped.push(heap.pop())
    expect(popped).toEqual([1, 1, 1, 2, 2, 3])
  })

  it('heapify builds a valid heap from an existing array in one shot', () => {
    const nums = Array.from({ length: 500 }, () => Math.floor(Math.random() * 1000) - 500)
    const heap = MinHeap.heapify(nums)
    const popped: number[] = []
    while (!heap.isEmpty()) popped.push(heap.pop())
    expect(popped).toEqual([...nums].sort((a, b) => a - b))
  })

  it('heapify does not mutate the input array', () => {
    const nums = [5, 3, 8, 1]
    const copy = [...nums]
    MinHeap.heapify(nums)
    expect(nums).toEqual(copy)
  })

  it('heapify handles an empty array', () => {
    const heap = MinHeap.heapify([])
    expect(heap.isEmpty()).toBe(true)
  })

  it('matches a sorted-array oracle across 1000 random push/pop ops', () => {
    const heap = new MinHeap()
    const oracle: number[] = []
    for (let i = 0; i < 1000; i++) {
      const shouldPop = oracle.length > 0 && Math.random() < 0.5
      if (shouldPop) {
        oracle.sort((a, b) => a - b)
        expect(heap.pop()).toBe(oracle.shift()!)
      } else {
        const val = Math.floor(Math.random() * 2000) - 1000
        heap.push(val)
        oracle.push(val)
      }
    }
    oracle.sort((a, b) => a - b)
    const remaining: number[] = []
    while (!heap.isEmpty()) remaining.push(heap.pop())
    expect(remaining).toEqual(oracle)
  })
})

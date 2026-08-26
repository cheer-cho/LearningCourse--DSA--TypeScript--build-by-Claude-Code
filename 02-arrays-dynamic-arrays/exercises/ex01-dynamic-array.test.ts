import { describe, expect, it } from 'vitest'
import { DynamicArray } from './ex01-dynamic-array'

describe('DynamicArray', () => {
  it('starts empty with capacity 1', () => {
    const a = new DynamicArray<number>()
    expect(a.size()).toBe(0)
    expect(a.capacity()).toBe(1)
  })

  it('pushes and reads back values in order', () => {
    const a = new DynamicArray<number>()
    a.push(10)
    a.push(20)
    a.push(30)
    expect(a.size()).toBe(3)
    expect(a.get(0)).toBe(10)
    expect(a.get(1)).toBe(20)
    expect(a.get(2)).toBe(30)
  })

  it('doubles capacity 1 -> 2 -> 4 -> 8 as it fills', () => {
    const a = new DynamicArray<number>()
    const caps: number[] = []
    for (let i = 0; i < 8; i++) {
      a.push(i)
      caps.push(a.capacity())
    }
    expect(caps).toEqual([1, 2, 4, 4, 8, 8, 8, 8])
  })

  it('set overwrites an existing element', () => {
    const a = new DynamicArray<number>()
    a.push(1)
    a.push(2)
    a.set(1, 99)
    expect(a.get(1)).toBe(99)
    expect(a.size()).toBe(2)
  })

  it('pop removes and returns the last element, shrinking size', () => {
    const a = new DynamicArray<string>()
    a.push('x')
    a.push('y')
    expect(a.pop()).toBe('y')
    expect(a.size()).toBe(1)
    expect(a.get(0)).toBe('x')
  })

  it('supports push/pop/push cycles without losing earlier data', () => {
    const a = new DynamicArray<number>()
    a.push(1)
    a.push(2)
    a.pop()
    a.push(3)
    a.push(4)
    expect(a.size()).toBe(3)
    expect([a.get(0), a.get(1), a.get(2)]).toEqual([1, 3, 4])
  })

  it('throws RangeError on an out-of-bounds get', () => {
    const a = new DynamicArray<number>()
    a.push(1)
    expect(() => a.get(1)).toThrow(RangeError)
    expect(() => a.get(-1)).toThrow(RangeError)
  })

  it('throws RangeError on an out-of-bounds set', () => {
    const a = new DynamicArray<number>()
    expect(() => a.set(0, 5)).toThrow(RangeError)
  })

  it('throws RangeError when popping an empty array', () => {
    const a = new DynamicArray<number>()
    expect(() => a.pop()).toThrow(RangeError)
  })

  it('handles 100_000 pushes with capacity landing on a power of two >= n', () => {
    const a = new DynamicArray<number>()
    const n = 100_000
    for (let i = 0; i < n; i++) a.push(i)
    expect(a.size()).toBe(n)

    let expectedCap = 1
    while (expectedCap < n) expectedCap *= 2
    expect(a.capacity()).toBe(expectedCap)

    expect(a.get(0)).toBe(0)
    expect(a.get(n - 1)).toBe(n - 1)
    expect(a.get(Math.floor(n / 2))).toBe(Math.floor(n / 2))
  })
})

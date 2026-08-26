import { describe, expect, it } from 'vitest'
import { MinStack } from './ex04-min-stack'

describe('ex06/ex04 — MinStack', () => {
  it('tracks the minimum as elements are pushed', () => {
    const m = new MinStack()
    m.push(5)
    expect(m.getMin()).toBe(5)
    m.push(2)
    expect(m.getMin()).toBe(2)
    m.push(7)
    expect(m.getMin()).toBe(2)
  })

  it('restores the previous minimum after popping the current one', () => {
    const m = new MinStack()
    m.push(5)
    m.push(2)
    m.push(7)
    m.pop() // removes 7
    expect(m.getMin()).toBe(2)
    m.pop() // removes 2
    expect(m.getMin()).toBe(5)
  })

  it('handles duplicate minimums correctly', () => {
    const m = new MinStack()
    m.push(1)
    m.push(1)
    m.push(1)
    expect(m.getMin()).toBe(1)
    m.pop()
    expect(m.getMin()).toBe(1)
    m.pop()
    expect(m.getMin()).toBe(1)
    m.pop()
    expect(m.isEmpty()).toBe(true)
  })

  it('handles negative numbers', () => {
    const m = new MinStack()
    m.push(-5)
    m.push(-10)
    m.push(-1)
    expect(m.getMin()).toBe(-10)
    m.pop()
    expect(m.getMin()).toBe(-10)
  })

  it('peek returns the top without affecting the min', () => {
    const m = new MinStack()
    m.push(3)
    m.push(9)
    expect(m.peek()).toBe(9)
    expect(m.getMin()).toBe(3)
    expect(m.size()).toBe(2)
  })

  it('throws on pop/peek/getMin of an empty stack', () => {
    const m = new MinStack()
    expect(() => m.pop()).toThrow()
    expect(() => m.peek()).toThrow()
    expect(() => m.getMin()).toThrow()
  })

  it('stays correct under a long heavily-interleaved sequence', () => {
    const m = new MinStack()
    const model: number[] = []
    const ops: Array<[number, number]> = []
    let seed = 12345
    const rand = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff
      return seed / 0x7fffffff
    }
    for (let i = 0; i < 2000; i++) {
      if (model.length === 0 || rand() < 0.6) {
        const value = Math.floor(rand() * 1000) - 500
        m.push(value)
        model.push(value)
      } else {
        m.pop()
        model.pop()
      }
      if (model.length > 0) {
        expect(m.getMin()).toBe(Math.min(...model))
      }
    }
  })
})

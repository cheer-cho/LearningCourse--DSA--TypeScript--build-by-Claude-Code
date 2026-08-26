import { describe, expect, it } from 'vitest'
import { QueueFromStacks } from './ex03-queue-via-stacks'

describe('ex06/ex03 — QueueFromStacks', () => {
  it('enqueues and dequeues in FIFO order', () => {
    const q = new QueueFromStacks<number>()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    expect(q.dequeue()).toBe(1)
    expect(q.dequeue()).toBe(2)
    expect(q.dequeue()).toBe(3)
  })

  it('front peeks the oldest element without removing it', () => {
    const q = new QueueFromStacks<string>()
    q.enqueue('a')
    q.enqueue('b')
    expect(q.front()).toBe('a')
    expect(q.size()).toBe(2)
  })

  it('interleaves enqueue and dequeue while outbox is mid-drain', () => {
    const q = new QueueFromStacks<number>()
    q.enqueue(1)
    q.enqueue(2)
    expect(q.dequeue()).toBe(1) // pours inbox -> outbox, drains 1
    q.enqueue(3) // goes to a fresh inbox
    expect(q.dequeue()).toBe(2) // still draining old outbox
    expect(q.dequeue()).toBe(3) // outbox empty -> pour again
  })

  it('tracks size and isEmpty across a long interleaved sequence', () => {
    const q = new QueueFromStacks<number>()
    expect(q.isEmpty()).toBe(true)
    for (let i = 0; i < 5; i++) q.enqueue(i)
    expect(q.size()).toBe(5)
    q.dequeue()
    q.dequeue()
    expect(q.size()).toBe(3)
    q.enqueue(5)
    expect(q.size()).toBe(4)
    while (!q.isEmpty()) q.dequeue()
    expect(q.size()).toBe(0)
  })

  it('throws on dequeue/front of an empty queue', () => {
    const q = new QueueFromStacks<number>()
    expect(() => q.dequeue()).toThrow()
    expect(() => q.front()).toThrow()
  })

  it('handles 50_000 mixed enqueue/dequeue ops without breaking FIFO order', () => {
    const q = new QueueFromStacks<number>()
    let nextIn = 0
    let nextOut = 0
    for (let i = 0; i < 50_000; i++) {
      q.enqueue(nextIn)
      nextIn++
      if (i % 3 !== 0) {
        expect(q.dequeue()).toBe(nextOut)
        nextOut++
      }
    }
    while (!q.isEmpty()) {
      expect(q.dequeue()).toBe(nextOut)
      nextOut++
    }
  })
})

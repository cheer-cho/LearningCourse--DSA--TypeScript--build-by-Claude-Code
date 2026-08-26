import { describe, expect, it } from 'vitest'
import {
  CircularQueue,
  QueueFullError,
  QueueUnderflowError,
  Stack,
  StackUnderflowError,
} from './ex01-build-stack-queue'

describe('ex06/ex01 — Stack', () => {
  it('pushes and pops in LIFO order', () => {
    const s = new Stack<number>()
    s.push(1)
    s.push(2)
    s.push(3)
    expect(s.pop()).toBe(3)
    expect(s.pop()).toBe(2)
    expect(s.pop()).toBe(1)
  })

  it('peek does not remove the top element', () => {
    const s = new Stack<number>()
    s.push(10)
    expect(s.peek()).toBe(10)
    expect(s.size()).toBe(1)
    expect(s.peek()).toBe(10)
  })

  it('tracks size and isEmpty correctly', () => {
    const s = new Stack<string>()
    expect(s.isEmpty()).toBe(true)
    s.push('a')
    expect(s.isEmpty()).toBe(false)
    expect(s.size()).toBe(1)
    s.pop()
    expect(s.isEmpty()).toBe(true)
  })

  it('throws StackUnderflowError on pop/peek of an empty stack', () => {
    const s = new Stack<number>()
    expect(() => s.pop()).toThrow(StackUnderflowError)
    expect(() => s.peek()).toThrow(StackUnderflowError)
  })

  it('grows past its initial capacity without losing order', () => {
    const s = new Stack<number>(2)
    for (let i = 0; i < 50; i++) s.push(i)
    expect(s.size()).toBe(50)
    for (let i = 49; i >= 0; i--) expect(s.pop()).toBe(i)
    expect(s.isEmpty()).toBe(true)
  })
})

describe('ex06/ex01 — CircularQueue', () => {
  it('enqueues and dequeues in FIFO order', () => {
    const q = new CircularQueue<number>(4)
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    expect(q.dequeue()).toBe(1)
    expect(q.dequeue()).toBe(2)
    expect(q.dequeue()).toBe(3)
  })

  it('front peeks without removing', () => {
    const q = new CircularQueue<number>(3)
    q.enqueue(5)
    expect(q.front()).toBe(5)
    expect(q.size()).toBe(1)
  })

  it('reuses freed slots by wrapping head/tail around', () => {
    const q = new CircularQueue<number>(3)
    q.enqueue(1)
    q.enqueue(2)
    q.dequeue() // frees slot 0
    q.enqueue(3)
    q.enqueue(4) // wraps tail back to index 0
    expect(q.dequeue()).toBe(2)
    expect(q.dequeue()).toBe(3)
    expect(q.dequeue()).toBe(4)
  })

  it('throws QueueFullError when enqueueing past capacity', () => {
    const q = new CircularQueue<number>(2)
    q.enqueue(1)
    q.enqueue(2)
    expect(() => q.enqueue(3)).toThrow(QueueFullError)
    expect(q.isFull()).toBe(true)
  })

  it('throws QueueUnderflowError on dequeue/front of an empty queue', () => {
    const q = new CircularQueue<number>(2)
    expect(() => q.dequeue()).toThrow(QueueUnderflowError)
    expect(() => q.front()).toThrow(QueueUnderflowError)
  })

  it('survives 100_000 wrap-around ops in O(1) per op (an O(n) shift-based dequeue would time out)', () => {
    const capacity = 8
    const q = new CircularQueue<number>(capacity)
    for (let i = 0; i < capacity - 1; i++) q.enqueue(i)

    let nextIn = capacity - 1
    let nextOut = 0
    for (let i = 0; i < 100_000; i++) {
      expect(q.dequeue()).toBe(nextOut)
      nextOut++
      q.enqueue(nextIn)
      nextIn++
    }
  })
})

// Reference solution — ex01
//
// Stack: pre-sized array + top index, doubling on overflow (module 02's
// amortized-resize trick). Push/pop touch only the top -> O(1) amortized.
//
// CircularQueue: fixed-capacity array + head/tail indexes that wrap via
// `% capacity`, plus a separate `count` so head === tail is never
// ambiguous between empty and full. Every op O(1), no shifting ever.

export class StackUnderflowError extends Error {}
export class QueueUnderflowError extends Error {}
export class QueueFullError extends Error {}

export class Stack<T> {
  private data: (T | undefined)[]
  private top = 0 // number of elements; also the next write index

  constructor(initialCapacity = 4) {
    this.data = new Array(Math.max(1, initialCapacity))
  }

  push(value: T): void {
    if (this.top === this.data.length) this.grow()
    this.data[this.top] = value
    this.top++
  }

  pop(): T {
    if (this.isEmpty()) throw new StackUnderflowError('pop from an empty stack')
    this.top--
    const value = this.data[this.top] as T
    this.data[this.top] = undefined
    return value
  }

  peek(): T {
    if (this.isEmpty()) throw new StackUnderflowError('peek at an empty stack')
    return this.data[this.top - 1] as T
  }

  size(): number {
    return this.top
  }

  isEmpty(): boolean {
    return this.top === 0
  }

  private grow(): void {
    const bigger: (T | undefined)[] = new Array(this.data.length * 2)
    for (let i = 0; i < this.data.length; i++) bigger[i] = this.data[i]
    this.data = bigger
  }
}

export class CircularQueue<T> {
  private data: (T | undefined)[]
  private head = 0
  private tail = 0
  private count = 0
  private readonly capacity: number

  constructor(capacity: number) {
    this.capacity = capacity
    this.data = new Array(capacity)
  }

  enqueue(value: T): void {
    if (this.isFull()) throw new QueueFullError('enqueue on a full queue')
    this.data[this.tail] = value
    this.tail = (this.tail + 1) % this.capacity
    this.count++
  }

  dequeue(): T {
    if (this.isEmpty()) throw new QueueUnderflowError('dequeue from an empty queue')
    const value = this.data[this.head] as T
    this.data[this.head] = undefined
    this.head = (this.head + 1) % this.capacity
    this.count--
    return value
  }

  front(): T {
    if (this.isEmpty()) throw new QueueUnderflowError('front on an empty queue')
    return this.data[this.head] as T
  }

  size(): number {
    return this.count
  }

  isFull(): boolean {
    return this.count === this.capacity
  }

  isEmpty(): boolean {
    return this.count === 0
  }
}

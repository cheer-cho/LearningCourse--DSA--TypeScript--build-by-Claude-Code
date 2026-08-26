/**
 * ex01 — Build a Stack and a CircularQueue from scratch
 *
 * Both structures are backed by a single pre-sized array — no
 * `Array.prototype.push/pop/shift` doing the real work internally.
 * Check: npm test -- 06 -t ex01
 */

/** Thrown by `Stack.pop`/`Stack.peek` when the stack has no elements. */
export class StackUnderflowError extends Error {}

/** Thrown by `CircularQueue.dequeue`/`front` when the queue has no elements. */
export class QueueUnderflowError extends Error {}

/** Thrown by `CircularQueue.enqueue` when the queue is already at capacity. */
export class QueueFullError extends Error {}

/**
 * A LIFO stack backed by a manually-managed array (a `top` index into
 * a pre-sized buffer that doubles when full — the module 02 dynamic
 * array trick, reused).
 *
 * Edge cases: `pop`/`peek` on an empty stack throw `StackUnderflowError`.
 *
 * Example:
 *   const s = new Stack<number>()
 *   s.push(1); s.push(2)
 *   s.pop()      -> 2
 *   s.size()     -> 1
 *
 * Target complexity: O(1) amortized per op, O(n) space.
 */
export class Stack<T> {
  constructor(initialCapacity = 4) {
    throw new Error('TODO: implement me')
  }

  push(value: T): void {
    throw new Error('TODO: implement me')
  }

  pop(): T {
    throw new Error('TODO: implement me')
  }

  peek(): T {
    throw new Error('TODO: implement me')
  }

  size(): number {
    throw new Error('TODO: implement me')
  }

  isEmpty(): boolean {
    throw new Error('TODO: implement me')
  }
}

/**
 * A FIFO queue backed by a FIXED-capacity ring buffer: `head` and
 * `tail` indexes wrap around with `% capacity` instead of the array
 * ever shifting. Dequeue must stay O(1) regardless of how many wraps
 * have happened — never shift elements down.
 *
 * Edge cases: `enqueue` on a full queue throws `QueueFullError`;
 * `dequeue`/`front` on an empty queue throw `QueueUnderflowError`.
 *
 * Example:
 *   const q = new CircularQueue<number>(2)
 *   q.enqueue(1); q.enqueue(2)
 *   q.dequeue()    -> 1
 *   q.enqueue(3)   // reuses the slot dequeue just freed
 *   q.dequeue()    -> 2
 *
 * Target complexity: O(1) per op, O(capacity) space.
 */
export class CircularQueue<T> {
  constructor(capacity: number) {
    throw new Error('TODO: implement me')
  }

  enqueue(value: T): void {
    throw new Error('TODO: implement me')
  }

  dequeue(): T {
    throw new Error('TODO: implement me')
  }

  front(): T {
    throw new Error('TODO: implement me')
  }

  size(): number {
    throw new Error('TODO: implement me')
  }

  isFull(): boolean {
    throw new Error('TODO: implement me')
  }

  isEmpty(): boolean {
    throw new Error('TODO: implement me')
  }
}

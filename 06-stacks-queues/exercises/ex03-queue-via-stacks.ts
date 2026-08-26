/**
 * ex03 — Queue built from two stacks
 *
 * Scenario: you're only given a stack primitive (push/pop from one
 * end) but a caller needs FIFO order. Simulate a queue with two
 * stacks instead of a ring buffer.
 * Check: npm test -- 06 -t ex03
 */

/**
 * A FIFO queue built from exactly two `Stack`-shaped arrays: `inbox`
 * (newest enqueues go here) and `outbox` (dequeue/front read from
 * here). When `outbox` runs dry, pour all of `inbox` into it — this
 * reverses the order back to FIFO. Each element crosses from inbox to
 * outbox exactly once in its lifetime, which is what makes dequeue
 * AMORTIZED O(1) despite the occasional O(n) pour (ties back to
 * module 01's amortized analysis: n pours of total cost n, spread
 * over n dequeues, average to O(1) each).
 *
 * Edge cases: `dequeue`/`front` on an empty queue throw.
 *
 * Example:
 *   const q = new QueueFromStacks<number>()
 *   q.enqueue(1); q.enqueue(2)
 *   q.dequeue()    -> 1
 *   q.enqueue(3)
 *   q.dequeue()    -> 2
 *   q.dequeue()    -> 3
 *
 * Target complexity: O(1) amortized per op, O(n) space.
 */
export class QueueFromStacks<T> {
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

  isEmpty(): boolean {
    throw new Error('TODO: implement me')
  }
}

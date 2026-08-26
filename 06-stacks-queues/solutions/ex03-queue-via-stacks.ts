// Reference solution — ex03
//
// Pattern: two-stack queue simulation. `inbox` absorbs enqueues in
// O(1). `outbox` serves dequeue/front; when it's empty, pour all of
// `inbox` into it (reversing order back to FIFO) before reading. Each
// element is poured exactly once across its whole lifetime, so the
// total pouring cost over n operations is O(n) -> O(1) amortized per
// dequeue. O(n) space.

export class QueueFromStacks<T> {
  private inbox: T[] = []
  private outbox: T[] = []

  enqueue(value: T): void {
    this.inbox.push(value)
  }

  dequeue(): T {
    this.fillOutboxIfEmpty()
    if (this.outbox.length === 0) throw new Error('dequeue from an empty queue')
    return this.outbox.pop() as T
  }

  front(): T {
    this.fillOutboxIfEmpty()
    if (this.outbox.length === 0) throw new Error('front on an empty queue')
    return this.outbox[this.outbox.length - 1] as T
  }

  size(): number {
    return this.inbox.length + this.outbox.length
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  private fillOutboxIfEmpty(): void {
    if (this.outbox.length > 0) return
    while (this.inbox.length > 0) {
      this.outbox.push(this.inbox.pop() as T)
    }
  }
}

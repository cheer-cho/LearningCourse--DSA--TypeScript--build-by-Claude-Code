/**
 * Checkpoint — ER triage queue
 *
 * Scenario: an ER intake desk needs "who do we see next?" answered
 * instantly as patients arrive with different severities. Ties (equal
 * severity) go to whoever arrived first — FIFO within severity,
 * pinned with a tuple-style comparator key: (severity descending,
 * timestamp ascending).
 *
 * A generic MinHeap<T> is PROVIDED below (do not edit).
 *
 * Check: npm test -- 12 -t checkpoint
 */

// ---- provided — do not edit --------------------------------------------
class MinHeap<T> {
  private heap: T[] = []
  constructor(private readonly compare: (a: T, b: T) => number) {}

  push(val: T): void {
    this.heap.push(val)
    this.siftUp(this.heap.length - 1)
  }

  pop(): T {
    if (this.heap.length === 0) throw new Error('MinHeap.pop: heap is empty')
    const top = this.heap[0]!
    const last = this.heap.pop()!
    if (this.heap.length > 0) {
      this.heap[0] = last
      this.siftDown(0)
    }
    return top
  }

  peek(): T {
    if (this.heap.length === 0) throw new Error('MinHeap.peek: heap is empty')
    return this.heap[0]!
  }

  size(): number {
    return this.heap.length
  }

  isEmpty(): boolean {
    return this.heap.length === 0
  }

  private siftUp(index: number): void {
    let i = index
    while (i > 0) {
      const parent = (i - 1) >> 1
      if (this.compare(this.heap[parent]!, this.heap[i]!) <= 0) break
      this.swap(i, parent)
      i = parent
    }
  }

  private siftDown(index: number): void {
    let i = index
    const n = this.heap.length
    while (true) {
      const left = 2 * i + 1
      const right = 2 * i + 2
      let top = i
      if (left < n && this.compare(this.heap[left]!, this.heap[top]!) < 0) top = left
      if (right < n && this.compare(this.heap[right]!, this.heap[top]!) < 0) top = right
      if (top === i) break
      this.swap(i, top)
      i = top
    }
  }

  private swap(i: number, j: number): void {
    const tmp = this.heap[i]!
    this.heap[i] = this.heap[j]!
    this.heap[j] = tmp
  }
}
// -------------------------------------------------------------------------

export interface PatientRecord {
  name: string
  severity: number // higher = more urgent
  timestamp: number // arrival order; lower arrived earlier
}

export class TriageQueue {
  /**
   * Register a new patient.
   * Target: O(log n) time
   */
  arrive(name: string, severity: number, timestamp: number): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Remove and return the name of the next patient to be seen:
   * highest severity first, earliest timestamp breaks ties.
   * @throws if no one is waiting
   * Target: O(log n) time
   */
  nextPatient(): string {
    throw new Error('TODO: implement me')
  }

  /**
   * @returns how many patients are currently waiting
   * Target: O(1) time
   */
  waitingCount(): number {
    throw new Error('TODO: implement me')
  }
}

/**
 * Free function: the k most urgent patients from a fixed batch of
 * records, ranked by the same ordering as TriageQueue (severity
 * descending, then timestamp ascending).
 * @param records - patient records to rank
 * @param k - how many of the most urgent to return, 0 <= k <= records.length
 * @returns names of the k most urgent patients, most urgent first
 * Target: O(n + k log n) time
 */
export function kMostUrgent(records: PatientRecord[], k: number): string[] {
  throw new Error('TODO: implement me')
}

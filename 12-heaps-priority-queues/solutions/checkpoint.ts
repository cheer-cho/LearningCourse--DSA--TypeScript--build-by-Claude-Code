// Reference solution — checkpoint
// Pattern: a single min-heap keyed by a tuple comparator (severity
// descending, timestamp ascending as the tie-break) doubles as both a
// live priority queue (TriageQueue) and, via heapify-then-pop-k, a
// batch top-k (kMostUrgent). O(log n) per TriageQueue op; O(n + k log
// n) for the batch version (build is O(n), each pop is O(log n)).

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
  severity: number
  timestamp: number
}

const byUrgency = (a: PatientRecord, b: PatientRecord): number =>
  b.severity - a.severity || a.timestamp - b.timestamp

export class TriageQueue {
  private heap = new MinHeap<PatientRecord>(byUrgency)

  arrive(name: string, severity: number, timestamp: number): void {
    this.heap.push({ name, severity, timestamp })
  }

  nextPatient(): string {
    if (this.heap.isEmpty()) throw new Error('TriageQueue.nextPatient: no one is waiting')
    return this.heap.pop().name
  }

  waitingCount(): number {
    return this.heap.size()
  }
}

export function kMostUrgent(records: PatientRecord[], k: number): string[] {
  const heap = new MinHeap<PatientRecord>(byUrgency)
  for (const r of records) heap.push(r)

  const result: string[] = []
  for (let i = 0; i < k && !heap.isEmpty(); i++) result.push(heap.pop().name)
  return result
}

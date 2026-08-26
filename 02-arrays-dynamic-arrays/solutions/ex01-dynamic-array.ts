// Pattern: growable buffer via geometric (doubling) resize. Each
// resize copies `len` elements, but resizes happen at len = 1, 2, 4,
// 8... — the total copying work over n pushes is 1+2+4+...+n < 2n, so
// the AMORTIZED cost per push is O(1) even though a single resizing
// push is O(n).
// Complexity: push/pop/get/set/size/capacity all O(1) amortized time,
// O(1) space per call.

export class DynamicArray<T> {
  private buffer: T[]
  private len: number
  private cap: number

  constructor() {
    this.cap = 1
    this.buffer = new Array<T>(this.cap)
    this.len = 0
  }

  size(): number {
    return this.len
  }

  capacity(): number {
    return this.cap
  }

  get(index: number): T {
    this.checkBounds(index)
    // Safe: index is checked against `len`, and every slot below `len`
    // was written by push/set, so the value is always a real T.
    return this.buffer[index] as T
  }

  set(index: number, value: T): void {
    this.checkBounds(index)
    this.buffer[index] = value
  }

  push(value: T): void {
    if (this.len === this.cap) {
      this.resize(this.cap * 2)
    }
    this.buffer[this.len] = value
    this.len += 1
  }

  pop(): T {
    if (this.len === 0) {
      throw new RangeError('pop from an empty DynamicArray')
    }
    this.len -= 1
    return this.buffer[this.len] as T
  }

  private checkBounds(index: number): void {
    if (index < 0 || index >= this.len) {
      throw new RangeError(`index ${index} out of bounds for size ${this.len}`)
    }
  }

  private resize(newCapacity: number): void {
    const next = new Array<T>(newCapacity)
    for (let i = 0; i < this.len; i++) {
      next[i] = this.buffer[i] as T
    }
    this.buffer = next
    this.cap = newCapacity
  }
}

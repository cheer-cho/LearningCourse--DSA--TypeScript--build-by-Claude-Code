// Checkpoint reference solution.
// Shelf: the same doubling-buffer pattern as ex01's DynamicArray,
// trimmed to push/pop/get. restockMerge: two-pointer merge (ex04's
// merge). compact: reader/writer sweep (ex03's removeValue, with
// `null` playing the role of the removed value). rotateDisplay: triple
// reversal (ex02's rotateRight).
// Complexity: each function/method meets the bound stated on its
// JSDoc in checkpoint.ts — see there for the target per operation.

export class Shelf<T> {
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

  push(item: T): void {
    if (this.len === this.cap) {
      const next = new Array<T>(this.cap * 2)
      for (let i = 0; i < this.len; i++) {
        next[i] = this.buffer[i] as T
      }
      this.buffer = next
      this.cap *= 2
    }
    this.buffer[this.len] = item
    this.len += 1
  }

  pop(): T {
    if (this.len === 0) {
      throw new RangeError('pop from an empty Shelf')
    }
    this.len -= 1
    return this.buffer[this.len] as T
  }

  get(index: number): T {
    if (index < 0 || index >= this.len) {
      throw new RangeError(`index ${index} out of bounds for size ${this.len}`)
    }
    return this.buffer[index] as T
  }
}

export function restockMerge(a: number[], b: number[]): number[] {
  const result: number[] = []
  let i = 0
  let j = 0
  while (i < a.length && j < b.length) {
    const av = a[i] as number
    const bv = b[j] as number
    if (av <= bv) {
      result.push(av)
      i += 1
    } else {
      result.push(bv)
      j += 1
    }
  }
  while (i < a.length) {
    result.push(a[i] as number)
    i += 1
  }
  while (j < b.length) {
    result.push(b[j] as number)
    j += 1
  }
  return result
}

export function compact(slots: (string | null)[]): number {
  let write = 0
  for (let read = 0; read < slots.length; read++) {
    const current = slots[read] as string | null
    if (current !== null) {
      slots[write] = current
      write += 1
    }
  }
  return write
}

function reverseRange(items: string[], start: number, end: number): void {
  let lo = start
  let hi = end
  while (lo < hi) {
    const tmp = items[lo] as string
    items[lo] = items[hi] as string
    items[hi] = tmp
    lo += 1
    hi -= 1
  }
}

export function rotateDisplay(items: string[], k: number): void {
  const n = items.length
  if (n === 0) return
  const shift = ((k % n) + n) % n
  if (shift === 0) return
  reverseRange(items, 0, n - 1)
  reverseRange(items, 0, shift - 1)
  reverseRange(items, shift, n - 1)
}

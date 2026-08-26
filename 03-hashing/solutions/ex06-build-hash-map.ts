export class HashMap<K extends string | number, V> {
  // Pattern: chaining. Storage is a plain array of buckets, each
  // bucket a plain array of [key, value] pairs — no Map/Set/object is
  // used for the bucket mapping itself. Time: set/get/has/delete
  // average O(1) (amortized across resizes for set), O(n) worst case
  // if every key collides. Space: O(n).
  private static readonly LOAD_FACTOR = 0.75
  private static readonly LARGE_PRIME = 1_000_000_007

  private buckets: Array<Array<[K, V]>>
  private count = 0

  constructor(initialCapacity = 8) {
    this.buckets = Array.from({ length: initialCapacity }, () => [])
  }

  size(): number {
    return this.count
  }

  bucketCount(): number {
    return this.buckets.length
  }

  set(key: K, value: V): void {
    const bucket = this.bucketFor(key)
    const existing = bucket.find((entry) => entry[0] === key)
    if (existing) {
      existing[1] = value
      return
    }
    bucket.push([key, value])
    this.count++
    if (this.count / this.buckets.length > HashMap.LOAD_FACTOR) {
      this.resize()
    }
  }

  get(key: K): V | undefined {
    return this.bucketFor(key).find((entry) => entry[0] === key)?.[1]
  }

  has(key: K): boolean {
    return this.bucketFor(key).some((entry) => entry[0] === key)
  }

  delete(key: K): boolean {
    const bucket = this.bucketFor(key)
    const index = bucket.findIndex((entry) => entry[0] === key)
    if (index === -1) return false
    bucket.splice(index, 1)
    this.count--
    return true
  }

  keys(): K[] {
    const result: K[] = []
    for (const bucket of this.buckets) {
      for (const [key] of bucket) result.push(key)
    }
    return result
  }

  private bucketFor(key: K): Array<[K, V]> {
    const index = this.hash(key) % this.buckets.length
    // Invariant: hash(...) % buckets.length is always a valid index
    // into `buckets` (0 <= index < buckets.length), so this cast is
    // safe even though noUncheckedIndexedAccess can't see that.
    return this.buckets[index] as Array<[K, V]>
  }

  private hash(key: K): number {
    if (typeof key === 'number') return Math.abs(Math.trunc(key))
    // Polynomial rolling hash: h = h * 31 + charCode(c), folded modulo
    // a large prime so it never approaches unsafe integer range.
    let h = 0
    for (let i = 0; i < key.length; i++) {
      h = (h * 31 + key.charCodeAt(i)) % HashMap.LARGE_PRIME
    }
    return h
  }

  private resize(): void {
    const oldBuckets = this.buckets
    this.buckets = Array.from({ length: oldBuckets.length * 2 }, () => [])
    this.count = 0
    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        const index = this.hash(key) % this.buckets.length
        const target = this.buckets[index] as Array<[K, V]>
        target.push([key, value])
        this.count++
      }
    }
  }
}

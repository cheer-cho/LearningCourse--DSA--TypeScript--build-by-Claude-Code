// Scenario: build the mapping structure every earlier exercise in this
// module leaned on — a hash map from scratch. Pattern: array of
// buckets (chaining) + resize when the load factor gets too high.
// Run: npm test -- 03 -t ex06

/**
 * A hash map built from scratch: an array of buckets, each bucket a
 * plain list of `[key, value]` pairs. Chaining resolves collisions —
 * no built-in `Map`/`Set`/object is used for the bucket storage
 * itself, only plain arrays.
 *
 * Hashing:
 * - String keys use a polynomial rolling hash:
 *     h = 0; for each character c: h = (h * 31 + charCode(c)) mod LARGE_PRIME
 *   then `h mod capacity` picks the bucket. Multiplying by a small
 *   prime (31) and folding in each character spreads similar strings
 *   ("cat" vs "cot") into different buckets.
 * - Integer keys hash to `abs(key) mod capacity` directly — no need to
 *   stringify a number first.
 *
 * Resize: whenever `size / capacity` would exceed 0.75 after an
 * insert, capacity doubles and every existing entry is rehashed into
 * fresh buckets (the bucket index depends on capacity, so an entry's
 * old bucket placement is invalid the moment capacity changes).
 *
 * Target complexity: `set` / `get` / `has` / `delete` average O(1)
 * time (O(n) worst case if every key collides), amortized O(1) for
 * `set` across resizes (same argument as a dynamic array's amortized
 * push — resizes are O(n) but happen only O(log n) times over n
 * inserts). `keys` is O(n). Space is O(n).
 */
export class HashMap<K extends string | number, V> {
  private static readonly LOAD_FACTOR = 0.75
  private static readonly LARGE_PRIME = 1_000_000_007

  private buckets: Array<Array<[K, V]>>
  private count = 0

  constructor(initialCapacity = 8) {
    this.buckets = Array.from({ length: initialCapacity }, () => [])
  }

  /**
   * Number of key/value pairs currently stored.
   * Target complexity: O(1) time.
   */
  size(): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Number of buckets currently allocated (exposed so tests can
   * confirm a resize actually grew the table).
   * Target complexity: O(1) time.
   */
  bucketCount(): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Insert or overwrite the value stored at `key`. May trigger a
   * resize (capacity doubles, every entry rehashed) if the load
   * factor would exceed 0.75 afterward.
   *
   * @param key - string or integer key
   * @param value - value to associate with `key`
   *
   * Target complexity: amortized O(1) time.
   */
  set(key: K, value: V): void {
    throw new Error('TODO: implement me')
  }

  /**
   * The value stored at `key`, or `undefined` if `key` is absent.
   * Target complexity: average O(1) time.
   */
  get(key: K): V | undefined {
    throw new Error('TODO: implement me')
  }

  /**
   * Whether `key` is present.
   * Target complexity: average O(1) time.
   */
  has(key: K): boolean {
    throw new Error('TODO: implement me')
  }

  /**
   * Remove `key` if present.
   * @returns whether a key was actually removed
   * Target complexity: average O(1) time.
   */
  delete(key: K): boolean {
    throw new Error('TODO: implement me')
  }

  /**
   * All keys currently stored, in no particular order.
   * Target complexity: O(n) time.
   */
  keys(): K[] {
    throw new Error('TODO: implement me')
  }
}

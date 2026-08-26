// Reference solution — ex01
// Pattern: the core bit-toolkit recipes (shift+mask, OR, AND-with-
// complement, XOR, Kernighan's popcount). Every op is O(1) except
// countSetBits, which is O(popcount(n)) via n & (n - 1).

export function getBit(n: number, i: number): number {
  return (n >> i) & 1
}

export function setBit(n: number, i: number): number {
  return n | (1 << i)
}

export function clearBit(n: number, i: number): number {
  return n & ~(1 << i)
}

export function toggleBit(n: number, i: number): number {
  return n ^ (1 << i)
}

export function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0
}

export function countSetBits(n: number): number {
  let count = 0
  let remaining = n
  while (remaining !== 0) {
    remaining &= remaining - 1 // drop the lowest set bit
    count++
  }
  return count
}

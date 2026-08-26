// Pattern: two-pointer merge, the merge step of merge sort. `merge`
// walks both arrays left to right into a fresh array. `mergeInto`
// walks both arrays RIGHT to left, writing into a's own tail: the
// largest remaining value (from either side) always lands in the
// rightmost still-unwritten slot, so the unread prefix of `a` is never
// clobbered before it is read.
// Complexity: O(m + n) time; O(m + n) space for merge, O(1) extra
// space for mergeInto (it reuses a's own storage).

export function merge(a: number[], b: number[]): number[] {
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

export function mergeInto(a: number[], m: number, b: number[]): void {
  const n = b.length
  let i = m - 1 // last valid element of a's real data
  let j = n - 1 // last element of b
  let write = m + n - 1
  while (i >= 0 && j >= 0) {
    const av = a[i] as number
    const bv = b[j] as number
    if (av > bv) {
      a[write] = av
      i -= 1
    } else {
      a[write] = bv
      j -= 1
    }
    write -= 1
  }
  while (j >= 0) {
    a[write] = b[j] as number
    j -= 1
    write -= 1
  }
  // Any remaining a[0..i] are already exactly where they belong.
}

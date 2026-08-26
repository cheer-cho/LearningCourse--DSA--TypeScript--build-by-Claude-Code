// Reference solution — ex02

/**
 * Merge sort. Pattern: divide & conquer — split to singletons (always
 * sorted), then merge sorted halves back together. Stable because the
 * merge step takes from the left run on ties, and the left run always
 * holds elements that came first in the original array.
 * Time: O(n log n) always (log n levels, O(n) work per level).
 * Space: O(n) (the merged copies).
 */
export function mergeSort(nums: number[]): number[]
export function mergeSort<T>(items: T[], compareFn: (a: T, b: T) => number): T[]
export function mergeSort<T>(items: T[], compareFn?: (a: T, b: T) => number): T[] {
  const cmp = compareFn ?? ((a: T, b: T) => (a as unknown as number) - (b as unknown as number))
  return sort(items, cmp)
}

function sort<T>(items: T[], cmp: (a: T, b: T) => number): T[] {
  if (items.length <= 1) return items.slice()
  const mid = Math.floor(items.length / 2)
  const left = sort(items.slice(0, mid), cmp)
  const right = sort(items.slice(mid), cmp)
  return merge(left, right, cmp)
}

function merge<T>(left: T[], right: T[], cmp: (a: T, b: T) => number): T[] {
  const result: T[] = []
  let i = 0
  let j = 0
  while (i < left.length && j < right.length) {
    const a = left[i]!
    const b = right[j]!
    if (cmp(a, b) <= 0) {
      result.push(a)
      i++
    } else {
      result.push(b)
      j++
    }
  }
  while (i < left.length) result.push(left[i++]!)
  while (j < right.length) result.push(right[j++]!)
  return result
}

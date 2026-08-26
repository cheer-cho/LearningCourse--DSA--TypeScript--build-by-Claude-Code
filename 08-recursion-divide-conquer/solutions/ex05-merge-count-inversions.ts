// Reference solution — ex05

// Pattern: divide and conquer (merge sort with a counter piggybacked
// on the merge step). split: halve the array. solve: recursively
// count + sort each half. combine: merge the two sorted halves; every
// time we take from the right half before exhausting the left half,
// every remaining left element forms an inversion with it — add the
// whole remaining-left count in one step. O(n log n) time, O(n) space.
function countAndSort(arr: number[]): { sorted: number[]; count: number } {
  if (arr.length <= 1) return { sorted: arr, count: 0 }

  const mid = Math.floor(arr.length / 2)
  const { sorted: left, count: leftCount } = countAndSort(arr.slice(0, mid))
  const { sorted: right, count: rightCount } = countAndSort(arr.slice(mid))

  const merged: number[] = []
  let crossCount = 0
  let i = 0
  let j = 0
  while (i < left.length && j < right.length) {
    const leftVal = left[i] as number
    const rightVal = right[j] as number
    if (leftVal <= rightVal) {
      merged.push(leftVal)
      i += 1
    } else {
      // leftVal > rightVal: rightVal is smaller than every remaining
      // element in `left` (left is sorted), so all of them form an
      // inversion with it — count them all at once.
      crossCount += left.length - i
      merged.push(rightVal)
      j += 1
    }
  }
  while (i < left.length) merged.push(left[i++] as number)
  while (j < right.length) merged.push(right[j++] as number)

  return { sorted: merged, count: leftCount + rightCount + crossCount }
}

export function countInversions(nums: number[]): number {
  return countAndSort(nums).count
}

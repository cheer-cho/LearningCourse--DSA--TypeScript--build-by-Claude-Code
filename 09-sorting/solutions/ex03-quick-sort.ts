// Reference solution — ex03

/**
 * Quick sort. Pattern: pick a random pivot, Lomuto-partition around
 * it (everything < pivot to the left), then recurse. Randomizing the
 * pivot defeats adversarial/sorted input; recursing into the smaller
 * side and looping over the larger side bounds the stack to O(log n)
 * even in a worst-case partition sequence.
 * Time: O(n log n) average (O(n^2) worst case, astronomically
 * unlikely with a random pivot). Space: O(log n) (recursion stack).
 */
export function quickSort(nums: number[]): void {
  quickSortRange(nums, 0, nums.length - 1)
}

function quickSortRange(nums: number[], lo: number, hi: number): void {
  let low = lo
  let high = hi
  while (low < high) {
    const p = partition(nums, low, high)
    if (p - low < high - p) {
      quickSortRange(nums, low, p - 1)
      low = p + 1
    } else {
      quickSortRange(nums, p + 1, high)
      high = p - 1
    }
  }
}

function partition(nums: number[], lo: number, hi: number): number {
  const pivotIndex = lo + Math.floor(Math.random() * (hi - lo + 1))
  swap(nums, pivotIndex, hi)
  const pivot = nums[hi]!
  let i = lo
  for (let j = lo; j < hi; j++) {
    if (nums[j]! < pivot) {
      swap(nums, i, j)
      i++
    }
  }
  swap(nums, i, hi)
  return i
}

function swap(nums: number[], i: number, j: number): void {
  const tmp = nums[i]!
  nums[i] = nums[j]!
  nums[j] = tmp
}

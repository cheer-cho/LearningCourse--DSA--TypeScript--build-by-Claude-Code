// Reference solution — ex01

/**
 * Insertion sort. Pattern: grow a sorted prefix by inserting the next
 * element into place, shifting larger elements right. Adaptive: a
 * nearly-sorted array causes O(n) total shifts instead of O(n^2).
 * Time: O(n^2) worst case / O(n) nearly-sorted. Space: O(n) (the copy).
 */
export function insertionSort(nums: number[], onShift?: () => void): number[] {
  const result = nums.slice()
  for (let i = 1; i < result.length; i++) {
    const key = result[i]!
    let j = i - 1
    while (j >= 0 && result[j]! > key) {
      result[j + 1] = result[j]!
      onShift?.()
      j--
    }
    result[j + 1] = key
  }
  return result
}

/**
 * Selection sort. Pattern: repeatedly select the minimum of the
 * unsorted suffix and swap it to the front. Not adaptive — always
 * scans the whole suffix. Time: O(n^2) always. Space: O(n) (the copy).
 */
export function selectionSort(nums: number[]): number[] {
  const result = nums.slice()
  for (let i = 0; i < result.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < result.length; j++) {
      if (result[j]! < result[minIndex]!) minIndex = j
    }
    if (minIndex !== i) {
      const tmp = result[i]!
      result[i] = result[minIndex]!
      result[minIndex] = tmp
    }
  }
  return result
}

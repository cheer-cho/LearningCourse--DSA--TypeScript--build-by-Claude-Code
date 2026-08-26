// Reference solution — ex02
// Pattern: in-place max-heap heap sort. Build a max-heap bottom-up
// (O(n)), then n times swap the root (current max) to the end of the
// unsorted region and sift down (O(log n) each) -- O(n log n) total.
// The output array doubles as the heap's backing storage, so beyond
// the one copy of the input, no extra space is needed.

export function heapSort(nums: number[]): number[] {
  const arr = [...nums]
  const n = arr.length

  const siftDown = (start: number, end: number): void => {
    let i = start
    while (true) {
      const left = 2 * i + 1
      const right = 2 * i + 2
      let largest = i
      if (left < end && arr[left]! > arr[largest]!) largest = left
      if (right < end && arr[right]! > arr[largest]!) largest = right
      if (largest === i) break
      const tmp = arr[i]!
      arr[i] = arr[largest]!
      arr[largest] = tmp
      i = largest
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) siftDown(i, n)

  for (let end = n - 1; end > 0; end--) {
    const tmp = arr[0]!
    arr[0] = arr[end]!
    arr[end] = tmp
    siftDown(0, end)
  }

  return arr
}

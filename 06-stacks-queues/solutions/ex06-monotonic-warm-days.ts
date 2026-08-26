// Reference solution — ex06
//
// Pattern: monotonic (decreasing) stack of INDEXES. Scan left to
// right; while the current value beats the stack's top index's value,
// pop it — the current index is its answer. What's left unpopped at
// the end never finds a greater value. Each index is pushed once and
// popped at most once, so the whole scan is O(n) total. O(n) space.

export function daysUntilWarmer(temps: number[]): number[] {
  const result = new Array(temps.length).fill(0)
  const stack: number[] = [] // indexes, decreasing temps top-to-bottom

  for (let i = 0; i < temps.length; i++) {
    const current = temps[i] as number
    while (stack.length > 0 && (temps[stack[stack.length - 1] as number] as number) < current) {
      const poppedIndex = stack.pop() as number
      result[poppedIndex] = i - poppedIndex
    }
    stack.push(i)
  }
  return result
}

export function nextGreater(nums: number[]): number[] {
  const result = new Array(nums.length).fill(-1)
  const stack: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i] as number
    while (stack.length > 0 && (nums[stack[stack.length - 1] as number] as number) < current) {
      const poppedIndex = stack.pop() as number
      result[poppedIndex] = current
    }
    stack.push(i)
  }
  return result
}

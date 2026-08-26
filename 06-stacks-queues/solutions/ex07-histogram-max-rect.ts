// Reference solution — ex07
//
// Pattern: monotonic (increasing) stack of indexes + a sentinel. Each
// bar's area is only known once its nearer-smaller neighbor on the
// right shows up — that's exactly when it gets popped. The sentinel
// (height 0) at the end guarantees everything still on the stack gets
// popped and priced. Each index pushed once, popped at most once ->
// O(n) time, O(n) space.

export function largestRectangle(heights: number[]): number {
  const bars = [...heights, 0] // sentinel flushes the stack at the end
  const stack: number[] = [] // indexes, increasing heights top-to-bottom
  let maxArea = 0

  for (let i = 0; i < bars.length; i++) {
    const currentHeight = bars[i] as number
    while (stack.length > 0 && (bars[stack[stack.length - 1] as number] as number) >= currentHeight) {
      const height = bars[stack.pop() as number] as number
      const leftBoundary = stack.length === 0 ? -1 : (stack[stack.length - 1] as number)
      const width = i - leftBoundary - 1
      maxArea = Math.max(maxArea, height * width)
    }
    stack.push(i)
  }

  return maxArea
}

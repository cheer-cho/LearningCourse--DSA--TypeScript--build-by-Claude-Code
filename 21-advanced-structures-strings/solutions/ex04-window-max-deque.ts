// Reference solution — ex04
// Pattern: monotonic deque (strictly decreasing values, front-to-back).
// Store indexes; evict stale front when front index <= i - k; pop back when
// back value <= incoming value. Front index is always the window maximum.
// Time: O(n) — each index is pushed and popped at most once. Space: O(k).

export function windowMaxes(nums: number[], k: number): number[] {
  if (nums.length === 0 || k > nums.length) return []

  const result: number[] = []
  const deque: number[] = [] // stores indexes, values decreasing front-to-back

  for (let i = 0; i < nums.length; i++) {
    // Evict front if it has fallen outside the window
    if (deque.length > 0 && (deque[0] ?? 0) <= i - k) {
      deque.shift()
    }

    // Pop from back any index whose value is <= nums[i]
    // (they can never be a window max while nums[i] is present)
    while (deque.length > 0 && (nums[deque[deque.length - 1] ?? 0] ?? -Infinity) <= (nums[i] ?? -Infinity)) {
      deque.pop()
    }

    deque.push(i)

    // Record result once the first full window is complete
    if (i >= k - 1) {
      result.push(nums[deque[0] ?? 0] ?? 0)
    }
  }

  return result
}

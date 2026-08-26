/**
 * ✦ CHECKPOINT 1 — Performance Review
 *
 * Three tasks that put Big-O into practice: two functions to write at
 * their target complexity, and a complexity report classifying both of
 * them plus three new snippets shown below.
 *
 * Passing `npm test -- 01 -t checkpoint` completes this module. 🎉
 */

// Snippet I
// function f(sortedArr: number[], target: number): number {
//   let lo = 0
//   let hi = sortedArr.length - 1
//   while (lo <= hi) {
//     const mid = Math.floor((lo + hi) / 2)
//     if (sortedArr[mid] === target) return mid
//     if (sortedArr[mid] < target) lo = mid + 1
//     else hi = mid - 1
//   }
//   return -1
// }

// Snippet J
// function f(arr: number[]): number {
//   let total = 0
//   for (const x of arr) {
//     for (let k = 0; k < 5; k++) total += x
//   }
//   return total
// }

// Snippet K
// function f(arr: number[]): number {
//   let total = 0
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) total += arr[i] + arr[j]
//   }
//   return total
// }

/** The only complexity strings allowed as answers in complexityReport. */
export type ComplexityClass = 'O(1)' | 'O(log n)' | 'O(n)' | 'O(n log n)' | 'O(n^2)' | 'O(2^n)'

/**
 * The most frequent word. Ties go to whichever tied word occurred FIRST
 * in the input.
 * @param words - a non-empty list of words
 * @returns the most frequent word
 * input -> output: (['b', 'a', 'a', 'b']) -> 'b' (b appears first, tied 2-2)
 * Target complexity: O(n) time, O(n) space
 */
export function mostCommon(words: string[]): string {
  throw new Error('TODO: implement me')
}

/**
 * The first value that appears a second time, scanning left to right.
 * @param nums - numbers to scan
 * @returns the first repeated value, or undefined if nothing repeats
 * input -> output: ([2, 1, 3, 5, 3, 2]) -> 3 (5 is new, then 3 repeats first)
 * Target complexity: O(n) time, O(n) space
 */
export function firstRepeated(nums: number[]): number | undefined {
  throw new Error('TODO: implement me')
}

/**
 * Classify the time complexity of mostCommon, firstRepeated, and the
 * three snippets (I, J, K) shown above.
 * @returns a record answering all 5 classification questions
 * Target complexity: O(1) time, O(1) space (a fixed lookup table)
 */
export function complexityReport(): Record<
  'mostCommonTime' | 'firstRepeatedTime' | 'snippetITime' | 'snippetJTime' | 'snippetKTime',
  ComplexityClass
> {
  throw new Error('TODO: implement me')
}

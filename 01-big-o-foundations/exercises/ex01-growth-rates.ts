/**
 * ex01 — growth-rates: read Big-O straight off the shape of code.
 * Pattern(s): sequential loops add, nested loops multiply, halving is log.
 * Check: npm test -- 01 -t ex01
 */

// Snippet A
// function f(arr: number[]): number {
//   return arr[0] ?? 0
// }

// Snippet B
// function f(arr: number[]): number {
//   let total = 0
//   for (const x of arr) total += x
//   return total
// }

// Snippet C
// function f(arr: number[]): number {
//   let total = 0
//   for (const a of arr) {
//     for (const b of arr) total += a * b
//   }
//   return total
// }

// Snippet D
// function f(n: number): number {
//   let steps = 0
//   while (n > 1) {
//     n = Math.floor(n / 2)
//     steps++
//   }
//   return steps
// }

// Snippet E
// function f(arr: number[]): number {
//   let total = 0
//   for (const x of arr) total += x
//   for (const y of arr) total += y
//   return total
// }

// Snippet F
// function f(arr: number[]): number[] {
//   return [...arr].sort((a, b) => a - b)
// }

// Snippet G
// function f(n: number): number {
//   if (n <= 1) return 1
//   return f(n - 1) + f(n - 1)
// }

// Snippet H (matrix is always n x n)
// function f(matrix: number[][]): number {
//   let total = 0
//   for (const row of matrix) {
//     for (const x of row) total += x
//   }
//   return total
// }

/** The only complexity strings allowed as answers below. */
export type ComplexityClass = 'O(1)' | 'O(log n)' | 'O(n)' | 'O(n log n)' | 'O(n^2)' | 'O(2^n)'

/**
 * Classify each snippet above (A-H) by its time complexity.
 * @returns a record mapping each snippet's letter to its ComplexityClass
 * input -> output: (no input) -> { A: 'O(1)', B: 'O(n)', C: 'O(n^2)', ... }
 * Target complexity: O(1) time, O(1) space (a fixed lookup table)
 */
export function growthRates(): Record<'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H', ComplexityClass> {
  throw new Error('TODO: implement me')
}

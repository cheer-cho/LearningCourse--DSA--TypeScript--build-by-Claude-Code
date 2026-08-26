// Reference solution — ex01

// Pattern: straight recursion (one call per step). Base case first,
// each call shrinks n by 1. O(n) time, O(n) space (stack depth).
export function factorial(n: number): number {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

// Pattern: straight recursion, shrinking by integer division instead
// of subtraction. O(d) time/space, d = number of digits.
export function sumDigits(n: number): number {
  if (n < 10) return n
  return (n % 10) + sumDigits(Math.floor(n / 10))
}

// Pattern: straight recursion building a list on the way back up.
// O(n) time, O(n) space (both stack and output array).
export function countdown(n: number): number[] {
  if (n <= 0) return []
  return [n, ...countdown(n - 1)]
}

// Pattern: straight recursion reversing via "reverse the tail, then
// move the head to the end". O(n^2) time (concatenation copies at each
// level), O(n) space (stack depth) — the point here is the recursive
// shape, not optimality.
export function reverseStringRec(s: string): string {
  if (s.length <= 1) return s
  return reverseStringRec(s.slice(1)) + s.charAt(0)
}

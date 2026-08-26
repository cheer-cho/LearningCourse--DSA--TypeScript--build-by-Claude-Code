// Reference solution — ex06
// Pattern: carry loop for binary/decimal string arithmetic (addBinary,
//   plusOne); Set-based cycle detection for isHappy.
// addBinary: scan right-to-left, accumulate carry, prepend each bit —
//   O(max(a.length, b.length)) time and space.
// plusOne: scan right-to-left, add 1, propagate carry — O(n) time.
// isHappy: compute the "digit-square sum" repeatedly; use a Set to detect
//   a repeat (loop) — returns true iff we reach 1 first.

export function addBinary(a: string, b: string): string {
  let i = a.length - 1
  let j = b.length - 1
  let carry = 0
  const parts: string[] = []

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]!, 10) : 0
    const digitB = j >= 0 ? parseInt(b[j]!, 10) : 0
    const sum = digitA + digitB + carry
    parts.push(String(sum % 2))
    carry = Math.floor(sum / 2)
    i--
    j--
  }

  return parts.reverse().join('') || '0'
}

export function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i]! < 9) {
      digits[i] = digits[i]! + 1
      return digits
    }
    digits[i] = 0
  }
  // All digits were 9; prepend a 1
  digits.unshift(1)
  return digits
}

function digitSquareSum(n: number): number {
  let sum = 0
  let x = n
  while (x > 0) {
    const d = x % 10
    sum += d * d
    x = Math.floor(x / 10)
  }
  return sum
}

export function isHappy(n: number): boolean {
  const seen = new Set<number>()
  let current = n
  while (current !== 1) {
    if (seen.has(current)) return false
    seen.add(current)
    current = digitSquareSum(current)
  }
  return true
}

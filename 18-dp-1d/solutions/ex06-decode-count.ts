// Reference solution — ex06

// State: ways(i) = number of distinct decodings of the first i digits.
// Choice: the last decoded chunk was one digit (valid if digits[i-1] != '0')
//   or two digits (valid if digits[i-2..i) parses to 10..26).
// Recurrence: ways(i) = (one-digit valid ? ways(i-1) : 0)
//                      + (two-digit valid ? ways(i-2) : 0).
// Base cases: ways(0) = 1 (empty prefix: one decoding — the empty one).
//   ways(1) = 1 if digits[0] != '0', else 0.
// Order: bottom-up, ascending i; only the previous two states are read,
// so two rolling variables replace the full table.
// O(n) time, O(1) space (rolling two-variable form shown here).
export function decodeWays(digits: string): number {
  const n = digits.length
  if (n === 0) return 0

  // prev2 = ways(i - 2), prev1 = ways(i - 1), seeded with base cases.
  let prev2 = 1 // ways(0)
  let prev1 = digits[0] !== '0' ? 1 : 0 // ways(1)

  if (n === 1) return prev1

  for (let i = 2; i <= n; i++) {
    let current = 0

    // One-digit choice: digits[i-1] is a valid single code (1..9, not '0').
    if (digits[i - 1] !== '0') {
      current += prev1
    }

    // Two-digit choice: digits[i-2..i) is a valid two-digit code (10..26).
    const twoDigit = Number(digits.slice(i - 2, i))
    if (twoDigit >= 10 && twoDigit <= 26) {
      current += prev2
    }

    prev2 = prev1
    prev1 = current
  }

  return prev1
}

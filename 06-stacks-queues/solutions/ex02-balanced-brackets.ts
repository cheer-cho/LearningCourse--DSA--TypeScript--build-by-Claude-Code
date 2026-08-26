// Reference solution — ex02
//
// isBalanced: classic matching-stack. Push openers; on a closer, the
// stack top must be its matching opener or we fail fast. Crossed
// brackets like "([)]" fail because ")" doesn't match the top "[".
// O(n) time, O(n) space.
//
// minRemovalsToBalance: single pass with a counter for unmatched "("
// (via a running "open" count that must never go negative) plus a
// counter for unmatched ")" seen while open === 0. O(n) time, O(1) space.

const PAIRS: Record<string, string> = { ')': '(', ']': '[', '}': '{' }
const OPENERS = new Set(['(', '[', '{'])

export function isBalanced(s: string): boolean {
  const stack: string[] = []
  for (const ch of s) {
    if (OPENERS.has(ch)) {
      stack.push(ch)
    } else if (ch in PAIRS) {
      if (stack.pop() !== PAIRS[ch]) return false
    }
  }
  return stack.length === 0
}

export function minRemovalsToBalance(s: string): number {
  let unmatchedClosers = 0
  let openCount = 0
  for (const ch of s) {
    if (ch === '(') {
      openCount++
    } else if (ch === ')') {
      if (openCount > 0) openCount--
      else unmatchedClosers++
    }
  }
  // whatever opens never found a close still needs removing
  return unmatchedClosers + openCount
}

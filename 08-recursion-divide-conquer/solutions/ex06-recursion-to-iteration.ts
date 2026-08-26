// Reference solution — ex06

import type { NestedNumber } from './ex04-nested-structures'

// Pattern: recursion -> iteration via an explicit stack. deepSum is
// tree-shaped (an array node can have many children), so the stack
// must hold "work not yet processed" the way multiple pending call
// frames would. Push a node, pop it, and either add it (a leaf) or
// push its children (a branch) — no recursion, so depth is bounded
// only by heap memory, not the call stack. O(total numbers) time,
// O(max width x max depth) space.
export function deepSumIterative(nested: NestedNumber): number {
  let total = 0
  const stack: NestedNumber[] = [nested]
  while (stack.length > 0) {
    const item = stack.pop()
    if (item === undefined) continue
    if (typeof item === 'number') total += item
    else stack.push(...item)
  }
  return total
}

// Pattern: recursion -> iteration via an explicit stack. countdown is
// linear (one child per level), so the transformation is simpler: push
// every value 1..n (ascending, so n ends on top), then pop — popping a
// stack reverses order, which turns 1..n back into n..1 in one pass,
// mirroring how the recursive version's frames unwind from the base
// case back up to n. O(n) time, O(n) space (the explicit stack).
export function countdownIterative(n: number): number[] {
  const stack: number[] = []
  for (let value = 1; value <= n; value++) stack.push(value)

  const result: number[] = []
  while (stack.length > 0) {
    const value = stack.pop()
    if (value !== undefined) result.push(value)
  }
  return result
}

// Reference solution — ex04

// Pattern: recursion on shape (a number is a leaf, an array is a
// branch), not on a shrinking count. O(total numbers) time, O(max
// depth) space for all three functions below.
export type NestedNumber = number | NestedNumber[]

export function deepSum(nested: NestedNumber): number {
  if (typeof nested === 'number') return nested
  let total = 0
  for (const child of nested) total += deepSum(child)
  return total
}

export function maxDepthNested(nested: NestedNumber): number {
  if (typeof nested === 'number') return 0
  let deepest = 0
  for (const child of nested) deepest = Math.max(deepest, maxDepthNested(child))
  return 1 + deepest
}

export function flatten(nested: NestedNumber): number[] {
  if (typeof nested === 'number') return [nested]
  const result: number[] = []
  for (const child of nested) result.push(...flatten(child))
  return result
}

// Reference solution — ex04

/**
 * Pattern: greedy sort + two pointers, opposite ends. Pairing the
 * heaviest remaining person with the lightest remaining person is
 * optimal: if even the lightest can't bring the heaviest under the
 * limit, no other remaining person (all >= the lightest) could either,
 * so the heaviest is proven to need a boat alone — pairing it with
 * anyone lighter never costs an extra boat and sometimes saves one.
 * Time: O(n log n). Space: O(1) extra (besides the sort).
 */
export function minBoats(weights: number[], limit: number): number {
  const sorted = [...weights].sort((a, b) => a - b)
  let lo = 0
  let hi = sorted.length - 1
  let boats = 0

  while (lo <= hi) {
    if (lo === hi) {
      boats++
      break
    }
    if (sorted[lo]! + sorted[hi]! <= limit) lo++
    hi--
    boats++
  }

  return boats
}

/**
 * Pattern: greedy sort + two pointers, same-direction. Sorting both
 * lists ascending and always testing the smallest unused kit against
 * the smallest unsatisfied need is optimal: if that kit is big enough,
 * using it here is never worse than saving it for a harder need later
 * (a bigger kit could always have served this need too); if it's too
 * small, it's too small for every remaining (larger) need, so it's
 * correctly discarded.
 * Time: O(n log n + m log m). Space: O(1) extra (besides the sort).
 */
export function assignKits(kits: number[], needs: number[]): number {
  const sortedKits = [...kits].sort((a, b) => a - b)
  const sortedNeeds = [...needs].sort((a, b) => a - b)

  let satisfied = 0
  let needIndex = 0
  let kitIndex = 0

  while (needIndex < sortedNeeds.length && kitIndex < sortedKits.length) {
    if (sortedKits[kitIndex]! >= sortedNeeds[needIndex]!) {
      satisfied++
      needIndex++
    }
    kitIndex++
  }

  return satisfied
}

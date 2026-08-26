// Reference solution — ex06

/**
 * Pattern: custom comparator. Neither numeric nor lexicographic order
 * is "biggest number wins" — the right order is whichever pairwise
 * concatenation (a+b vs b+a) is larger. Sorting by that comparator is
 * globally consistent (it's a valid total order), so one sort pass
 * arranges every number optimally. Time: O(n log n).
 */
export function largestConcatNumber(nums: number[]): string {
  if (nums.length === 0) return ''
  const strs = nums.map(String)
  strs.sort((a, b) => {
    const ab = a + b
    const ba = b + a
    if (ab === ba) return 0
    return ab > ba ? -1 : 1
  })
  const joined = strs.join('')
  const firstNonZero = joined.split('').findIndex((c) => c !== '0')
  return firstNonZero === -1 ? '0' : joined.slice(firstNonZero)
}

/**
 * Pattern: multi-key comparator. Count frequencies first (O(n)), then
 * sort by the derived key (frequency asc, value desc) in one pass.
 * Time: O(n log n).
 */
export function sortByFrequency(nums: number[]): number[] {
  const freq = new Map<number, number>()
  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1)
  return nums.slice().sort((a, b) => {
    const fa = freq.get(a)!
    const fb = freq.get(b)!
    if (fa !== fb) return fa - fb
    return b - a
  })
}

/**
 * Pattern: sort-by-external-rank. Build a value -> rank lookup from
 * `order` (O(m)), then comparator-sort `nums` by that rank, sending
 * unranked values to the end (compared by their own value). Time:
 * O(n log n + m).
 */
export function relativeOrder(nums: number[], order: number[]): number[] {
  const rank = new Map<number, number>()
  order.forEach((v, i) => rank.set(v, i))
  return nums.slice().sort((a, b) => {
    const ra = rank.get(a)
    const rb = rank.get(b)
    if (ra !== undefined && rb !== undefined) return ra - rb
    if (ra !== undefined) return -1
    if (rb !== undefined) return 1
    return a - b
  })
}

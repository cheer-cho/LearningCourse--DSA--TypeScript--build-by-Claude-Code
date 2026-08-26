/**
 * The reader/writer two-index sweep: a fast "read" pointer scans every
 * element while a slow "write" pointer trails behind, only advancing
 * when the read pointer finds something worth keeping.
 *
 * Test: npm test -- 02 -t ex03
 */

/**
 * Remove every occurrence of `value` from `nums`, in place, preserving
 * the order of the remaining elements. Entries at and after the
 * returned length are leftover and irrelevant.
 *
 * @returns the new length
 * @example removeValue([3, 2, 3, 3, 4], 3) -> 2 (nums starts [2, 4, ...])
 *
 * Target complexity: O(n) time, O(1) space
 */
export function removeValue(nums: number[], value: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Remove duplicate values from a SORTED array in place, keeping one
 * copy of each value, in order. Entries at and after the returned
 * length are leftover and irrelevant.
 *
 * @returns the new length
 * @example dedupeSorted([1, 1, 2, 2, 2, 3]) -> 3 (nums starts [1, 2, 3, ...])
 *
 * Target complexity: O(n) time, O(1) space
 */
export function dedupeSorted(nums: number[]): number {
  throw new Error('TODO: implement me')
}

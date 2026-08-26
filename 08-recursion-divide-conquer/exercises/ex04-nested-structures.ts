/**
 * ex04 — Recursion on shape, not numbers
 *
 * Here "smaller" doesn't mean a smaller number — it means "one level
 * less nested." This mirrors walking parsed JSON and sets up tree
 * recursion (module 11): a number is a leaf, an array is a branch.
 *
 * Check: npm test -- 08 -t ex04
 */

/** An arbitrarily-nested list of numbers, e.g. `[1, [2, [3, 4], 5]]`. */
export type NestedNumber = number | NestedNumber[]

/**
 * The sum of every number anywhere in the nested structure, at any
 * depth.
 *
 * Base case: `nested` is a plain number -> return it.
 * Shrinking step: `nested` is an array -> sum `deepSum` of every
 * element (each element is one level less nested).
 *
 * @param nested - a number, or an array of NestedNumber (any depth).
 * @returns the sum of every number in the structure.
 * @example deepSum(5) -> 5
 * @example deepSum([1, [2, 3], [[4]], 5]) -> 15
 * Target: O(total numbers) time, O(max depth) space.
 */
export function deepSum(nested: NestedNumber): number {
  throw new Error('TODO: implement me')
}

/**
 * How many array levels deep the structure goes. A bare number (not
 * wrapped in any array) has depth 0. An array's depth is 1 + the
 * deepest of its elements' depths (an empty array has depth 1).
 *
 * Base case: `nested` is a plain number -> return 0.
 * Shrinking step: `nested` is an array -> 1 + the max depth among its
 * elements (0 if the array is empty).
 *
 * @param nested - a number, or an array of NestedNumber (any depth).
 * @returns the nesting depth.
 * @example maxDepthNested(5) -> 0
 * @example maxDepthNested([1, 2, 3]) -> 1
 * @example maxDepthNested([1, [2, [3]]]) -> 3
 * Target: O(total numbers) time, O(max depth) space.
 */
export function maxDepthNested(nested: NestedNumber): number {
  throw new Error('TODO: implement me')
}

/**
 * Flatten a nested structure into a single array of numbers, in the
 * same left-to-right order they appear in the source.
 *
 * Base case: `nested` is a plain number -> return [nested].
 * Shrinking step: `nested` is an array -> concatenate `flatten` of
 * every element, in order.
 *
 * @param nested - a number, or an array of NestedNumber (any depth).
 * @returns a flat array of every number, in original order.
 * @example flatten(5) -> [5]
 * @example flatten([1, [2, [3, 4], 5], 6]) -> [1, 2, 3, 4, 5, 6]
 * Target: O(total numbers) time, O(total numbers + max depth) space.
 */
export function flatten(nested: NestedNumber): number[] {
  throw new Error('TODO: implement me')
}

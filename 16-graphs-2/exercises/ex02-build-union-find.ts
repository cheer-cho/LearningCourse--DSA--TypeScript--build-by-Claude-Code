/**
 * ex02 — Build a union-find (disjoint-set) structure from scratch
 *
 * A parent forest: each element points at a parent; a root points at
 * itself. `find` walks up to the root AND compresses the path it
 * walked (every visited node ends up pointing straight at the root).
 * `union` attaches the smaller tree under the bigger tree's root, so
 * trees stay shallow. FROM SCRATCH — no built-in shortcuts.
 *
 * Check: npm test -- 16 -t ex02
 */

export class UnionFind {
  /**
   * Start with n elements (labeled 0..n-1), each its own component.
   * @param n - number of elements
   * Target: O(n) time, O(n) space
   */
  constructor(n: number) {
    throw new Error('TODO: implement me')
  }

  /**
   * Find the root of x's component, compressing the path along the
   * way (every node visited gets re-pointed straight at the root).
   * @param x - element to find the root of
   * @returns the root label of x's component
   * @throws if x is out of range
   * Target: O(alpha(n)) amortized time (near O(1)), O(1) space
   */
  find(x: number): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Merge x's and y's components (union by rank/size: the smaller
   * tree attaches under the bigger tree's root).
   * @param x - an element
   * @param y - an element
   * @returns true if x and y were in different components (and are
   *   now merged), false if they were already in the same component
   * Target: O(alpha(n)) amortized time (near O(1)), O(1) space
   */
  union(x: number, y: number): boolean {
    throw new Error('TODO: implement me')
  }

  /**
   * Whether x and y are currently in the same component.
   * @param x - an element
   * @param y - an element
   * Target: O(alpha(n)) amortized time (near O(1)), O(1) space
   */
  connected(x: number, y: number): boolean {
    throw new Error('TODO: implement me')
  }

  /**
   * @returns the current number of distinct components
   * Target: O(1) time
   */
  componentCount(): number {
    throw new Error('TODO: implement me')
  }
}

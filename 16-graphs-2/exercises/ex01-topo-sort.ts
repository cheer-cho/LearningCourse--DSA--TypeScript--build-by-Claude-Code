/**
 * ex01 — Topological sort (Kahn's algorithm)
 *
 * Scenario: courses with prerequisites. Pattern: track in-degrees,
 * start from the in-degree-0 nodes, and "unlock" neighbors as their
 * in-degree hits 0. Fewer nodes processed than n means a cycle.
 *
 * Check: npm test -- 16 -t ex01
 */

/**
 * Find any valid course order given prerequisite pairs.
 * @param n - number of courses, labeled 0..n-1
 * @param prereqs - prereqs[i] = [course, prereq] means `prereq` must
 *   be taken before `course`
 * @returns a valid order of all n courses, or null if no valid order
 *   exists (the prerequisite graph has a cycle)
 * input: n=4, prereqs=[[1,0],[2,0],[3,1],[3,2]] -> e.g. [0, 1, 2, 3]
 * input: n=2, prereqs=[[0,1],[1,0]] -> null (cycle)
 * Target: O(n + p) time, O(n + p) space (p = prereqs.length)
 */
export function buildOrder(n: number, prereqs: [number, number][]): number[] | null {
  throw new Error('TODO: implement me')
}

/**
 * Whether it's possible to complete every course given the
 * prerequisites (i.e. whether the prerequisite graph is a DAG).
 * @param n - number of courses, labeled 0..n-1
 * @param prereqs - prereqs[i] = [course, prereq] means `prereq` must
 *   be taken before `course`
 * @returns true if every course is completable, false if there's a cycle
 * input: n=2, prereqs=[[1,0]] -> true
 * input: n=2, prereqs=[[0,1],[1,0]] -> false
 * Target: O(n + p) time, O(n + p) space (p = prereqs.length)
 */
export function canFinish(n: number, prereqs: [number, number][]): boolean {
  throw new Error('TODO: implement me')
}

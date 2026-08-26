/**
 * ✦ CHECKPOINT 15 — Social graph
 *
 * A friendship network given as an undirected edge list. Apply every
 * major technique from this module: connected components (DFS/BFS),
 * BFS shortest-path distance, friends-of-friends exploration, and
 * bipartite 2-coloring.
 *
 * Passing `npm test -- 15` completes this module.
 */

/**
 * Count the number of friend circles (connected components) in a
 * network of `n` users (labeled 0..n-1) linked by `edges`.
 *
 * @param edges - undirected friendship pairs `[a, b]`.
 * @param n - number of users (nodes 0..n-1).
 * @returns number of connected components; isolated users each count
 *   as their own circle.
 * @example friendCircles([[0,1],[1,2]], 4) -> 2  (circle {0,1,2} and isolated {3})
 * Target complexity: O(n + e) time, O(n + e) space.
 */
export function friendCircles(edges: [number, number][], n: number): number {
  throw new Error('TODO: implement me')
}

/**
 * BFS shortest path (degrees of separation) between users `a` and `b`.
 *
 * @param edges - undirected friendship pairs.
 * @param a - source user.
 * @param b - target user.
 * @returns minimum number of hops between `a` and `b`, or -1 if they
 *   are in different components (not connected at all).
 * @remarks `a === b` -> 0. Direct friends -> 1.
 * @example degreesOfSeparation([[0,1],[1,2],[2,3]], 0, 3) -> 3
 * Target complexity: O(n + e) time, O(n + e) space.
 */
export function degreesOfSeparation(edges: [number, number][], a: number, b: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Friends-of-friends recommendation: users exactly 2 hops away from
 * `user` who are NOT already direct friends (and not `user` themselves).
 *
 * @param edges - undirected friendship pairs.
 * @param user - the user whose friend suggestions we compute.
 * @returns sorted array of suggested user ids (ascending).
 * @remarks A friend-of-friend who is ALSO a direct friend of `user`
 *   should NOT appear in the suggestions.
 * @example suggestedFriends([[0,1],[1,2],[1,3],[2,4]], 0) -> [2, 3]
 *   (user 0 is friends with 1; 1's friends are 2 and 3, neither of
 *   whom is a direct friend of 0, so both are suggested)
 * Target complexity: O(n + e) time, O(n + e) space.
 */
export function suggestedFriends(edges: [number, number][], user: number): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Can we divide all `n` users into two rival teams such that every
 * friendship connects someone on Team A to someone on Team B?
 * (Equivalent to: is the friendship graph bipartite?)
 *
 * @param edges - undirected friendship pairs.
 * @param n - number of users (nodes 0..n-1).
 * @returns true if the graph is 2-colorable (bipartite), false otherwise.
 * @remarks Works correctly even if the graph is disconnected — every
 *   component must be bipartite.
 * @example canTwoTeam([[0,1],[1,2],[2,0]], 3) -> false  (triangle = odd cycle)
 * Target complexity: O(n + e) time, O(n + e) space.
 */
export function canTwoTeam(edges: [number, number][], n: number): boolean {
  throw new Error('TODO: implement me')
}

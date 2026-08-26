/**
 * CHECKPOINT — Tournament board
 *
 * A leaderboard for a tournament. Combines multi-key stable sorting,
 * quickselect for a top-K view without a full sort, and counting sort
 * for bucketing scores into letter grades.
 *
 * Passing `npm test -- 09` completes this module.
 */

export interface PlayerRecord {
  name: string
  score: number
  wins: number
  /** Smaller = joined earlier. */
  joined: number
}

/**
 * Ranks players: score descending, ties broken by wins descending,
 * remaining ties broken by joined ascending (earlier join wins).
 * STABLE — the multi-key rule depends on it. Returns a NEW array.
 *
 * @param records - player records to rank
 * @returns a new array, ranked per the rules above
 *
 * Target complexity: O(n log n) time
 */
export function rankPlayers(records: PlayerRecord[]): PlayerRecord[] {
  throw new Error('TODO: implement me')
}

/**
 * Returns the top `k` players by the same ranking as `rankPlayers`,
 * WITHOUT fully sorting all n records — partition (quickselect idea)
 * to find the cut point in O(n), then sort only the k results.
 *
 * @param records - player records
 * @param k - how many top scorers to return (0 <= k <= records.length)
 * @returns the top k records, highest-ranked first
 *
 * Target complexity: O(n + k log k) average time
 */
export function topKScores(records: PlayerRecord[], k: number): PlayerRecord[] {
  throw new Error('TODO: implement me')
}

/**
 * Groups integer scores (0..100) into letter-grade buckets using a
 * counting-sort pass (no comparator sort): F 0-59, D 60-69, C 70-79,
 * B 80-89, A 90-100. Each bucket is ascending.
 *
 * @param scores - integer scores in [0, 100]
 * @returns buckets keyed by letter grade
 *
 * Target complexity: O(n) time, O(n) space
 */
export function bucketByGrade(scores: number[]): Record<'F' | 'D' | 'C' | 'B' | 'A', number[]> {
  throw new Error('TODO: implement me')
}

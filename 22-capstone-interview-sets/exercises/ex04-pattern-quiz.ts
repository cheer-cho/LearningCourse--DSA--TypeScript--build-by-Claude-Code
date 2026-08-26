/**
 * ex04 — Pattern-recognition quiz
 *
 * 20 one-line problem descriptions are listed below. For each one,
 * fill in the PATTERNS entry that best matches. Use ONLY the exact
 * labels from the PATTERNS array below.
 *
 * Check: npm test -- 22 -t ex04
 */

const PATTERNS = [
  'hash-map/set', 'two-pointers', 'fixed-window', 'variable-window',
  'prefix-sums', 'monotonic-stack', 'stack/queue', 'binary-search',
  'BFS', 'DFS/backtracking', 'heap/priority-queue', 'topological-sort',
  'union-find', 'greedy', 'DP-1D', 'DP-2D', 'Dijkstra', 'segment-tree',
  'trie', 'two-heaps',
] as const

export type Pattern = (typeof PATTERNS)[number]

// q1:  Count how many words in a list appear more than once.
// q2:  In a sorted array, find if any two distinct values sum to a target.
// q3:  Maximum product of any contiguous subarray of length exactly k.
// q4:  Longest substring with no repeated characters.
// q5:  How many subarrays sum to exactly k? (array has negatives)
// q6:  For each bar in a histogram, find the next taller bar to the right.
// q7:  Validate that HTML tags are properly nested and closed.
// q8:  Find the leftmost position where a number could be inserted to keep a sorted array sorted.
// q9:  Minimum steps to reach from start to end in an unweighted maze.
// q10: Generate every subset of a given set.
// q11: Merge k sorted lists into one sorted list.
// q12: Can all courses be finished given course prerequisites (detect cycle)?
// q13: After processing edges one at a time, answer 'are X and Y connected?'
// q14: Given arrival and departure times, find the minimum number of meeting rooms needed.
// q15: How many ways to climb n stairs taking 1, 2, or 3 steps at a time?
// q16: Minimum cost path through a grid, moving only right or down.
// q17: Shortest travel time from a source airport to all other airports (weighted edges).
// q18: Answer range-sum queries efficiently with point updates on the array.
// q19: Find all words in a grid of letters using a dictionary.
// q20: Given a stream of numbers, return the median after each insertion.

/**
 * Your answers. Replace the throw with a returned record filling every
 * key q1..q20 with the ONE best label from PATTERNS, e.g.:
 *
 *   return {
 *     q1: 'hash-map/set',
 *     q2: '...',
 *     ...
 *     q20: '...',
 *   }
 *
 * @returns a record mapping 'q1'..'q20' to a PATTERNS label each
 * Target: this one is a quiz — no complexity target, just correct calls
 */
export function patternQuiz(): Record<string, Pattern> {
  throw new Error('TODO: implement me')
}

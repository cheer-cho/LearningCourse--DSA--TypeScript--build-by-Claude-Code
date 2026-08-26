// solutions/ex04-pattern-quiz.ts — all 20 correct pattern labels

const PATTERNS = [
  'hash-map/set', 'two-pointers', 'fixed-window', 'variable-window',
  'prefix-sums', 'monotonic-stack', 'stack/queue', 'binary-search',
  'BFS', 'DFS/backtracking', 'heap/priority-queue', 'topological-sort',
  'union-find', 'greedy', 'DP-1D', 'DP-2D', 'Dijkstra', 'segment-tree',
  'trie', 'two-heaps',
] as const

export type Pattern = (typeof PATTERNS)[number]

// Suppress unused-variable warning — PATTERNS is the source of truth for Pattern type
void PATTERNS

export function patternQuiz(): Record<string, Pattern> {
  return {
    q1:  'hash-map/set',       // Count words appearing more than once
    q2:  'two-pointers',       // Two-sum on a sorted array
    q3:  'fixed-window',       // Max product of fixed-length subarray
    q4:  'variable-window',    // Longest substring without repeated chars
    q5:  'prefix-sums',        // Count subarrays summing to k (negatives present)
    q6:  'monotonic-stack',    // Next greater element in histogram
    q7:  'stack/queue',        // Validate nested HTML tag structure
    q8:  'binary-search',      // Leftmost insertion position in sorted array
    q9:  'BFS',                // Minimum steps in unweighted maze
    q10: 'DFS/backtracking',   // Generate every subset
    q11: 'heap/priority-queue',// Merge k sorted lists
    q12: 'topological-sort',   // Course schedule / cycle detection in DAG
    q13: 'union-find',         // Dynamic connectivity queries
    q14: 'greedy',             // Minimum meeting rooms (sweep line / greedy)
    q15: 'DP-1D',              // Ways to climb n stairs
    q16: 'DP-2D',              // Minimum cost path through grid
    q17: 'Dijkstra',           // Shortest weighted path from source airport
    q18: 'segment-tree',       // Range-sum queries with point updates
    q19: 'trie',               // Find dictionary words in letter grid
    q20: 'two-heaps',          // Running median from a number stream
  }
}

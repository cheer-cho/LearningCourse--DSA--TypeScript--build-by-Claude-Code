// ex05 — shortestUniquePrefix + longestCommonPrefixAll: two more readouts
// of a trie's per-node pass-through counter and its spine shape.
// Pattern: prefix tree with a per-node counter (same idea as ex03).
// Check: npm test -- 13 -t ex05

/**
 * For each word in `words`, finds its shortest prefix that no OTHER
 * word in the list shares.
 *
 * @param words - the word list (order matters for the output)
 * @returns an array the same length and order as `words`; entry i is
 * the shortest unique prefix of `words[i]`
 * @remarks build one trie of all words with a per-node pass-through
 * counter (how many words pass through this node). Walk each word from
 * the root; the first node whose counter is 1 means no other word
 * shares the path this far — that prefix is unique. If a word is a
 * duplicate (another word in the list equals it exactly), the counter
 * never reaches 1 even at the full word — return the whole word in
 * that case (no prefix, including the word itself, is unique).
 * @example words ["dog", "dodge"] -> ["dog", "dod"] (they share "do", diverge at index 2)
 * @example words ["cat", "cat", "dog"] -> ["cat", "cat", "d"] (duplicates fall back to the full word)
 * Target: O(N) total time, where N = sum of all word lengths (one trie
 * build pass + one walk per word, not a pairwise comparison of words)
 */
export function shortestUniquePrefix(words: string[]): string[] {
  throw new Error('TODO: implement me')
}

/**
 * Finds the longest prefix shared by EVERY word in `words`.
 *
 * @param words - the word list
 * @returns the longest common prefix, or `''` if `words` is empty, has
 * no common prefix, or contains the empty string
 * @remarks walk the trie's spine from the root: keep extending the
 * prefix as long as the current node has exactly one child AND no word
 * ends exactly at this node (a shorter word ending here caps the
 * common prefix at its own length). Compare this against the
 * sort-then-compare-endpoints trick (sort `words`, then the answer is
 * the common prefix of just the first and last sorted entries) — that
 * alternative is O(n log n · L) for the sort; the trie spine walk is
 * O(N), N = total input length, with no sorting needed.
 * @example ["flower", "flow", "flight"] -> "fl"
 * @example ["dog", "cat"] -> ""
 * @example [] -> ""
 * Target: O(N) time, N = sum of all word lengths
 */
export function longestCommonPrefixAll(words: string[]): string {
  throw new Error('TODO: implement me')
}

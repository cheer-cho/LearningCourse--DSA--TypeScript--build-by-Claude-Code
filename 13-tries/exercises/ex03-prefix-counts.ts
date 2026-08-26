// ex03 — PrefixCounter: pass-through counts on a trie for O(prefix
// length) prefix counting and sorted autocomplete.
// Pattern: prefix tree with a per-node counter.
// Check: npm test -- 13 -t ex03

class CounterNode {
  children: Map<string, CounterNode> = new Map()
  isEnd = false
  // Number of inserted words that pass through this node (i.e. have the
  // path from the root to this node as a prefix).
  passCount = 0
}

export class PrefixCounter {
  private readonly root: CounterNode = new CounterNode()

  /**
   * Inserts `word`, bumping every node's pass-through counter along the
   * way (including the final node itself).
   *
   * @param word - the word to insert
   * @returns nothing
   * Target: O(L) time, where L = word.length
   */
  insert(word: string): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Counts how many inserted words start with `prefix` (a word equal to
   * `prefix` counts too).
   *
   * @param prefix - the prefix to count
   * @returns the count, or 0 if no inserted word has this prefix
   * @example insert "car", "card", "care", "cart" -> countStartingWith("car") -> 4
   * @example countStartingWith("care") -> 1
   * Target: O(P) time, where P = prefix.length — NOT O(n) or O(n · L)
   */
  countStartingWith(prefix: string): number {
    throw new Error('TODO: implement me')
  }

  /**
   * Returns up to `k` inserted words that start with `prefix`, in
   * alphabetical order.
   *
   * @param prefix - the prefix to complete
   * @param k - max number of completions to return (k >= 0)
   * @returns up to `k` matching words, alphabetically sorted; `[]` if
   * `prefix` matches nothing or k is 0
   * @remarks if `prefix` itself was inserted as a word, it is included
   * (and sorts first, since it's the shortest match).
   * @example insert "car", "card", "care" -> autocomplete("car", 2) -> ["car", "card"]
   * @example autocomplete("car", 10) -> ["car", "card", "care"]
   * Target: O(P + result count · average completion length) — do NOT
   * scan every inserted word per query
   */
  autocomplete(prefix: string, k: number): string[] {
    throw new Error('TODO: implement me')
  }
}

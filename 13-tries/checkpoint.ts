/**
 * ✦ CHECKPOINT 13 — Search-box engine
 *
 * A search-box autocomplete/wildcard engine, combining every trie trick
 * from this module: indexing, top-k alphabetical suggestions, '.'
 * wildcard matching, and O(prefix length) popularity counts — all on
 * ONE shared trie.
 *
 * Passing `npm test -- 13` completes this module.
 */

class SearchBoxNode {
  children: Map<string, SearchBoxNode> = new Map()
  isEnd = false
  passCount = 0
}

export class SearchBox {
  private readonly root: SearchBoxNode = new SearchBoxNode()

  /**
   * Indexes `word`, making it searchable, suggestible, and matchable.
   *
   * @param word - the word to index
   * @returns nothing
   * @remarks indexing the same word twice increases its popularity
   * count (it is not deduplicated).
   * Target: O(L) time, where L = word.length
   */
  index(word: string): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Suggests up to `k` indexed words starting with `prefix`, in
   * alphabetical order.
   *
   * @param prefix - the prefix to complete
   * @param k - max number of suggestions (k >= 0)
   * @returns up to `k` matches, alphabetically sorted; `[]` if none
   * @example index("cat"), index("car"), index("card") -> suggest("ca", 2) -> ["car", "card"]
   * Target: O(prefix.length + result count · average result length)
   */
  suggest(prefix: string, k: number): string[] {
    throw new Error('TODO: implement me')
  }

  /**
   * Checks whether any indexed word matches `pattern`, where '.'
   * matches any single character.
   *
   * @param pattern - letters and/or '.' wildcards
   * @returns true if some indexed word matches `pattern` exactly
   * (same length, every non-'.' character equal)
   * @example index("cat") -> match("c.t") -> true, match("c.") -> false
   * Target: O(pattern.length) without dots; DFS branching with dots
   */
  match(pattern: string): boolean {
    throw new Error('TODO: implement me')
  }

  /**
   * Counts how many indexed words (counting repeats) start with
   * `prefix`.
   *
   * @param prefix - the prefix to count
   * @returns the count, or 0 if no indexed word has this prefix
   * @example index("cat") twice, index("car") once -> popularity("ca") -> 3
   * Target: O(prefix.length) time — read one counter, do not scan
   * every indexed word
   */
  popularity(prefix: string): number {
    throw new Error('TODO: implement me')
  }
}

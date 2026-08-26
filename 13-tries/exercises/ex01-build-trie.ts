// ex01 — Build a trie from scratch: insert, exact search, prefix search.
// Pattern: prefix tree / shared-prefix traversal.
// Check: npm test -- 13 -t ex01

class TrieNode {
  children: Map<string, TrieNode> = new Map()
  isEnd = false
}

export class Trie {
  private readonly root: TrieNode = new TrieNode()

  /**
   * Inserts `word` into the trie, creating any missing nodes along the
   * way and marking the final node as a word end.
   *
   * @param word - the word to insert (possibly empty)
   * @returns nothing
   * @remarks Inserting the empty string is allowed — it marks the root
   * itself as a word end. Inserting the same word twice is a no-op the
   * second time.
   * @example insert("car") then insert("card") -> both are separately searchable
   * Target: O(L) time, O(L) new nodes worst case, where L = word.length
   */
  insert(word: string): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Checks whether `word` was inserted as a complete word.
   *
   * @param word - the word to look up (possibly empty)
   * @returns true only if `word` was inserted exactly (not just present
   * as a prefix of some other word)
   * @remarks search("") is true only if insert("") was called.
   * @example trie has "car", "card" inserted -> search("car") -> true, search("ca") -> false
   * Target: O(L) time, O(1) space
   */
  search(word: string): boolean {
    throw new Error('TODO: implement me')
  }

  /**
   * Checks whether any inserted word starts with `prefix`.
   *
   * @param prefix - the prefix to look up (possibly empty)
   * @returns true if `prefix` is a prefix of at least one inserted word
   * (or equals one exactly)
   * @remarks startsWith("") is always true, even on an empty trie —
   * every word (including none) trivially starts with "".
   * @example trie has "car" inserted -> startsWith("ca") -> true, startsWith("ard") -> false
   * Target: O(L) time, O(1) space
   */
  startsWith(prefix: string): boolean {
    throw new Error('TODO: implement me')
  }
}

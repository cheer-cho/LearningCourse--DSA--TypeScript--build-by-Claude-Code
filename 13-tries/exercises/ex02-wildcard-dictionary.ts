// ex02 — WordDictionary: exact + single-char wildcard search over a trie.
// Pattern: prefix tree + DFS branching on '.'.
// Check: npm test -- 13 -t ex02

class WordNode {
  children: Map<string, WordNode> = new Map()
  isEnd = false
}

export class WordDictionary {
  private readonly root: WordNode = new WordNode()

  /**
   * Adds `word` to the dictionary.
   *
   * @param word - the word to add (possibly empty)
   * @returns nothing
   * @example addWord("bad") -> "bad" becomes searchable
   * Target: O(L) time, where L = word.length
   */
  addWord(word: string): void {
    throw new Error('TODO: implement me')
  }

  /**
   * Searches for `pattern`, where '.' matches any single character.
   *
   * @param pattern - letters and/or '.' wildcards
   * @returns true if some added word matches `pattern` exactly
   * (same length, every non-'.' character equal)
   * @remarks A '.' matches exactly one character — it never matches
   * zero or many. A pattern longer or shorter than every added word
   * can never match, regardless of dots.
   * @example words "bad", "dad", "mad" added -> search(".ad") -> true
   * @example words "bad", "dad", "mad" added -> search("b..") -> true, search("b.") -> false
   * Target: O(L) time for patterns without '.'; worst case
   * O(alphabet^L) with many dots (DFS branches at each one)
   */
  search(pattern: string): boolean {
    throw new Error('TODO: implement me')
  }
}

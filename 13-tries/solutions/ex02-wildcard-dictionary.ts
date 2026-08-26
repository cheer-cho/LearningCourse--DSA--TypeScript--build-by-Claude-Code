// Reference solution — ex02
// Pattern: prefix tree + DFS branching. Literal characters walk one edge
// (O(1) step); a '.' tries every child recursively. Without dots this is
// the same O(L) walk as an exact trie search.

class WordNode {
  children: Map<string, WordNode> = new Map()
  isEnd = false
}

export class WordDictionary {
  private readonly root: WordNode = new WordNode()

  addWord(word: string): void {
    let node = this.root
    for (const ch of word) {
      let next = node.children.get(ch)
      if (!next) {
        next = new WordNode()
        node.children.set(ch, next)
      }
      node = next
    }
    node.isEnd = true
  }

  search(pattern: string): boolean {
    return this.searchFrom(this.root, pattern, 0)
  }

  private searchFrom(node: WordNode, pattern: string, i: number): boolean {
    if (i === pattern.length) return node.isEnd

    const ch = pattern[i]!
    if (ch !== '.') {
      const next = node.children.get(ch)
      return next !== undefined && this.searchFrom(next, pattern, i + 1)
    }

    for (const child of node.children.values()) {
      if (this.searchFrom(child, pattern, i + 1)) return true
    }
    return false
  }
}

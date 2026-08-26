// Reference solution — ex01
// Pattern: prefix tree. Each node's children map shares structure across
// words with common prefixes, so insert/search/startsWith all walk exactly
// one node per character — O(L) regardless of how many words are stored.

class TrieNode {
  children: Map<string, TrieNode> = new Map()
  isEnd = false
}

export class Trie {
  private readonly root: TrieNode = new TrieNode()

  insert(word: string): void {
    let node = this.root
    for (const ch of word) {
      let next = node.children.get(ch)
      if (!next) {
        next = new TrieNode()
        node.children.set(ch, next)
      }
      node = next
    }
    node.isEnd = true
  }

  search(word: string): boolean {
    const node = this.walk(word)
    return node !== undefined && node.isEnd
  }

  startsWith(prefix: string): boolean {
    return this.walk(prefix) !== undefined
  }

  private walk(chars: string): TrieNode | undefined {
    let node = this.root
    for (const ch of chars) {
      const next = node.children.get(ch)
      if (!next) return undefined
      node = next
    }
    return node
  }
}

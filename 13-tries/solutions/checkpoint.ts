// Reference solution — checkpoint 13 (Search-box engine)
// Pattern: one trie, three readouts. index/suggest/popularity reuse the
// pass-through-counter trick from ex03; match reuses the wildcard DFS
// from ex02. Sharing one trie means every operation stays O(L)-ish
// instead of paying to rebuild structure per query.

class SearchBoxNode {
  children: Map<string, SearchBoxNode> = new Map()
  isEnd = false
  passCount = 0
}

export class SearchBox {
  private readonly root: SearchBoxNode = new SearchBoxNode()

  index(word: string): void {
    let node = this.root
    node.passCount++
    for (const ch of word) {
      let next = node.children.get(ch)
      if (!next) {
        next = new SearchBoxNode()
        node.children.set(ch, next)
      }
      node = next
      node.passCount++
    }
    node.isEnd = true
  }

  suggest(prefix: string, k: number): string[] {
    const results: string[] = []
    if (k <= 0) return results

    const start = this.walk(prefix)
    if (!start) return results

    this.collect(start, prefix, k, results)
    return results
  }

  match(pattern: string): boolean {
    return this.matchFrom(this.root, pattern, 0)
  }

  popularity(prefix: string): number {
    const node = this.walk(prefix)
    return node ? node.passCount : 0
  }

  private walk(chars: string): SearchBoxNode | undefined {
    let node = this.root
    for (const ch of chars) {
      const next = node.children.get(ch)
      if (!next) return undefined
      node = next
    }
    return node
  }

  private collect(node: SearchBoxNode, prefix: string, k: number, results: string[]): void {
    if (results.length >= k) return
    if (node.isEnd) results.push(prefix)
    if (results.length >= k) return

    const chars = [...node.children.keys()].sort()
    for (const ch of chars) {
      if (results.length >= k) return
      const child = node.children.get(ch)!
      this.collect(child, prefix + ch, k, results)
    }
  }

  private matchFrom(node: SearchBoxNode, pattern: string, i: number): boolean {
    if (i === pattern.length) return node.isEnd

    const ch = pattern[i]!
    if (ch !== '.') {
      const next = node.children.get(ch)
      return next !== undefined && this.matchFrom(next, pattern, i + 1)
    }

    for (const child of node.children.values()) {
      if (this.matchFrom(child, pattern, i + 1)) return true
    }
    return false
  }
}

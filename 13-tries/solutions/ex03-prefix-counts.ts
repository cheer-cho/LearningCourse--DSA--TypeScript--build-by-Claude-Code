// Reference solution — ex03
// Pattern: prefix tree with a pass-through counter per node. Counting
// words under a prefix becomes an O(P) walk (read one counter) instead of
// scanning every word. Autocomplete DFS explores children in sorted
// order and checks isEnd BEFORE descending, so results come out already
// alphabetically ordered, and stops as soon as k are found.

class CounterNode {
  children: Map<string, CounterNode> = new Map()
  isEnd = false
  passCount = 0
}

export class PrefixCounter {
  private readonly root: CounterNode = new CounterNode()

  insert(word: string): void {
    let node = this.root
    node.passCount++
    for (const ch of word) {
      let next = node.children.get(ch)
      if (!next) {
        next = new CounterNode()
        node.children.set(ch, next)
      }
      node = next
      node.passCount++
    }
    node.isEnd = true
  }

  countStartingWith(prefix: string): number {
    const node = this.walk(prefix)
    return node ? node.passCount : 0
  }

  autocomplete(prefix: string, k: number): string[] {
    const results: string[] = []
    if (k <= 0) return results

    const start = this.walk(prefix)
    if (!start) return results

    this.collect(start, prefix, k, results)
    return results
  }

  private walk(chars: string): CounterNode | undefined {
    let node = this.root
    for (const ch of chars) {
      const next = node.children.get(ch)
      if (!next) return undefined
      node = next
    }
    return node
  }

  private collect(node: CounterNode, prefix: string, k: number, results: string[]): void {
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
}

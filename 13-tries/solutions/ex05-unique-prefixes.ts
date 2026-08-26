// Reference solution — ex05
// Pattern: prefix tree with a pass-through counter (shortestUniquePrefix)
// and a spine walk (longestCommonPrefixAll). Both build one trie in O(N)
// (N = total input length) instead of comparing words pairwise or
// sorting, so the whole thing is O(N).

class CounterNode {
  children: Map<string, CounterNode> = new Map()
  isEnd = false
  passCount = 0
}

function buildTrie(words: string[]): CounterNode {
  const root = new CounterNode()
  for (const word of words) {
    let node = root
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
  return root
}

export function shortestUniquePrefix(words: string[]): string[] {
  const root = buildTrie(words)

  return words.map((word) => {
    let node = root
    for (let i = 0; i < word.length; i++) {
      const ch = word[i]!
      node = node.children.get(ch)!
      if (node.passCount === 1) return word.slice(0, i + 1)
    }
    return word // duplicate: no prefix (including the full word) is unique
  })
}

export function longestCommonPrefixAll(words: string[]): string {
  if (words.length === 0) return ''

  const root = buildTrie(words)
  let node = root
  let prefix = ''

  while (!node.isEnd && node.children.size === 1) {
    const [ch, child] = [...node.children.entries()][0]!
    prefix += ch
    node = child
  }

  return prefix
}

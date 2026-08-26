// Reference solution — ex04
// Pattern: trie walk to the first end-of-word marker. Building the trie
// once costs O(R) (total root length); walking each sentence word stops
// the moment it hits a root's isEnd flag, which is guaranteed to be the
// SHORTEST match since any longer root sharing the prefix is reached
// strictly later on the same path. Total: O(S + R).

class RootNode {
  children: Map<string, RootNode> = new Map()
  isEnd = false
}

export function replaceWithRoots(roots: string[], sentence: string): string {
  const trieRoot = new RootNode()
  for (const root of roots) {
    let node = trieRoot
    for (const ch of root) {
      let next = node.children.get(ch)
      if (!next) {
        next = new RootNode()
        node.children.set(ch, next)
      }
      node = next
    }
    node.isEnd = true
  }

  const shortestRoot = (word: string): string => {
    let node = trieRoot
    for (let i = 0; i < word.length; i++) {
      const ch = word[i]!
      const next = node.children.get(ch)
      if (!next) return word // no root matches; keep the original word
      node = next
      if (node.isEnd) return word.slice(0, i + 1)
    }
    return word // walked the whole word without hitting a root's end
  }

  return sentence
    .split(' ')
    .map((word) => shortestRoot(word))
    .join(' ')
}

// ex04 — replaceWithRoots: abbreviation expansion via a trie of roots.
// Pattern: trie walk to the FIRST end-of-word marker (shortest match).
// Check: npm test -- 13 -t ex04

/**
 * A word-processor "abbreviate" feature: given a dictionary of known
 * word roots, replace every word in `sentence` with the SHORTEST root
 * that is a prefix of it (if any root matches). Words with no matching
 * root are left unchanged.
 *
 * @param roots - dictionary of root words (e.g. ["cat", "bat", "rat"])
 * @param sentence - space-separated words to process
 * @returns `sentence` with each replaceable word swapped for its
 * shortest matching root, words separated by single spaces
 * @remarks build a trie of `roots` once, then for each word in
 * `sentence` walk it character by character and stop at the FIRST node
 * marked as a word end — that's the shortest root, by construction
 * (you can never reach a longer root's end marker without passing
 * through a shorter one first, since it's the same prefix path).
 * @example roots ["cat","bat","rat"], sentence "the cattle was rattled by the battery"
 *   -> "the cat was rat by the bat"
 * @example roots ["a"], sentence "aaa a aa" -> "a a a"
 * Target: O(S + R) time, where S = total sentence length, R = total
 * roots length — NOT O(words · roots) by checking each root against
 * each word
 */
export function replaceWithRoots(roots: string[], sentence: string): string {
  throw new Error('TODO: implement me')
}

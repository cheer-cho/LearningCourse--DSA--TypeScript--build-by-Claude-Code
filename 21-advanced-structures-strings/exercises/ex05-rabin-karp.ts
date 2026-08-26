// ex05 — Rabin-Karp rolling hash: find all pattern occurrences and
//        count repeated k-length windows.
// Pattern: rolling hash / string matching.
// Check: npm test -- 21 -t ex05

/**
 * Returns the starting index of every occurrence of `pattern` in `text`
 * (0-indexed, may overlap).
 *
 * Algorithm (Rabin-Karp):
 * 1. Hash the pattern and the first window of the text.
 * 2. Slide the window one character at a time:
 *    - Remove the outgoing character's contribution (multiply the
 *      stored high-power-of-B factor by B).
 *    - Add the incoming character.
 *    - Update in O(1).
 * 3. On a HASH MATCH, verify with a real string comparison before
 *    recording the hit (collision protection).
 *
 * Rolling-hash update formula for window [i, i+m):
 *   newHash = (oldHash - charCode(text[i]) * B^(m-1)) * B + charCode(text[i+m])  (mod M)
 *
 * Suggested constants: B = 31, M = 1_000_000_007 (a large prime).
 * Compute B^(m-1) mod M with a plain loop (m multiplications by B),
 * NOT repeated squaring — intermediate B^B values can exceed
 * Number.MAX_SAFE_INTEGER if B and M are both large.
 *
 * @param text    - the text to search in
 * @param pattern - the pattern to search for
 * @returns sorted array of 0-indexed start positions where pattern
 *          appears in text; [] if pattern is empty or longer than text
 * @example findAll("abcabcabc", "abc") -> [0, 3, 6]
 * @example findAll("aaaaaa", "aaa")    -> [0, 1, 2, 3]  (overlapping)
 * @example findAll("hello", "world")   -> []
 * @example findAll("hello", "")        -> []
 * Target: O(n + m) expected time (O(n*m) worst case on adversarial hash collisions)
 */
export function findAll(text: string, pattern: string): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Counts the number of distinct k-length substrings in `dna` that
 * appear MORE THAN ONCE.
 *
 * Strategy: slide a window of length k, compute each window's rolling
 * hash, store hashes in a Set. When a hash was seen before, verify the
 * actual substring and add to a "seen-twice" Set.
 *
 * @param dna - a string of characters (typically 'A','C','G','T' but any chars)
 * @param k   - window length (1 <= k <= dna.length)
 * @returns the count of distinct k-length substrings appearing 2+ times
 * @remarks two overlapping windows that have the same characters count
 *          as ONE repeated substring.
 * @example countRepeatedWindows("ACGAACG", 3) -> 1
 *          // windows: ACG CGA GAA AAC ACG — only "ACG" repeats.
 * @example countRepeatedWindows("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", 10) -> 2
 *          // "AAAAACCCCC" and "CCCCCAAAAA" each appear twice
 * @example countRepeatedWindows("ABCDE", 2) -> 0  (all windows are distinct)
 * Target: O(n) expected time, O(n) space
 */
export function countRepeatedWindows(dna: string, k: number): number {
  throw new Error('TODO: implement me')
}

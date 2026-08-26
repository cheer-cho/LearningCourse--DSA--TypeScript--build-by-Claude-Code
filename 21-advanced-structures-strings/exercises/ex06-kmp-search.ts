// ex06 — KMP string search: build the failure table, then run the search.
// Pattern: KMP (Knuth-Morris-Pratt) / failure function / linear string matching.
// Check: npm test -- 21 -t ex06

/**
 * Builds the KMP failure table (also called the "prefix function") for
 * the given pattern.
 *
 * failureTable[i] = the length of the longest proper prefix of
 * pattern[0..i] (inclusive) that is also a suffix of pattern[0..i].
 * A "proper" prefix/suffix is NOT the whole string.
 *
 * Algorithm:
 * - Start with failureTable = [0, ...] (index 0 is always 0).
 * - Keep a pointer `k` starting at 0 (length of current border).
 * - For each i from 1 to pattern.length-1:
 *   - While k > 0 and pattern[k] != pattern[i]: k = failureTable[k-1]
 *   - If pattern[k] == pattern[i]: k++
 *   - failureTable[i] = k
 *
 * Walked on "ababaca":
 *   i=0: 'a', border length 0 -> table[0]=0
 *   i=1: 'b', 'b'!='a', k stays 0 -> table[1]=0
 *   i=2: 'a', 'a'=='a', k=1 -> table[2]=1
 *   i=3: 'b', pattern[1]='b'=='b', k=2 -> table[3]=2
 *   i=4: 'a', pattern[2]='a'=='a', k=3 -> table[4]=3
 *   i=5: 'c', pattern[3]='b'!='c', k=table[2]=1; pattern[1]='b'!='c', k=table[0]=0; k stays 0 -> table[5]=0
 *   i=6: 'a', pattern[0]='a'=='a', k=1 -> table[6]=1
 * Result: [0, 0, 1, 2, 3, 0, 1]
 *
 * @param pattern - the pattern string (non-empty)
 * @returns the failure table as a number array of the same length
 * @example failureTable("ababaca") -> [0, 0, 1, 2, 3, 0, 1]
 * @example failureTable("abcde")   -> [0, 0, 0, 0, 0]  (no borders)
 * @example failureTable("aaaa")    -> [0, 1, 2, 3]
 * @example failureTable("a")       -> [0]
 * Target: O(m) time, O(m) space  (m = pattern.length)
 */
export function buildFailureTable(pattern: string): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Returns the starting index of every occurrence of `pattern` in `text`
 * using the KMP algorithm (no character in `text` is ever re-read).
 *
 * Algorithm (after building the failure table for `pattern`):
 * - Keep pointer `k` into the pattern (how far we've matched).
 * - For each character text[i]:
 *   - While k > 0 and pattern[k] != text[i]: k = failureTable[k-1]
 *   - If pattern[k] == text[i]: k++
 *   - If k == pattern.length: record match at i - k + 1;
 *     then k = failureTable[k-1]  (keep looking for overlapping matches)
 *
 * @param text    - the text to search in
 * @param pattern - the pattern to find
 * @returns sorted array of 0-indexed start positions; [] if pattern is
 *          empty or not found
 * @example kmpFindAll("abcabcabc", "abc") -> [0, 3, 6]
 * @example kmpFindAll("aaaaaa", "aaa")    -> [0, 1, 2, 3]  (overlapping)
 * @example kmpFindAll("hello", "world")   -> []
 * @example kmpFindAll("abcabc", "")       -> []
 * Target: O(n + m) time, O(m) space
 */
export function kmpFindAll(text: string, pattern: string): number[] {
  throw new Error('TODO: implement me')
}

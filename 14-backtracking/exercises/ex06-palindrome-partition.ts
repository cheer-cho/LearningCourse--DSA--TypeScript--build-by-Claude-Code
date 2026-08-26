// A DNA-fragment splitter that only accepts cuts where every resulting
// fragment reads the same forwards and backwards. Pattern: backtracking
// over cut positions (combinations-shape start index), pruning any
// prefix that isn't itself a palindrome. Check: npm test -- 14 -t ex06

/**
 * Every way to partition `s` into a sequence of substrings that are
 * ALL palindromes (each substring, read alone, is a palindrome).
 *
 * @param s - the string to partition (may be empty).
 * @returns every valid partition, each a list of pieces in order.
 * @remarks Edge case: `s === ''` -> `[[]]` (one partition: zero pieces).
 *   A single character is always a palindrome, so at minimum the
 *   all-single-characters partition is always present for non-empty `s`.
 * @example palindromePartitions('aab') -> [['a','a','b'], ['aa','b']]
 * Target complexity: exponential in the worst case (inherent — number of partitions can be
 *   exponential), pruned by rejecting a candidate piece the moment it isn't a palindrome.
 */
export function palindromePartitions(s: string): string[][] {
  throw new Error('TODO: implement me')
}

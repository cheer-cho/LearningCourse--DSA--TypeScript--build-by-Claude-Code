// Scenario: a log-scrubbing tool needs the first character in a token
// that never repeats, and a voting tally needs the option most people
// picked. Pattern: counting with a hash map (two-pass).
// Run: npm test -- 03 -t ex01

/**
 * Index of the first character in `s` that appears exactly once,
 * scanning left to right.
 *
 * Two passes: build a count map, then scan again for the first index
 * whose character has count 1. One pass alone can't answer this — you
 * don't know a character is "unique" until you've seen the whole
 * string.
 *
 * @param s - the string to scan
 * @returns the index of the first non-repeating character, or -1 if
 *   every character repeats (or `s` is empty)
 *
 * firstUniqueIndex("swiss") -> 1   ('s' repeats at 0, 3, 4; 'w' at
 *   index 1 is the first character that never repeats)
 * firstUniqueIndex("aabb") -> -1
 * firstUniqueIndex("") -> -1
 *
 * Target complexity: O(n) time, O(k) space (k = distinct characters).
 */
export function firstUniqueIndex(s: string): number {
  throw new Error('TODO: implement me')
}

/**
 * The element that appears more than `nums.length / 2` times.
 *
 * `nums` is guaranteed to contain a majority element (the classic
 * "Majority Element" setup — the caller has already checked one
 * exists). Count occurrences with a hash map and return the key whose
 * count clears the threshold.
 *
 * @param nums - non-empty array guaranteed to have a majority element
 * @returns the majority element
 * @throws if no element ever clears the majority threshold (should not
 *   happen given the guarantee above)
 *
 * majorityItem([2, 2, 1, 2, 3]) -> 2
 * majorityItem([7]) -> 7
 *
 * Target complexity: O(n) time, O(n) space.
 *
 * Bonus (not required here): the Boyer-Moore Voting Algorithm solves
 * this in O(1) space with a running "candidate" + counter (increment
 * on a match, decrement otherwise, swap candidate when the counter
 * hits 0) — worth knowing for "can you do it in O(1) space?".
 */
export function majorityItem(nums: number[]): number {
  throw new Error('TODO: implement me')
}

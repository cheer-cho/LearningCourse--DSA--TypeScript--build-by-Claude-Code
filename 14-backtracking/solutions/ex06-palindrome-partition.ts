// Reference solution — ex06

/**
 * Pattern: backtracking, combinations shape over CUT POSITIONS — the
 * "choices" at each step are where to end the next piece, and a piece
 * that isn't a palindrome is pruned immediately (never recursed into).
 * Time: exponential worst case (inherent — number of partitions can be
 * exponential), each palindrome check O(piece length). Space: O(n) recursion + path.
 */
export function palindromePartitions(s: string): string[][] {
  const results: string[][] = []
  const path: string[] = []

  function isPalindrome(str: string): boolean {
    let left = 0
    let right = str.length - 1
    while (left < right) {
      if (str[left] !== str[right]) return false
      left++
      right--
    }
    return true
  }

  function backtrack(start: number): void {
    if (start === s.length) {
      results.push([...path])
      return
    }
    for (let end = start + 1; end <= s.length; end++) {
      const piece = s.slice(start, end)
      if (!isPalindrome(piece)) continue // prune: never recurse into a non-palindrome piece
      path.push(piece)
      backtrack(end)
      path.pop()
    }
  }

  backtrack(0)
  return results
}

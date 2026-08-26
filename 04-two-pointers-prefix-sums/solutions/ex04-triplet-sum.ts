// Reference solution — ex04
//
// Pattern: sort, then fix the first element and run opposite-ends two
// pointers over the rest for a pair summing to -nums[i]. Skipping
// duplicates at all three positions (i, l, r) avoids emitting the same
// triplet of values twice.
// Time: O(n log n) sort + O(n^2) scan = O(n^2). Space: O(1) extra
// (not counting the output / the sort's own space).

export function threeSumZero(nums: number[]): number[][] {
  const sorted = [...nums].sort((a, b) => a - b)
  const result: number[][] = []

  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue
    if (sorted[i]! > 0) break // sorted ascending: no way to reach 0 anymore

    let l = i + 1
    let r = sorted.length - 1

    while (l < r) {
      const sum = sorted[i]! + sorted[l]! + sorted[r]!
      if (sum === 0) {
        result.push([sorted[i]!, sorted[l]!, sorted[r]!])
        l++
        r--
        while (l < r && sorted[l] === sorted[l - 1]) l++
        while (l < r && sorted[r] === sorted[r + 1]) r--
      } else if (sum < 0) {
        l++
      } else {
        r--
      }
    }
  }

  return result
}

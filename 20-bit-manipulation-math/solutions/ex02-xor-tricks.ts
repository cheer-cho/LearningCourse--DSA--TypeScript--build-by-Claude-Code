// Reference solution — ex02
// Pattern: XOR-fold. a^a=0 cancels pairs, a^0=a is the identity, and
// order doesn't matter, so a running XOR finds whatever doesn't have
// a partner (findSingle) or whatever's missing from a known full
// range (findMissing). swapCountBits reuses the same popcount loop
// from ex01 on a ^ b. All three are O(n) or O(popcount) time, O(1)
// space.

export function findSingle(nums: number[]): number {
  let result = 0
  for (const n of nums) result ^= n
  return result
}

export function findMissing(nums: number[]): number {
  const n = nums.length
  let result = n
  for (let i = 0; i < n; i++) {
    result ^= i
    result ^= nums[i]!
  }
  return result
}

export function swapCountBits(a: number, b: number): number {
  let diff = a ^ b
  let count = 0
  while (diff !== 0) {
    diff &= diff - 1
    count++
  }
  return count
}

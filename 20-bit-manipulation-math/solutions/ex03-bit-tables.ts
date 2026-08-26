// Reference solution — ex03
// Pattern: countBitsUpto is DP over popcount (dp[i] = dp[i>>1] +
// (i&1)), each entry O(1) after the ones before it, O(n) total.
// reverseBits32 shifts one bit at a time out of n and into result,
// then `>>> 0` reinterprets the 32-bit pattern as an unsigned value
// (result may have its sign bit set after 32 left-shifts).

export function countBitsUpto(n: number): number[] {
  const dp: number[] = new Array(n + 1)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1]! + (i & 1)
  }
  return dp
}

export function reverseBits32(n: number): number {
  let result = 0
  let remaining = n
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (remaining & 1)
    remaining >>>= 1
  }
  return result >>> 0
}

// Reference solution — ex03

// Pattern: divide and conquer (exponentiation by squaring). Split n in
// half instead of decrementing by 1 — that's the whole trick. Negative
// n reuses the positive case. O(log n) time, O(log n) space.
export function power(x: number, n: number, tick?: () => void): number {
  tick?.()
  if (n === 0) return 1
  if (n < 0) return 1 / power(x, -n, tick)

  const half = power(x, Math.floor(n / 2), tick)
  return n % 2 === 0 ? half * half : half * half * x
}

// Pattern: divide and conquer, same squaring trick, with every
// intermediate result reduced mod m so values never exceed roughly
// m^2 (safe for JS doubles as long as m stays well under 2^26 or so —
// fine for the moduli this exercise and Rabin-Karp use).
// O(log exp) time, O(log exp) space.
export function powerMod(base: number, exp: number, mod: number, tick?: () => void): number {
  tick?.()
  if (mod === 1) return 0
  if (exp === 0) return 1 % mod

  const half = powerMod(base, Math.floor(exp / 2), mod, tick)
  let result = (half * half) % mod
  if (exp % 2 === 1) result = (result * (base % mod)) % mod
  return result
}

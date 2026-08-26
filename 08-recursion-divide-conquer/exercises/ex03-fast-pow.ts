/**
 * ex03 — Fast exponentiation by squaring (divide and conquer)
 *
 * x^n splits in half: x^n = (x^(n/2))^2, halving the exponent instead
 * of decrementing it — that's what takes this from O(n) to O(log n).
 *
 * Check: npm test -- 08 -t ex03
 */

/**
 * x raised to the power n, in O(log n) time via divide and conquer.
 * Handles negative n (x^-n = 1 / x^n).
 *
 * Base case: n === 0 -> 1 (anything to the 0th power).
 * Shrinking step (divide): half = power(x, floor(n / 2)); combine:
 * half * half, times x again if n was odd.
 *
 * @param x - the base.
 * @param n - the exponent, any integer (positive, negative, or 0).
 * @param tick - optional callback invoked once per recursive call, so
 *   tests can prove the call count is ~log2(n), not ~n.
 * @returns x^n.
 * @example power(2, 10) -> 1024
 * @example power(2, -2) -> 0.25
 * Target: O(log n) time, O(log n) space.
 */
export function power(x: number, n: number, tick?: () => void): number {
  throw new Error('TODO: implement me')
}

/**
 * (base^exp) mod m, in O(log exp) time via divide and conquer. Keeps
 * every intermediate value reduced mod m so it never needs numbers
 * bigger than m^2. Used later for Rabin-Karp string matching (module
 * 21), where you compute huge powers mod a prime to hash substrings.
 *
 * Base case: exp === 0 -> 1 % mod.
 * Shrinking step (divide): half = powerMod(base, floor(exp / 2), mod);
 * combine: (half * half) % mod, times base again (mod m) if exp was odd.
 *
 * @param base - the base (assume non-negative for this exercise).
 * @param exp - the exponent (assume non-negative).
 * @param mod - the modulus (assume >= 1).
 * @param tick - optional callback invoked once per recursive call, so
 *   tests can prove the call count is ~log2(exp), not ~exp.
 * @returns (base^exp) mod m.
 * @example powerMod(2, 10, 1000) -> 24
 * @example powerMod(4, 13, 497) -> 445
 * Target: O(log exp) time, O(log exp) space.
 */
export function powerMod(base: number, exp: number, mod: number, tick?: () => void): number {
  throw new Error('TODO: implement me')
}

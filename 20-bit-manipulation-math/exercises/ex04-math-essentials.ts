/**
 * ex04 — Math essentials
 *
 * Scenario: a scheduling tool needs to line up repeating events (gcd/
 * lcm) and a security tool needs to test and enumerate primes.
 * Pattern: the number-theory reflexes from the lesson — Euclid's gcd,
 * lcm via gcd, trial-division primality, and the sieve of
 * Eratosthenes.
 *
 * Check: npm test -- 20 -t ex04
 */

/**
 * Greatest common divisor of a and b (Euclid's algorithm, iterative).
 * @param a - non-negative integer
 * @param b - non-negative integer
 * @returns the largest integer dividing both a and b
 * edge cases: gcd(0, b) -> b; gcd(a, 0) -> a; gcd(0, 0) -> 0
 * input: gcd(48, 18) -> 6
 * Target: O(log(min(a, b))) time, O(1) space
 */
export function gcd(a: number, b: number): number {
  throw new Error('TODO: implement me')
}

/**
 * Least common multiple of a and b, via a / gcd(a, b) * b (divide
 * before multiplying to keep the intermediate value smaller).
 * @param a - positive integer
 * @param b - positive integer
 * @returns the smallest positive integer divisible by both a and b
 * input: lcm(4, 6) -> 12
 * input: lcm(5, 7) -> 35
 * Target: O(log(min(a, b))) time, O(1) space
 */
export function lcm(a: number, b: number): number {
  throw new Error('TODO: implement me')
}

/**
 * All primes p with 2 <= p <= n, via the Sieve of Eratosthenes:
 * mark multiples of each newly-found prime, starting from that
 * prime's square (smaller multiples were already marked by a smaller
 * prime factor).
 * @param n - non-negative integer, inclusive upper bound
 * @returns primes in ascending order
 * edge cases: n < 2 -> []
 * input: primesUpto(30) -> [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
 * Target: O(n log log n) time, O(n) space
 */
export function primesUpto(n: number): number[] {
  throw new Error('TODO: implement me')
}

/**
 * Is n prime? Trial-divide only up to floor(sqrt(n)): if n = a * b
 * with both factors above sqrt(n), their product would exceed n, a
 * contradiction — so any factor pair must have one factor at or below
 * sqrt(n).
 * @param n - integer to test
 * @returns true iff n is prime (n >= 2 and has no divisor other than
 *   1 and itself)
 * edge cases: n <= 1 -> false; n = 2 -> true (the only even prime)
 * input: isPrime(97) -> true
 * input: isPrime(91) -> false (7 * 13)
 * Target: O(sqrt(n)) time, O(1) space
 */
export function isPrime(n: number): boolean {
  throw new Error('TODO: implement me')
}

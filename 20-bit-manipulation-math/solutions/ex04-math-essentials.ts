// Reference solution — ex04
// Pattern: classic number-theory primitives. gcd uses Euclid's iterative
// recurrence (O(log min(a,b))). lcm divides before multiplying to avoid
// intermediate overflow. primesUpto is the Sieve of Eratosthenes (O(n log
// log n), O(n) space). isPrime does trial division up to sqrt(n) (O(sqrt n)).

export function gcd(a: number, b: number): number {
  let x = a
  let y = b
  while (y !== 0) {
    const temp = y
    y = x % y
    x = temp
  }
  return x
}

export function lcm(a: number, b: number): number {
  // divide first to keep the intermediate value smaller
  return (a / gcd(a, b)) * b
}

export function primesUpto(n: number): number[] {
  if (n < 2) return []
  // composite[i] = true means i is NOT prime
  const composite: boolean[] = new Array(n + 1).fill(false)
  const primes: number[] = []
  for (let i = 2; i <= n; i++) {
    if (!composite[i]) {
      primes.push(i)
      // mark multiples starting from i*i (smaller multiples already crossed out)
      for (let j = i * i; j <= n; j += i) {
        composite[j] = true
      }
    }
  }
  return primes
}

export function isPrime(n: number): boolean {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false
  const limit = Math.floor(Math.sqrt(n))
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false
  }
  return true
}

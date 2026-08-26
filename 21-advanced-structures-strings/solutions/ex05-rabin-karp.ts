// Reference solution — ex05
// Pattern: rolling hash (Rabin-Karp). Slide hash in O(1) per step; verify on hit.
// findAll: O(n + m) expected (O(n*m) adversarial). countRepeatedWindows: O(n) expected.
// Space: O(n) for result; O(1) working space beyond that.

const B = 31
const MOD = 1_000_000_007

function charCode(c: string): number {
  return (c.codePointAt(0) ?? 0) + 1 // +1 so 'a' maps to non-zero
}

export function findAll(text: string, pattern: string): number[] {
  const n = text.length
  const m = pattern.length
  if (m === 0 || m > n) return []

  // Compute B^(m-1) mod MOD with a plain loop (safe against overflow)
  let pow = 1
  for (let i = 0; i < m - 1; i++) pow = (pow * B) % MOD

  // Compute pattern hash and initial window hash
  let patHash = 0
  let winHash = 0
  for (let i = 0; i < m; i++) {
    patHash = (patHash * B + charCode(pattern[i] ?? '')) % MOD
    winHash = (winHash * B + charCode(text[i] ?? '')) % MOD
  }

  const result: number[] = []

  for (let i = 0; i <= n - m; i++) {
    if (winHash === patHash) {
      // Verify to guard against hash collisions
      if (text.slice(i, i + m) === pattern) {
        result.push(i)
      }
    }
    // Slide window (don't compute for last position)
    if (i < n - m) {
      winHash =
        (((winHash - (charCode(text[i] ?? '') * pow) % MOD + MOD) % MOD) * B +
          charCode(text[i + m] ?? '')) %
        MOD
    }
  }

  return result
}

export function countRepeatedWindows(dna: string, k: number): number {
  const n = dna.length
  if (k <= 0 || k > n) return 0

  // Use a Set of actual substrings for correctness (rolling hash accelerates lookup).
  // Two-Set approach: once a substring moves from "seen once" to "seen twice", count it.
  const seenOnce = new Set<string>()
  const seenTwice = new Set<string>()

  let pow = 1
  for (let i = 0; i < k - 1; i++) pow = (pow * B) % MOD

  let winHash = 0
  for (let i = 0; i < k; i++) {
    winHash = (winHash * B + charCode(dna[i] ?? '')) % MOD
  }

  // Process first window
  const firstWindow = dna.slice(0, k)
  seenOnce.add(firstWindow)

  for (let i = 1; i <= n - k; i++) {
    // Roll hash forward
    winHash =
      (((winHash - (charCode(dna[i - 1] ?? '') * pow) % MOD + MOD) % MOD) * B +
        charCode(dna[i + k - 1] ?? '')) %
      MOD

    // Only do expensive string slice on hash collision or first-time lookup
    const sub = dna.slice(i, i + k)
    if (seenOnce.has(sub)) {
      seenTwice.add(sub)
    } else {
      seenOnce.add(sub)
    }
  }

  return seenTwice.size
}

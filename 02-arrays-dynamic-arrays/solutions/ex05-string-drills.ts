// Pattern: build-then-join. Push pieces into an array (O(1) amortized
// each, per ex01) and join once at the end, instead of repeated string
// concatenation — each `+=` allocates a new string, making a naive
// loop O(n^2) overall.
// Complexity: O(n) time, O(n) space for all three functions.

export function reverseWords(s: string): string {
  const words = s.split(' ').filter((w) => w.length > 0)
  words.reverse()
  return words.join(' ')
}

export function runLengthEncode(s: string): string {
  if (s.length === 0) return ''
  const parts: string[] = []
  let current = s[0] as string
  let runLength = 1
  for (let i = 1; i < s.length; i++) {
    const ch = s[i] as string
    if (ch === current) {
      runLength += 1
    } else {
      parts.push(current, String(runLength))
      current = ch
      runLength = 1
    }
  }
  parts.push(current, String(runLength))
  return parts.join('')
}

export function runLengthDecode(s: string): string {
  const parts: string[] = []
  let i = 0
  while (i < s.length) {
    const ch = s[i] as string
    i += 1
    let digits = ''
    while (i < s.length && /[0-9]/.test(s[i] as string)) {
      digits += s[i] as string
      i += 1
    }
    parts.push(ch.repeat(Number(digits)))
  }
  return parts.join('')
}

import { describe, expect, it } from 'vitest'
import { decodeWays } from './ex06-decode-count'

describe('ex18/ex06 — decodeWays', () => {
  it('returns 0 for an empty message', () => {
    expect(decodeWays('')).toBe(0)
  })

  it('decodes a single valid digit one way', () => {
    expect(decodeWays('7')).toBe(1)
  })

  it('a leading zero alone has no decoding', () => {
    expect(decodeWays('0')).toBe(0)
  })

  it('splits either as two singles or one double', () => {
    expect(decodeWays('12')).toBe(2) // "AB" or "L"
  })

  it('a two-digit code starting with 0 is invalid, only the single reading counts', () => {
    expect(decodeWays('06')).toBe(0) // "0" alone is invalid too, so this fails entirely
  })

  it('treats "10" as exactly one valid decoding', () => {
    expect(decodeWays('10')).toBe(1) // "J", not "A" + invalid "0"
  })

  it('treats "27" as exactly one valid decoding (27 is out of range)', () => {
    expect(decodeWays('27')).toBe(1) // "BG" only, "27" is not a valid code
  })

  it('handles "100" (a zero that only the two-digit reading can absorb)', () => {
    expect(decodeWays('100')).toBe(0) // "10" + "0" fails, "1" + "00" fails
  })

  it('branches at every valid split point', () => {
    expect(decodeWays('226')).toBe(3) // "BZ", "VF", "BBF"
  })

  it('handles a long run of a single non-zero digit', () => {
    // Consecutive 1s and 2s branch like a Fibonacci run of decisions.
    expect(decodeWays('111111')).toBe(13)
  })

  it('stays fast on a long digit string', () => {
    const digits = '12'.repeat(5000)
    const result = decodeWays(digits)
    expect(Number.isFinite(result) || result === Infinity).toBe(true)
    expect(result).toBeGreaterThan(0)
  })
})

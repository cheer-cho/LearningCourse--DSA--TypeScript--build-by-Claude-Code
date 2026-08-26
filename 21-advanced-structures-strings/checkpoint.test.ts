import { describe, expect, it } from 'vitest'
import { MetricsBoard } from './checkpoint'

describe('21 checkpoint — MetricsBoard', () => {
  // ── windowTotal + windowLow ──────────────────────────────────────────

  it('windowTotal returns the correct sum over a range', () => {
    const board = new MetricsBoard([2, 5, 1, 4, 9, 3])
    expect(board.windowTotal(0, 5)).toBe(24)
    expect(board.windowTotal(1, 4)).toBe(19)
    expect(board.windowTotal(3, 3)).toBe(4)
  })

  it('windowLow returns the correct minimum over a range', () => {
    const board = new MetricsBoard([2, 5, 1, 4, 9, 3])
    expect(board.windowLow(0, 5)).toBe(1)
    expect(board.windowLow(0, 1)).toBe(2)
    expect(board.windowLow(3, 5)).toBe(3)
  })

  it('record updates both trees: windowTotal and windowLow reflect the change', () => {
    const board = new MetricsBoard([2, 5, 1, 4, 9, 3])
    board.record(2, 100)
    expect(board.windowTotal(0, 5)).toBe(123)   // 2+5+100+4+9+3
    expect(board.windowLow(0, 5)).toBe(2)        // min is now 2 (index 0)
    board.record(0, -10)
    expect(board.windowLow(0, 5)).toBe(-10)
  })

  it('handles a single-element board', () => {
    const board = new MetricsBoard([7])
    expect(board.windowTotal(0, 0)).toBe(7)
    expect(board.windowLow(0, 0)).toBe(7)
    board.record(0, 42)
    expect(board.windowTotal(0, 0)).toBe(42)
    expect(board.windowLow(0, 0)).toBe(42)
  })

  // ── alertScan ────────────────────────────────────────────────────────

  it('alertScan finds all occurrences of a signature', () => {
    const board = new MetricsBoard([1])
    // 'ERROR: disk full ERROR: disk full'
    //  0123456789012345678901234567890123
    // second 'ERROR' starts at index 17
    expect(board.alertScan('ERROR: disk full ERROR: disk full', 'ERROR')).toEqual([0, 17])
  })

  it('alertScan returns [] when signature is not found', () => {
    const board = new MetricsBoard([1])
    expect(board.alertScan('all clear', 'ERROR')).toEqual([])
  })

  it('alertScan returns [] for empty signature', () => {
    const board = new MetricsBoard([1])
    expect(board.alertScan('some log text', '')).toEqual([])
  })

  it('alertScan handles overlapping matches', () => {
    const board = new MetricsBoard([1])
    expect(board.alertScan('aaaa', 'aa')).toEqual([0, 1, 2])
  })

  it('alertScan finds a match at the end of the log', () => {
    const board = new MetricsBoard([1])
    expect(board.alertScan('normal logERROR', 'ERROR')).toEqual([10])
  })

  // ── busiestWindow ────────────────────────────────────────────────────

  it('busiestWindow returns the max-sum window', () => {
    const board = new MetricsBoard([1])
    // windows of size 3: [1,4,2]=7, [4,2,9]=15, [2,9,7]=18, [9,7,3]=19
    expect(board.busiestWindow([1, 4, 2, 9, 7, 3], 3)).toBe(19) // [9,7,3]
  })

  it('busiestWindow with k=1 returns the global max', () => {
    const board = new MetricsBoard([1])
    expect(board.busiestWindow([5, 3, 8, 1], 1)).toBe(8)
  })

  it('busiestWindow with k = array length returns total sum', () => {
    const board = new MetricsBoard([1])
    expect(board.busiestWindow([1, 2, 3, 4], 4)).toBe(10)
  })

  it('busiestWindow with negative numbers', () => {
    const board = new MetricsBoard([1])
    expect(board.busiestWindow([-1, -2, -3, -4], 2)).toBe(-3) // [-1,-2]
  })

  it('busiestWindow returns 0 for empty array', () => {
    const board = new MetricsBoard([1])
    expect(board.busiestWindow([], 1)).toBe(0)
  })

  it('busiestWindow returns 0 when k > array length', () => {
    const board = new MetricsBoard([1])
    expect(board.busiestWindow([1, 2], 5)).toBe(0)
  })

  // ── efficiency ───────────────────────────────────────────────────────

  it('efficiency: n=50_000 board with 20_000 mixed record/query ops', () => {
    const n = 50_000
    const board = new MetricsBoard(Array.from({ length: n }, (_, i) => i % 100))

    const start = performance.now()
    let checksum = 0
    for (let op = 0; op < 20_000; op++) {
      switch (op % 4) {
        case 0:
          board.record((op * 7) % n, op % 200)
          break
        case 1: {
          const lo = (op * 3) % n
          const hi = Math.min(lo + 500, n - 1)
          checksum += board.windowTotal(lo, hi)
          break
        }
        case 2: {
          const lo = (op * 5) % n
          const hi = Math.min(lo + 500, n - 1)
          checksum += board.windowLow(lo, hi)
          break
        }
        default: {
          const lo = (op * 11) % n
          checksum += board.windowTotal(lo, lo)
          break
        }
      }
    }
    const elapsed = performance.now() - start
    expect(elapsed).toBeLessThan(3000)
    expect(checksum).toBeGreaterThanOrEqual(0)
  })

  it('efficiency: alertScan on 200_000-char log', () => {
    const board = new MetricsBoard([1])
    const logText = 'abcde'.repeat(40_000)
    const signature = 'bcde'
    const start = performance.now()
    const hits = board.alertScan(logText, signature)
    const elapsed = performance.now() - start
    expect(elapsed).toBeLessThan(2000)
    expect(hits.length).toBeGreaterThan(0)
  })
})

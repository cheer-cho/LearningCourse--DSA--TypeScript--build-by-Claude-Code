import { describe, expect, it } from 'vitest'
import { PlayQueue } from './checkpoint'

describe('✦ checkpoint 7 — play queue', () => {
  it('addLast then playNext plays in FIFO order', () => {
    const q = new PlayQueue(5)
    q.addLast('a')
    q.addLast('b')
    q.addLast('c')
    expect(q.playNext()).toBe('a')
    expect(q.playNext()).toBe('b')
    expect(q.playNext()).toBe('c')
  })

  it('playNext on an empty queue throws', () => {
    const q = new PlayQueue(5)
    expect(() => q.playNext()).toThrow()
  })

  it('playNow jumps the queue', () => {
    const q = new PlayQueue(5)
    q.addLast('a')
    q.addLast('b')
    q.playNow('rush')
    expect(q.playNext()).toBe('rush')
    expect(q.playNext()).toBe('a')
    expect(q.playNext()).toBe('b')
  })

  it('remove deletes the first matching queued song', () => {
    const q = new PlayQueue(5)
    q.addLast('a')
    q.addLast('b')
    q.addLast('a')
    expect(q.remove('a')).toBe(true)
    expect(q.playNext()).toBe('b')
    expect(q.playNext()).toBe('a')
  })

  it('remove reports false for a song not in the queue', () => {
    const q = new PlayQueue(5)
    q.addLast('a')
    expect(q.remove('missing')).toBe(false)
    expect(q.playNext()).toBe('a')
  })

  it('remove on an empty queue reports false', () => {
    const q = new PlayQueue(5)
    expect(q.remove('a')).toBe(false)
  })

  it('history is empty before anything has played', () => {
    const q = new PlayQueue(5)
    q.addLast('a')
    expect(q.history(3)).toEqual([])
  })

  it('history reports most-recently-played first', () => {
    const q = new PlayQueue(5)
    q.addLast('a')
    q.addLast('b')
    q.addLast('c')
    q.playNext() // a
    q.playNext() // b
    q.playNext() // c
    expect(q.history(2)).toEqual(['c', 'b'])
    expect(q.history(3)).toEqual(['c', 'b', 'a'])
  })

  it('history evicts the oldest play once past recentCapacity', () => {
    const q = new PlayQueue(2)
    q.addLast('a')
    q.addLast('b')
    q.addLast('c')
    q.playNext() // a
    q.playNext() // b
    q.playNext() // c -> 'a' falls out of the capped history
    expect(q.history(5)).toEqual(['c', 'b'])
  })

  it('playNow does not itself count as a play in history', () => {
    const q = new PlayQueue(5)
    q.playNow('a')
    expect(q.history(5)).toEqual([])
    q.playNext()
    expect(q.history(5)).toEqual(['a'])
  })

  it('efficiency: 100_000 mixed operations stay fast', () => {
    const q = new PlayQueue(50)
    for (let i = 0; i < 100_000; i++) {
      const op = i % 5
      if (op === 0) q.addLast(`song-${i % 40}`)
      else if (op === 1) q.playNext()
      else if (op === 2) q.playNow(`urgent-${i % 40}`)
      else if (op === 3) q.remove(`song-${i % 40}`)
      else q.history(10)
    }
    // Sanity: the queue is still usable and returns a well-formed result.
    expect(q.history(10).length).toBeLessThanOrEqual(10)
  })
})

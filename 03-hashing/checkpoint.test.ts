import { describe, it, expect } from 'vitest'
import {
  actionCounts,
  firstUniqueUser,
  hasDuplicateBurst,
  usersByAction,
  type LogEvent,
} from './checkpoint'

const sample: LogEvent[] = [
  { user: 'a', action: 'login' },
  { user: 'b', action: 'login' },
  { user: 'a', action: 'click' },
  { user: 'c', action: 'login' },
  { user: 'b', action: 'logout' },
]

describe('actionCounts', () => {
  it('counts events per action', () => {
    expect(actionCounts(sample)).toEqual(
      new Map([
        ['login', 3],
        ['click', 1],
        ['logout', 1],
      ]),
    )
  })

  it('returns an empty map for an empty log', () => {
    expect(actionCounts([])).toEqual(new Map())
  })
})

describe('firstUniqueUser', () => {
  it('finds the first user with exactly one event', () => {
    // "a" appears twice, "b" appears twice, "c" appears once.
    expect(firstUniqueUser(sample)).toBe('c')
  })

  it('returns undefined when every user repeats', () => {
    const events: LogEvent[] = [
      { user: 'a', action: 'x' },
      { user: 'a', action: 'y' },
      { user: 'b', action: 'x' },
      { user: 'b', action: 'y' },
    ]
    expect(firstUniqueUser(events)).toBeUndefined()
  })

  it('returns undefined for an empty log', () => {
    expect(firstUniqueUser([])).toBeUndefined()
  })

  it('handles a log where every user is unique', () => {
    const events: LogEvent[] = [
      { user: 'a', action: 'x' },
      { user: 'b', action: 'x' },
    ]
    expect(firstUniqueUser(events)).toBe('a')
  })
})

describe('usersByAction', () => {
  it('groups users by action, preserving event order', () => {
    expect(usersByAction(sample)).toEqual(
      new Map([
        ['login', ['a', 'b', 'c']],
        ['click', ['a']],
        ['logout', ['b']],
      ]),
    )
  })

  it('returns an empty map for an empty log', () => {
    expect(usersByAction([])).toEqual(new Map())
  })

  it('includes repeats when the same user triggers an action twice', () => {
    const events: LogEvent[] = [
      { user: 'a', action: 'ping' },
      { user: 'a', action: 'ping' },
    ]
    expect(usersByAction(events)).toEqual(new Map([['ping', ['a', 'a']]]))
  })
})

describe('hasDuplicateBurst', () => {
  it('detects the same user+action repeating within k events', () => {
    const events: LogEvent[] = [
      { user: 'a', action: 'click' },
      { user: 'b', action: 'click' },
      { user: 'a', action: 'click' },
    ]
    expect(hasDuplicateBurst(events, 1)).toBe(false) // 2 apart
    expect(hasDuplicateBurst(events, 2)).toBe(true) // exactly 2 apart
  })

  it('does not confuse the same action by different users', () => {
    const events: LogEvent[] = [
      { user: 'a', action: 'click' },
      { user: 'b', action: 'click' },
    ]
    expect(hasDuplicateBurst(events, 5)).toBe(false)
  })

  it('does not confuse the same user performing different actions', () => {
    const events: LogEvent[] = [
      { user: 'a', action: 'click' },
      { user: 'a', action: 'scroll' },
    ]
    expect(hasDuplicateBurst(events, 5)).toBe(false)
  })

  it('returns false for an empty log', () => {
    expect(hasDuplicateBurst([], 3)).toBe(false)
  })

  it('stays fast on a large log (n = 100,000)', () => {
    const events: LogEvent[] = []
    for (let i = 0; i < 100_000; i++) {
      events.push({ user: `user${i % 5_000}`, action: `action${i % 7}` })
    }
    // Plant one genuine burst right at the end.
    events.push({ user: 'user0', action: 'action0' })

    expect(hasDuplicateBurst(events, 3)).toBe(false)
    expect(hasDuplicateBurst(events, 100_000)).toBe(true)
  })
})

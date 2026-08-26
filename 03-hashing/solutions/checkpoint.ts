export interface LogEvent {
  user: string
  action: string
}

export function actionCounts(events: LogEvent[]): Map<string, number> {
  // Pattern: counting map. Time: O(n). Space: O(a) distinct actions.
  const counts = new Map<string, number>()
  for (const { action } of events) {
    counts.set(action, (counts.get(action) ?? 0) + 1)
  }
  return counts
}

export function firstUniqueUser(events: LogEvent[]): string | undefined {
  // Pattern: two-pass counting, keyed by user. Time: O(n). Space: O(u).
  const counts = new Map<string, number>()
  for (const { user } of events) {
    counts.set(user, (counts.get(user) ?? 0) + 1)
  }
  for (const { user } of events) {
    if (counts.get(user) === 1) return user
  }
  return undefined
}

export function usersByAction(events: LogEvent[]): Map<string, string[]> {
  // Pattern: grouping by canonical key (the action). Time: O(n).
  // Space: O(n).
  const groups = new Map<string, string[]>()
  for (const { user, action } of events) {
    const group = groups.get(action)
    if (group) group.push(user)
    else groups.set(action, [user])
  }
  return groups
}

export function hasDuplicateBurst(events: LogEvent[], k: number): boolean {
  // Pattern: last-seen-index map, keyed by a composite (user, action)
  // key. JSON.stringify keeps the two fields from colliding even if a
  // user name or action happens to contain a separator character.
  // Time: O(n). Space: O(n) — one entry per distinct key, never
  // pruned (a bounded-window eviction variant could tighten this to
  // O(min(n, k))).
  const lastSeenAt = new Map<string, number>()
  for (let i = 0; i < events.length; i++) {
    const event = events[i]
    if (event === undefined) continue
    const key = JSON.stringify([event.user, event.action])
    const previous = lastSeenAt.get(key)
    if (previous !== undefined && i - previous <= k) return true
    lastSeenAt.set(key, i)
  }
  return false
}

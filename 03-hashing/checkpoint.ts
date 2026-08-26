// Module 03 checkpoint: "Log analytics". A stream of (user, action)
// events, and four questions this module's toolbox answers directly:
// counting, first-unique, grouping, and a last-seen-index map.
// Run: npm test -- 03 -t checkpoint

/** A single (user, action) event from the log stream. */
export interface LogEvent {
  user: string
  action: string
}

/**
 * Count of events per action, across the whole log.
 *
 * Pattern: counting map (same shape as ex01's `firstUniqueIndex`
 * tally, keyed by action instead of character).
 *
 * @param events - the event log (may be empty)
 * @returns a map from action name to how many times it occurred
 *
 * actionCounts([{user:"a",action:"login"},{user:"b",action:"login"}])
 *   -> Map { "login" -> 2 }
 *
 * Target complexity: O(n) time, O(a) space (a = distinct actions).
 */
export function actionCounts(events: LogEvent[]): Map<string, number> {
  throw new Error('TODO: implement me')
}

/**
 * The first user (in order of first appearance in `events`) who
 * appears in exactly one event across the whole log.
 *
 * Pattern: two-pass counting, same shape as ex01's `firstUniqueIndex`
 * keyed by user instead of character — tally every user, then scan
 * again for the first one whose tally is 1.
 *
 * @param events - the event log
 * @returns the first single-appearance user, or `undefined` if every
 *   user appears more than once (or the log is empty)
 *
 * Target complexity: O(n) time, O(u) space (u = distinct users).
 */
export function firstUniqueUser(events: LogEvent[]): string | undefined {
  throw new Error('TODO: implement me')
}

/**
 * Groups users by the action they performed.
 *
 * Pattern: grouping by a canonical key, the same template as ex03's
 * `groupAnagrams` — here the key is `action` and the group is the list
 * of users who performed it, in the order they appear in `events`
 * (a user appears once per matching event, so repeats are included if
 * the same user triggers the same action more than once).
 *
 * @param events - the event log
 * @returns a map from action name to the list of users who performed it
 *
 * usersByAction([{user:"a",action:"login"},{user:"b",action:"login"},{user:"a",action:"logout"}])
 *   -> Map { "login" -> ["a", "b"], "logout" -> ["a"] }
 *
 * Target complexity: O(n) time, O(n) space.
 */
export function usersByAction(events: LogEvent[]): Map<string, string[]> {
  throw new Error('TODO: implement me')
}

/**
 * True if some (user, action) pair repeats within index distance `k`
 * in the event log.
 *
 * Pattern: last-seen-index map, the same template as ex05's
 * `hasNearbyDuplicate`, keyed by the combination of user AND action
 * instead of a single raw value.
 *
 * @param events - the event log
 * @param k - the maximum allowed index distance (k >= 0)
 * @returns whether the same user performed the same action twice
 *   within `k` events of each other
 *
 * hasDuplicateBurst(
 *   [{user:"a",action:"click"},{user:"b",action:"click"},{user:"a",action:"click"}],
 *   1,
 * ) -> false   // the two ("a","click") events are 2 apart
 *
 * Target complexity: O(n) time, O(n) space (the map holds one entry
 * per distinct (user, action) pair and is never pruned; a
 * bounded-window eviction variant could tighten this to
 * O(min(n, k)) as a further refinement).
 */
export function hasDuplicateBurst(events: LogEvent[], k: number): boolean {
  throw new Error('TODO: implement me')
}

// Reference solution — checkpoint
//
// NOTE: this file replaces checkpoint.ts wholesale during
// `npm run verify:solutions` (same filename, same location), so it
// must stay self-contained rather than importing from '../checkpoint'.

export interface PlayerRecord {
  name: string
  score: number
  wins: number
  /** Smaller = joined earlier. */
  joined: number
}

const rankCompare = (a: PlayerRecord, b: PlayerRecord): number => {
  if (a.score !== b.score) return b.score - a.score
  if (a.wins !== b.wins) return b.wins - a.wins
  return a.joined - b.joined
}

/**
 * Pattern: multi-key comparator sort. Compare score, then wins, then
 * joined, falling through in priority order. JS's built-in sort is
 * spec-guaranteed stable, so equal-on-every-key records keep their
 * original order for free. Time: O(n log n).
 */
export function rankPlayers(records: PlayerRecord[]): PlayerRecord[] {
  return records.slice().sort(rankCompare)
}

/**
 * Pattern: quickselect. Partition on the ranking comparator so the
 * first k slots hold exactly the top-k records (in any order), then
 * sort only those k — never touch the rest of the array with a
 * comparator sort. Time: O(n) average to partition + O(k log k) to
 * finish, so O(n) overall for k << n.
 */
export function topKScores(records: PlayerRecord[], k: number): PlayerRecord[] {
  if (k <= 0) return []
  if (k >= records.length) return rankPlayers(records)

  const arr = records.slice()
  let lo = 0
  let hi = arr.length - 1
  while (lo < hi) {
    const p = partition(arr, lo, hi)
    if (p === k - 1) break
    if (p < k - 1) lo = p + 1
    else hi = p - 1
  }

  return arr.slice(0, k).sort(rankCompare)
}

function partition(arr: PlayerRecord[], lo: number, hi: number): number {
  const pivotIndex = lo + Math.floor(Math.random() * (hi - lo + 1))
  swap(arr, pivotIndex, hi)
  const pivot = arr[hi]!
  let i = lo
  for (let j = lo; j < hi; j++) {
    if (rankCompare(arr[j]!, pivot) < 0) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, hi)
  return i
}

function swap(arr: PlayerRecord[], i: number, j: number): void {
  const tmp = arr[i]!
  arr[i] = arr[j]!
  arr[j] = tmp
}

/**
 * Pattern: counting sort as a bucketer. One counting pass over the
 * bounded range [0, 100] gives each score's frequency; walking values
 * 0..100 in order and pushing each value `count` times both sorts and
 * buckets it, with no comparator involved. Time: O(n + 100). Space: O(n).
 */
export function bucketByGrade(scores: number[]): Record<'F' | 'D' | 'C' | 'B' | 'A', number[]> {
  const counts = new Array<number>(101).fill(0)
  for (const s of scores) counts[s]!++

  const buckets: Record<'F' | 'D' | 'C' | 'B' | 'A', number[]> = { F: [], D: [], C: [], B: [], A: [] }
  for (let v = 0; v <= 100; v++) {
    const n = counts[v]!
    if (n === 0) continue
    const letter = gradeFor(v)
    for (let i = 0; i < n; i++) buckets[letter].push(v)
  }
  return buckets
}

function gradeFor(score: number): 'F' | 'D' | 'C' | 'B' | 'A' {
  if (score >= 90) return 'A'
  if (score >= 80) return 'B'
  if (score >= 70) return 'C'
  if (score >= 60) return 'D'
  return 'F'
}
